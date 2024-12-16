"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Celda {
    id: number;
    nombre: string;
}

interface Usuario {
    nombre: string;
    apellido: string;
}

interface Historial {
    id: number;
    id_ot: number;
    fecha_entrada: string;
    fecha_salida: string;
    fecha_entrega: string;
    cantidad_procesada: number;
    celda: Celda;
    usuario: Usuario;
}

export default function HistorialOrdenTrabajo() {
    const [historial, setHistorial] = useState<Historial[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { nro_orden } = useParams();

    useEffect(() => {
        const fetchHistorial = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/historial_orden_trabajo?nro_orden=${nro_orden}`);
                if (!response.ok) {
                    throw new Error("Error al obtener el historial de celdas.");
                }
                const data: Historial[] = await response.json();
                setHistorial(data);
            } catch (error) {
                setError(error instanceof Error ? error.message : "Error desconocido");
            } finally {
                setLoading(false);
            }
        };

        fetchHistorial();
    }, [nro_orden]);

    return (
        <div className="overflow-x-auto mt-2">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
                Historial de Orden de Trabajo
            </h3>
            <table className="min-w-full rounded-md text-gray-900">
                <thead className="bg-gray-50 text-left text-sm font-medium">
                    <tr>
                        <th className="px-4 py-3">Celda</th>
                        <th className="px-4 py-3">Fecha Ingreso</th>
                        <th className="px-4 py-3">Fecha Salida</th>
                        <th className="px-4 py-3">Usuario</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {loading ? (
                        <tr>
                            <td colSpan={4} className="text-center py-4 text-gray-500">
                                <div className="h-[20px] w-full animate-pulse rounded bg-gray-100"></div>
                            </td>
                        </tr>
                    ) : error ? (
                        <tr>
                            <td colSpan={4} className="text-center py-4 text-red-500">
                                {error}
                            </td>
                        </tr>
                    ) : !historial || historial.length === 0 ? (
                        <tr>
                            <td colSpan={4} className="text-center py-4 text-gray-500">
                                No se encontraron registros para esta orden de trabajo.
                            </td>
                        </tr>
                    ) : (
                        historial.map((item: Historial) => (
                            <tr key={item.id}>
                                <td className="px-4 py-3">{item.celda.nombre}</td>
                                <td className="px-4 py-3">
                                    {item.fecha_entrada}
                                </td>
                                <td className="px-4 py-3">
                                    {item.fecha_salida
                                        ? item.fecha_salida
                                        : "En proceso"}
                                </td>
                                <td className="px-4 py-3">
                                    {item.usuario
                                        ? `${item.usuario.nombre} ${item.usuario.apellido}`
                                        : "Sin asignar"}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
