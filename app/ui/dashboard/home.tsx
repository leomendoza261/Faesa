import ListaOrdenesDashboard from "./lista_ordenes_dashboard";
import TarjetasDashboard from "./tarjetas_dashboard";

export default function HomeDashboard() {
  return (
    <div className="w-full pt-16 md:pt-0 p-6 bg-gray-50">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard de Órdenes de Trabajo</h1>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <TarjetasDashboard
          titulo="Órdenes de trabajo activas"
          apiEndpoint="/api/ordenes_activas"
          link="/dashboard/ordenes_activas"
          bgColor="bg-blue-600"
         
        />
        <TarjetasDashboard
          titulo="Toneladas en proceso"
          apiEndpoint="/api/ordenes_activas"
          link="/dashboard/kpi"
          bgColor="bg-blue-600"
          
        />
        <TarjetasDashboard
          titulo="Órdenes completadas hoy"
          apiEndpoint="/api/ordenes_finalizadas_hoy"
          link="/dashboard/ordenes_completadas"
          bgColor="bg-blue-600" 
         
        />
        <TarjetasDashboard
          titulo="Órdenes con retrasos"
          apiEndpoint="/api/ordenes_retrasadas"
          link="/dashboard/ordenes_retrasadas"
          bgColor="bg-red-600"         
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ListaOrdenesDashboard titulo="Órdenes de Trabajo Recientes" color="blue" endpoint="/api/ordenes_recientes" />
        <ListaOrdenesDashboard titulo="Órdenes de Trabajo Próximas a Entregar" color="red" endpoint="/api/ordenes_proximas" />
      </div>
    </div>
  );
}
