import { useParams } from "next/navigation";
import PacienteRowResumido from "./paciente-row-resumido";

interface TablaPacientesResumidaProps {
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
  celda: string
}


export default function TablaPacientesResumida({ pacientes }: TablaPacientesResumidaProps) {
  const { seccion } = useParams();

  const pacientesFiltrados = pacientes.filter((paciente) => paciente.celda === seccion);

  return (
    <div className="block md:hidden overflow-x-auto mt-2">
      <table className="min-w-full rounded-md text-gray-900">
        <thead className="bg-gray-50 text-left text-sm font-medium">
          <tr>
            <th className="px-2 py-3">OT</th>
            <th className="px-2 py-3">Articulo</th>
            <th className="px-2 py-3">Cantidad</th>
            <th className="px-2 py-3">Cliente</th>
            <th className="px-2 py-3">Fecha Entrega</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {pacientesFiltrados.length > 0 ? (
            pacientesFiltrados.map((paciente) => (
              <tr key={paciente.nro_orden} className="bg-white text-sm hover:bg-blue-400">
                <PacienteRowResumido paciente={paciente} />
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