import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-start justify-center gap-6 px-6 py-12">
      <h1 className="font-heading text-3xl font-bold text-black">Suporte</h1>
      <p className="font-body text-zinc-600">
        Este ambiente está em modo frontend com dados mockados. Para suporte,
        fale com o time interno da Menux.
      </p>
      <Link
        href="/login"
        className="rounded-full bg-black px-5 py-2.5 font-heading text-sm font-semibold text-white"
      >
        Voltar ao login
      </Link>
    </div>
  );
}
