"use client"

import { useState, useEffect, type FormEvent } from "react"
import { Loader2, ScanLine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VerificationResult, type VerificationData } from "@/components/verification-result"

export function VerifyForm({ initialId }: { initialId?: string }) {
  const [id, setId] = useState(initialId ?? "")
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<VerificationData | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function verify(value: string) {
    const trimmed = value.trim()
    if (!trimmed) return
    setLoading(true)
    setError(null)
    setData(null)
    try {
      const res = await fetch(`/api/verificar?id=${encodeURIComponent(trimmed)}`)
      const json = (await res.json()) as VerificationData
      setData(json)
    } catch {
      setError("No se pudo completar la verificación. Inténtalo de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  // Auto-verify if an id arrives via the URL.
  useEffect(() => {
    if (initialId) {
      void verify(initialId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialId])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    void verify(id)
  }

  return (
    <div className="flex w-full flex-col gap-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label htmlFor="id" className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Identificador de la pieza
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <ScanLine className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gold-muted" />
            <input
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="KDC-KRONOS-00000000-TIMELOCK"
              autoComplete="off"
              autoCapitalize="characters"
              spellCheck={false}
              className="h-12 w-full rounded-md border border-border bg-input/40 pl-9 pr-3 font-mono text-base uppercase tracking-wide text-foreground placeholder:text-muted-foreground/60 focus:border-gold/60 focus:outline-none focus:ring-1 focus:ring-gold/40"
            />
          </div>
          <Button
            type="submit"
            disabled={loading || !id.trim()}
            className="h-12 min-w-32 bg-gold px-6 font-medium tracking-wide text-primary-foreground hover:bg-gold/90"
          >
            {loading ? <Loader2 className="size-4 animate-spin" /> : "Verificar"}
          </Button>
        </div>
      </form>

      {error ? (
        <p className="text-center text-sm text-destructive">{error}</p>
      ) : null}

      {data ? <VerificationResult data={data} /> : null}
    </div>
  )
}
