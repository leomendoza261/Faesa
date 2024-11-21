import Link from "next/link";

export default function PacienteRowResumido({ paciente }) {
    return (
      <>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.id}`}>{paciente.nro_orden}</Link>
        </td>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.id}`}>{paciente.cliente}</Link>
        </td>
        <td className="px-4 py-3">
          <Link href={`/dashboard/pacientes/${paciente.id}`}>{paciente.fecha_entrega}</Link>
        </td>
      </>
    );
  }