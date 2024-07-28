import { useState, useEffect, useRef } from 'react';
import { Product } from '../../model/Product';

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
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

  const emptyCart = () => {
    setCartItems([]);
  };

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: (item.quantity ?? 0) + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const totalItems = cartItems.reduce((acc, item) => acc + (item.quantity ?? 0), 0);

  return (
    <div className="relative" ref={cartRef}>
      <button onClick={toggleCart} className="p-1 rounded-md bg-transparent hover:bg-transparent border-none outline-none focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"/><circle cx="10.5" cy="19.5" r="1.5" fill="currentColor"/><circle cx="17.5" cy="19.5" r="1.5" fill="currentColor"/></svg>
        {totalItems > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {totalItems}
          </span>
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-2">
            {cartItems.length === 0 ? (
              <li className="px-4 py-2 text-gray-500">El carrito está vacío</li>
            ) : (
              cartItems.map(item => (
                <li key={item.id} className="px-4 py-2 border-b border-gray-200">
                  <div className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.quantity} x ${item.price}</span>
                  </div>
                </li>
              ))
            )}
          </ul>
          <div className="p-4">
            <button
              onClick={emptyCart}
              className={`w-full px-4 py-2 mb-2 text-white rounded-md ${cartItems.length === 0 ? 'bg-red-300 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}
              disabled={cartItems.length === 0}
            >
              Vaciar Carrito
            </button>
            <button
              className={`w-full px-4 py-2 text-white rounded-md ${cartItems.length === 0 ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
              disabled={cartItems.length === 0}
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