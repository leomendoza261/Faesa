import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(req: Request) {
  try {
    const detalles = await prisma.detalles_nota_pedido.findMany()
    return new Response(JSON.stringify(detalles), { status: 200 })
  } catch (error) {
    return new Response('Error al obtener los detalles', { status: 500 })
  }
}
