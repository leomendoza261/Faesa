"use client"
import TablaPacientes from '@/app/ui/pacientes/table-pacientes';
import { Suspense } from 'react';

export default function SeccionPage() {

    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <TablaPacientes />
        </Suspense>
    );
}
