"use client";

import TablaPacientesCompleta from "./tabla-pacientes-completa";
import TablaPacientesResumida from "./tabla-pacientes-resumida";
import { formatearTexto } from "@/lib/formatear-texto";
import Link from "next/link";

// Tipo corregido para incluir "seccion"
type TablaPacientesProps = {
  pacientes: Paciente[];
  seccion: string;
};

export default function TablaPacientes({ pacientes, seccion }: TablaPacientesProps) {
  return (
    <div className="w-full">
      {/* Título de la sección */}
      <h1 className="mb-8 text-xl md:text-2xl">{formatearTexto(seccion)}</h1>

      {/* Controles superiores */}
      <div className="flex justify-between">
        {/* Botón para añadir OT */}
        <Link
          href={`/dashboard/agregarOT`}
          className="h-10 flex items-center justify-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600"
        >
          Añadir OT
        </Link>

        {/* Input para buscar por Nro Orden */}
        <div className="relative ml-2">
          <input
            className="block w-full rounded-md border border-gray-200 py-2 pl-10 pr-4 text-sm outline-none placeholder:text-gray-500"
            placeholder="Nro Orden"
          />
        </div>
      </div>

      {/* Tablas */}
      <TablaPacientesCompleta pacientes={pacientes}/>
      <TablaPacientesResumida pacientes={pacientes}/>
    </div>
  );
}
