"use client";

import { useState } from "react";
import Link from "next/link";

const HomeDashboard = () => {
  // Datos ficticios
  const [ordenesDeTrabajo] = useState([
    { nro_orden: 1, cliente: "Skimia", articulo: "vel ipsum", fecha_entrega: "21/12/2023" },
    { nro_orden: 2, cliente: "Lazz", articulo: "sagittis dui vel", fecha_entrega: "02/04/2024" },
    { nro_orden: 3, cliente: "Pixoboo", articulo: "amet justo", fecha_entrega: "28/10/2024" },
    { nro_orden: 4, cliente: "Buzzdog", articulo: "a", fecha_entrega: "21/10/2024" },
    { nro_orden: 5, cliente: "Babblestorm", articulo: "ut", fecha_entrega: "02/07/2024" },
  ]);

  const [ordenesProximasAVencer] = useState([
    { nro_orden: 6, cliente: "Digitube", articulo: "eu est", fecha_entrega: "20/10/2024" },
    { nro_orden: 7, cliente: "Trilith", articulo: "morbi", fecha_entrega: "09/07/2024" },
    { nro_orden: 8, cliente: "Jaxbean", articulo: "vitae nisi", fecha_entrega: "10/05/2024" },
  ]);

  // Información ficticia para los paneles
  const paneles = [
    { title: "Órdenes de trabajo activas", value: 15, color: "blue" },
    { title: "Toneladas en proceso", value: 250, color: "blue" },
    { title: "Órdenes completadas", value: 120, color: "blue" },
    { title: "Tiempo promedio de entrega", value: "3 días", color: "blue" },
  ];

  return (

    <div className="w-full pt-16 md:pt-0 p-6 bg-gray-50">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard de Órdenes de Trabajo</h1>

      {/* Controles superiores */}
      <div className="flex justify-between mb-8">
        <Link
          href={`/dashboard/agregarOT`}
          className="h-10 flex items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Añadir Planilla
        </Link>
      </div>

      {/* Paneles de resumen */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {paneles.map((panel, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg bg-${panel.color}-600 text-white flex justify-between items-center`}
          >
            <div>
              <h3 className="text-lg font-medium mb-2">{panel.title}</h3>
              <p className="text-2xl font-semibold">{panel.value}</p>
            </div>
            <Link href={"/dashboard/kpi"}>
              <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-20 hover:bg-${panel.color}-500`}>
                <span className="text-3xl">📊</span>
              </div>
            </Link>
            
          </div>
        ))}
      </div>

      {/* Listas de órdenes de trabajo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Órdenes de trabajo recientes */}
        <div className="bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Órdenes de Trabajo Recientes</h3>
          <ul className="space-y-3">
            {ordenesDeTrabajo.map((orden) => (
              <li key={orden.nro_orden} className="border-b border-gray-200 py-3 hover:bg-gray-50">
                <Link href={`/dashboard/ordenes/${orden.nro_orden}`} className="text-blue-600 hover:text-blue-800">
                  Orden #{orden.nro_orden} - {orden.articulo} ({orden.cliente}) - Entrega: {orden.fecha_entrega}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Órdenes de trabajo próximas a vencer */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Órdenes de Trabajo Próximas a Entregar</h3>
          <ul className="space-y-3">
            {ordenesProximasAVencer.map((orden) => (
              <li key={orden.nro_orden} className="border-b border-gray-200 py-3 hover:bg-gray-50">
                <Link href={`/dashboard/ordenes/${orden.nro_orden}`} className="text-red-600 hover:text-red-800">
                  Orden #{orden.nro_orden} - {orden.articulo} ({orden.cliente}) - Entrega: {orden.fecha_entrega}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
