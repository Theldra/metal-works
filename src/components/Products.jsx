import React, { useEffect, useState } from 'react';
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
import bvquadImg from "../assets/images/backv.jpeg";
import sbenchImg from "../assets/images/benchside.jpeg";
import burgImg from "../assets/images/burglar.jpeg";
import ftquadImg from "../assets/images/fquad.jpeg";
import fmaizeImg from "../assets/images/frontm.jpeg";
import maizepImg from "../assets/images/maizepl.jpeg";
import smaizeImg from "../assets/images/mside.jpeg";
import sproofImg from "../assets/images/proofside.jpeg";
import { FaCouch, FaDesktop, FaHammer, FaHome, FaPaintBrush, FaPalette, FaTractor, FaTrophy } from 'react-icons/fa';

const Products = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  // Track current image index for each product
  const [currentIndexes, setCurrentIndexes] = useState([]);

  // Modal state for large image view
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');

  // Initialize currentIndexes when products change
  useEffect(() => {
    setCurrentIndexes(products.map(() => 0));
  }, []);

  const products = [
    {
      icon: <FaTrophy className="w-6 h-6" />,
      title: "Metal Sculptures",
      description: "Unique artistic metal sculptures and decorative pieces",
      image: guitarImg
    },
    {
      icon: <FaCouch className="w-6 h-6" />,
      title: "Outdoor Furniture",
      description: "Handcrafted metal-wood fusion bench for elegant outdoor relaxation ",
      images: [furnImg, sbenchImg]
    },
    {
      icon: <FaTractor className="w-6 h-6" />,
      title: "Agricultural Equipment",
      description: "BENTUMA - Innovative quad-cargo cycle for efficient farm produce harvesting and transportation",
      images: [quadBikeImg, ftquadImg, bvquadImg]
    },
    {
      icon: <FaPalette className="w-6 h-6" />,
      title: "Wall Art",
      description: "Metal wall decorations and artistic installations",
      image: sculpImg
    },
    {
      icon: <FaHammer className="w-6 h-6" />,
      title: "Functional Art",
      description: "Artistic yet functional metal creations for everyday use",
      image: chainImg
    },
    {
      icon: <FaPaintBrush className="w-6 h-6" />,
      title: "Architectural Elements",
      description: "Decorative metal elements for architectural applications",
      image: frameImg
    },
    {
    icon: <FaHome className="w-6 h-6" />,
    title: "Modern Furniture",
    description: "Contemporary metal furniture designs for homes and offices",
    image: benchImg
  },
  {
    icon: <FaPalette className="w-6 h-6" />,
    title: "Cultural Artwork",
    description: "African Drummer - A majestic metal-wood sculpture celebrating African heritage, featuring a traditionally adorned woman drummer on a pedestal",
    image: drummerImg
  },
  {
    icon: <FaDesktop className="w-6 h-6" />,
    title: "Study Furniture",
    description: "Compact metal-wood study station featuring integrated lamp, pen holder, and clock for optimal productivity",
    image: studyImg
  },
  {
    icon: <FaTractor className="w-6 h-6" />,
    title: "Maize Planter",
    description: "Efficient and robust equipment designed to simplify and speed up the maize planting process.",
    images: [maizepImg, smaizeImg, fmaizeImg]
  },
  {
    icon: <FaHome className="w-6 h-6" />, 
    title: "Burglarproof Windows",
    description: "Durable and stylish metal burglarproof designs for enhanced window security.",
    images: [burgImg, sproofImg]
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
          {products.map((product, index) => {
            // Determine if product has multiple images
            const images = product.images || (product.image ? [product.image] : []);
            const currentImg = images[currentIndexes[index] || 0];

            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 rounded-t-xl overflow-hidden flex items-center justify-center bg-gray-100">
                  <img
                    src={currentImg}
                    alt={product.title}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 cursor-pointer"
                    style={{
                      backgroundColor: '#f8f9fa',
                      padding: '0.5rem'
                    }}
                    onClick={() => {
                      setModalImg(currentImg);
                      setModalOpen(true);
                    }}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300?text=Product+Image';
                    }}
                  />
                </div>
                {/* Thumbnails for multiple images */}
                {images.length > 1 && (
                  <div className="flex justify-center gap-2 mt-2">
                    {images.map((img, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={img}
                        alt={`Thumbnail ${imgIdx + 1}`}
                        className={`w-8 h-8 object-cover rounded cursor-pointer border-2 ${
                          imgIdx === (currentIndexes[index] || 0)
                            ? "border-cyan-500"
                            : "border-transparent"
                        }`}
                        onClick={() => {
                          setCurrentIndexes(prev => {
                            const newIndexes = [...prev];
                            newIndexes[index] = imgIdx;
                            return newIndexes;
                          });
                        }}
                      />
                    ))}
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-cyan-500 mr-3">
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for large image view */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative">
              <img
                src={modalImg}
                alt="Large view"
                className="max-w-full max-h-[80vh] rounded-lg"
              />
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-2 right-2 bg-white text-black rounded-full px-3 py-1 font-bold"
              >
                &times;
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-12" data-aos="fade-up">
          {/* Custom Order CTA with Call & WhatsApp options */}
          <div className="inline-flex flex-col items-center gap-4">
            <button
              onClick={() => {
                document.getElementById('order-contact-options').classList.toggle('hidden');
              }}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Request an Order
            </button>
            <div
              id="order-contact-options"
              className="hidden mt-2 space-x-4"
            >
              <a
                href="tel:+233541053744"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold transition-all"
              >
                Call 
              </a>
              <a
                href="https://wa.me/233541053744?text=Hello%2C%20I%20would%20like%20to%20request%20a%20custom%20metal%20fabrication%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-semibold transition-all"
              >
                WhatsApp 
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;