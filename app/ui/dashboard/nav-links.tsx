// Importar íconos
import PacientesIcon from "../icons/pacientesIcon";
import Link from "next/link";

// Definir los links con logo e ícono
const links = [
  { name: 'Notas de Pedidos', href: '/dashboard/notas_pedido', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Corte', href: '/dashboard/corte', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Punzonado', href: '/dashboard/punzonado', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Ojalado', href: '/dashboard/ojalado', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Soldadura', href: '/dashboard/soldadura', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Revenido', href: '/dashboard/revenido', logo: <PacientesIcon size={4} strokeWidth={2}/> },
  { name: 'Control Calidad', href: '/dashboard/control_calidad', logo: <PacientesIcon size={4} strokeWidth={2}/> },
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
