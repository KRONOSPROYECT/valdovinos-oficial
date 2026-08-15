'use client'

import {
  Activity,
  Archive,
  Binary,
  ChevronRight,
  CircuitBoard,
  Clock3,
  Database,
  Fingerprint,
  Gauge,
  Landmark,
  Network,
  ScanFace,
  Scale,
  ShieldCheck,
} from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const tiers = [
  { id: '01', name: 'Foundation', label: 'Infraestructura base', score: 82 },
  { id: '02', name: 'Enterprise', label: 'Gobernanza avanzada', score: 68 },
  { id: '03', name: 'Strategic', label: 'Transformación nacional', score: 41 },
]

const primitives = [
  { name: 'Ledger', detail: 'Auditoría inmutable', icon: Database, state: 'Activo' },
  { name: 'Notario', detail: 'Firma propiedad del cliente', icon: Fingerprint, state: 'Activo' },
  { name: 'Bóveda', detail: 'Pruebas unificadas', icon: Archive, state: 'Activo' },
  { name: 'Procedencia', detail: 'Trazado forense completo', icon: Network, state: 'Activo' },
  { name: 'Timestamp', detail: 'RFC 3161 externa', icon: Clock3, state: 'Activo' },
  { name: 'MediaAuth', detail: 'Detección C2PA', icon: ScanFace, state: 'Vigilancia' },
  { name: 'Jurisdicción', detail: 'LFPDPPP vs GDPR', icon: Scale, state: 'Activo' },
  { name: 'Semejanza', detail: 'Patrones TF-IDF', icon: Binary, state: 'Activo' },
  { name: 'Bias Mitigation', detail: 'Corrección de sesgos', icon: ShieldCheck, state: 'Vigilancia' },
]

const patterns = [
  { name: 'Diodo de Datos', code: 'P-01', text: 'Flujo unidireccional inexpugnable.' },
  { name: 'Air-Gap QR', code: 'P-02', text: 'Decisiones físicas entre redes aisladas.' },
  { name: 'TPM Certification', code: 'P-03', text: 'Raíz de confianza en hardware local.' },
]

export function KronosDashboard() {
  const [activeTier, setActiveTier] = useState(0)
  const tier = tiers[activeTier]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center border border-primary bg-primary/10 text-primary">
              <CircuitBoard aria-hidden="true" className="size-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-mono text-xs font-semibold tracking-[0.2em] text-primary">KRONOS</p>
                <span className="border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">V16</span>
              </div>
              <p className="text-sm font-medium">Sistema de Inmunidad Institucional</p>
            </div>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <div className="text-right">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">ID Maestro</p>
              <p className="font-mono text-xs">2608096674952</p>
            </div>
            <div className="flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-2 text-primary">
              <span className="size-2 animate-pulse rounded-full bg-primary" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider">Sistema operativo</span>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-8 md:py-12">
        <section className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[1fr_360px] lg:items-end">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              <Landmark className="size-4" aria-hidden="true" />
              Arquitectura de Estado / Escala Nacional
            </div>
            <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.04em] md:text-6xl lg:text-7xl">
              Gobernanza preparada para sobrevivir al cambio.
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Protocolo soberano de control, trazabilidad y defensa institucional diseñado por Marco Antonio Rojas Valdovinos.
            </p>
          </div>
          <div className="border border-border bg-card p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">KISS™ Score</p>
                <p className="mt-2 font-mono text-5xl font-semibold tracking-tighter text-primary">78.4</p>
              </div>
              <Gauge className="size-8 text-primary" aria-hidden="true" />
            </div>
            <div className="mt-5 h-1.5 bg-muted">
              <div className="h-full w-[78.4%] bg-primary" />
            </div>
            <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              <span>Base 0</span><span>Inmunidad alta</span><span>100</span>
            </div>
          </div>
        </section>

        <section className="grid gap-6 py-10 lg:grid-cols-[300px_1fr]">
          <aside className="flex flex-col gap-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Niveles de despliegue</p>
              <span className="font-mono text-xs text-primary">03</span>
            </div>
            {tiers.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTier(index)}
                className={cn(
                  'flex min-h-20 w-full items-center gap-4 border p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  index === activeTier ? 'border-primary bg-primary/10' : 'border-border bg-card hover:bg-muted',
                )}
                aria-pressed={index === activeTier}
              >
                <span className={cn('font-mono text-sm', index === activeTier ? 'text-primary' : 'text-muted-foreground')}>{item.id}</span>
                <span className="flex flex-1 flex-col gap-1">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </span>
                <ChevronRight className="size-4 text-muted-foreground" aria-hidden="true" />
              </button>
            ))}
            <div className="mt-3 border border-border bg-card p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Nivel seleccionado</p>
              <div className="mt-3 flex items-end justify-between gap-4">
                <p className="text-lg font-semibold">{tier.name}</p>
                <p className="font-mono text-2xl text-primary">{tier.score}%</p>
              </div>
            </div>
          </aside>

          <div className="flex min-w-0 flex-col gap-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Matriz K-9</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">Primitivos de inmunidad</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">Nueve controles verificables sostienen la integridad de cada institución auditada.</p>
            </div>
            <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 xl:grid-cols-3">
              {primitives.map((item, index) => {
                const Icon = item.icon
                return (
                  <article key={item.name} className="group flex min-h-44 flex-col justify-between gap-6 bg-card p-5 transition-colors hover:bg-muted">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-10 items-center justify-center border border-border text-primary group-hover:border-primary/50">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-[10px] text-muted-foreground">K-{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-semibold">{item.name}</h3>
                        <span className={cn('font-mono text-[10px] uppercase', item.state === 'Activo' ? 'text-primary' : 'text-accent-foreground')}>{item.state}</span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border py-10 lg:grid-cols-[1fr_1.5fr]">
          <div className="flex flex-col justify-between gap-10 bg-primary p-6 text-primary-foreground md:p-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-70">Doctrina de soberanía</p>
              <blockquote className="mt-6 text-balance text-2xl font-medium leading-snug tracking-tight md:text-4xl">
                “La soberanía es la capacidad de una institución para sobrevivir a su propia obsolescencia tecnológica.”
              </blockquote>
            </div>
            <p className="font-mono text-xs uppercase tracking-widest opacity-70">Kronos V16 / Principio rector</p>
          </div>
          <div>
            <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">11 patrones registrados</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">Arquitectura soberana</h2>
              </div>
              <Activity className="size-6 text-primary" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              {patterns.map((pattern) => (
                <article key={pattern.code} className="grid gap-3 border-b border-border py-5 md:grid-cols-[72px_1fr_1.2fr] md:items-center">
                  <span className="font-mono text-xs text-primary">{pattern.code}</span>
                  <h3 className="font-semibold">{pattern.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{pattern.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
          <p>Arquitecto de Estado: Marco Antonio Rojas Valdovinos</p>
          <p className="font-mono uppercase tracking-wider">Protocolo Kronos V16 · Integridad verificable</p>
        </div>
      </footer>
    </main>
  )
}
