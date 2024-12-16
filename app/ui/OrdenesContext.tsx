"use client"
// OrderContext.js
import { createContext, useContext, useState, useEffect } from 'react';

// Este es el JSON inicial
const initialOrders = [{
    "nro_orden": 1,
    "articulo": "donec ut dolor",
    "cantidad": 37,
    "kg": 1675,
    "cliente": "Npath",
    "nota_pedido": 43,
    "fecha_entrega": "05-01-2024",
    "celda": "ojalado_1"
}, {
    "nro_orden": 2,
    "articulo": "sem duis",
    "cantidad": 27,
    "kg": 7632,
    "cliente": "Meevee",
    "nota_pedido": 34,
    "fecha_entrega": "13-12-2023",
    "celda": "ojalado_2"
}, {
    "nro_orden": 3,
    "articulo": "est",
    "cantidad": 33,
    "kg": 1264,
    "cliente": "Meevee",
    "nota_pedido": 41,
    "fecha_entrega": "13-06-2024",
    "celda": "laminado"
}, {
    "nro_orden": 4,
    "articulo": "odio",
    "cantidad": 89,
    "kg": 5369,
    "cliente": "Quaxo",
    "nota_pedido": 88,
    "fecha_entrega": "11-04-2024",
    "celda": "laminado"
}, {
    "nro_orden": 5,
    "articulo": "sed justo pellentesque",
    "cantidad": 62,
    "kg": 7449,
    "cliente": "Kimia",
    "nota_pedido": 41,
    "fecha_entrega": "22-07-2024",
    "celda": "ojalado_1"
}, {
    "nro_orden": 6,
    "articulo": "augue vestibulum",
    "cantidad": 45,
    "kg": 2759,
    "cliente": "Meevee",
    "nota_pedido": 75,
    "fecha_entrega": "08-01-2024",
    "celda": "pintura"
}, {
    "nro_orden": 7,
    "articulo": "morbi",
    "cantidad": 71,
    "kg": 6758,
    "cliente": "Dabjam",
    "nota_pedido": 74,
    "fecha_entrega": "02-07-2024",
    "celda": "matrizado_a"
}, {
    "nro_orden": 8,
    "articulo": "lorem",
    "cantidad": 75,
    "kg": 5707,
    "cliente": "Fivespan",
    "nota_pedido": 59,
    "fecha_entrega": "11-01-2024",
    "celda": "matrizado_b"
}, {
    "nro_orden": 9,
    "articulo": "nibh in",
    "cantidad": 75,
    "kg": 8733,
    "cliente": "Gigaclub",
    "nota_pedido": 52,
    "fecha_entrega": "29-12-2023",
    "celda": "pintura"
}, {
    "nro_orden": 10,
    "articulo": "non",
    "cantidad": 5,
    "kg": 653,
    "cliente": "Devpoint",
    "nota_pedido": 69,
    "fecha_entrega": "27-06-2024",
    "celda": "colatemple"
}, {
    "nro_orden": 11,
    "articulo": "a",
    "cantidad": 100,
    "kg": 9254,
    "cliente": "Ailane",
    "nota_pedido": 71,
    "fecha_entrega": "08-09-2024",
    "celda": "colatemple"
}, {
    "nro_orden": 12,
    "articulo": "praesent lectus vestibulum",
    "cantidad": 26,
    "kg": 7072,
    "cliente": "Feedbug",
    "nota_pedido": 41,
    "fecha_entrega": "09-04-2024",
    "celda": "matrizado_a"
}, {
    "nro_orden": 13,
    "articulo": "nonummy maecenas tincidunt",
    "cantidad": 46,
    "kg": 3689,
    "cliente": "Voomm",
    "nota_pedido": 8,
    "fecha_entrega": "21-05-2024",
    "celda": "colatemple"
}, {
    "nro_orden": 14,
    "articulo": "curae mauris",
    "cantidad": 54,
    "kg": 6484,
    "cliente": "Camimbo",
    "nota_pedido": 7,
    "fecha_entrega": "17-10-2024",
    "celda": "punzonado"
}, {
    "nro_orden": 15,
    "articulo": "augue aliquam erat",
    "cantidad": 55,
    "kg": 508,
    "cliente": "Tagopia",
    "nota_pedido": 44,
    "fecha_entrega": "30-08-2024",
    "celda": "pintura"
}, {
    "nro_orden": 16,
    "articulo": "eget congue eget",
    "cantidad": 88,
    "kg": 6583,
    "cliente": "Innotype",
    "nota_pedido": 14,
    "fecha_entrega": "21-02-2024",
    "celda": "temple_revenido"
}, {
    "nro_orden": 17,
    "articulo": "nisi",
    "cantidad": 36,
    "kg": 9526,
    "cliente": "Dazzlesphere",
    "nota_pedido": 39,
    "fecha_entrega": "03-11-2024",
    "celda": "pintura"
}, {
    "nro_orden": 18,
    "articulo": "magna vestibulum",
    "cantidad": 16,
    "kg": 946,
    "cliente": "Photolist",
    "nota_pedido": 40,
    "fecha_entrega": "12-12-2023",
    "celda": "punzonado"
}, {
    "nro_orden": 19,
    "articulo": "nisi",
    "cantidad": 58,
    "kg": 7101,
    "cliente": "Miboo",
    "nota_pedido": 64,
    "fecha_entrega": "21-05-2024",
    "celda": "enderezado"
}, {
    "nro_orden": 20,
    "articulo": "enim",
    "cantidad": 50,
    "kg": 5623,
    "cliente": "Dynava",
    "nota_pedido": 67,
    "fecha_entrega": "07-05-2024",
    "celda": "enderezado"
}, {
    "nro_orden": 21,
    "articulo": "turpis enim",
    "cantidad": 39,
    "kg": 4652,
    "cliente": "Podcat",
    "nota_pedido": 11,
    "fecha_entrega": "28-05-2024",
    "celda": "enderezado"
}, {
    "nro_orden": 22,
    "articulo": "eget orci",
    "cantidad": 77,
    "kg": 4547,
    "cliente": "Eimbee",
    "nota_pedido": 69,
    "fecha_entrega": "17-01-2024",
    "celda": "temple_revenido"
}, {
    "nro_orden": 23,
    "articulo": "duis",
    "cantidad": 96,
    "kg": 711,
    "cliente": "Aimbo",
    "nota_pedido": 52,
    "fecha_entrega": "20-08-2024",
    "celda": "temple_revenido"
}, {
    "nro_orden": 24,
    "articulo": "imperdiet sapien urna",
    "cantidad": 78,
    "kg": 4821,
    "cliente": "Kanoodle",
    "nota_pedido": 83,
    "fecha_entrega": "16-06-2024",
    "celda": "punzonado"
}, {
    "nro_orden": 25,
    "articulo": "dictumst morbi vestibulum",
    "cantidad": 31,
    "kg": 8246,
    "cliente": "Bluejam",
    "nota_pedido": 15,
    "fecha_entrega": "04-08-2024",
    "celda": "engranado"
}, {
    "nro_orden": 26,
    "articulo": "semper porta volutpat",
    "cantidad": 58,
    "kg": 8922,
    "cliente": "Voolia",
    "nota_pedido": 16,
    "fecha_entrega": "26-03-2024",
    "celda": "engranado"
}, {
    "nro_orden": 27,
    "articulo": "ultrices posuere cubilia",
    "cantidad": 3,
    "kg": 6698,
    "cliente": "Zooxo",
    "nota_pedido": 13,
    "fecha_entrega": "20-09-2024",
    "celda": "noconformidad"
}, {
    "nro_orden": 28,
    "articulo": "ut tellus nulla",
    "cantidad": 90,
    "kg": 8082,
    "cliente": "Abata",
    "nota_pedido": 9,
    "fecha_entrega": "28-08-2024",
    "celda": "granallado"
}, {
    "nro_orden": 29,
    "articulo": "sociis natoque penatibus",
    "cantidad": 21,
    "kg": 4824,
    "cliente": "Browsedrive",
    "nota_pedido": 23,
    "fecha_entrega": "01-07-2024",
    "celda": "granallado"
}, {
    "nro_orden": 30,
    "articulo": "nulla elit ac",
    "cantidad": 37,
    "kg": 9774,
    "cliente": "Devify",
    "nota_pedido": 40,
    "fecha_entrega": "29-03-2024",
    "celda": "corte"
}, {
    "nro_orden": 31,
    "articulo": "nulla",
    "cantidad": 79,
    "kg": 7792,
    "cliente": "Devshare",
    "nota_pedido": 92,
    "fecha_entrega": "14-02-2024",
    "celda": "punzonado"
}, {
    "nro_orden": 32,
    "articulo": "sit amet",
    "cantidad": 66,
    "kg": 221,
    "cliente": "Lazz",
    "nota_pedido": 16,
    "fecha_entrega": "13-02-2024",
    "celda": "punzonado"
}, {
    "nro_orden": 33,
    "articulo": "donec pharetra",
    "cantidad": 23,
    "kg": 6888,
    "cliente": "Babblestorm",
    "nota_pedido": 7,
    "fecha_entrega": "14-08-2024",
    "celda": "armado"
}, {
    "nro_orden": 34,
    "articulo": "vestibulum",
    "cantidad": 41,
    "kg": 678,
    "cliente": "Feedbug",
    "nota_pedido": 22,
    "fecha_entrega": "15-02-2024",
    "celda": "armado"
}, {
    "nro_orden": 35,
    "articulo": "viverra pede",
    "cantidad": 32,
    "kg": 4762,
    "cliente": "Babbleopia",
    "nota_pedido": 100,
    "fecha_entrega": "19-01-2024",
    "celda": "corte"
}, {
    "nro_orden": 36,
    "articulo": "felis",
    "cantidad": 89,
    "kg": 4138,
    "cliente": "Tambee",
    "nota_pedido": 60,
    "fecha_entrega": "24-07-2024",
    "celda": "pintura"
}, {
    "nro_orden": 37,
    "articulo": "massa id lobortis",
    "cantidad": 30,
    "kg": 4604,
    "cliente": "Wordpedia",
    "nota_pedido": 27,
    "fecha_entrega": "19-11-2024",
    "celda": "pintura"
}, {
    "nro_orden": 38,
    "articulo": "eget eros",
    "cantidad": 13,
    "kg": 8592,
    "cliente": "Einti",
    "nota_pedido": 39,
    "fecha_entrega": "25-10-2024",
    "celda": "armado"
}, {
    "nro_orden": 39,
    "articulo": "ac",
    "cantidad": 30,
    "kg": 1986,
    "cliente": "Zoonder",
    "nota_pedido": 49,
    "fecha_entrega": "12-11-2024",
    "celda": "corte"
}, {
    "nro_orden": 40,
    "articulo": "metus",
    "cantidad": 31,
    "kg": 5102,
    "cliente": "Buzzbean",
    "nota_pedido": 18,
    "fecha_entrega": "09-06-2024",
    "celda": "corte"
}
];

