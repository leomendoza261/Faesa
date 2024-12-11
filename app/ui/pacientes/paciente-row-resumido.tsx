import Link from "next/link";

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


interface PacienteRowProps {
  orden: Orden;
}

export default function PacienteRowResumido({ orden }: PacienteRowProps) {
    return (
      <>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${orden.nro_orden}`}>{orden.nro_orden}</Link>
        </td>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${orden.nro_orden}`}>{orden.cliente.nombre}</Link>
        </td>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${orden.nro_orden}`}>{new Date(orden.fecha_creacion).toLocaleDateString("es-ES")}</Link>
        </td>
      </>
    );
  }