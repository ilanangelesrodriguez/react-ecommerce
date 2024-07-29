import { useState, useEffect, useRef } from 'react';
import { HomeIcon, ProductIcon, GroupIcon, ContactIcon } from './HeaderIcons';
import MenuItem from './MenuItem';
import iconStore from '../../assets/icon_store.png';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button onClick={toggleMenu} className="p-2 rounded-md bg-transparent border-none hover:border-none outline-none focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
      {isOpen && (
        <div className="fixed p-4 left-0 top-0 h-full w-72 bg-white border-r border-gray-200 shadow-lg z-50">
          <form className="w-full px-3 py-2 border-b border-gray-300" role="search">
            <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type="search" placeholder="Buscar" aria-label="Search" />
            <button className="w-full mt-2 px-3 py-2 bg-green-500 text-white rounded-md" type="submit">Buscar</button>
          </form>
          <div className="flex items-center m-2 px-3 py-3 border-b border-gray-300 bg-blue-100 rounded-lg">
            <img className="w-12 h-12 mr-3" src={iconStore} alt="Icono de tienda" />
            <p className="text-blue-700 font-bold">Descubre nuestros productos</p>
          </div>
          <span className="block px-3 py-4 text-gray-500">SECCIONES</span>
          <ul className="py-2">
            <MenuItem icon={<HomeIcon />} text="Inicio" to="/" />
            <MenuItem icon={<ProductIcon />} text="Productos" to="/productos" />
            <MenuItem icon={<GroupIcon />} text="Nosotros" to="/nosotros" />
            <MenuItem icon={<ContactIcon />} text="Contáctanos" to="/contacto" />
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;