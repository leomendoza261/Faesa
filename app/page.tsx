import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100 p-6">
      {/* Barra superior */}
      <div className="flex h-20 items-center justify-center bg-blue-600 rounded-lg shadow-md mb-8">
        <h1 className="text-white text-3xl font-bold">FAESA</h1>
      </div>

      {/* Contenedor principal con el formulario */}
      <div className="flex grow justify-center items-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Iniciar sesión</h2>

          {/* Formulario de login */}
          <form action="/dashboard" className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">Correo Electrónico</label>
              <input
                type="text"
                id="email"
                name="email"
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                placeholder="ejemplo@faesa.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                placeholder="********"
              />
            </div>

            {/* Botón de login */}
            <button
              type="submit"
              className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg font-medium transition-colors hover:bg-blue-500 focus:outline-none"
            >
              Iniciar sesión
            </button>
          </form>

          {/* Enlace para registro o recuperar contraseña */}
          <div className="mt-4 text-center">
            <Link href="/" className="text-blue-500 text-sm">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </div>
      </div>

      {/* Imagen o contenido adicional */}
      <div className="flex justify-center items-center mt-12">
        <div className="w-full max-w-md text-center">
          <p className="text-lg text-gray-700">
            ¿No tienes cuenta?{' '}
            <Link href="/" className="text-blue-500">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
