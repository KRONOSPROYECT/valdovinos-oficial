import { VerifyForm } from "@/components/verify-form"

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>
}) {
  return <HomeContent searchParams={searchParams} />
}

async function HomeContent({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>
}) {
  const { id } = await searchParams

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-16">
      {/* Ambient vignette */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--background)_100%)]"
      />

      <div className="relative flex w-full max-w-lg flex-col items-center gap-10">
        <header className="flex flex-col items-center gap-4 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold-muted">
            Valdovinos
          </span>
          <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            Verificación de Autenticidad
          </h1>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Introduce el identificador único de tu pieza para confirmar su
            autenticidad y consultar el sello KRONOS&nbsp;360.
          </p>
          <div className="mt-1 h-px w-20 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </header>

        <VerifyForm initialId={id} />

        <footer className="mt-4 text-center text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground/70">
          KRONOS 360 · Sello de Origen
        </footer>
      </div>
    </main>
  )
}
