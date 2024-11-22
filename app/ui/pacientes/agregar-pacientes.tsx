import React, { useState } from 'react';

interface Paciente {
    nro_orden: string;
    articulo: string;
    cantidad: string;
    kg: string;
    cliente: string;
    nota_pedido: string;
    fecha_entrega: string;
    notas: string;
}

export default function AgregarPaciente() {
    const [paciente, setPaciente] = useState<Paciente>({
        nro_orden: '',
        articulo: '',
        cantidad: '',
        kg: '',
        cliente: '',
        nota_pedido: '',
        fecha_entrega: '',
        notas: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setPaciente((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white p-1">
            <h2 className="text-blue-500 text-xl text-center mb-4">Orden Trabajo</h2>
            <input
                type="text"
                name="nro_orden"
                value={paciente.nro_orden}
                onChange={handleChange}
                placeholder="nro orden"
                className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
            />
            <input
                type="text"
                name="articulo"
                value={paciente.articulo}
                onChange={handleChange}
                placeholder="articulo"
                className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
            />
            <input
                type="text"
                name="cantidad"
                value={paciente.cantidad}
                onChange={handleChange}
                placeholder="cantidad"
                className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
            />
            <input
                type="text"
                name="kg"
                value={paciente.kg}
                onChange={handleChange}
                className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
                placeholder="peso en Kg"
            />

            <input
                type="text"
                name="cliente"
                value={paciente.cliente}
                onChange={handleChange}
                placeholder="cliente"
                className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
            />

            <input
                type="text"
                name="nota_pedido"
                value={paciente.nota_pedido}
                onChange={handleChange}
                placeholder="nota pedido"
                className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
            />
            <input
                type="date"
                name="fecha_entrega"
                value={paciente.fecha_entrega}
                onChange={handleChange}
                placeholder="fecha entrega"
                className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
            />

            <textarea
                name="notas"
                value={paciente.notas}
                onChange={handleChange}
                placeholder="notas"
                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm"
            />

            <div className="flex justify-end mt-4">
                <button
                    type="submit"
                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                    Agregar Orden de Trabajo
                </button>
            </div>
        </div>
    );
}
