import prisma from "@/prismaClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'El tipo de contenido debe ser application/json' },
        { status: 400 }
      );
    }

    const body = await req.json();
    if (!body) {
      return NextResponse.json(
        { error: 'El cuerpo de la solicitud no contiene datos válidos' },
        { status: 400 }
      );
    }

    const { idOrden, nuevaCelda } = body;

    if (!idOrden || !nuevaCelda) {
      return NextResponse.json(
        { error: 'Faltan parámetros obligatorios (idOrden o nuevaCelda)' },
        { status: 400 }
      );
    } else{
      console.log("llego al api",idOrden, nuevaCelda)
    }
    
    // Lógica para transferir la orden
    await prisma.orden_trabajo.update({
      where: { id: idOrden },
      data: { id_celda: nuevaCelda },
    });
    console.log(`Orden ${idOrden} transferida a la celda ${nuevaCelda}`);
    return NextResponse.json(
      { message: `Orden ${idOrden} transferida correctamente a la celda ${nuevaCelda}` },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al transferir la orden:', error);
    return NextResponse.json(
      { error: 'Ocurrió un error al transferir la orden' },
      { status: 500 }
    );
  }
}




