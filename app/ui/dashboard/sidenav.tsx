import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import LogoutIcon from "../icons/LogoutIcon";

export default function SideNav() {
  return (
    <aside className="flex h-full flex-col px-3 py-4 md:px-2">
      {/* Logo */}
      <Link
        href="/"
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        aria-label="Ir al inicio"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>

      {/* Contenido principal */}
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {/* Enlaces de navegación */}
        <NavLinks />

        {/* Espaciador opcional */}
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>

        {/* Botón de cerrar sesión */}
        <form>
          <Link
            type="button" // Cambiado a "button" porque no es un envío de formulario
            className="flex h-[48px] w-full items-center justify-center gap-2 rounded-md bg-red-100 p-3 text-sm font-medium hover:bg-red-200 hover:text-red-600 md:bg-gray-50 md:justify-start md:p-2 md:px-3"
            aria-label="Cerrar sesión" href={'/'}          >
            <LogoutIcon size={4} strokeWidth={2} />
            <span className="hidden md:block">Cerrar Sesión</span>
          </Link>
        </form>
      </div>
    </aside>
  );
}
