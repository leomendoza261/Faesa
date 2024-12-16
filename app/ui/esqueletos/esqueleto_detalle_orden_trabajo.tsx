export function EsqueletoDetalleOrdenTrabajo() {
    return (
        <div >
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Detalle Orde de Trabajo</h3>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Numero de Orden</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <div className="h-[20px] w-[180px] animate-pulse rounded bg-gray-100"></div>
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Articulo</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <div className="h-[20px] w-[180px] animate-pulse rounded bg-gray-100"></div>
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Cantidad</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <div className="h-[20px] w-[180px] animate-pulse rounded bg-gray-100"></div>
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Kg Totales</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <div className="h-[20px] w-[180px] animate-pulse rounded bg-gray-100"></div>
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Cliente</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <div className="h-[20px] w-[180px] animate-pulse rounded bg-gray-100"></div>
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Nota pedido</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <div className="h-[20px] w-[180px] animate-pulse rounded bg-gray-100"></div>
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Fecha entrega</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <div className="h-[20px] w-[180px] animate-pulse rounded bg-gray-100"></div>
                        </dd>
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Celda actual</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <div className="h-[20px] w-[180px] animate-pulse rounded bg-gray-100"></div>
                        </dd>
                    </div>

                    <div className="overflow-x-auto mt-2">
                        <h3 className="text-base font-semibold leading-7 text-gray-900">
                            Historial de Orden de Trabajo
                        </h3>
                        <table className="min-w-full rounded-md text-gray-900">
                            <thead className="bg-gray-50 text-left text-sm font-medium">
                                <tr>
                                    <th className="px-4 py-3">Celda</th>
                                    <th className="px-4 py-3">Fecha Ingreso</th>
                                    <th className="px-4 py-3">Fecha Salida</th>
                                    <th className="px-4 py-3">Usuario</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={4} className="text-center py-4 text-gray-500">
                                        <div className="h-[20px] w-full animate-pulse rounded bg-gray-100"></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </dl>
            </div>
        </div>
    );
}