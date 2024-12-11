import { NextResponse } from "next/server";
import prisma from "@/prismaClient";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id_celda = parseInt(searchParams.get("id_celda") || "");

  if (isNaN(id_celda)) {
    return NextResponse.json({ error: "Parámetro id_celda inválido" }, { status: 400 });
  }

  try {
    const ordenes = await prisma.orden_trabajo.findMany({
      where: { id_celda },
      include: {
        articulos: {
          select: {
            id: true,
            descripcion: true,
            peso: true,
            cantidad_hojas: true,
          },
        },
        cliente: {
          select: {
            id: true,
            nombre: true, // Seleccionamos el nombre del cliente
          },
        },
        estado_orden_trabajo: true,
      },
    });

    return NextResponse.json(ordenes, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al obtener las órdenes" }, { status: 500 });
  }
}
