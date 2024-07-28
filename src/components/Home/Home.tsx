import HomeButton from "./HomeButton";
import { HomeIcon } from "./HomeIcon";
import "./Home.css";
import About from "../About";
import Contacto from "../Contacto";

export default function Home() {
    return (
        <>
            <div className="h-screen flex justify-center items-center bg-teal-300 mt-8">
                <div className="p-12 text-center w-5/6 backdrop-blur-xl bg-white/30">
                    <div className="main__div">
                        <h1 className="main__div-h1">Tu mejor aventura comienza aquí.</h1>
                        <span className="main__div-span">¡Sé feliz acá!</span>
                    </div>

                    <div className="flex justify-center items-center">
                        <div dangerouslySetInnerHTML={{ __html: HomeIcon }} />
                    </div>
                    
                    <div>
                        <span className="main__div-span">Desde 2023</span>
                    </div>
                    <HomeButton />
                </div>
            </div>

            <About  />
            <Contacto />
        </>
    );
}