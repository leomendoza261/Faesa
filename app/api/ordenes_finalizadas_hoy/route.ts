import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prismaClient";

export async function GET(req: NextRequest) {
  try {
    // Obtener la fecha de hoy (inicio y fin del día)
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Inicio del día
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000); // Fin del día

    // Consultar las órdenes de trabajo finalizadas hoy
    const ordenes = await prisma.orden_trabajo.findMany({
      where: {
        estado: 4,
        fecha_finalizacion: {
          gte: today,
          lt: tomorrow,
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
        }
      },
    });

    // Responder con los datos obtenidos
    return NextResponse.json(ordenes);
  } catch (error) {
    console.error("Error al obtener órdenes finalizadas hoy:", error);
    return NextResponse.json(
      { error: "No se pudieron obtener las órdenes finalizadas hoy" },
      { status: 500 }
    );
  }
}
