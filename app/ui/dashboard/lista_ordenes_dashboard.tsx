import Link from "next/link";
import { useState, useEffect } from "react";

interface OrdenDeTrabajo {
  nro_orden: number;
  articulo: string;
  cliente?: {
    nombre: string;
  };
  fecha_entrega: string; // ISO 8601 date string
}

interface ListaOrdenesDashboardProps {
  titulo: string;
  color: string;
  endpoint: string;
}

export default function ListaOrdenesDashboard({
  titulo,
  color,
  endpoint,
}: ListaOrdenesDashboardProps) {
  const [ordenesDeTrabajo, setOrdenesDeTrabajo] = useState<OrdenDeTrabajo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOrdenes() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: OrdenDeTrabajo[] = await response.json(); // Asumimos que el API devuelve este tipo
        setOrdenesDeTrabajo(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Error desconocido";
        setError(message);
      } finally {
        setLoading(false);
      }
    }

    if (endpoint) {
      fetchOrdenes();
    }
  }, [endpoint]);

  return (
    <div className="bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-medium text-gray-800 mb-4">{titulo}</h3>
      {loading ? (
        <div className="h-[20px] w-full animate-pulse rounded bg-gray-100"></div>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : ordenesDeTrabajo.length > 0 ? (
        <ul className="space-y-3">
          {ordenesDeTrabajo.map((orden) => (
            <li
              key={orden.nro_orden}
              className="border-b border-gray-200 py-3 hover:bg-gray-50"
            >
              <Link
                href={`/dashboard/ordenes/${orden.nro_orden}`}
                className={`text-${color}-600 hover:text-${color}-800`}
              >
                Orden #{orden.nro_orden} - {orden.articulo} ({orden.cliente?.nombre}) - Entrega:{" "}
                {new Date(orden.fecha_entrega).toLocaleDateString("es-ES")}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No hay órdenes disponibles.</p>
      )}
    </div>
  );
}
