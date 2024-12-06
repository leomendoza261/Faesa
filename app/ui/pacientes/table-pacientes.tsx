"use client";

import { useParams } from "next/navigation";
import TablaPacientesCompleta from "./tabla-pacientes-completa";
import TablaPacientesResumida from "./tabla-pacientes-resumida";
import { formatearTexto } from "@/lib/formatear-texto";
import { useOrders } from "../../ui/OrdenesContext"
import Link from "next/link";
import RigthIcon from "../icons/rigthIcon";

export default function TablaPacientes() {
  const { seccion } = useParams();
  const { orders, updateCelda } = useOrders();

  return (
    <div className="w-full">
      {/* Título de la sección */}
      <div className="flex justify-between">
        <h1 className="mb-8 pt-8 md:pt-8 text-xl md:text-2xl">
          {formatearTexto(typeof seccion === 'string' ? seccion : seccion?.[0] || 'Sección por defecto')}
        </h1>
        <button className="my-6 rounded-lg border border-gray-200"><RigthIcon size={8} strokeWidth={4} /></button>
      </div>



      {/* Controles superiores */}
      <div className="flex justify-between">
        {/* Botón para añadir OT */}
        <Link
          href={`/dashboard/agregarOT`}
          className="h-10 flex items-center justify-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600"
        >
          Añadir Planilla
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
      <TablaPacientesCompleta pacientes={orders} onActualizarCelda={updateCelda} />
      <TablaPacientesResumida pacientes={orders} />
    </div>
  );
}
