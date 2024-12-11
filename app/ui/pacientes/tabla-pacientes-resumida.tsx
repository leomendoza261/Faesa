import PacienteRowResumido from "./paciente-row-resumido";

interface TablaPacientesResumidaProps {
  ordenes: Orden[];
}

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
  articulos: Articulos; // Relación con el artículo
  cliente: Cliente; // Relación con el cliente
}



export default function TablaPacientesResumida({ ordenes }: TablaPacientesResumidaProps) {

  return (
    <div className="block md:hidden overflow-x-auto mt-2">
      <table className="min-w-full rounded-md text-gray-900">
        <thead className="bg-gray-50 text-left text-sm font-medium">
          <tr>
            <th className="px-4 py-3">OT</th>
            <th className="px-4 py-3">Hojas</th>
            <th className="px-4 py-3">Cliente</th>
            <th className="px-4 py-3">Fecha Entrega</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {ordenes.length > 0 ? (
            ordenes.map((orden) => (
              <tr key={orden.nro_orden} className="bg-white text-sm hover:bg-blue-400">
                <PacienteRowResumido orden={orden} />
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