export default function About() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <h2 className="text-black  font-bold mb-4 text-center">Acerca de Nosotros</h2>
                <p className="text-lg text-gray-700 mb-6 text-center">
                    Conoce más sobre nosotros
                </p>
                <div className="text-gray-600 space-y-4">
                    <p>
                        Somos una empresa dedicada a ofrecer los mejores productos y servicios a nuestros clientes. 
                        Nuestro compromiso es brindar calidad y satisfacción en cada una de nuestras ofertas.
                    </p>
                    <p>
                        Con años de experiencia en el mercado, hemos logrado consolidarnos como líderes en nuestro sector, 
                        siempre innovando y adaptándonos a las necesidades de nuestros clientes.
                    </p>
                    <p>
                        Nuestro equipo está compuesto por profesionales altamente capacitados y apasionados por lo que hacen, 
                        siempre dispuestos a dar lo mejor de sí para garantizar la mejor experiencia posible.
                    </p>
                </div>
            </div>
        </div>
    );
}