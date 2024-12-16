// Función para formatear nombres
export function formatearTexto(text: string ) {
    return text
      .replace(/_/g, " ") // Reemplazar guiones por espacios
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Convertir la primera letra de cada palabra en mayúscula
  }
  