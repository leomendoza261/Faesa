'use client';

import { useState, useRef, useEffect } from 'react';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null); // Referencia para el final del chat

  // Maneja el envío del mensaje
  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    // Agregar mensaje del usuario
    const userMessage = { sender: 'Usuario', text: userInput };
    const aiResponse = { sender: 'IA', text: 'IA aún no disponible' };

    // Se agregan los mensajes uno a la vez para evitar duplicación
    setMessages((prevMessages) => [...prevMessages, userMessage, aiResponse]);

    // Limpiar el input
    setUserInput('');
  };

  // Maneja el evento de presionar Enter
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Evita el salto de línea en el input
      handleSendMessage(); // Envia el mensaje
    }
  };

  // Desplazar hacia abajo automáticamente cuando se agregan nuevos mensajes
  useEffect(() => {
    // Desplazamos al final del chat después de que los mensajes se actualicen
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]); // Se ejecuta cada vez que se actualizan los mensajes

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Botón del asistente */}
      <button
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>

      {/* Ventana emergente */}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-xl rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Chat Asistente</h2>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
          </div>
          <div className="flex-1 overflow-y-auto border p-2">
            {/* Mostrar conversación */}
            {messages.length === 0 ? (
              <p className="text-gray-500 text-sm">¡Escribe tu primer mensaje!</p>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    message.sender === 'Usuario' ? 'text-right' : 'text-left'
                  }`}
                >
                  <p
                    className={`inline-block px-3 py-2 rounded-lg ${
                      message.sender === 'Usuario'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-black'
                    }`}
                  >
                    {message.text}
                  </p>
                </div>
              ))
            )}
            {/* Este div es el que hará que se deslice hacia abajo */}
            <div ref={messagesEndRef} />
          </div>
          <div className="mt-2 flex items-center">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyPress} // Detecta el presionar Enter
              placeholder="Escribe un mensaje..."
              className="w-full border rounded-lg p-2 focus:outline-blue-500"
            />
            {/* Botón de enviar con flecha */}
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none"
            >
              <span className="text-xl">▶</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;
