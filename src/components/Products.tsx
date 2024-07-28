import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import ProductService from "../services/ProductoService";

const Products = ({ addToCart }: { addToCart: (product: Product) => void }) => {
    const [productList, setProductList] = useState<Product[]>([]);
    const productService = new ProductService();

    useEffect(() => {
        const fetchProducts = async () => {
        const products = await productService.getAllProducts();
        setProductList(products);
        };

        fetchProducts();
    }, []);

    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-grayfont-bold mb-8 text-center">Productos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {productList.map(product => (
                <div key={product.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                    <h2 className="text-black font-semibold mb-4">{product.name}</h2>
                    <p className="text-gray-700 mb-6">{product.description}</p>
                    <span className="text-black font-bold mb-4">S/.{product.price}</span>
                    <button 
                    onClick={() => addToCart(product)}
                    className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
                    >
                    Agregar al carrito
                    </button>
                </div>
                ))}
            </div>
        </div>

    );
};

export default Products;