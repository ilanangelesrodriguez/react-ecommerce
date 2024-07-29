import { FooterBook, LocationIcon, TimeIcon } from "./FooterIcon";
import logo from '../../assets/logo.png';

const startattention = "8:00";
const endattention = "17:00";
const local = "Mercado Municipal de Moro";

export default function Footer() {
    return (
        <footer className="footer bg-amber-200 text-black py-8 rounded-t-3xl	">
            <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
                <div className="flex flex-col items-center md:items-center mb-4 md:mb-0">
                    <div className="footer__div footer__div-logo flex items-center mb-4">
                        <img src={logo} alt="Novedades Marita" className="h-12 ml-2" />
                    </div>
                    <div className="footer__div footer__div-time flex items-center mb-4">
                        <div dangerouslySetInnerHTML={{ __html: TimeIcon }} className="mr-2" />
                        <p className="footer__div-p">Horario: Lunes-Domingo {startattention} - {endattention}</p>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                    <div className="footer__div footer__div-reclamo flex items-center mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <div dangerouslySetInnerHTML={{ __html: FooterBook }} className="mr-2" />
                        <p className="footer__div-p">Libro de reclamaciones</p>
                    </div>
                    
                    <div className="footer__div footer__div-location flex items-center">
                        <div dangerouslySetInnerHTML={{ __html: LocationIcon }} className="mr-2" />
                        <p className="footer__div-p">{local}</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto text-center mt-5">
                <p>&copy; {new Date().getFullYear()} Novedades Marita. Todos los derechos reservados.</p>
                <p>
                    <a href="/privacy-policy" className="text-gray-400 hover:text-white">Política de Privacidad</a> | 
                    <a href="/terms-of-service" className="text-gray-400 hover:text-white"> Términos de Servicio</a>
                </p>
            </div>
        </footer>

        
    );
}

