    "use client"
    import TablaPacientes from '@/app/ui/pacientes/table-pacientes';
    import { Suspense } from 'react';

    export default function SeccionPage() {
        const pacientes = [{
            "nro_orden": 1,
            "articulo": "vel ipsum",
            "cantidad": 63,
            "kg": 927,
            "cliente": "Skimia",
            "nota_pedido": 28,
            "fecha_entrega": "21/12/2023"
        }, {
            "nro_orden": 2,
            "articulo": "sagittis dui vel",
            "cantidad": 72,
            "kg": 502,
            "cliente": "Lazz",
            "nota_pedido": 43,
            "fecha_entrega": "02/04/2024"
        }, {
            "nro_orden": 3,
            "articulo": "amet justo",
            "cantidad": 52,
            "kg": 312,
            "cliente": "Pixoboo",
            "nota_pedido": 58,
            "fecha_entrega": "28/10/2024"
        }, {
            "nro_orden": 4,
            "articulo": "a",
            "cantidad": 85,
            "kg": 124,
            "cliente": "Buzzdog",
            "nota_pedido": 9,
            "fecha_entrega": "21/10/2024"
        }, {
            "nro_orden": 5,
            "articulo": "ut",
            "cantidad": 76,
            "kg": 257,
            "cliente": "Babblestorm",
            "nota_pedido": 97,
            "fecha_entrega": "02/07/2024"
        }, {
            "nro_orden": 6,
            "articulo": "eu est",
            "cantidad": 89,
            "kg": 987,
            "cliente": "Digitube",
            "nota_pedido": 96,
            "fecha_entrega": "20/10/2024"
        }, {
            "nro_orden": 7,
            "articulo": "morbi",
            "cantidad": 89,
            "kg": 143,
            "cliente": "Trilith",
            "nota_pedido": 97,
            "fecha_entrega": "09/07/2024"
        }, {
            "nro_orden": 8,
            "articulo": "vitae nisi",
            "cantidad": 5,
            "kg": 697,
            "cliente": "Jaxbean",
            "nota_pedido": 13,
            "fecha_entrega": "10/05/2024"
        }, {
            "nro_orden": 9,
            "articulo": "suscipit ligula",
            "cantidad": 80,
            "kg": 304,
            "cliente": "Realcube",
            "nota_pedido": 9,
            "fecha_entrega": "14/06/2024"
        }, {
            "nro_orden": 10,
            "articulo": "mauris morbi non",
            "cantidad": 65,
            "kg": 212,
            "cliente": "Tagchat",
            "nota_pedido": 94,
            "fecha_entrega": "08/04/2024"
        }]

        return (
            <Suspense fallback={<div>Cargando...</div>}>
                <TablaPacientes pacientes={pacientes} />
            </Suspense>
        );
    }
