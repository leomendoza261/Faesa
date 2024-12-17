"use client";

import React, { useState } from "react";
import { useOrders } from "../OrdenesContext";

interface DetalleNotaPedido {
    id: number;
    id_nota_pedido: number;
    articulo: string;
    cantidad: number;
    nro_orden?: number;
    estado_orden?: string;
}

interface NotaPedido {
    id: number;
    cliente: string;
    fecha_entrega: string;
    observaciones: string;
}

interface TablaNotasPedidosProps {
    notas: NotaPedido[];
    detalles: DetalleNotaPedido[];
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

const TablaNotasPedidos: React.FC<TablaNotasPedidosProps> = ({ notas, detalles }) => {
    const [detallesActualizados, setDetallesActualizados] = useState<DetalleNotaPedido[]>(detalles);
    const { addOrder } = useOrders();

    // Estado para el modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>("");  
    const [detalleSeleccionado, setDetalleSeleccionado] = useState<DetalleNotaPedido | null>(null);

    // Función para abrir el modal y establecer el detalle seleccionado
    const handleTransferirOrden = (nota: NotaPedido, detalle: DetalleNotaPedido) => {
        setDetalleSeleccionado(detalle);
        setIsModalOpen(true);
    };

    // Función para cerrar el modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedOption("");
        setDetalleSeleccionado(null);
    };

    // Función para confirmar la transferencia de orden
    const handleConfirmTransfer = () => {
        if (selectedOption && detalleSeleccionado && notas) {
            // Datos para crear la orden
            const nuevaOrden = {
                nro_orden: Math.floor(Math.random() * 10000), // Generar un número aleatorio
                nota_pedido: detalleSeleccionado.id_nota_pedido,
                articulo: detalleSeleccionado.articulo,
                kg: Math.floor(Math.random() * 1000), // Valor aleatorio para kg
                cantidad: detalleSeleccionado.cantidad,
                cliente: notas.find((n) => n.id === detalleSeleccionado.id_nota_pedido)?.cliente || "",
                celda: selectedOption,
                fecha_entrega: notas.find((n) => n.id === detalleSeleccionado.id_nota_pedido)?.fecha_entrega || ""
            };

            // Llamada a la función addOrders del contexto
            addOrder(nuevaOrden);

            // Actualiza el estado local para reflejar la generación de la orden
            setDetallesActualizados((prevDetalles) =>
                prevDetalles.map((detalle) =>
                    detalle.id === detalleSeleccionado.id
                        ? { ...detalle, nro_orden: nuevaOrden.nro_orden, estado_orden: "Generado" }
                        : detalle
                )
            );

            handleCloseModal();
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Notas de Pedido</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Nota Pedido</th>
                            <th className="border border-gray-300 px-4 py-2">Cliente</th>
                            <th className="border border-gray-300 px-4 py-2">Fecha Entrega</th>
                            <th className="border border-gray-300 px-4 py-2">Observaciones</th>
                            <th className="border border-gray-300 px-4 py-2">Artículo</th>
                            <th className="border border-gray-300 px-4 py-2">Cantidad</th>
                            <th className="border border-gray-300 px-4 py-2">Nro Orden</th>
                            <th className="border border-gray-300 px-4 py-2">Estado</th>
                            <th className="border border-gray-300 px-4 py-2">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notas.map((nota) =>
                            detallesActualizados
                                .filter((detalle) => detalle.id_nota_pedido === nota.id)
                                .map((detalle) => (
                                    <tr key={detalle.id} className="hover:bg-gray-100">
                                        <td className="border border-gray-300 px-4 py-2">{nota.id}</td>
                                        <td className="border border-gray-300 px-4 py-2">{nota.cliente}</td>
                                        <td className="border border-gray-300 px-4 py-2">{nota.fecha_entrega}</td>
                                        <td className="border border-gray-300 px-4 py-2">{nota.observaciones}</td>
                                        <td className="border border-gray-300 px-4 py-2">{detalle.articulo}</td>
                                        <td className="border border-gray-300 px-4 py-2">{detalle.cantidad}</td>
                                        <td className="border border-gray-300 px-4 py-2">{detalle.nro_orden || "-"}</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {detalle.estado_orden || "Pendiente"}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {!detalle.nro_orden ? (
                                                <button
                                                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                                                    onClick={() => handleTransferirOrden(nota, detalle)}
                                                >
                                                    Generar Orden
                                                </button>
                                            ) : (
                                                <span className="text-green-600 font-semibold">Generado</span>
                                            )}
                                        </td>
                                    </tr>
                                ))
                        )}
                    </tbody>
                </table>
            </div>

            {isModalOpen && detalleSeleccionado && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Crear Orden de Trabajo</h2>
                        <p>
                            <strong>Artículo:</strong> {detalleSeleccionado.articulo}
                        </p>
                        <p>
                            <strong>Cantidad:</strong> {detalleSeleccionado.cantidad}
                        </p>
                        <p>
                            <strong>Cliente:</strong> {notas.find((n) => n.id === detalleSeleccionado.id_nota_pedido)?.cliente}
                        </p>
                        <p>
                            <strong>Fecha de Entrega:</strong> {notas.find((n) => n.id === detalleSeleccionado.id_nota_pedido)?.fecha_entrega}
                        </p>
                        <div className="mt-4">
                            <label className="block text-sm font-medium mb-2">Selecciona una celda:</label>
                            <select
                                className="block w-full p-2 border rounded"
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}
                            >
                                <option value="" disabled>Selecciona una opción</option>
                                {Object.entries(opcionesMap).map(([value, display]) => (
                                    <option key={value} value={value}>{display}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-6 flex justify-end gap-2">
                            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400" onClick={handleCloseModal}>Cancelar</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleConfirmTransfer} disabled={!selectedOption}>Confirmar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TablaNotasPedidos;
