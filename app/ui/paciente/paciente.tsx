"use client";

import { useCallback, useState } from "react";
import PencilIcon from "../icons/pencil"

type Paciente = {
    nro_orden: number;
    articulo: string;
    cantidad: number;
    kg: number;
    cliente: string;
    nota_pedido: number;
    fecha_entrega: string;
    celda: string
};

type PacienteInfoProps = {
    pacienteInfo: Paciente; // Usamos el tipo Paciente para la propiedad pacienteInfo
};

export default function PacienteInfo({ pacienteInfo }: PacienteInfoProps) {
    const [pacienteMod, setPacienteMod] = useState<Paciente>({
        nro_orden: pacienteInfo.nro_orden,
        articulo: pacienteInfo.articulo,
        cantidad: pacienteInfo.cantidad,
        kg: pacienteInfo.kg,
        cliente: pacienteInfo.cliente,
        nota_pedido: pacienteInfo.nota_pedido,
        fecha_entrega: pacienteInfo.fecha_entrega,
        celda: pacienteInfo.celda
    });

    const [isEdit, setIsEdit] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [fieldToEdit, setFieldToEdit] = useState(""); // Campo que está siendo editado

    const toggleEditField = (field: string) => {
        setIsEdit(true)
        setIsEditing(true);
        setFieldToEdit(field);
    };

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPacienteMod((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }, []);

    return (
        <div key={pacienteInfo.nro_orden}>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Detalle Orde de Trabajo</h3>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Numero de Orden</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {isEditing && fieldToEdit === "nro_orden" ? (
                                <>
                                    <input
                                        type="text"
                                        name="nro_orden"
                                        value={pacienteMod.nro_orden}
                                        onChange={handleInputChange} // Maneja el cambio del nombre
                                        className="border border-gray-300 rounded-lg p-2 mr-2"
                                        placeholder="Nombre"
                                    />
                                </>
                            ) : (
                                <>
                                    {pacienteInfo.nro_orden}
                                    <button className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600" onClick={() => toggleEditField("nro_orden")}>
                                        <PencilIcon size={4} strokeWidth={2} />
                                    </button>
                                </>
                            )}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Articulo</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {isEditing && fieldToEdit === "articulo" ? (
                                <input
                                    type="text"
                                    name="articulo"
                                    value={pacienteMod.articulo}
                                    onChange={handleInputChange} // Vincula el campo con el evento onChange
                                    className="border border-gray-300 rounded-lg p-2"
                                />
                            ) : (
                                <>
                                    {pacienteMod.articulo}
                                    <button className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600" onClick={() => toggleEditField("articulo")}>
                                        <PencilIcon size={4} strokeWidth={2} />
                                    </button>
                                </>
                            )}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Cantidad</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {isEditing && fieldToEdit === "cantidad" ? (
                                <input
                                    type="text"
                                    name="cantidad"
                                    value={pacienteMod.cantidad}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg p-2"
                                />
                            ) : (
                                <>
                                    {pacienteInfo.cantidad}
                                    <button className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600" onClick={() => toggleEditField("cantidad")}>
                                        <PencilIcon size={4} strokeWidth={2} />
                                    </button>
                                </>
                            )}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Kg</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {isEditing && fieldToEdit === "kg" ? (
                                <input
                                    type="text"
                                    name="kg"
                                    value={pacienteMod.kg}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg p-2"
                                />
                            ) : (
                                <>
                                    {pacienteInfo.kg}
                                    <button className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600" onClick={() => toggleEditField("kg")}>
                                        <PencilIcon size={4} strokeWidth={2} />
                                    </button>
                                </>
                            )}
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Cliente</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {isEditing && fieldToEdit === "cliente" ? (
                                <input
                                    type="text"
                                    name="cliente"
                                    value={pacienteMod.cliente}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg p-2"
                                />
                            ) : (
                                <>
                                    {pacienteInfo.cliente}
                                    <button className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600" onClick={() => toggleEditField("cliente")}>
                                        <PencilIcon size={4} strokeWidth={2} />
                                    </button>
                                </>
                            )}
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Nota pedido</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {isEditing && fieldToEdit === "nota_pedido" ? (
                                <input
                                    type="text"
                                    name="nota_pedido"
                                    value={pacienteMod.nota_pedido}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg p-2"
                                />
                            ) : (
                                <>
                                    {pacienteInfo.nota_pedido}
                                    <button className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600" onClick={() => toggleEditField("nota_pedido")}>
                                        <PencilIcon size={4} strokeWidth={2} />
                                    </button>
                                </>
                            )}
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Fecha entrega</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {isEditing && fieldToEdit === "fecha_entrega" ? (
                                <input
                                    type="date"
                                    name="fecha_entrega"
                                    value={pacienteMod.fecha_entrega}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg p-2"
                                />
                            ) : (
                                <>
                                    {pacienteInfo.fecha_entrega}
                                    <button className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600" onClick={() => toggleEditField("fecha_entrega")}>
                                        <PencilIcon size={4} strokeWidth={2} />
                                    </button>
                                </>
                            )}
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Celda</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {isEditing && fieldToEdit === "celda" ? (
                                <input
                                    type="date"
                                    name="celda"
                                    value={pacienteMod.celda}
                                    onChange={handleInputChange}
                                    className="border border-gray-300 rounded-lg p-2"
                                />
                            ) : (
                                <>
                                    {pacienteInfo.celda}
                                    <button className="mt-2 ml-2 bg-blue-100 py-1 px-2 rounded-lg hover:text-blue-600" onClick={() => toggleEditField("celda")}>
                                        <PencilIcon size={4} strokeWidth={2} />
                                    </button>
                                </>
                            )}
                        </dd>
                    </div>

                    {/* BOTONES ELIMINAR Y MODIFICAR */}
                    <div className="flex justify-end space-x-4">
                        <button
                            className="bg-red-500 h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:bg-red-600"
                        >
                            Eliminar Orden
                        </button>
                        {isEdit ? (
                            <button
                                className="bg-blue-500 h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600"
                            >
                                Modificar Orden
                            </button>
                        ) : (
                            <>
                            </>
                        )}

                    </div>
                </dl>
            </div>
        </div>
    );
}
