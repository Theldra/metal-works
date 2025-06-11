import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaArrowUp, FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { useScrollToTop } from '../hooks/useScrollToTop';
import logo from '../assets/images/fab-logo.jpg'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartItemsCount, setIsCartOpen } = useContext(CartContext);
  const scrollToTop = useScrollToTop();

  return (
    <>
      <header className="bg-[#29629b] text-white shadow-lg fixed w-full z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Fabri-Tech Logo" 
                className="h-10 w-auto" 
              />
              <span className="text-xl font-bold">
                Fabri-Tech Impressions
              </span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-blue-300 transition-colors">About</Link>
              <Link to="/products" className="hover:text-blue-300 transition-colors">Products</Link>
              <Link to="/shop" className="hover:text-blue-300 transition-colors">Shop</Link>
              <Link to="/blog" className="hover:text-blue-300 transition-colors">Blog</Link>
              <Link to="/contact" className="hover:text-blue-300 transition-colors">Contact</Link>
            </nav>

            <div className="hidden md:flex items-center">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative text-xl cursor-pointer hover:text-blue-300"
              >
                <FaShoppingCart />
                {getCartItemsCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartItemsCount()}
                  </span>
                )}
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {isOpen && (
            <nav className="md:hidden mt-4 space-y-2">
              <Link to="/" className="block py-2 hover:text-blue-300">Home</Link>
              <a href="#about" className="block py-2 hover:text-blue-300">About</a>
              <a href="#products" className="block py-2 hover:text-blue-300">Products</a>
              <Link to="/shop" className="block py-2 hover:text-blue-300">Shop</Link>
              <a href="#contact" className="block py-2 hover:text-blue-300">Contact</a>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="block py-2 hover:text-blue-300 text-left"
              >
                Cart ({getCartItemsCount()})
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Scroll to Top Button */}
      <button
        id="scroll-to-top"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-110 hidden z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default Header;