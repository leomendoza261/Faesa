'use client';

import React, { useState } from 'react';


export default function AgregarPaciente() {
    const [paciente, setPaciente] = useState({
        nro_orden: '',
        articulo: '',
        cantidad: '',
        kg: '',
        cliente: '',
        nota_pedido: '',
        fecha_entrega: '',
        notas: ''
    });

    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    // Función para calcular la edad a partir de la fecha de nacimiento
    const calcularEdad = (fecha_nacimiento) => {
        const hoy = new Date();
        const nacimiento = new Date(fecha_nacimiento);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();

        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }

        return edad;
    };

    const handleChange = (e, index, section) => {
        const { name, value } = e.target;

        setPaciente((prev) => {
            if (Array.isArray(prev[section])) {
                const updatedSection = [...prev[section]];
                updatedSection[index] = {
                    ...updatedSection[index],
                    [name]: value,
                };
                return { ...prev, [section]: updatedSection };
            } else {
                return { ...prev, [name]: value };
            }
        });
    };

    const handleAddField = (section) => {
        setPaciente((prev) => {
            const updatedSection = [...prev[section], {}];
            return { ...prev, [section]: updatedSection };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/agregarPaciente', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(paciente),
            });
            const result = await response.json();
            if (response.ok) {
                setModalMessage('Paciente agregado con éxito');
            } else {
                setModalMessage(`Error al agregar el paciente: ${result.error}`);
            }
        } catch (error) {
            setModalMessage('Error al enviar los datos: ' + error.message);
        }
        setModalVisible(true);  // Mostrar el modal
    };

    const esMenorEdad = calcularEdad(paciente.fecha_nacimiento) < 18;

    return (
        <div className="w-full max-w-2xl mx-auto bg-white p-1">
            <h2 className="text-blue-500 text-xl text-center mb-4">Orden Trabajo</h2>
            <input
                type="text"
                name="nro_orden"
                value={paciente.nro_orden}
                onChange={(e) => handleChange(e, 0, 'paciente')}
                placeholder="nro orden"
                className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
            />
            <input
                type="text"
                name="articulo"
                value={paciente.articulo}
                onChange={(e) => handleChange(e, 0, 'paciente')}
                placeholder="articulo"
                className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
            />
            <input
                type="text"
                name="cantidad"
                value={paciente.cantidad}
                onChange={(e) => handleChange(e, 0, 'paciente')}
                placeholder="cantidad"
                className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
            />
            <input
                type="text"
                name="kg"
                value={paciente.kg}
                onChange={(e) => handleChange(e, 0, 'paciente')}
                className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
                placeholder="peso en Kg"
            />
            {esMenorEdad && (
                <input
                    type="text"
                    name="cliente"
                    value={paciente.cliente}
                    onChange={(e) => handleChange(e, 0, 'paciente')}
                    placeholder="cliente"
                    className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
                />
            )}
            <input
                type="text"
                name="nota_pedido"
                value={paciente.nota_pedido}
                onChange={(e) => handleChange(e, 0, 'paciente')}
                placeholder="nota pedido"
                className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
            />
            <input
                type="date"
                name="fecha_entrega"
                value={paciente.fecha_entrega}
                onChange={(e) => handleChange(e, 0, 'paciente')}
                placeholder="fecha entrega"
                className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
            />

            <textarea
                name="notas"
                value={paciente.notas}
                onChange={(e) => handleChange(e, 0, 'paciente')}
                placeholder="notas"
                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm"
            />


            <div className="flex justify-end mt-4">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                    Agregar Paciente
                </button>
            </div>


            {/* Modal de mensaje */}
            {modalVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <p>{modalMessage}</p>
                        <button
                            onClick={() => setModalVisible(false)}
                            className="mt-2 bg-blue-600 text-white py-1 px-4 rounded-md hover:bg-blue-700"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
