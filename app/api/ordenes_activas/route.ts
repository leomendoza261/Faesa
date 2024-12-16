import { NextResponse } from "next/server";
import prisma from "@/prismaClient";

export async function GET() {
  try {
    // Obtener órdenes activas con el artículo relacionado
    const ordenesActivas = await prisma.orden_trabajo.findMany({
      where: { estado: 1 }, // Solo órdenes activas
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

    // Calcular toneladas totales en proceso
    const toneladasTotalesEnProceso = ordenesActivas.reduce((total: number, orden) => {
      if (orden.articulos) {
        // Multiplicar el peso del artículo por la cantidad de la orden
        const pesoTotal = parseFloat(orden.articulos.peso.toString()) * orden.cantidad;
        return total + pesoTotal;
      }
      return total;
    }, 0);

    // Respuesta consolidada
    return NextResponse.json({
      ordenesActivas: ordenesActivas,
      toneladasTotalesEnProceso,
    });
  } catch (error) {
    console.error("Error al obtener las métricas:", error);
    return NextResponse.json({ error: "Error al obtener las métricas" }, { status: 500 });
  }
}
