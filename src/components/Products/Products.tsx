import { useEffect, useState } from "react";
import { Product } from "../../models/Product";
import ProductService from "../../services/ProductoService";
import ButtonProduct from "./ButtonProducts";

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

    const handleAddToCart = (productId: number) => {
        const product = productList.find(p => p.id === productId);
        if (product && product.stock > 0) {
          addToCart(product);
          setProductList(prevProductList =>
            prevProductList.map(p =>
              p.id === productId ? { ...p, stock: p.stock - 1 } : p
            )
          );
        }
      };


    return (
        <div className="flex flex-col items-center p-4 mt-20">
            <h1 className="text-gray-800 font-bold mb-8 text-center text-3xl">Productos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {productList.map(product => (
                    <div key={product.id} className="bg-blue-50 shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105">
                        <h2 className="text-black font-semibold mb-4 text-xl">{product.name}</h2>
                        <img src={product.image} alt={product.name} className="w-48 h-48 object-cover rounded-full mb-4" />
                        <p className="text-gray-700 mb-6">{product.description}</p>
                        <span className="text-black font-bold mb-4 text-lg">S/.{product.price}</span>
                        <ButtonProduct
                            productId={product.id}
                            productName={product.name}
                            stock={product.stock}
                            handleAddToCart={handleAddToCart}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;