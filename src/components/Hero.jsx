import React from 'react';
import { FaAd, FaBookOpen, FaDoorOpen, FaIndustry, FaShoppingCart, FaTractor } from 'react-icons/fa';
import weldingImage from '../assets/images/welding.jpg';

const Hero = () => {
  const services = [
    { icon: <FaDoorOpen />, text: 'Security Doors & Gates' },
    { icon: <FaIndustry />, text: 'Balustrades & Railings' },
    { icon: <FaAd />, text: 'Billboards & Signage' },
    { icon: <FaTractor />, text: 'Agricultural Implements' },
  ];

  return (
    <section className="relative min-h-screen bg-[#29629b] text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={weldingImage}
          alt="Metal welding background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div> {/* Increased overlay opacity for better text readability */}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl p-8" data-aos="fade-up"> {/* Removed backdrop-blur-sm and bg-black/30 */}
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