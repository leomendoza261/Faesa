'use client';

import React, { useState } from 'react';

// Mapeo de tipos de sangre
const tiposSangre = [
    { id: 1, tipo: 'O+' },
    { id: 2, tipo: 'O-' },
    { id: 3, tipo: 'A+' },
    { id: 4, tipo: 'A-' },
    { id: 5, tipo: 'B+' },
    { id: 6, tipo: 'B-' },
    { id: 7, tipo: 'AB+' },
    { id: 8, tipo: 'AB-' },
];

export default function AgregarPaciente() {
    const [paciente, setPaciente] = useState({
        dni: '',
        nombre: '',
        apellido: '',
        fecha_nacimiento: '',
        tutor_legal_dni: '',
        telefono: '',
        email: '',
        tipo_sangre_id: '', // Almacena el ID del tipo de sangre
        alergias: [{ alergia: '' }],
        enfermedades: [{ enfermedad: '' }],
        medicamentos: [{ medicamento: '', dosis: '', frecuencia: '', via: '' }],
        cirugias_previas: [{ cirugia: '', fecha: '', observaciones: '' }],
        observaciones: '',
        obra_social: '',
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
            <h2 className="text-blue-500 text-xl text-center mb-4">Información Personal</h2>
            <input
                type="text"
                name="nombre"
                value={paciente.nombre}
                onChange={(e) => handleChange(e, 0, 'paciente')}
                placeholder="Nombre"
                className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
            />
            <input
                type="text"
                name="apellido"
                value={paciente.apellido}
                onChange={(e) => handleChange(e, 0, 'paciente')}
                placeholder="Apellido"
                className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
            />
            <input
                type="text"
                name="dni"
                value={paciente.dni}
                onChange={(e) => handleChange(e, 0, 'paciente')}
                placeholder="DNI"
                className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
            />
            <input
                type="date"
                name="fecha_nacimiento"
                value={paciente.fecha_nacimiento}
                onChange={(e) => handleChange(e, 0, 'paciente')}
                className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
            />
            {esMenorEdad && (
                <input
                    type="text"
                    name="tutor_legal_dni"
                    value={paciente.tutor_legal_dni}
                    onChange={(e) => handleChange(e, 0, 'paciente')}
                    placeholder="DNI del tutor legal"
                    className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
                />
            )}
            <input
                type="tel"
                name="telefono"
                value={paciente.telefono}
                onChange={(e) => handleChange(e, 0, 'paciente')}
                placeholder="Número de teléfono"
                className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
            />
            <input
                type="email"
                name="email"
                value={paciente.email}
                onChange={(e) => handleChange(e, 0, 'paciente')}
                placeholder="Email"
                className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
            />
            <input
                type="text"
                name="obra_social"
                value={paciente.obra_social}
                onChange={(e) => handleChange(e, 0, 'paciente')}
                placeholder="Obra social"
                className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
            />

            <h2 className="text-blue-500 text-xl text-center my-4">Historia Médica</h2>

            <div>
                <h3 className="text-lg font-bold">Tipo de grupo sanguíneo</h3>
                <select
                    name="tipo_sangre_id"  // Cambiado a tipo_sangre_id para que coincida con el estado
                    value={paciente.tipo_sangre_id}  // El valor del estado debe estar en tipo_sangre_id
                    onChange={(e) => {
                        const selectedId = e.target.value;
                        setPaciente(prev => ({
                            ...prev,
                            tipo_sangre_id: selectedId,  // Actualizar con el ID seleccionado
                        }));
                    }}
                    className="peer block w-full rounded-md border border-gray-200 py-2 mt-2 text-sm"
                    required  // Campo obligatorio
                >
                    {/* Texto inicial que solo aparece si no hay valor seleccionado */}
                    <option value="" disabled hidden>Seleccione tipo de sangre</option>

                    {/* Opciones del tipo de sangre */}
                    {tiposSangre.map(tipo => (
                        <option key={tipo.id} value={tipo.id}>{tipo.tipo}</option>
                    ))}
                </select>
            </div>

            {/* Alergias */}
            <div>
                <h3 className="text-lg font-bold">Alergias</h3>
                {paciente.alergias.map((alergia, index) => (
                    <input
                        key={index}
                        type="text"
                        name="alergia"
                        value={alergia.alergia}
                        onChange={(e) => handleChange(e, index, 'alergias')}
                        placeholder={`Alergia ${index + 1}`}
                        className="peer block w-full rounded-md border border-gray-200 py- text-sm"
                    />
                ))}
                <button
                    type="button"
                    onClick={() => handleAddField('alergias')}
                    className="mt-2 bg-blue-100 py-1 px-4 rounded-lg hover:text-blue-600"
                >
                    + Añadir otra alergia
                </button>
            </div>

            {/* Enfermedades */}
            <div>
                <h3 className="text-lg font-bold">Enfermedades</h3>
                {paciente.enfermedades.map((enfermedad, index) => (
                    <input
                        key={index}
                        type="text"
                        name="enfermedad"
                        value={enfermedad.enfermedad}
                        onChange={(e) => handleChange(e, index, 'enfermedades')}
                        placeholder={`Enfermedad ${index + 1}`}
                        className="peer block w-full rounded-md border border-gray-200 py- text-sm"
                    />
                ))}
                <button
                    type="button"
                    onClick={() => handleAddField('enfermedades')}
                    className="mt-2 bg-blue-100 py-1 px-4 rounded-lg hover:text-blue-600"
                >
                    + Añadir otra enfermedad
                </button>
            </div>

            {/* Medicamentos */}
            <div>
                <h3 className="text-lg font-bold">Medicamentos</h3>
                {paciente.medicamentos.map((medicamento, index) => (
                    <div key={index} className="space-y-2">
                        <input
                            type="text"
                            name="medicamento"
                            value={medicamento.medicamento}
                            onChange={(e) => handleChange(e, index, 'medicamentos')}
                            placeholder="Medicamento"
                            className="peer block w-full rounded-md border border-gray-200 py- text-sm"
                        />
                        <input
                            type="text"
                            name="dosis"
                            value={medicamento.dosis}
                            onChange={(e) => handleChange(e, index, 'medicamentos')}
                            placeholder="Dosis"
                            className="peer block w-full rounded-md border border-gray-200 py- text-sm"
                        />
                        <input
                            type="text"
                            name="frecuencia"
                            value={medicamento.frecuencia}
                            onChange={(e) => handleChange(e, index, 'medicamentos')}
                            placeholder="Frecuencia"
                            className="peer block w-full rounded-md border border-gray-200 py- text-sm"
                        />
                        <input
                            type="text"
                            name="via"
                            value={medicamento.via}
                            onChange={(e) => handleChange(e, index, 'medicamentos')}
                            placeholder="Vía"
                            className="peer block w-full rounded-md border border-gray-200 py- text-sm"
                        />
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => handleAddField('medicamentos')}
                    className="mt-2 bg-blue-100 py-1 px-4 rounded-lg hover:text-blue-600"
                >
                    + Añadir medicamento
                </button>
            </div>

            {/* Cirugías previas */}
            <div>
                <h3 className="text-lg font-bold">Cirugías previas</h3>
                {paciente.cirugias_previas.map((cirugia, index) => (
                    <div key={index} className="space-y-2">
                        <input
                            type="text"
                            name="cirugia"
                            value={cirugia.cirugia}
                            onChange={(e) => handleChange(e, index, 'cirugias_previas')}
                            placeholder="Cirugía"
                            className="peer block w-full rounded-md border border-gray-200 py- text-sm"
                        />
                        <input
                            type="date"
                            name="fecha"
                            value={cirugia.fecha}
                            onChange={(e) => handleChange(e, index, 'cirugias_previas')}
                            className="peer block w-full rounded-md border border-gray-200 py- text-sm"
                        />
                        <input
                            type="text"
                            name="observaciones"
                            value={cirugia.observaciones}
                            onChange={(e) => handleChange(e, index, 'cirugias_previas')}
                            placeholder="Observaciones"
                            className="peer block w-full rounded-md border border-gray-200 py- text-sm"
                        />
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => handleAddField('cirugias_previas')}
                    className="mt-2 bg-blue-100 py-1 px-4 rounded-lg hover:text-blue-600"
                >
                    + Añadir cirugía
                </button>
            </div>

            {/* Observaciones */}
            <div>
                <h3 className="text-lg font-bold">Observaciones</h3>
                <textarea
                    name="observaciones"
                    value={paciente.observaciones}
                    onChange={(e) => handleChange(e, 0, 'paciente')}
                    placeholder="Observaciones"
                    className="peer block w-full rounded-md border border-gray-200 py-2 text-sm"
                />
            </div>

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
