"use client"

import type { FormEvent } from "react"

export default function Home() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const id = String(formData.get("folio") ?? "").trim()

    if (id) {
      window.location.href = `/api/verificar?id=${encodeURIComponent(id)}`
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0b1f3a] px-6 py-12 text-center text-white">
      <h1 className="font-serif text-5xl font-semibold tracking-wide text-[#d4af37] sm:text-6xl">
        KRONOS 360
      </h1>
      <p className="mt-3 text-2xl text-white/90">Guardián del Tiempo</p>
      <p className="mt-6 text-sm text-white/75">Autor: Marco Antonio Rojas Valdovinos</p>
      <p className="mt-1 text-sm text-white/75">Contacto: contacto@kronos3hash.online</p>

      <a
        href="/api/autor"
        className="mt-6 text-sm text-[#00c853] underline-offset-4 hover:underline"
      >
        Ver manifiesto de autoría
      </a>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="folio" className="sr-only">
          Folio a verificar
        </label>
        <input
          id="folio"
          name="folio"
          placeholder="Folio a verificar"
          required
          className="rounded-md border border-[#d4af37] bg-[#0b1f3a] px-3 py-2 text-white outline-none placeholder:text-white/50 focus:ring-2 focus:ring-[#d4af37]"
        />
        <button
          type="submit"
          className="rounded-md bg-[#00c853] px-4 py-2 font-medium text-[#0b1f3a] transition-opacity hover:opacity-90"
        >
          Verificar folio
        </button>
      </form>

      <p className="mt-8 text-xs text-white/60">
        Registros Safe Creative: 2607086319439 • 2608156740085
      </p>
    </main>
  )
}
