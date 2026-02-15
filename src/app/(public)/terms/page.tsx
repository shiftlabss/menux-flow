import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <h1 className="font-heading text-3xl font-bold text-black">
        Termos de Uso
      </h1>
      <p className="font-body text-zinc-600">
        Ambiente de demonstração com dados mockados. Estes termos são
        informativos para uso interno em desenvolvimento frontend.
      </p>
      <p className="font-body text-zinc-600">
        Ao usar o Flow em modo de demonstração, você concorda que os dados podem
        ser reiniciados sem aviso e não representam operações reais.
      </p>
      <Link
        href="/login"
        className="mt-2 w-fit rounded-full border border-zinc-300 px-5 py-2.5 font-heading text-sm font-semibold text-zinc-700"
      >
        Voltar ao login
      </Link>
    </div>
  );
}
