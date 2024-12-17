"use client";

import { useParams } from "next/navigation";
import PacienteRow from "./pacientes-row";

interface Paciente {
  nro_orden: number;
  articulo: string;
  cantidad: number;
  kg: number;
  cliente: string;
  nota_pedido: number;
  fecha_entrega: string;
  celda: string;
}

interface TablaPacientesCompletaProps {
  pacientes: Paciente[];
  onActualizarCelda: (nroOrden: number, nuevaCelda: string) => void;
}

export default function TablaPacientesCompleta({ pacientes, onActualizarCelda }: TablaPacientesCompletaProps) {
  const { seccion } = useParams();

  // Filtrar pacientes por la sección actual
  const pacientesFiltrados = pacientes.filter((paciente) => paciente.celda === seccion);

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
          {pacientesFiltrados.length > 0 ? (
            pacientesFiltrados.map((paciente) => (
              <tr key={paciente.nro_orden} className="bg-white  text-sm hover:bg-blue-400">
                <PacienteRow paciente={paciente} onActualizarCelda={onActualizarCelda} />
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
