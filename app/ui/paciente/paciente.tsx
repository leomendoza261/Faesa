"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

interface Articulos {
    descripcion: string;
    peso: string;
    cantidad_hojas: number;
  }
  
  interface Celda {
    nombre: string;
  }
  
  interface Cliente {
    nombre: string;
    direccion: string;
  }
  
  interface OrdenDetalle {
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
    celda: Celda;         // Relación con la celda
    cliente: Cliente;     // Relación con el cliente
  }
  

export default function PacienteInfo() {
    const { nro_orden } = useParams();
    const [orden, setOrden] = useState<OrdenDetalle | null>(null);
    console.log(nro_orden)


    useEffect(() => {

        async function fetchOrden() {
          try {
            const response = await fetch(`/api/orden_trabajo?nro_orden=${nro_orden}`);
            const data = await response.json();
            setOrden(data);
          } catch (error) {
            console.error("Error fetching orden:", error);
          }
        }
    
        fetchOrden();
      }, [nro_orden]);
    
      if (!orden) return <p>Cargando...</p>;

    return (
        <div key={orden.nro_orden} >
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Detalle Orde de Trabajo</h3>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Numero de Orden</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {orden.nro_orden}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Articulo</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {orden.articulos.descripcion}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Cantidad</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {orden.cantidad}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Kg Totales</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {new Intl.NumberFormat('es-ES').format((orden.articulos.peso || 0) * (orden.cantidad || 0))}  
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Cliente</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {orden.cliente.nombre}
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Nota pedido</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {orden.id_nota_pedido}
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Fecha entrega</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {orden.fecha_creacion}
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Celda actual</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {orden.celda.nombre}
                        </dd>
                    </div>

                    {/* BOTONES ELIMINAR Y MODIFICAR */}
                    <div className="flex justify-end space-x-4">
                        <button
                            className="bg-red-500 h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:bg-red-600"
                        >
                            Eliminar Orden
                        </button>
                    </div>
                </dl>
            </div>
        </div>
    );
}
