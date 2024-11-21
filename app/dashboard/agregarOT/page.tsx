"use client"
import AgregarPaciente from '@/app/ui/pacientes/agregar-pacientes';
import { Suspense } from 'react';

export default function SeccionPage() {


    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <AgregarPaciente />
        </Suspense>
    );
}
