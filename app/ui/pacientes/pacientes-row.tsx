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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const { seccion } = useParams();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleOptionSelect = (nuevaCelda: string) => {
    console.log(nuevaCelda)
    setSelectedOption(nuevaCelda);
  };

  const handleOptionClick = (nuevaCelda: string) => {
    onActualizarCelda(paciente.nro_orden, nuevaCelda);
  };

  return (
    <>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${paciente.nro_orden}`}>{paciente.nro_orden}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${paciente.nro_orden}`}>{paciente.articulo} </Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${paciente.nro_orden}`}>{paciente.cantidad}</Link>
      </td>
      <td className="px-4 py-3">
        <Link href={`/dashboard/${seccion}/${paciente.nro_orden}`}>500</Link>
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
        <Link href={`/dashboard/${seccion}/${paciente.nro_orden}`}>{new Date(paciente.fecha_entrega).toLocaleDateString("es-ES")}</Link>
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
              <strong>Número de Orden:</strong> {paciente.nro_orden}
            </p>
            <p>
              <strong>Cliente:</strong> {paciente.cliente}
            </p>
            <p>
              <strong>Celda Actual:</strong> {seccion}
            </p>
            <div className="mt-4">

            <div>
              <label  className="block text-sm font-medium text-gray-600">Hora Inicio de trabajo</label>
              <input
                type="time"
                name="password"
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                placeholder="hora inicio de trabajo"
              />
            </div>
            <div>
              <label  className="block text-sm font-medium text-gray-600">Hora fin de trabajo</label>
              <input
                type="time"
                name="password"
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                placeholder="hora fin de trabajo"
              />
            </div>
            <div>
              <label  className="block text-sm font-medium text-gray-600">Cantidad hojas a transferir</label>
              <input
                name="password"
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                placeholder="hora fin de trabajo"
              />
            </div>


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
                onClick={() => handleOptionClick(selectedOption)}
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
