import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <h1 className="font-heading text-3xl font-bold text-black">
        Política de Privacidade
      </h1>
      <p className="font-body text-zinc-600">
        Esta versão do Flow roda em modo frontend com dados mockados para
        desenvolvimento e validação de interface.
      </p>
      <p className="font-body text-zinc-600">
        Nenhum dado sensível real deve ser inserido neste ambiente. As
        informações exibidas são fictícias e podem ser alteradas a qualquer
        momento.
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
