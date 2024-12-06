// Importar íconos
import PacientesIcon from "../icons/pacientesIcon";
import Link from "next/link";

// Definir los links con logo e ícono
const links = [
  { name: 'Corte', href: '/dashboard/corte', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Punzonado', href: '/dashboard/punzonado', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Cola Ojalado/Matrizado', href: '/dashboard/colaojaladomatrizado', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Matrizado A', href: '/dashboard/matrizado_a', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Matrizado B', href: '/dashboard/matrizado_b', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Ojalado 1', href: '/dashboard/ojalado-1', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Ojalado 2', href: '/dashboard/ojalado_2', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Laminado', href: '/dashboard/laminado', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Cola Temple', href: '/dashboard/colatemple', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Temple/Revenido', href: '/dashboard/temple_revenido', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Enderezado', href: '/dashboard/enderezado', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Engrampado', href: '/dashboard/engrampado', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Granallado', href: '/dashboard/granallado', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Armado', href: '/dashboard/armado', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Pintura', href: '/dashboard/pintura', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'No Conformidad', href: '/dashboard/noconformidad', logo: <PacientesIcon size={4} strokeWidth={2}/> },
];

interface NavLinksProps {
  closeMenu: () => void;
}

export default function NavLinks({ closeMenu }: NavLinksProps) {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="flex h-[48px] items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 "
          onClick={closeMenu} // Cierra el menú al hacer clic
        >
          {/* Ícono y nombre del enlace */}
          <span>{link.logo}</span>
          <p>{link.name}</p>
        </Link>
      ))}
    </>
  );
}
