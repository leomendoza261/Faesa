"use client"

import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import LogoutIcon from "../icons/LogoutIcon";
import { useState } from "react";

export default function SideNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Barra superior para pantallas pequeñas */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-blue-600 px-4 py-3 text-white md:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Abrir menú"
          className="rounded-md p-2 hover:bg-blue-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <Link href={"/dashboard"} className="text-lg font-semibold" >FAESA</Link>
      </div>

      {/* Menú lateral */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-white px-3 py-4 overflow-y-auto shadow-lg transition-transform duration-300 md:static md:w-auto md:translate-x-0 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo (solo visible en pantallas medianas o grandes) */}
        <div className="hidden md:block">
          <Link
            href="/dashboard"
            className="mb-4 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4"
            aria-label="Ir al inicio"
          >
            <div className="w-32 text-white">
              <AcmeLogo />
            </div>
          </Link>
        </div>

        {/* Contenido principal */}
        <div className="flex grow pt-16 md:pt-0 flex-col space-y-2">
          {/* Enlaces de navegación */}
          <NavLinks closeMenu={closeMenu} />

          {/* Espaciador opcional */}
          <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>

          {/* Botón de cerrar sesión */}
          <form>
            <Link
              className="flex h-[48px] w-full items-center justify-center gap-2 rounded-md bg-red-100 p-3 text-sm font-medium hover:bg-red-200 hover:text-red-600 md:justify-start"
              aria-label="Cerrar sesión"
              href="/"
            >
              <LogoutIcon size={4} strokeWidth={2} />
              <span className="hidden md:block">Cerrar Sesión</span>
            </Link>
          </form>
        </div>
      </aside>

      {/* Fondo oscuro cuando el menú está abierto */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-black/50 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
}
