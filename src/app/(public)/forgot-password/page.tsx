"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Loader2, Mail, Zap, Brain, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InlineFeedback } from "@/components/ui/inline-feedback";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from "@/lib/schemas";

const brandingBullets = [
  { icon: Zap, text: "Raio X do funil em tempo real" },
  { icon: Brain, text: "Menux Intelligence aplicada ao comercial" },
  { icon: Target, text: "Atividades e SLAs com foco no que importa" },
];

export default function ForgotPasswordPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  async function onSubmit() {
    setIsSubmitting(true);
    setFormError(null);
    try {
      // Mock: em produção, substituir por chamada à API POST /api/auth/forgot-password
      await new Promise(resolve => setTimeout(resolve, 800));
      setIsSent(true);
    } catch {
      setFormError("Erro ao enviar e-mail. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

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
        className="relative z-10 mx-auto flex min-h-[90vh] w-full max-w-[1080px] items-center px-4 py-8 sm:px-6 lg:px-8"
      >
        <div className="w-full rounded-[24px] border border-white/70 bg-white/55 p-1.5 shadow-[0_32px_90px_-42px_rgba(15,23,42,0.5)] backdrop-blur-2xl sm:p-2">
          <div className="grid gap-2 lg:grid-cols-2">
            <section className="relative hidden overflow-hidden rounded-[20px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 lg:flex lg:flex-col xl:p-8">
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

              <div className="relative z-10 mt-6 max-w-[520px]">
                <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-2.5 py-0.5 font-body text-[10px] font-medium tracking-wide text-cyan-100 xl:text-xs xl:px-3 xl:py-1">
                  FLOW • PLATAFORMA INTERNA
                </p>
                <h1 className="mt-3 font-heading text-2xl font-semibold leading-[1.08] text-white xl:text-3xl">
                  Sua central de execução comercial.
                </h1>
                <p className="mt-2.5 max-w-[480px] font-body text-[13px] leading-relaxed text-slate-200/90 xl:text-[14px]">
                  Pipeline, atividades e Menux Intelligence em um só lugar, para
                  você priorizar o que fecha e agir rápido.
                </p>
              </div>

              <div className="relative z-10 mt-6 max-w-[520px] space-y-2">
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
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-white/15">
                      <bullet.icon className="h-3.5 w-3.5 text-cyan-100" />
                    </div>
                    <span className="font-body text-[13px] text-slate-100/95 xl:text-sm">
                      {bullet.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="relative z-10 mt-auto grid gap-2 pt-6 sm:grid-cols-2">
                <div className="rounded-[12px] border border-white/15 bg-white/10 px-3 py-2.5">
                  <p className="font-body text-[12px] text-slate-100/95 xl:text-sm">
                    Visão do funil e metas em tempo real
                  </p>
                </div>
                <div className="rounded-[12px] border border-white/15 bg-white/10 px-3 py-2.5">
                  <p className="font-body text-[12px] text-slate-100/95 xl:text-sm">
                    Rotina guiada por SLAs e prioridades
                  </p>
                </div>
              </div>
            </section>

            <section className="h-full rounded-[20px] border border-zinc-200/80 bg-white p-6 shadow-[0_26px_64px_-44px_rgba(15,23,42,0.56)] flex flex-col justify-center xl:p-8">
              <div className="mb-5">
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
                    Raio X do funil, Menux Intelligence e execução em um único fluxo.
                  </p>
                </div>
                <Link
                  href="/login"
                  className="mb-4 inline-flex items-center gap-2 font-body text-[13px] text-zinc-500 transition-colors duration-120 hover:text-zinc-900"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Voltar ao login
                </Link>
                <p className="mb-1.5 font-body text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">
                  Recuperação de acesso
                </p>
                <h2 className="font-heading text-2xl font-semibold leading-tight text-zinc-900 xl:text-3xl">
                  Esqueci minha senha
                </h2>
                <p className="mt-1 font-body text-[13px] text-zinc-500 xl:text-sm">
                  Informe seu e-mail para receber um link de redefinição.
                </p>
              </div>

              {isSent ? (
                <div className="rounded-[16px] border border-emerald-200/80 bg-emerald-50/50 p-5 text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                    <Mail className="h-4 w-4 text-emerald-700" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-zinc-900 xl:text-xl">
                    E-mail enviado
                  </h3>
                  <p className="mt-1.5 font-body text-[13px] text-zinc-600 xl:text-sm">
                    Verifique sua caixa de entrada para redefinir sua senha.
                  </p>
                  <Link href="/login" className="mt-5 block">
                    <Button
                      variant="outline"
                      className="h-10 w-full rounded-full border-zinc-300 font-heading text-[13px] font-medium text-zinc-800 hover:bg-zinc-50 xl:text-sm"
                    >
                      Voltar ao login
                    </Button>
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5" noValidate>
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
                      className="h-10 rounded-[12px] border-zinc-200 bg-white font-body text-[13px] transition-[border-color,box-shadow] duration-[140ms] ease-out focus:border-brand/45 focus:shadow-[0_0_0_3px_rgba(29,78,216,0.08)]"
                      {...register("email")}
                    />
                    {errors.email ? (
                      <p className="font-body text-[11px] text-status-danger xl:text-xs">
                        {errors.email.message}
                      </p>
                    ) : null}
                  </div>

                  {formError ? (
                    <InlineFeedback
                      type="error"
                      message={formError}
                      onClose={() => setFormError(null)}
                    />
                  ) : null}

                  <div className="pt-0">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-10 w-full rounded-full bg-gradient-to-r from-zinc-900 to-zinc-700 font-heading text-[14px] font-semibold text-white transition-[transform,box-shadow] duration-[140ms] ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-14px_rgba(15,23,42,0.68)] active:scale-[0.985] active:duration-[90ms] disabled:pointer-events-none disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Enviando…</span>
                        </span>
                      ) : (
                        "Enviar link"
                      )}
                    </Button>
                  </div>
                </form>
              )}

            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
