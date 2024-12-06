"use client";

import { useOrders } from '@/app/ui/OrdenesContext';
import PacienteInfo from '@/app/ui/paciente/paciente';
import { useParams } from 'next/navigation';

export default function OrdenDetailPage() {
  const { nro_orden } = useParams();
  const { orders } = useOrders();


  const nroOrdenString = Array.isArray(nro_orden) ? nro_orden[0] : nro_orden;

  const paciente = nroOrdenString
    ? orders.find(p => p.nro_orden === parseInt(nroOrdenString, 10))
    : null;

  console.log(paciente)

  return (
    <PacienteInfo 
      pacienteInfo={paciente || {
        nro_orden: 0,
        articulo: '',
        cantidad: 0,
        kg: 0,
        cliente: '',
        nota_pedido: 0,
        fecha_entrega: '',
        celda: ''
      }}
    />
  );
}
