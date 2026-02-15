"use client";

/**
 * Login Page - Flow CRM (Premium Redesign)
 *
 * Session rules (implemented server-side / proxy):
 * - "Lembrar-me" checked: session lasts 30 days
 * - "Lembrar-me" unchecked: session lasts 8 hours
 * - 2 hours of inactivity: automatic logout regardless of "Lembrar-me"
 *
 * Progressive lockout tiers (client-side enforcement):
 * - 3 errors:  show mock CAPTCHA ("Nao sou um robo"), button disabled until resolved
 * - 5 errors:  15-minute lockout with countdown timer
 * - 10 errors: 1-hour lockout with countdown timer
 * - 15 errors: indefinite block, must contact admin
 */

import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Eye,
  EyeOff,
  Loader2,
  AlertTriangle,
  Bot,
  ShieldAlert,
  Lock,
  Timer,
  Zap,
  Brain,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { loginSchema, type LoginFormData } from "@/lib/schemas";
import { useAuthStore } from "@/stores/auth-store";

// ---------------------------------------------------------------------------
// Lockout tier thresholds
// ---------------------------------------------------------------------------
const CAPTCHA_THRESHOLD = 3;
const LOCKOUT_15MIN_THRESHOLD = 5;
const LOCKOUT_1H_THRESHOLD = 10;
const PERMANENT_BLOCK_THRESHOLD = 15;

const LOCKOUT_15MIN_MS = 15 * 60 * 1000;
const LOCKOUT_1H_MS = 60 * 60 * 1000;
const LOCKOUT_STORAGE_KEY = "flow-login-lockout-state";

