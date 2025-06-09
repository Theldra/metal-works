import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

import guitarImg from "../assets/images/guitar.jpg";
import furnImg from "../assets/images/furn.jpg";
import sculpImg from "../assets/images/sculpture.jpg";
import chainImg from "../assets/images/sculp.jpg";
import frameImg from "../assets/images/frame.jpg";
import quadBikeImg from "../assets/images/quadb.jpg";
import benchImg from "../assets/images/chcab.jpg";
import drummerImg from "../assets/images/art.jpg"; 
import studyImg from "../assets/images/desk.jpg";
import { FaCouch, FaDesktop, FaHammer, FaHome, FaPaintBrush, FaPalette, FaTractor, FaTrophy } from 'react-icons/fa';

const Products = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const products = [
    {
      icon: <FaTrophy className="w-6 h-6" />,
      title: "Metal Sculptures",
      description: "Unique artistic metal sculptures and decorative pieces",
      status: "Custom Order",
      image: guitarImg
    },
    {
      icon: <FaHome className="w-6 h-6" />,
      title: "Modern Furniture",
      description: "Contemporary metal furniture designs for home and office",
      status: "Available",
      image: furnImg
    },
    {
      icon: <FaTractor className="w-6 h-6" />,
      title: "Agricultural Equipment",
      description: "BENTUMA - Innovative quad-cargo cycle for efficient farm produce harvesting and transportation",
      status: "Made to Order",
      image: quadBikeImg
    },
    {
      icon: <FaPalette className="w-6 h-6" />,
      title: "Wall Art",
      description: "Metal wall decorations and artistic installations",
      status: "Available",
      image: sculpImg
    },
    {
      icon: <FaHammer className="w-6 h-6" />,
      title: "Functional Art",
      description: "Artistic yet functional metal creations for everyday use",
      status: "Custom Order",
      image: chainImg
    },
    {
      icon: <FaPaintBrush className="w-6 h-6" />,
      title: "Architectural Elements",
      description: "Decorative metal elements for architectural applications",
      status: "Available",
      image: frameImg
    },
    {
    icon: <FaCouch className="w-6 h-6" />,
    title: "Outdoor Furniture",
    description: "Handcrafted metal-wood fusion bench for elegant outdoor relaxation",
    status: "Available",
    image: benchImg
  },
  {
    icon: <FaPalette className="w-6 h-6" />,
    title: "Cultural Artwork",
    description: "African Drummer - A majestic metal-wood sculpture celebrating African heritage, featuring a traditionally adorned woman drummer on a pedestal",
    status: "Custom Order",
    image: drummerImg
  },
  {
    icon: <FaDesktop className="w-6 h-6" />,
    title: "Study Furniture",
    description: "Compact metal-wood study station featuring integrated lamp, pen holder, and clock for optimal productivity",
    status: "Made to Order",
    image: studyImg
  }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Innovative <span className="text-cyan-500">Creations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our diverse collection of metal works, where artistry meets functionality. 
            Each piece represents our commitment to innovative design and superior craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48 rounded-t-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundColor: '#f8f9fa',
                    padding: '0.5rem'
                  }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Product+Image';
                    console.error(`Failed to load image for ${product.title}`);
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-cyan-500 mr-3">
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      product.status === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <button 
            onClick={() => window.location.href = '/catalog'}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            View Full Catalog
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;