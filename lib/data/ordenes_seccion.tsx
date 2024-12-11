import prisma from '../../prismaClient'; // Importa tu cliente Prisma

async function fetchOrdenesSeccion() {
  try {
    const ordenes = await prisma.orden_trabajo.findMany(); // Cambia "usuarios" al nombre de tu tabla introspectada
    console.log(ordenes);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
  }
}

fetchOrdenesSeccion();