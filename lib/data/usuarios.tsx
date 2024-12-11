import prisma from '../../prismaClient'; // Importa tu cliente Prisma

async function fetchUsuarios() {
  try {
    const usuarios = await prisma.usuario.findMany(); // Cambia "usuarios" al nombre de tu tabla introspectada
    console.log(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
  }
}

fetchUsuarios();
