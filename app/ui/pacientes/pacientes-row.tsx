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
  fecha_finalizacion: string;
  fecha_entrega: string;
  articulos: Articulos; // Relación con el artículo
  cliente: Cliente; // Relación con el cliente
}


interface PacienteRowProps {
  orden: Orden;
}

const opcionesMap = {
  1: "Corte",
  2: "Punzonado",
  colaojaladomatrizado: "Ojalado/Matrizado",
  5: "Matrizado A",
  6: "Matrizado B",
  10: "Ojalado 1",
  11: "Ojalado 2",
  9: "Laminado",
  colatemple: "Cola Temple",
  14: "Temple/Revenido",
  18: "Enderezado",
  30: "Engrampado",
  3: "Armado",
  4: "Pintura",
  noconformidad: "No Conformidad",
};

export default function PacienteRow({ orden }: PacienteRowProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { seccion } = useParams();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleOptionSelect = (nuevaCelda: string) => {
    console.log(nuevaCelda)
    setSelectedOption(nuevaCelda);
  };

  const handleConfirmTransfer = async () => {
    if (!selectedOption) return;

    try {
      const response = await fetch("/api/transferir_orden", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idOrden: orden.id,
          nuevaCelda: selectedOption,
        }),
      });
      if (response.ok) {
        alert("Orden transferida con éxito");
        setIsModalOpen(false);
      } else {
        alert("Error al transferir la orden");
      }
    } catch (error) {
      console.error("Error al transferir la orden:", error);
      alert("Error al transferir la orden");
    }
  };

  console.log(orden)
  return (

    <>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${orden.id}`}>{orden.nro_orden}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${orden.id}`}>{orden.articulos.descripcion} </Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${orden.id}`}>{orden.cantidad}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${orden.id}`}>{new Intl.NumberFormat('es-ES').format((orden.articulos.cantidad_hojas || 0) * (orden.cantidad || 0))}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${orden.id}`}>{new Intl.NumberFormat('es-ES').format((Number(orden.articulos.peso) || 0) * (Number(orden.cantidad) || 0))}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${orden.id}`}>{orden.cliente.nombre}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${orden.id}`}>{orden.id_nota_pedido}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${orden.id}`}>{new Date(orden.fecha_entrega).toLocaleDateString("es-ES")}</Link>
      </td>
      <td className="pr-4 py-3">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={toggleModal}
        >
          Opciones
        </button>
      </td>


      {/* Modal */}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Transferir Orden de Trabajo</h2>
            <p>
              <strong>Número de Orden:</strong> {orden.nro_orden}
            </p>
            <p>
              <strong>Cliente:</strong> {orden.cliente.nombre}
            </p>
            <p>
              <strong>Celda Actual:</strong> {orden.id_celda}
            </p>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">
                Selecciona una nueva celda:
              </label>
              <select
                className="block w-full p-2 border rounded"
                value={selectedOption || ""}
                onChange={(e) => handleOptionSelect(e.target.value)}
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                {Object.entries(opcionesMap).map(([value, display]) => (
                  <option key={value} value={value}>
                    {display}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                onClick={toggleModal}
              >
                Cancelar
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleConfirmTransfer}
                disabled={!selectedOption}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
