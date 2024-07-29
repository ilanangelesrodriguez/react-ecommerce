import React, { useState } from 'react';

function Contacto() {
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
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <h1 className="text-2xl font-bold mb-4 text-center">Contacto</h1>
                <p className="mb-6 text-center">Envíanos un mensaje</p>
                <div className="flex flex-col md:flex-row">
                    <div className="mb-8 flex items-center contact__div-map md:w-1/2 md:pr-4">
                        <iframe
                            className="border border-black w-full h-72"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d414.05428255171273!2d-78.18345986930629!3d-9.139078644762868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1686435826050!5m2!1ses-419!2spe"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="md:w-1/2 mt-8 md:pl-4 hover:mt-0">
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
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacto;