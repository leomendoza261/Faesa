
import TablaNotasPedidos from '@/app/ui/notas_pedidos/tabla_notas_pedidos';
import { Suspense } from 'react';

export default function NotasPedidosPage() {
    const detalle_nota_pedido = [{
        "id": 1,
        "id_nota_pedido": 7,
        "articulo": "Fuscia",
        "cantidad": 43
      }, {
        "id": 2,
        "id_nota_pedido": 3,
        "articulo": "Maroon",
        "cantidad": 12
      }, {
        "id": 3,
        "id_nota_pedido": 2,
        "articulo": "Goldenrod",
        "cantidad": 42
      }, {
        "id": 4,
        "id_nota_pedido": 4,
        "articulo": "Fuscia",
        "cantidad": 39
      }, {
        "id": 5,
        "id_nota_pedido": 1,
        "articulo": "Crimson",
        "cantidad": 3
      }, {
        "id": 6,
        "id_nota_pedido": 10,
        "articulo": "Yellow",
        "cantidad": 29
      }, {
        "id": 7,
        "id_nota_pedido": 4,
        "articulo": "Mauv",
        "cantidad": 10
      }, {
        "id": 8,
        "id_nota_pedido": 1,
        "articulo": "Red",
        "cantidad": 23
      }, {
        "id": 9,
        "id_nota_pedido": 10,
        "articulo": "Violet",
        "cantidad": 43
      }, {
        "id": 10,
        "id_nota_pedido": 3,
        "articulo": "Indigo",
        "cantidad": 26
      }, {
        "id": 11,
        "id_nota_pedido": 9,
        "articulo": "Turquoise",
        "cantidad": 25
      }, {
        "id": 12,
        "id_nota_pedido": 3,
        "articulo": "Yellow",
        "cantidad": 24
      }, {
        "id": 13,
        "id_nota_pedido": 9,
        "articulo": "Yellow",
        "cantidad": 3
      }, {
        "id": 14,
        "id_nota_pedido": 9,
        "articulo": "Maroon",
        "cantidad": 8
      }, {
        "id": 15,
        "id_nota_pedido": 8,
        "articulo": "Goldenrod",
        "cantidad": 21
      }, {
        "id": 16,
        "id_nota_pedido": 7,
        "articulo": "Orange",
        "cantidad": 46
      }, {
        "id": 17,
        "id_nota_pedido": 10,
        "articulo": "Fuscia",
        "cantidad": 38
      }, {
        "id": 18,
        "id_nota_pedido": 10,
        "articulo": "Mauv",
        "cantidad": 16
      }, {
        "id": 19,
        "id_nota_pedido": 1,
        "articulo": "Khaki",
        "cantidad": 4
      }, {
        "id": 20,
        "id_nota_pedido": 4,
        "articulo": "Violet",
        "cantidad": 3
      }]

    const nota_pedido = [{
        "id": 1,
        "cliente": "Oppo",
        "fecha_entrega": "13/03/2025",
        "observaciones": "dui proin"
      }, {
        "id": 2,
        "cliente": "Lenovo",
        "fecha_entrega": "13/11/2025",
        "observaciones": "congue vivamus"
      }, {
        "id": 3,
        "cliente": "BlackBerry",
        "fecha_entrega": "02/11/2025",
        "observaciones": "convallis tortor"
      }, {
        "id": 4,
        "cliente": "Samsung",
        "fecha_entrega": "23/03/2025",
        "observaciones": "leo odio"
      }, {
        "id": 5,
        "cliente": "Prestigio",
        "fecha_entrega": "07/06/2025",
        "observaciones": "odio condimentum"
      }, {
        "id": 6,
        "cliente": "Huawei",
        "fecha_entrega": "15/02/2025",
        "observaciones": "maecenas tristique"
      }, {
        "id": 7,
        "cliente": "Samsung",
        "fecha_entrega": "20/06/2025",
        "observaciones": "dapibus at"
      }, {
        "id": 8,
        "cliente": "Samsung",
        "fecha_entrega": "02/01/2025",
        "observaciones": "condimentum id"
      }, {
        "id": 9,
        "cliente": "TCL",
        "fecha_entrega": "27/03/2025",
        "observaciones": "odio"
      }, {
        "id": 10,
        "cliente": "Samsung",
        "fecha_entrega": "10/02/2025",
        "observaciones": "sem mauris"
      }]
      

    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <TablaNotasPedidos detalles={detalle_nota_pedido} notas={nota_pedido} />
        </Suspense>
    );
}