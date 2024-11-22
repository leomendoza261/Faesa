// Importar íconos
import CalendarIcon from "../icons/CalendarIcon";
import PacientesIcon from "../icons/PacientesIcon";
import Link from "next/link";

// Definir los links con logo e ícono
const links = [
  { name: 'Home', href: '/dashboard', logo: <CalendarIcon size={4} strokeWidth={2}/> },
  { name: 'Corte', href: '/dashboard/corte', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Punzonado', href: '/dashboard/punzonado', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Ojalado 1', href: '/dashboard/ojalado-1', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Ojalado 2', href: '/dashboard/ojalado-2', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Laminado', href: '/dashboard/laminado', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Temple/Revenido', href: '/dashboard/temple-revenido', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Enderezado', href: '/dashboard/enderezado', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Engrampado', href: '/dashboard/engrampado', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Armado', href: '/dashboard/armado', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Pintura', href: '/dashboard/pintura', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Algo más', href: '/dashboard/algo-mas', logo: <PacientesIcon size={4} strokeWidth={2}/> },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          {/* Mostrar siempre el logo */}
          <span>{link.logo}</span>

          {/* Mostrar el nombre solo en pantallas md o mayores */}
          <p className="hidden md:block">{link.name}</p>
        </Link>
      ))}
    </>
  );
}
