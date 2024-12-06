"use client"

import KpiKgTotal from '@/app/ui/kpi/kpiKgTotal';
import { Suspense } from 'react';

export default function KPIPage() {


    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <KpiKgTotal />
        </Suspense>
    );
}