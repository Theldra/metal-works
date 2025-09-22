import './App.css'
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aos from 'aos';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Blog from './components/Blog';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Gallery from './pages/Gallery';
import Training from './components/Training';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    // <CartProvider>
      <BrowserRouter>
        <div className="App relative overflow-x-hidden w-full">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/training" element={<Training/>} />
          </Routes>
          <Footer />
          {/* <ShoppingCart /> */}
        </div>
      </BrowserRouter>
    // {/* </CartProvider> */}
  );
}

export default App;
