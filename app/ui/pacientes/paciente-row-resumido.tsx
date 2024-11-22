import Link from "next/link";

interface Paciente {
  nro_orden: number; // Cambiado de string a number
  articulo: string;
  cantidad: number;
  kg: number;
  cliente: string;
  nota_pedido: number;
  fecha_entrega: string;
}


interface PacienteRowProps {
  paciente: Paciente;
}

export default function PacienteRowResumido({ paciente }: PacienteRowProps) {
    return (
      <>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.nro_orden}`}>{paciente.nro_orden}</Link>
        </td>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.nro_orden}`}>{paciente.cliente}</Link>
        </td>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.nro_orden}`}>{paciente.fecha_entrega}</Link>
        </td>
      </>
    );
  }