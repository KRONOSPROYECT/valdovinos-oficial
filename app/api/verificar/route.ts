import { type NextRequest, NextResponse } from "next/server"

// Formato esperado del identificador: KDC-KRONOS-00000000-TIMELOCK
const ID_PATTERN = /^KDC-KRONOS-(\d{8})-([A-Z]+)$/

type EstadoSello = {
  estado: string
  seal: string
  timelock: string
}

// Mapea el sufijo del identificador a su estado y sello correspondiente.
const SELLOS: Record<string, EstadoSello> = {
  TIMELOCK: {
    estado: "TIMELOCKED",
    seal: "KRONOS 360 - Vehuiah והויה",
    timelock: "...",
  },
}

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id")?.trim().toUpperCase() ?? ""

  const match = id.match(ID_PATTERN)

  if (!match) {
    return NextResponse.json(
      {
        verificado: false,
        estado: "DESCONOCIDO",
        seal: null,
        mensaje: "Identificador no válido o no reconocido.",
      },
      { status: 404 },
    )
  }

  const sufijo = match[2]
  const sello = SELLOS[sufijo]

  if (!sello) {
    return NextResponse.json(
      {
        verificado: false,
        estado: "DESCONOCIDO",
        seal: null,
        mensaje: "El sello de este identificador no está registrado.",
      },
      { status: 404 },
    )
  }

  return NextResponse.json({
    id,
    verificado: true,
    estado: sello.estado,
    seal: sello.seal,
    timelock: sello.timelock,
  })
}
