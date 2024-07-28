import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contacto from './components/Contacto';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { Product } from './models/Product';

function App() {

  const [cart, setCart] = useState<Product[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <Header cart={cart} emptyCart={emptyCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos" element={<Products addToCart={addToCart} />} />
        <Route path="/nosotros" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;