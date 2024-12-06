// components/BarChartComponent.jsx
import React from "react";
import { BarChart } from '@mui/x-charts';

const KpiKgTotal = () => {
    const etapas = [
        "Corte", "Punzonado", "Ojalado/Matrizado", "Matrizado A", "Matrizado B",
        "Ojalado 1", "Ojalado 2", "Laminado", "Cola Temple", "Temple/Revenido",
        "Enderezado", "Engrampado", "Armado", "Pintura", "No Conformidad",
      ];
    
      const valores = [30, 45, 20, 15, 25, 40, 35, 50, 10, 20, 25, 30, 40, 60, 5]; // Valores inventados
    
      return (
        <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
          <BarChart
            layout="horizontal"
            yAxis={[{ data: etapas, scaleType: "band",  }]}
            series={[{ data: valores, label: "Cantidad de toneladas en proceso", color: "#3B82F6" }]}
            width={800}
            height={600}
          />
        </div>
      );
    };

export default KpiKgTotal;
