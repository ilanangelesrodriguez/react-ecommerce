import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    description: string;
}

const Products = ({ products }: { products: Product[] }) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        console.log('Producto agregado:', product); // Verificar si se llama a la función
        setCart(prevItems => [...prevItems, product]);
    };

    return (
        <div>
            <h1>Productos</h1>
            <div className="grid grid-cols-3 gap-4">
                {products && products.length > 0 ? (
                    products.map((product: Product) => (
                        <div key={product.id} className="border p-4">
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <button
                                onClick={() => addToCart(product)}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Agregar al Carrito
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default Products;