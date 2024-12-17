"use client"

import React, { useState, useEffect } from "react";
import { BarChart } from '@mui/x-charts';

const KpiKgTotal = () => {
    const etapas = [
        "Corte", "Punzonado", "Ojalado/Matrizado", "Matrizado A", "Matrizado B",
        "Ojalado 1", "Ojalado 2", "Laminado", "Cola Temple", "Temple/Revenido",
        "Enderezado", "Engrampado", "Armado", "Pintura", "No Conformidad",
    ];
  
    const valores = [30, 45, 20, 15, 25, 40, 35, 50, 10, 20, 25, 30, 40, 60, 5];

    const [chartWidth, setChartWidth] = useState(window.innerWidth > 768 ? 800 : 340);

    // Update width dynamically based on screen size
    useEffect(() => {
        const handleResize = () => {
            setChartWidth(window.innerWidth > 768 ? 800 : 400);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div style={{ width: "100%", maxWidth: "100%", margin: "8 auto" }}>
            <h1 className="mb-3 pt-8 md:pt-8 text-xl md:text-2xl">Toneladas Totales en Proceso</h1>
            <BarChart
                layout="horizontal"
                yAxis={[{ data: etapas, scaleType: "band" }]}
                series={[{ data: valores, color: "#3B82F6" }]}
                width={chartWidth} // Dinámico
                height={600}
                margin={{ top: 50, bottom: 50, left: 120, right: 10 }}
            />
        </div>
    );
};

export default KpiKgTotal;
