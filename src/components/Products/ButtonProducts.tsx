import React from 'react';
import iconCart from '../../assets/shopping_cart.png';

interface ButtonProductProps {
  productId: number;
  productName: string;
  stock: number;
  handleAddToCart: (productId: number, productName: string) => void;
}

const ButtonProduct: React.FC<ButtonProductProps> = ({ productId, productName, stock, handleAddToCart }) => {
  const handleClick = () => {
    handleAddToCart(productId, productName);
  };

  return (
    <button
      onClick={handleClick}
      disabled={stock === 0}
      className={`btn productos__card-btn boton${productId} flex items-center justify-center space-x-2 ${
        stock === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'
      } text-white font-bold py-2 px-4 rounded`}
    >
      <span>{stock === 0 ? 'Sin Stock' : 'Agregar'}</span>
      <picture className="productos__card-picture">
        <img className="productos__card-img w-5 h-5" src={iconCart} alt="Carrito de compras" />
      </picture>
    </button>
  );
};

export default ButtonProduct;