"use client";

import PacienteRow from "./pacientes-row";

interface Articulos {
  id: number;
  descripcion: string;
  peso: string;
  cantidad_hojas: number;
}

interface Cliente {
  id: string;
  nombre: string; // Campo que ahora incluimos desde la tabla cliente
}

interface Orden {
  id: number;
  nro_orden: number;
  id_nota_pedido: string;
  id_articulo: string;
  cantidad: number;
  kg: number;
  estado: number;
  id_celda: number;
  id_cliente: string;
  fecha_creacion: string;
  fecha_finalizacion: string;
  fecha_entrega: string;
  articulos: Articulos; // Relación con el artículo
  cliente: Cliente; // Relación con el cliente
}


interface TablaPacientesCompletaProps {
  ordenes: Orden[];
}

export default function TablaPacientesCompleta({ ordenes }: TablaPacientesCompletaProps) {

  return (
    <div className="hidden md:block overflow-x-auto mt-2">
      <table className="min-w-full rounded-md text-gray-900">
        <thead className="bg-gray-50 text-left text-sm font-medium">
          <tr>
            <th className="px-4 py-3">Nro Orden</th>
            <th className="px-4 py-3">Articulo</th>
            <th className="px-4 py-3">Cantidad</th>
            <th className="px-4 py-3">Hojas</th>
            <th className="px-4 py-3">Kg</th>
            <th className="px-4 py-3">Cliente</th>
            <th className="px-4 py-3">Nota de Pedido</th>
            <th className="px-4 py-3">Fecha Entrega</th>
            <th className="px-4 py-3">Transferir</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 ">
          {ordenes.length > 0 ? (
            ordenes.map((orden) => (
              <tr key={orden.nro_orden} className="bg-white  text-sm hover:bg-blue-400">
                <PacienteRow orden={orden} />
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} className="text-center py-4 text-gray-500">
                No se encontraron ordenes de trabajo para esta celda.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
