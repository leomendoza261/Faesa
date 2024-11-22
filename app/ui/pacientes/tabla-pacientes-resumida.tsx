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
}


export default function TablaPacientesResumida({ pacientes }: TablaPacientesResumidaProps) {
    return (
      <div className="block md:hidden overflow-x-auto mt-2">
        <table className="min-w-full rounded-md text-gray-900">
          <thead className="bg-gray-50 text-left text-sm font-medium">
            <tr>
              <th className="px-4 py-3">DNI</th>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Apellido</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pacientes.map((paciente) => (
              <tr key={paciente.nro_orden} className="bg-white text-sm hover:bg-blue-400">
                <PacienteRowResumido paciente={paciente} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }