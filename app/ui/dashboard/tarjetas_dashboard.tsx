import Link from "next/link";
import { useEffect, useState } from "react";

interface TarjetasDashboardProps {
    titulo: string;
    apiEndpoint: string; // Endpoint específico para obtener datos de la tarjeta
    link: string; // Ruta de redirección
    bgColor: string; // Color de fondo de la tarjeta
}

export default function TarjetasDashboard({ titulo, apiEndpoint, link, bgColor }: TarjetasDashboardProps) {
    const [valor, setValor] = useState<number | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(apiEndpoint);
                const data = await response.json();
                if (titulo === "Órdenes de trabajo activas") {
                    setValor(data.ordenesActivas.length || 0); // Asegúrate de manejar el caso de undefined
                  } else if (titulo === "Toneladas en proceso") {
                    setValor(data.toneladasTotalesEnProceso || 0); // Asegúrate de manejar el caso de undefined
                  } else {
                    // Lógica para otras APIs
                    setValor(data.length || 0); // Asume que otras APIs devuelven un array
                  }
            } catch (error) {
                console.error(`Error al obtener datos para ${titulo}:`, error);
                setValor(0); // Muestra 0 si hay un error
            }
        }
        fetchData();
    }, [apiEndpoint]);

    return (
        <div className={`p-6 rounded-lg shadow-lg ${bgColor} text-white flex justify-between items-center`}>
            <div>
                <h3 className="text-lg font-medium mb-2">{titulo}</h3>
                <div className="text-2xl font-semibold" >{valor !== null ? valor : <p className={`h-[30px] w-[40px] animate-pulse rounded bg-white`}>0</p>}</div>
            </div>
            <Link href={link}>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-20 hover:bg-gray-200">
                    <span className="text-3xl">📊</span>
                </div>
            </Link>
        </div>
    );
}
