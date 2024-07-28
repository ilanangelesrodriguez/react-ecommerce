import { useEffect, useRef, useState } from "react";
import { Product } from "../../models/Product";

const ShoppingCart = ( { cart, emptyCart }: { cart: Product[], emptyCart: () => void } ) => {
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);

  return (
    <div className="relative" ref={cartRef}>
      <button onClick={toggleCart} className="p-1 rounded-md bg-transparent hover:bg-transparent border-none outline-none focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2">
            <path d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608L5 7Z"/>
            <path strokeLinecap="round" d="m5 7l-.81-3.243A1 1 0 0 0 3.22 3H2m6 18h2m6 0h2"/>
          </g>
        </svg>
        {totalItems > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {totalItems}
          </span>
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-2">
            {cart.length === 0 ? (
              <li className="px-4 py-2 text-gray-500">El carrito está vacío</li>
            ) : (
              cart.map(item => (
                <li key={item.id} className="px-4 py-2 border-b border-gray-200">
                  <div className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.quantity} x S/.{item.price}</span>
                  </div>
                </li>
              ))
            )}
          </ul>
          <div className="p-4">
            <button
              onClick={emptyCart}
              className={`w-full px-4 py-2 mb-2 text-white rounded-md ${cart.length === 0 ? 'bg-red-300 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}
              disabled={cart.length === 0}
            >
              Vaciar Carrito
            </button>
            <button
              className={`w-full px-4 py-2 text-white rounded-md ${cart.length === 0 ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
              disabled={cart.length === 0}
            >
              Ir a Comprar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;