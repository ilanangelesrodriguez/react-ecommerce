import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <input type="text" placeholder="Buscar" className="w-full px-3 py-2 border-b border-gray-300" />
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link to="/">Inicio</Link></li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link to="/contacto">Contacto</Link></li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link to="/productos">Productos</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;