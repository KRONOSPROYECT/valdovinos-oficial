import { CheckCircle2, XCircle } from "lucide-react"

export type VerificationData = {
  id?: string
  verificado: boolean
  estado: string
  seal: string | null
  timelock?: string
  mensaje?: string
}

export function VerificationResult({ data }: { data: VerificationData }) {
  if (!data.verificado) {
    return (
      <div className="flex flex-col items-center gap-5 rounded-lg border border-destructive/30 bg-card/60 px-6 py-10 text-center">
        <XCircle className="size-10 text-destructive" strokeWidth={1.5} />
        <div className="flex flex-col gap-2">
          <p className="font-serif text-2xl text-foreground">No verificado</p>
          <p className="max-w-xs text-pretty text-sm text-muted-foreground">
            {data.mensaje ?? "Este identificador no pudo ser autenticado."}
          </p>
        </div>
        <span className="mt-1 rounded-full border border-destructive/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-destructive">
          {data.estado}
        </span>
      </div>
    )
  }

  return (
    <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-lg border border-gold/25 bg-card/70 px-6 py-10 text-center">
      {/* Ornamental corner frame */}
      <div aria-hidden className="pointer-events-none absolute inset-3 rounded border border-gold/15" />

      <div className="flex items-center gap-2 text-gold">
        <CheckCircle2 className="size-9" strokeWidth={1.5} />
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-xs uppercase tracking-[0.35em] text-gold-muted">Autenticidad confirmada</p>
        <p className="font-serif text-3xl leading-tight text-foreground">Pieza Verificada</p>
      </div>

      <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* The seal */}
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Sello</p>
        <p dir="auto" className="font-serif text-2xl text-balance text-gold">
          {data.seal}
        </p>
      </div>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
        <div className="flex flex-col">
          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Estado</span>
          <span className="font-medium tracking-wide text-foreground">{data.estado}</span>
        </div>
        {data.id ? (
          <div className="flex flex-col">
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Identificador</span>
            <span className="font-mono text-sm text-foreground">{data.id}</span>
          </div>
        ) : null}
        {data.timelock ? (
          <div className="flex flex-col">
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Timelock</span>
            <span className="font-mono text-sm text-foreground">{data.timelock}</span>
          </div>
        ) : null}
      </div>
    </div>
  )
}
