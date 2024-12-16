import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prismaClient";

export async function GET(req: NextRequest) {
    try {
        // Obtener el parámetro `id_ot` de la consulta
        const { searchParams } = new URL(req.url);
        const id_ot = parseInt(searchParams.get("nro_orden") || "", 10);

        // Verificar que el `id_ot` sea válido
        if (isNaN(id_ot)) {
            return NextResponse.json(
                { error: "El parámetro id_ot es requerido y debe ser un número válido." },
                { status: 400 }
            );
        }

        // Consultar la tabla historial_celdas con usuario relacionado
        const historial = await prisma.historial_celdas.findMany({
            where: {
                id_ot: id_ot,
            },
            include: {
                usuario: {
                    select: {
                        nombre: true,
                        apellido: true,
                    },
                },
                celda: {
                    select: {
                        nombre: true,
                    },
                },
            },
        });

        // Responder con los datos obtenidos
        return NextResponse.json(historial);
    } catch (error) {
        console.error("Error al obtener historial de celdas:", error);
        return NextResponse.json(
            { error: "No se pudo obtener el historial de celdas." },
            { status: 500 }
        );
    }
}
