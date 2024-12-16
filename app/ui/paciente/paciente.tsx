"use client";

import { useState } from "react";
import { useOrders } from "../OrdenesContext";

type Paciente = {
  nro_orden: number;
  articulo: string;
  cantidad: number;
  kg: number;
  cliente: string;
  nota_pedido: number;
  fecha_entrega: string;
  celda: string;
};

type PacienteInfoProps = {
  pacienteInfo: Paciente;
};

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

export default function PacienteInfo({ pacienteInfo }: PacienteInfoProps) {
  const [pacienteMod] = useState<Paciente>({
    nro_orden: pacienteInfo.nro_orden,
    articulo: pacienteInfo.articulo,
    cantidad: pacienteInfo.cantidad,
    kg: pacienteInfo.kg,
    cliente: pacienteInfo.cliente,
    nota_pedido: pacienteInfo.nota_pedido,
    fecha_entrega: pacienteInfo.fecha_entrega,
    celda: pacienteInfo.celda,
  });

  const { updateCelda } = useOrders();

  // Estado para controlar si el modal está abierto
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Estado para almacenar la opción seleccionada
  const [selectedOption, setSelectedOption] = useState<string>("");

  // Función para abrir el modal
  const handleTransferirOrden = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOption(""); // Reseteamos la opción seleccionada al cerrar el modal
  };

  // Función para manejar la opción seleccionada
  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
    console.log(value)
  };

  // Función para confirmar la transferencia de orden
  const handleConfirmTransfer = () => {
    if (selectedOption) {
      updateCelda(pacienteInfo.nro_orden, selectedOption); // Llamada a la función updateCelda
      handleCloseModal(); // Cerramos el modal después de la transferencia
    }
  };

  return (
    <div key={pacienteInfo.nro_orden}>
      <div className="px-4 sm:px-0">
        <h3 className="pt-4 text-base font-semibold leading-7 text-gray-900">
          Detalle Orden de Trabajo
        </h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Numero de Orden
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {pacienteInfo.nro_orden}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Articulo</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {pacienteMod.articulo}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Cantidad</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {pacienteMod.cantidad}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Kg</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {pacienteMod.kg}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Cliente</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {pacienteMod.cliente}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Nota Pedido</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {pacienteMod.nota_pedido}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Fecha Entrega</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {pacienteMod.fecha_entrega}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Celda</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {pacienteInfo.celda}
            </dd>
          </div>

          <div className="flex justify-start pt-4 space-x-4">
            <button
              className="bg-blue-500 h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600"
              onClick={handleTransferirOrden}
            >
              Transferir Orden
            </button>
          </div>
        </dl>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96 transform -translate-y-[60%] sm:translate-y-0">
            <h2 className="text-xl font-bold mb-4">Transferir Orden de Trabajo</h2>
            <p>
              <strong>Número de Orden:</strong> {pacienteInfo.nro_orden}
            </p>
            <p>
              <strong>Cliente:</strong> {pacienteInfo.cliente}
            </p>
            <p>
              <strong>Celda Actual:</strong> {pacienteInfo.celda}
            </p>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">
                Selecciona una nueva celda:
              </label>
              <select
                className="block w-full p-2 border rounded"
                value={selectedOption}
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
                onClick={handleCloseModal}
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
    </div>
  );
}
