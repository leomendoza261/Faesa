"use client"

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

interface Articulos {
  id: number;
  descripcion: string
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

export default function PacienteRow({ orden }: PacienteRowProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { seccion } = useParams();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (nuevaCelda: string) => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${orden.id}`}>{orden.nro_orden}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${orden.id}`}>{orden.articulos.descripcion}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${orden.id}`}>{orden.cantidad}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${orden.id}`}>{new Intl.NumberFormat('es-ES').format((orden.articulos.cantidad_hojas || 0) * (orden.cantidad || 0))}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${orden.id}`}>{new Intl.NumberFormat('es-ES').format((orden.articulos.peso || 0) * (orden.cantidad || 0))}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${orden.id}`}>{orden.cliente.nombre}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${orden.id}`}>{orden.id_nota_pedido}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${orden.id}`}>{new Date(orden.fecha_creacion).toLocaleDateString("es-ES")}</Link>
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
