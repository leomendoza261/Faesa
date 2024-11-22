"use client"
import PacienteRow from "./pacientes-row";

interface TablaPacientesCompletaProps {
  pacientes: Paciente[];
}

interface Paciente {
  nro_orden: number; // Cambiado de string a number
  articulo: string;
  cantidad: number;
  kg: number;
  cliente: string;
  nota_pedido: number;
  fecha_entrega: string;
}


export default function TablaPacientesCompleta({ pacientes }: TablaPacientesCompletaProps) {
  return (
    <div className="hidden md:block overflow-x-auto mt-2">
      <table className="min-w-full rounded-md text-gray-900">
        <thead className="bg-gray-50 text-left text-sm font-medium">
          <tr>
            <th className="px-4 py-3">Nro Orden</th>
            <th className="px-4 py-3">Articulo</th>
            <th className="px-4 py-3">Cantidad</th>
            <th className="px-4 py-3">Kg</th>
            <th className="px-4 py-3">Cliente</th>
            <th className="px-4 py-3">Nota de Pedido</th>
            <th className="px-4 py-3">Fecha Entrega</th>
            <th className="px-4 py-3">Transferir</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {pacientes.map((paciente) => (
            <tr key={paciente.nro_orden} className="bg-white text-sm hover:bg-blue-400">
              <PacienteRow paciente={paciente} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}