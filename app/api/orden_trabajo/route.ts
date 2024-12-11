import { NextResponse } from "next/server";
import prisma from "@/prismaClient";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get("nro_orden") || "");

  if (isNaN(id)) {
    return NextResponse.json({ error: "Parámetro nro_orden inválido" }, { status: 400 });
  }

  try {
    // Utilizamos findUnique para buscar una sola orden por ID
    const orden = await prisma.orden_trabajo.findUnique({
      where: { id },
      include: {
        articulos: {
          select: {
            descripcion: true,
            peso: true,
            cantidad_hojas: true,
          },
        },
        cliente: {
          select: {
            nombre: true,
            direccion: true,
          },
        },
        celda: {
          select: {
            nombre: true,
          },
        },
      },
    });

    if (!orden) {
      return NextResponse.json({ error: "Orden no encontrada" }, { status: 404 });
    }

    return NextResponse.json(orden, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al obtener la orden" }, { status: 500 });
  }
}
