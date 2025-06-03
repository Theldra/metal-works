import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';

import Aos from 'aos';
import { FaBicycle, FaChair, FaColumns, FaDoorOpen, FaIndustry, FaSeedling, FaTools, FaTractor, FaWarehouse } from 'react-icons/fa';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'agriculture', name: 'Agricultural' },
    { id: 'furniture', name: 'Furniture' },
    { id: 'security', name: 'Security' },
    { id: 'construction', name: 'Construction' },
    { id: 'industrial', name: 'Industrial' }
  ];

  const products = [
    // Agricultural Products
    {
      icon: <FaTractor />,
      title: "Maize Planter",
      description: "Manual maize planting machine for efficient seed placement",
      status: "Available",
      category: "agriculture",
      image: "/images/maize-planter.jpg"
    },
    {
      icon: <FaBicycle />,
      title: "Cargo Quad-cycle",
      description: "Multipurpose cargo farm bike for transportation",
      status: "Market Testing",
      category: "agriculture",
      image: "/images/cargo-bike.jpg"
    },
    {
      icon: <FaSeedling />,
      title: "Fertilizer Spreader",
      description: "Mechanical fertilizer spreading equipment",
      status: "Available",
      category: "agriculture",
      image: "/images/spreader.jpg"
    },
    // Furniture Products
    {
      icon: <FaChair />,
      title: "Metal Dining Set",
      description: "Modern metal dining table and chairs set",
      status: "Available",
      category: "furniture",
      image: "/images/dining-set.jpg"
    },
    {
      icon: <FaChair />,
      title: "Garden Furniture",
      description: "Outdoor metal furniture for gardens and patios",
      status: "Available",
      category: "furniture",
      image: "/images/garden-furniture.jpg"
    },
    // Security Products
    {
      icon: <FaDoorOpen />,
      title: "Security Gates",
      description: "Heavy-duty security gates with advanced locking",
      status: "Available",
      category: "security",
      image: "/images/security-gates.jpg"
    },
    {
      icon: <FaDoorOpen />,
      title: "Burglar Proofing",
      description: "Window and door security installations",
      status: "Available",
      category: "security",
      image: "/images/burglar-proof.jpg"
    },
    // Construction Products
    {
      icon: <FaColumns />,
      title: "Balustrades",
      description: "Decorative balustrades for stairs and balconies",
      status: "Available",
      category: "construction",
      image: "/images/balustrades.jpg"
    },
    {
      icon: <FaWarehouse />,
      title: "Steel Structures",
      description: "Custom steel structures for buildings",
      status: "Available",
      category: "construction",
      image: "/images/steel-structures.jpg"
    },
    // Industrial Products
    {
      icon: <FaIndustry />,
      title: "Industrial Equipment",
      description: "Custom industrial machinery fabrication",
      status: "Available",
      category: "industrial",
      image: "/images/industrial.jpg"
    },
    {
      icon: <FaTools />,
      title: "Machine Parts",
      description: "Replacement parts for industrial machines",
      status: "Available",
      category: "industrial",
      image: "/images/machine-parts.jpg"
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-6">
            Our <span className="text-cyan-300">Products </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From agricultural machinery to custom metal works, we deliver quality fabrication 
            solutions tailored to your specific needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="100">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all
                  ${activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
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
                  className="w-full h-full object-cover"
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4" data-aos="fade-right" data-aos-delay={index * 200}>
                  <div className="text-3xl text-blue-600 mr-3">
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      product.status === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600" data-aos="fade-up" data-aos-delay={index * 250}>
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;