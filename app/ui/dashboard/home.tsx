import Link from "next/link";
import { useEffect, useState } from "react";
import ListaOrdenesDashboard from "./lista_ordenes_dashboard";


interface Articulo {
  peso: string;
}

interface OrdenActiva {
  id: number;
  nro_orden: string;
  id_nota_pedido: number;
  id_articulo: number;
  cantidad: number;
  estado: number;
  id_celda: number;
  fecha_creacion: string;
  id_cliente: number;
  fecha_finalizacion: string | null;
  fecha_entrega: string | null;
  articulos: Articulo;
}

interface OrdenesData {
  ordenesActivas: OrdenActiva[];
  toneladasTotalesEnProceso: number;
}



export default function HomeDashboard() {
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

  const [ordenesActivas, setOrdenesActivas] = useState<number>(0);
  const [toneladasTotalesEnProceso, setToneladasTotalesEnProceso] = useState<number>(0);
  const [ordenesFinalizadasHoy, setOrdenesFinalizadasHoy] = useState<number>(0);
  const [ordenesRetrasadas, setOrdenesRetrasadas ]= useState<number>(0);


  useEffect(() => {
    async function fetchOrdenesActivas() {
      try {
        const response = await fetch("/api/ordenes_activas");
        const data: OrdenesData = await response.json(); // Ahora `data` tiene el tipo correcto
        setOrdenesActivas(data.ordenesActivas.length);
        setToneladasTotalesEnProceso(data.toneladasTotalesEnProceso);
      } catch (error) {
        console.error("Error al obtener órdenes activas:", error);
      }
    }

    async function fetchOrdenesFinalizadasHoy() {
      try {
        const response = await fetch("/api/ordenes_finalizadas_hoy");
        const data = await response.json();
        setOrdenesFinalizadasHoy(data.length); // Suponiendo que `data` es un array de órdenes finalizadas
      } catch (error) {
        console.error("Error al obtener órdenes finalizadas hoy:", error);
      }
    }

    async function fetchOrdenesRetrasadas() {
      try {
        const response = await fetch("/api/ordenes_retrasadas");
        const data = await response.json();
        setOrdenesRetrasadas(data.length); // Suponiendo que `data` es un array de órdenes finalizadas
      } catch (error) {
        console.error("Error al obtener órdenes finalizadas hoy:", error);
      }
    }

    fetchOrdenesActivas();
    fetchOrdenesFinalizadasHoy();
    fetchOrdenesRetrasadas()
  }, []);


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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className={`p-6 rounded-lg shadow-lg bg-blue-600 text-white flex justify-between items-center`}>
          <div>
            <h3 className="text-lg font-medium mb-2">Órdenes de trabajo activas</h3>
            <p className="text-2xl font-semibold">{ordenesActivas}</p>
          </div>
          <Link href={"/dashboard/ordenes_activas"}>
            <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-20 hover:bg-green-500`}>
              <span className="text-3xl">📊</span>
            </div>
          </Link>
        </div>

        <div className={`p-6 rounded-lg shadow-lg bg-blue-600 text-white flex justify-between items-center`}>
          <div>
            <h3 className="text-lg font-medium mb-2">Toneladas en proceso</h3>
            <p className="text-2xl font-semibold">{toneladasTotalesEnProceso}</p>
          </div>
          <Link href={"/dashboard/kpi"}>
            <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-20 hover:bg-green-500`}>
              <span className="text-3xl">📊</span>
            </div>
          </Link>
        </div>

        <div className={`p-6 rounded-lg shadow-lg bg-blue-600 text-white flex justify-between items-center`}>
          <div>
            <h3 className="text-lg font-medium mb-2">Órdenes completadas hoy</h3>
            <p className="text-2xl font-semibold">{ordenesFinalizadasHoy}</p>
          </div>
          <Link href={"/dashboard/ordenes_completadas"}>
            <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-20 hover:bg-green-500`}>
              <span className="text-3xl">📊</span>
            </div>
          </Link>
        </div>

        <div className={`p-6 rounded-lg shadow-lg bg-red-600 text-white flex justify-between items-center`}>
          <div>
            <h3 className="text-lg font-medium mb-2">Órdenes con Retrasos</h3>
            <p className="text-2xl font-semibold">{ordenesRetrasadas}</p>
          </div>
          <Link href={"/dashboard/ordenes_retrasadas"}>
            <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-20 hover:bg-green-500`}>
              <span className="text-3xl">📊</span>
            </div>
          </Link>
        </div>

        <div className={`p-6 rounded-lg shadow-lg bg-yellow-600 text-white flex justify-between items-center`}>
          <div>
            <h3 className="text-lg font-medium mb-2">Eficiencia del Proceso de Producción</h3>
            <p className="text-2xl font-semibold">6</p>
          </div>
          <Link href={"/dashboard/kpi"}>
            <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-20 hover:bg-green-500`}>
              <span className="text-3xl">📊</span>
            </div>
          </Link>
        </div>

      </div>

      {/* Listas de órdenes de trabajo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ListaOrdenesDashboard titulo={"Órdenes de Trabajo Recientes"} color={"blue"} endpoint={"/api/ordenes_recientes"} />
        <ListaOrdenesDashboard titulo={"Órdenes de Trabajo Próximas a Entregar"} color={"red"} endpoint={"/api/ordenes_proximas"} />
      </div>
    </div>
  );
}