// Define el tipo de los datos en el contexto
interface Order {
  nro_orden: number;
  articulo: string;
  cantidad: number;
  kg: number;
  cliente: string;
  nota_pedido: number;
  fecha_entrega: string;
  celda: string;
}

// Define el tipo del contexto
interface OrdenesContextType {
  orders: Order[];
  updateCelda: (nro_orden: number, newCelda: string) => void;
}

// Crea el contexto con el tipo adecuado
const OrderContext = createContext<OrdenesContextType | null>(null);

// Define el tipo de las propiedades del proveedor
interface OrdenesContextProps {
  children: React.ReactNode;
}

// Crea un proveedor para el contexto
export const OrderProvider: React.FC<OrdenesContextProps> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    } else {
      // Si no hay datos, inicializa con una maqueta
      setOrders(initialOrders);
    }
  }, []);

  // Función para actualizar el valor de "celda" de una orden
  const updateCelda = (nro_orden: number, newCelda: string) => {
    setOrders((prevOrders) => {
      const updatedOrders = prevOrders.map((order) =>
        order.nro_orden === nro_orden ? { ...order, celda: newCelda } : order
      );
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      return updatedOrders;
    });
  };

  return (
    <OrderContext.Provider value={{ orders, updateCelda }}>
      {children}
    </OrderContext.Provider>
  );
};

// Hook para usar el contexto
export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrdenesContext provider');
  }
  return context;
};