"use client"

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

interface Paciente {
  nro_orden: number; 
  articulo: string;
  cantidad: number;
  kg: number;
  cliente: string;
  nota_pedido: number;
  fecha_entrega: string;
}

interface PacienteRowProps {
  paciente: Paciente;
  onActualizarCelda: (nroOrden: number, nuevaCelda: string) => void;
}

const opcionesMap = {
  corte: "Corte",
  punzonado: "Punzonado",
  colaojaladomatrizado: "Ojalado/Matrizado",
  matrizado_a: "Matrizado A",
  matrizado_b: "Matrizado B",
  ojalado_1: "Ojalado 1",
  ojalado_2: "Ojalado 2",
  laminado: "Laminado",
  colatemple: "Cola Temple",
  temple_revenido: "Temple/Revenido",
  enderezado: "Enderezado",
  engrampado: "Engrampado",
  armado: "Armado",
  pintura: "Pintura",
  noconformidad: "No Conformidad",
};

export default function PacienteRow({ paciente, onActualizarCelda }: PacienteRowProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { seccion } = useParams();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (nuevaCelda: string) => {
    onActualizarCelda(paciente.nro_orden, nuevaCelda);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${paciente.nro_orden}`}>{paciente.nro_orden}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${paciente.nro_orden}`}>{paciente.articulo}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${paciente.nro_orden}`}>{paciente.cantidad}</Link>
      </td>
      <td className="px-4 py-3">
          500
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${paciente.nro_orden}`}>{paciente.kg}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${paciente.nro_orden}`}>{paciente.cliente}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${paciente.nro_orden}`}>{paciente.nota_pedido}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${paciente.nro_orden}`}>{paciente.fecha_entrega}</Link>
      </td>
      <td className="pr-4 py-3 relative">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={toggleDropdown}
        >
          Opciones
        </button>
        {isDropdownOpen && (
          <ul className="absolute z-10 mt-2 bg-white border rounded shadow-lg w-40">
            {Object.entries(opcionesMap).map(([value, display]) => (
              <li key={value}>
                <button
                  className="block px-4 py-2 text-left hover:bg-gray-100 w-full"
                  onClick={() => handleOptionClick(value)} // Aquí envías el valor real
                >
                  {display} {/* Aquí muestras el texto personalizado */}
                </button>
              </li>
            ))}
          </ul>
        )}
      </td>
    </>
  );
}
