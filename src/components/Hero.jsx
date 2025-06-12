import React, { useState, useEffect } from 'react';
import { FaAd, FaBookOpen, FaDoorOpen, FaIndustry, FaShoppingCart, FaTractor } from 'react-icons/fa';
import weldingImage from '../assets/images/welding.jpg';
import weldiImg from "../assets/images/rweld.jpeg";
import weldImg from "../assets/images/weld.jpeg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const backgroundImages = [
    weldingImage,
    weldiImg,
    weldImg
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const services = [
    { icon: <FaDoorOpen />, text: 'Security Doors & Gates' },
    { icon: <FaIndustry />, text: 'Balustrades & Railings' },
    { icon: <FaAd />, text: 'Billboards & Signage' },
    { icon: <FaTractor />, text: 'Agricultural Implements' },
  ];

  return (
    <section className="relative min-h-screen bg-[#29629b] text-white overflow-hidden">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImage === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Metal welding background ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Optional: Image Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentImage === index ? 'bg-cyan-300 w-4' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl backdrop-blur-sm bg-black/30 p-8 rounded-lg" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Excellence in <span className="text-cyan-300">Metal Fabrication</span>
          </h1>
          <p className="text-base md:text-lg mb-8">
            From agricultural machinery to custom metal works - delivering quality craftsmanship for all your fabrication needs
          </p>
          
          {/* Two CTAs side by side */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary CTA - View Catalog */}
            <button 
              className="group flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              onClick={() => window.location.href = '/products'}
            >
              View Catalog
              <FaBookOpen className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            
            {/* Secondary CTA - Store */}
            <button 
              className="group flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              onClick={() => window.location.href = '/shop'}
            >
              Visit Store
              <FaShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8" data-aos="fade-up" data-aos-delay="200">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black/40 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-black/50 transition-all cursor-pointer"
            >
              <div className="text-3xl mb-3 flex justify-center text-cyan-300">
                {service.icon}
              </div>
              <p className="font-semibold">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;