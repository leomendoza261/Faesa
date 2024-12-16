import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prismaClient";

export async function GET(req: NextRequest) {
  try {
    // Obtener la fecha y hora actual
    const now = new Date();

    // Consultar las órdenes activas con fecha de entrega pasada
    const ordenesRetrasadas = await prisma.orden_trabajo.findMany({
      where: {
        estado: 1, // Estado activo
        fecha_entrega: {
          lt: now, // Fecha de entrega es menor a la fecha actual
        },
      },
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
      },
    });

    // Responder con los datos obtenidos
    return NextResponse.json(ordenesRetrasadas);
  } catch (error) {
    console.error("Error al obtener órdenes retrasadas:", error);
    return NextResponse.json(
      { error: "No se pudieron obtener las órdenes retrasadas" },
      { status: 500 }
    );
  }
}