interface PersistedLockoutState {
  errorCount: number;
  lockoutEnd: number | null;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function formatCountdown(ms: number): string {
  if (ms <= 0) return "00:00";
  const totalSeconds = Math.ceil(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

type LockoutTier = "none" | "captcha" | "lockout15" | "lockout1h" | "blocked";

function getLockoutTier(errors: number): LockoutTier {
  if (errors >= PERMANENT_BLOCK_THRESHOLD) return "blocked";
  if (errors >= LOCKOUT_1H_THRESHOLD) return "lockout1h";
  if (errors >= LOCKOUT_15MIN_THRESHOLD) return "lockout15";
  if (errors >= CAPTCHA_THRESHOLD) return "captcha";
  return "none";
}

function readPersistedLockoutState(): PersistedLockoutState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(LOCKOUT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<PersistedLockoutState>;
    const errorCount =
      typeof parsed.errorCount === "number" && Number.isFinite(parsed.errorCount)
        ? Math.max(0, Math.floor(parsed.errorCount))
        : 0;
    const lockoutEnd =
      typeof parsed.lockoutEnd === "number" && Number.isFinite(parsed.lockoutEnd)
        ? parsed.lockoutEnd
        : null;

    if (errorCount === 0 && !lockoutEnd) return null;
    return { errorCount, lockoutEnd };
  } catch {
    return null;
  }
}

function persistLockoutState(state: PersistedLockoutState) {
  if (typeof window === "undefined") return;
  try {
    if (state.errorCount === 0 && !state.lockoutEnd) {
      window.localStorage.removeItem(LOCKOUT_STORAGE_KEY);
      return;
    }
    window.localStorage.setItem(LOCKOUT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore storage errors in mock frontend mode.
  }
}

function clearPersistedLockoutState() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(LOCKOUT_STORAGE_KEY);
  } catch {
    // Ignore storage errors in mock frontend mode.
  }
}

// ---------------------------------------------------------------------------
// Branding bullets
// ---------------------------------------------------------------------------
const brandingBullets = [
  { icon: Zap, text: "Raio X do funil em tempo real" },
  { icon: Brain, text: "Jarvis Comercial com Intelligence" },
  { icon: Target, text: "Atividades e SLAs com foco no que importa" },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const [captchaResolved, setCaptchaResolved] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const [lockoutEnd, setLockoutEnd] = useState<number | null>(null);
  const [remainingMs, setRemainingMs] = useState(0);
  const [redirectPath, setRedirectPath] = useState("/dashboard");

  const router = useRouter();
  const { setUser } = useAuthStore();

  useEffect(() => {
    const persisted = readPersistedLockoutState();
    if (!persisted) return;

    if (persisted.lockoutEnd !== null && persisted.lockoutEnd <= Date.now()) {
      clearPersistedLockoutState();
      return;
    }

    setErrorCount(persisted.errorCount);
    setLockoutEnd(persisted.lockoutEnd);

    const persistedTier = getLockoutTier(persisted.errorCount);
    if (persistedTier === "blocked") {
      setLoginError("Conta bloqueada. Entre em contato com o administrador.");
    } else if (persistedTier === "lockout1h") {
      setLoginError("Conta temporariamente bloqueada. Tente novamente em");
    } else if (persistedTier === "lockout15") {
      setLoginError("Muitas tentativas. Tente novamente em 15 minutos.");
    } else if (persistedTier === "captcha") {
      setLoginError("Credenciais inválidas. Resolva o CAPTCHA para continuar.");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const rawRedirect = new URLSearchParams(window.location.search).get(
      "redirect"
    );
    const safeRedirect =
      rawRedirect && rawRedirect.startsWith("/") && !rawRedirect.startsWith("//")
        ? rawRedirect
        : "/dashboard";
    setRedirectPath(safeRedirect);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const emailValue = watch("email");
  const passwordValue = watch("password");
  const hasValues = !!emailValue && !!passwordValue;

  const tier = getLockoutTier(errorCount);

  const isTimerActive = lockoutEnd !== null && remainingMs > 0;
  const isFieldsDisabled =
    tier === "blocked" || tier === "lockout15" || tier === "lockout1h";
  const isDisabledByLockout =
    isFieldsDisabled && (isTimerActive || tier === "blocked");

  const isButtonDisabled =
    isSubmitting ||
    isDisabledByLockout ||
    (tier === "captcha" && !captchaResolved) ||
    !hasValues;

  // ---------------------------------------------------------------------------
  // Countdown timer effect
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (lockoutEnd === null) {
      setRemainingMs(0);
      return;
    }

    function tick() {
      const now = Date.now();
      const diff = (lockoutEnd as number) - now;
      if (diff <= 0) {
        setRemainingMs(0);
        setLockoutEnd(null);
        setErrorCount(0);
        setCaptchaResolved(false);
        setLoginError(null);
        clearPersistedLockoutState();
      } else {
        setRemainingMs(diff);
      }
    }

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [lockoutEnd]);

  useEffect(() => {
    persistLockoutState({ errorCount, lockoutEnd });
  }, [errorCount, lockoutEnd]);

  const startLockout = useCallback((durationMs: number) => {
    setLockoutEnd(Date.now() + durationMs);
  }, []);

  // ---------------------------------------------------------------------------
  // Handle login failure
  // ---------------------------------------------------------------------------
  function handleLoginFailure() {
    const newCount = errorCount + 1;
    setErrorCount(newCount);
    setCaptchaResolved(false);

    const newTier = getLockoutTier(newCount);

    switch (newTier) {
      case "blocked":
        setLoginError(
          "Conta bloqueada. Entre em contato com o administrador."
        );
        break;
      case "lockout1h":
        setLoginError(
          "Conta temporariamente bloqueada. Tente novamente em"
        );
        startLockout(LOCKOUT_1H_MS);
        break;
      case "lockout15":
        setLoginError("Muitas tentativas. Tente novamente em 15 minutos.");
        startLockout(LOCKOUT_15MIN_MS);
        break;
      case "captcha":
        setLoginError(
          "Credenciais inválidas. Resolva o CAPTCHA para continuar."
        );
        break;
      default:
        setLoginError(
          "E-mail ou senha incorretos. Verifique e tente novamente."
        );
        break;
    }
  }

  // ---------------------------------------------------------------------------
  // Form submit
  // ---------------------------------------------------------------------------
  async function onSubmit(data: LoginFormData) {
    if (isButtonDisabled) return;

    setIsSubmitting(true);
    setLoginError(null);

    try {
      if (data.email === "fail@test.com") {
        handleLoginFailure();
        return;
      }

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: data.email,
          rememberMe,
        }),
      });

      if (!response.ok) {
        handleLoginFailure();
        return;
      }

      const payload = (await response.json()) as {
        user?: Parameters<typeof setUser>[0];
      };

      if (!payload.user) {
        handleLoginFailure();
        return;
      }

      setUser(payload.user, "session-cookie", { rememberMe });
      clearPersistedLockoutState();
      setErrorCount(0);
      setLockoutEnd(null);
      setCaptchaResolved(false);
      setLoginError(null);
      router.push(redirectPath);
    } catch {
      handleLoginFailure();
    } finally {
      setIsSubmitting(false);
    }
  }

  // ---------------------------------------------------------------------------
  // Alert / Error rendering
  // ---------------------------------------------------------------------------
  function renderAlert() {
    if (!loginError) return null;

    if (tier === "blocked") {
      return (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.12 }}
          className="flex flex-col gap-2 rounded-[10px] bg-status-danger-light px-4 py-3"
        >
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 shrink-0 text-status-danger" />
            <p className="font-body text-sm font-medium text-status-danger">
              {loginError}
            </p>
          </div>
          <Link
            href="/support"
            className="font-body text-sm font-semibold text-status-danger underline"
          >
            Fale com o suporte
          </Link>
        </motion.div>
      );
    }

    if (tier === "lockout1h" && isTimerActive) {
      return (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.12 }}
          className="flex flex-col gap-1 rounded-[10px] bg-status-danger-light px-4 py-3"
        >
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 shrink-0 text-status-danger" />
            <p className="font-body text-sm font-medium text-status-danger">
              Conta temporariamente bloqueada. Tente novamente em{" "}
              <span className="font-semibold">
                {formatCountdown(remainingMs)}
              </span>
              .
            </p>
          </div>
        </motion.div>
      );
    }

    if (tier === "lockout15" && isTimerActive) {
      return (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.12 }}
          className="flex flex-col gap-1 rounded-[10px] bg-status-warning-light px-4 py-3"
        >
          <div className="flex items-center gap-2">
            <Timer className="h-4 w-4 shrink-0 text-status-warning" />
            <p className="font-body text-sm font-medium text-status-warning">
              Muitas tentativas. Tente novamente em{" "}
              <span className="font-semibold">
                {formatCountdown(remainingMs)}
              </span>
              .
            </p>
          </div>
        </motion.div>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.12 }}
        className="flex flex-col gap-1.5 rounded-[10px] bg-status-danger-light px-4 py-3"
      >
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 shrink-0 text-status-danger" />
          <p className="font-body text-sm text-status-danger">{loginError}</p>
        </div>
        <Link
          href="/forgot-password"
          className="font-body text-xs font-medium text-status-danger hover:underline"
        >
          Esqueci minha senha
        </Link>
      </motion.div>
    );
  }

  function renderCaptcha() {
    if (tier !== "captcha") return null;

    return (
      <div className="flex items-center gap-3 rounded-[10px] border border-zinc-200 bg-zinc-50 px-4 py-3">
        <Checkbox
          id="captcha"
          checked={captchaResolved}
          onCheckedChange={(checked) => setCaptchaResolved(checked === true)}
        />
        <label
          htmlFor="captcha"
          className="flex cursor-pointer items-center gap-2 font-body text-sm text-zinc-700"
        >
          <Bot className="h-4 w-4 text-zinc-400" />
          Não sou um robô
        </label>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // JSX
  // ---------------------------------------------------------------------------
  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(140deg,#f8fafc_0%,#eef3f9_50%,#ebf1f8_100%)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-44 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle_at_center,rgba(29,78,216,0.28),transparent_70%)] blur-3xl" />
        <div className="absolute right-[-150px] top-[10%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.24),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[-180px] left-[30%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.18),transparent_72%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(120deg, rgba(148,163,184,0.16) 0px, rgba(148,163,184,0.16) 1px, transparent 1px, transparent 22px)",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.16, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1360px] items-center px-4 py-8 sm:px-6 lg:px-10"
      >
        <div className="w-full rounded-[30px] border border-white/70 bg-white/55 p-2.5 shadow-[0_32px_90px_-42px_rgba(15,23,42,0.5)] backdrop-blur-2xl sm:p-3">
          <div className="grid gap-3 lg:grid-cols-[1.08fr_0.92fr]">
            <section className="relative hidden overflow-hidden rounded-[24px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-9 lg:flex lg:flex-col">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-120px] top-[-140px] h-[360px] w-[360px] rounded-full bg-cyan-400/30 blur-3xl" />
                <div className="absolute bottom-[-170px] right-[-100px] h-[320px] w-[320px] rounded-full bg-blue-500/35 blur-3xl" />
              </div>

              <div className="relative z-10">
                <Image
                  src="/flow-logo.svg"
                  alt="Flow by Menux"
                  width={122}
                  height={33}
                  priority
                  className="h-auto w-[122px] brightness-0 invert"
                />
              </div>

              <div className="relative z-10 mt-12 max-w-[520px]">
                <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 font-body text-xs font-medium tracking-wide text-cyan-100">
                  FLOW PLATFORM
                </p>
                <h1 className="mt-4 font-heading text-4xl font-semibold leading-[1.08] text-white">
                  Operação comercial elegante, previsível e sem ruído.
                </h1>
                <p className="mt-4 max-w-[480px] font-body text-[15px] leading-relaxed text-slate-200/90">
                  Centralize pipeline, inteligência e execução em uma experiência
                  única, com clareza para decidir e velocidade para agir.
                </p>
              </div>

              <div className="relative z-10 mt-10 max-w-[520px] space-y-3.5">
                {brandingBullets.map((bullet, index) => (
                  <motion.div
                    key={bullet.text}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.08 * (index + 1),
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="flex items-center gap-3 rounded-[14px] border border-white/15 bg-white/8 px-3.5 py-3 backdrop-blur-sm"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-white/15">
                      <bullet.icon className="h-4 w-4 text-cyan-100" />
                    </div>
                    <span className="font-body text-sm text-slate-100/95">
                      {bullet.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="relative z-10 mt-auto grid gap-3 pt-10 sm:grid-cols-2">
                <div className="rounded-[14px] border border-white/15 bg-white/10 px-4 py-3">
                  <p className="font-heading text-2xl font-semibold text-white">
                    +12k
                  </p>
                  <p className="mt-1 font-body text-xs text-slate-200/90">
                    oportunidades movimentadas por semana
                  </p>
                </div>
                <div className="rounded-[14px] border border-white/15 bg-white/10 px-4 py-3">
                  <p className="font-heading text-2xl font-semibold text-white">
                    99.9%
                  </p>
                  <p className="mt-1 font-body text-xs text-slate-200/90">
                    consistência operacional na rotina comercial
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-[24px] border border-zinc-200/80 bg-white p-6 shadow-[0_26px_64px_-44px_rgba(15,23,42,0.56)] sm:p-8 lg:p-10">
              <div className="mb-7">
                <div className="mb-4 lg:hidden">
                  <Image
                    src="/flow-logo.svg"
                    alt="Flow by Menux"
                    width={106}
                    height={28}
                    priority
                  />
                </div>
                <div className="mb-4 rounded-[14px] border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 lg:hidden">
                  <p className="font-body text-xs text-zinc-600">
                    Raio X do funil, Intelligence e execução em um único fluxo.
                  </p>
                </div>
                <p className="mb-2 font-body text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
                  Acesso seguro
                </p>
                <h2 className="font-heading text-3xl font-semibold leading-tight text-zinc-900">
                  Entrar no Flow
                </h2>
                <p className="mt-1.5 font-body text-sm text-zinc-500">
                  Use sua conta corporativa para continuar.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
                noValidate
              >
                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="font-body text-[13px] font-medium text-zinc-700"
                  >
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    autoComplete="email"
                    disabled={isDisabledByLockout}
                    className="h-12 rounded-[14px] border-zinc-200 bg-white font-body text-sm transition-[border-color,box-shadow] duration-[140ms] ease-out focus:border-brand/45 focus:shadow-[0_0_0_3px_rgba(29,78,216,0.08)]"
                    {...register("email")}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.12 }}
                      className="font-body text-xs text-status-danger"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="password"
                    className="font-body text-[13px] font-medium text-zinc-700"
                  >
                    Senha
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      autoComplete="current-password"
                      disabled={isDisabledByLockout}
                      className="h-12 rounded-[14px] border-zinc-200 bg-white pr-12 font-body text-sm transition-[border-color,box-shadow] duration-[140ms] ease-out focus:border-brand/45 focus:shadow-[0_0_0_3px_rgba(29,78,216,0.08)]"
                      {...register("password")}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-zinc-400 opacity-75 transition-opacity duration-[140ms] hover:opacity-100 focus-visible:opacity-100"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Ocultar senha" : "Mostrar senha"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="h-[18px] w-[18px]" />
                      ) : (
                        <Eye className="h-[18px] w-[18px]" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.12 }}
                      className="font-body text-xs text-status-danger"
                    >
                      {errors.password.message}
                    </motion.p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="rememberMe"
                      checked={rememberMe}
                      onCheckedChange={(checked) =>
                        setRememberMe(checked === true)
                      }
                    />
                    <label
                      htmlFor="rememberMe"
                      className="cursor-pointer font-body text-sm text-zinc-600"
                    >
                      Lembrar-me
                    </label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="font-body text-sm font-medium text-brand hover:underline"
                  >
                    Esqueci minha senha
                  </Link>
                </div>

                {renderAlert()}
                {renderCaptcha()}

                <div className="pt-1">
                  <Button
                    type="submit"
                    disabled={isButtonDisabled}
                    className="h-12 w-full rounded-full bg-gradient-to-r from-zinc-900 to-zinc-700 font-heading text-base font-semibold text-white transition-[transform,box-shadow] duration-[140ms] ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-14px_rgba(15,23,42,0.68)] active:scale-[0.985] active:duration-[90ms] disabled:pointer-events-none disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Entrando…</span>
                      </span>
                    ) : (
                      "Entrar"
                    )}
                  </Button>
                </div>
              </form>

              <div className="mt-6 border-t border-zinc-200/70 pt-4 text-center">
                <p className="font-body text-xs text-zinc-400">
                  Precisa de ajuda?{" "}
                  <Link
                    href="/support"
                    className="font-medium text-zinc-500 hover:text-brand hover:underline"
                  >
                    Falar com suporte
                  </Link>
                </p>
                <p className="mt-2 font-body text-xs text-zinc-400">
                  Desenvolvido por{" "}
                  <span className="font-medium text-zinc-500">@menux</span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
