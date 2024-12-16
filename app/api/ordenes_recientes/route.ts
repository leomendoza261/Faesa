import prisma from "@/prismaClient";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Obtener la fecha actual en formato UTC
        const today = new Date();
        const startOfDay = new Date(today.setUTCHours(0, 0, 0, 0));
        const endOfDay = new Date(today.setUTCHours(23, 59, 59, 999));

        // Consultar las órdenes de trabajo
        const ordenes = await prisma.orden_trabajo.findMany({
            where: {
                fecha_creacion: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
                estado: 1,
            },
            include: {
                cliente: {
                    select: {
                        nombre: true,
                    },
                },
            },
        });

        // Retornar las órdenes en formato JSON
        return NextResponse.json(ordenes, { status: 200 });
    } catch (error) {
        console.error("Error al obtener las órdenes de trabajo:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}
