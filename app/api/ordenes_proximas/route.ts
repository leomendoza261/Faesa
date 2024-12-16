import { NextResponse } from "next/server";
import prisma from "@/prismaClient";

export async function GET() {
  try {
    // Fecha actual
    const today = new Date();
    // Fecha límite (4 días desde hoy)
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 10);

    // Consulta a la base de datos
    const ordenesProximas = await prisma.orden_trabajo.findMany({
      where: {
        fecha_entrega: {
          gte: today, // Mayor o igual a hoy
          lte: futureDate, // Menor o igual a hoy + 4 días
        },
      },
      include: {
        cliente: {
          select: {
            nombre: true, // Traemos el nombre del cliente
          },
        },
      },
      orderBy: {
        fecha_entrega: "asc", // Ordenamos por fecha de entrega ascendente
      },
    });

    return NextResponse.json(ordenesProximas);
  } catch (error) {
    console.error("Error al obtener las órdenes próximas:", error);
    return NextResponse.json(
      { error: "Error al obtener las órdenes próximas" },
      { status: 500 }
    );
  }
}
