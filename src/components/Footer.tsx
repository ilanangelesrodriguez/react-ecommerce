export default function Footer() {
    return (
        <footer className="bg-amber-200 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Novedades Marita. Todos los derechos reservados.</p>
                <p>
                    <a href="/privacy-policy" className="text-gray-400 hover:text-white">Política de Privacidad</a> | 
                    <a href="/terms-of-service" className="text-gray-400 hover:text-white"> Términos de Servicio</a>
                </p>
            </div>
        </footer>
    );
}

