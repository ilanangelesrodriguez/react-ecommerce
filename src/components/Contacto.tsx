import React, { useState } from 'react';

export default function Contacto() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="text-black mt-5 min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                {submitted ? (
                    <div className="text-center">
                        <p className="text-lg mb-4">¡Hola {name}!</p>
                        <p className="mb-6">Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.</p>
                        <a
                            href={`https://wa.me/51962007282?text=Hola,%20soy%20${encodeURIComponent(name)}.%20${encodeURIComponent(message)}`}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Enviar mensaje por WhatsApp
                        </a>
                    </div>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold mb-4 text-center">Contacto</h1>
                        <p className="mb-6 text-center">Envíanos un mensaje</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Nombre
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Tu nombre"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Correo Electrónico
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Tu correo electrónico"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Mensaje
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    placeholder="Tu mensaje"
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}