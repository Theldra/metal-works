import React from 'react';
import { FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1e446d] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Fabri-Tech Impressions</h3>
            <p className="text-gray-100 mb-4">
              Transforming industries through innovative metal fabrication solutions 
              across Ghana.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/rita-asimpah-3a6302276"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="https://www.instagram.com/fabritechgh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-100">
              <li><a href="#about" className="hover:text-cyan-300 transition-colors">About</a></li>
              <li><a href="#products" className="hover:text-cyan-300 transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a></li>
              {/* <li><a href="/shop" className="hover:text-cyan-300 transition-colors">Shop</a></li> */}
              <li><a href="/blog" className="hover:text-cyan-300 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-100">
              <li>Agricultural Machinery</li>
              <li>Metal Fabrication</li>
              <li>CNC Cutting</li>
              <li>Custom Designs</li>
              <li>Training Programs</li>

            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-100">
              <div className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <a 
                  href="tel:+233541053744"
                  className="hover:text-cyan-300 transition-colors"
                >
                  +233 54 105 3744
                </a>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>Parkoso Opp. Parkoso Comm. SHS,Kumasi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-100">
          <p>&copy; 2025 Fabri-Tech Impressions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;