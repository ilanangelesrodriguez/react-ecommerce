import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Contacto from './components/Contacto';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products';
import Footer from './components/Footer';
import { Product } from './model/Product';

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

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

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route
          path="/productos"
          element={<Products products={cartItems} />}
        />
        <Route path="/nosotros" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;