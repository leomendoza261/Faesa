// app/api/usuarios/route.ts

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request) {
  try {
    const usuarios = await prisma.usuario.findMany()
    return new Response(JSON.stringify(usuarios), { status: 200 })
  } catch (error) {
    return new Response('Error al obtener los usuarios', { status: 500 })
  }
}
