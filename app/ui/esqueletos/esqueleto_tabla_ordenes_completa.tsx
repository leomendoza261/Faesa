export function EsqueletoTablaOrdenesCompleta() {
    return (
        <div className="hidden md:block overflow-x-auto mt-2">
            <table className="min-w-full rounded-md text-gray-900">
                <thead className="bg-gray-50 text-left text-sm font-medium">
                    <tr>
                        <th className="w-[156px] px-4 py-3">Nro Orden</th>
                        <th className="w-[278px] px-4 py-3">Articulo</th>
                        <th className="w-[142px] px-4 py-3">Cantidad</th>
                        <th className="w-[104px] px-4 py-3">Hojas</th>
                        <th className="w-[89px] px-4 py-3">Kg</th>
                        <th className="w-[226px] px-4 py-3">Cliente</th>
                        <th className="px-4 py-3">Nota de Pedido</th>
                        <th className="px-4 py-3">Fecha Entrega</th>
                        <th className="px-4 py-3">Transferir</th>
                    </tr>
                </thead>
            </table>
            <div className="h-[20px] w-full animate-pulse mt-4 rounded bg-gray-100"></div>
        </div>
    );
}