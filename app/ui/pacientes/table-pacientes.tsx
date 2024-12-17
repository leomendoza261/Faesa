"use client";

import { useParams } from "next/navigation";
import TablaPacientesCompleta from "./tabla-pacientes-completa";
import TablaPacientesResumida from "./tabla-pacientes-resumida";
import { formatearTexto } from "@/lib/formatear-texto";
import { useOrders } from "../../ui/OrdenesContext"
import RigthIcon from "../icons/rigthIcon";
import { useState } from "react";

export default function TablaPacientes() {
  const { seccion } = useParams();
  const { orders, updateCelda } = useOrders();

  const [selectedOption, setSelectedOption] = useState<string>("");

  const options = [
    { value: "numero_orden", label: "Número de Orden" },
    { value: "cliente", label: "Cliente" },
    { value: "fecha_entrega", label: "Fecha de Entrega" },
    { value: "articulo", label: "Artículo" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    console.log("Opción seleccionada:", e.target.value);
  };

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
        <div className="w-full max-w-xs">
          <select
            value={selectedOption}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Input para buscar por Nro Orden */}
        <div className="relative ml-2">
          <input
            className="block w-full rounded-md border border-gray-200 py-2 pl-10 pr-4 text-sm outline-none placeholder:text-gray-500"
            placeholder="Filtro"
          />
        </div>
      </div>

      {/* Tablas */}
      <TablaPacientesCompleta pacientes={orders} onActualizarCelda={updateCelda} />
      <TablaPacientesResumida pacientes={orders} />
    </div>
  );
}
