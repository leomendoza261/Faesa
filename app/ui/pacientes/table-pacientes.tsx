"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import TablaPacientesCompleta from "./tabla-pacientes-completa";
import TablaPacientesResumida from "./tabla-pacientes-resumida";
import { formatearTexto } from "@/lib/formatear-texto";
import Link from "next/link";
import RigthIcon from "../icons/rigthIcon";
import { EsqueletoTablaOrdenesCompleta } from "../esqueletos/esqueleto_tabla_ordenes_completa";

interface Articulos {
  id: number;
  descripcion: string;
  peso: string;
  cantidad_hojas: number;
}

interface Cliente {
  id: string;
  nombre: string; // Campo que ahora incluimos desde la tabla cliente
}

interface Orden {
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
  fecha_finalizacion: string;
  fecha_entrega: string;
  articulos: Articulos; // Relación con el artículo
  cliente: Cliente; // Relación con el cliente
}



export default function TablaPacientes() {
  const { seccion } = useParams();
  const [ordenes, setOrdenes] = useState<Orden[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const celdaMap: Record<string, number> = {
    corte: 1,
    punzonado: 2,
    colaojaladomatrizado: 0,
    matrizado_a: 5,
    matrizado_b: 6,
    ojalado_1: 10,
    ojalado_2: 11,
    laminado: 9,
    colatemple: 0,
    temple_revenido: 14,
    enderezado: 18,
    engrampado: 30,
    granallado: 13,
    armado: 3,
    pintura: 4,
    no_conformidad: 0,
  };

  useEffect(() => {
    async function fetchOrdenesActivas() {
      try {
        setLoading(true);
        const response = await fetch("/api/ordenes_activas");
        if (!response.ok) {
          console.error("Error al obtener órdenes finalizadas hoy");
          setOrdenes([]);
          return;
        }
        const data = await response.json();
        setOrdenes(data.ordenesActivas); // Suponiendo que `data` es un array de órdenes
        console.log(data)
      } catch (error) {
        console.error("Error al obtener órdenes finalizadas hoy:", error);
        setOrdenes([]);
      } finally {
        setLoading(false);
      }
    }

    async function fetchOrdenesFinalizadasHoy() {
      try {
        setLoading(true);
        const response = await fetch("/api/ordenes_finalizadas_hoy");
        if (!response.ok) {
          console.error("Error al obtener órdenes finalizadas hoy");
          setOrdenes([]);
          return;
        }
        const data = await response.json();
        setOrdenes(data); // Suponiendo que `data` es un array de órdenes
        console.log(data)
      } catch (error) {
        console.error("Error al obtener órdenes finalizadas hoy:", error);
        setOrdenes([]);
      } finally {
        setLoading(false);
      }
    }

    async function fetchOrdenesRetrasadas() {
      try {
        setLoading(true);
        const response = await fetch("/api/ordenes_retrasadas");
        if (!response.ok) {
          console.error("Error al obtener órdenes finalizadas hoy");
          setOrdenes([]);
          return;
        }
        const data = await response.json();
        setOrdenes(data); // Suponiendo que `data` es un array de órdenes
        console.log(data)
      } catch (error) {
        console.error("Error al obtener órdenes finalizadas hoy:", error);
        setOrdenes([]);
      } finally {
        setLoading(false);
      }
    }
  
    async function fetchOrdersByCelda(id_celda: number) {
      try {
        setLoading(true);
        const response = await fetch(`/api/ordenes_celda?id_celda=${id_celda}`);
        if (!response.ok) {
          console.error("Error al obtener órdenes de la celda");
          setOrdenes([]);
          return;
        }
        const data = await response.json();
        setOrdenes(data);
      } catch (error) {
        console.error("Error al conectarse a la API:", error);
        setOrdenes([]);
      } finally {
        setLoading(false);
      }
    }
  
    // Lógica para decidir qué fetch ejecutar
    if (seccion === "ordenes_completadas") {
      fetchOrdenesFinalizadasHoy();
    }
    if (seccion === "ordenes_retrasadas") {
      fetchOrdenesRetrasadas();
    }
    if (seccion === "ordenes_activas") {
      fetchOrdenesActivas()
    } else {
      const id_celda = celdaMap[seccion || ""] ?? null;
      if (id_celda !== null) {
        fetchOrdersByCelda(id_celda);
      }
    }
  }, [seccion]); // `seccion` como dependencia
  

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1 className="mb-8 pt-8 md:pt-8 text-xl md:text-2xl">
          {formatearTexto(
            typeof seccion === "string" ? seccion : seccion?.[0] || "Sección por defecto"
          )}
        </h1>
        <button className="my-6 rounded-lg border border-gray-200">
          <RigthIcon size={8} strokeWidth={4} />
        </button>
      </div>

      <div className="flex justify-between">
        <Link
          href={`/dashboard/agregarOT`}
          className="h-10 flex items-center justify-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600"
        >
          Añadir Planilla
        </Link>
        <div className="relative ml-2">
          <input
            className="block w-full rounded-md border border-gray-200 py-2 pl-10 pr-4 text-sm outline-none placeholder:text-gray-500"
            placeholder="Nro Orden"
          />
        </div>
      </div>

      {loading ? (
        <EsqueletoTablaOrdenesCompleta />
      ) : (
        <>
          <TablaPacientesCompleta ordenes={ordenes || []} />
          <TablaPacientesResumida ordenes={ordenes || []} />
        </>
      )}
    </div>
  );
}
