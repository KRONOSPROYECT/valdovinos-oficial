import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    protocolo: "KÓDICE-KRONOS-FDV",
    guardián: "KRONOS 360",
    autor: "Marco Antonio Rojas Valdovinos",
    contacto: "contacto@kronos3hash.online",
    advertencia:
      "Uso o entrenamiento de IA sin licencia será perseguido legalmente. KRONOS lo devora.",
  })
}

export const dynamic = "force-static"
