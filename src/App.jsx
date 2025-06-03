import './App.css'
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import './index.css';
import { CartProvider } from './context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aos from 'aos';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import GuestCheckout from './components/GuestCheckout';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<GuestCheckout />} />
          </Routes>
          <Footer />
          <ShoppingCart />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
