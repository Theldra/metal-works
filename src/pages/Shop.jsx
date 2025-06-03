// pages/Shop.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { FaEye, FaFilter, FaSearch, FaShoppingCart } from 'react-icons/fa';
import ProductModal from '../components/ProductModal';

const Shop = () => {
  const productsList = [
    {
      id: 1,
      name: "Manual Maize Planter",
      price: 850,
      category: "Agriculture",
      image: "/api/placeholder/300/250",
      description: "Efficient manual maize planting machine for smallholder farmers",
      features: ["Precise seed placement", "Adjustable depth", "Durable construction"],
      inStock: true,
      rating: 4.8
    },
    {
      id: 2,
      name: "Cargo Quad-cycle",
      price: 2500,
      category: "Agriculture",
      image: "/api/placeholder/300/250",
      description: "Multipurpose cargo farm bike for transportation and farming",
      features: ["High load capacity", "All-terrain wheels", "Weather resistant"],
      inStock: false,
      rating: 4.9
    },
    {
      id: 3,
      name: "Custom Iron Gate",
      price: 1200,
      category: "Construction",
      image: "/api/placeholder/300/250",
      description: "Security gates with decorative designs",
      features: ["Custom designs", "Galvanized steel", "Powder coating"],
      inStock: true,
      rating: 4.7
    },
    {
      id: 4,
      name: "Steel Balustrade",
      price: 150,
      category: "Construction",
      image: "/api/placeholder/300/250",
      description: "Decorative balustrades for stairs and balconies",
      features: ["Modern designs", "Corrosion resistant", "Easy installation"],
      inStock: true,
      rating: 4.6
    },
    {
      id: 5,
      name: "Farm Tool Rack",
      price: 75,
      category: "Agriculture",
      image: "/api/placeholder/300/250",
      description: "Organized storage for farming tools",
      features: ["Space efficient", "Easy access", "Rust proof"],
      inStock: true,
      rating: 4.5
    },
    {
      id: 6,
      name: "Industrial Conveyor",
      price: 5000,
      category: "Industrial",
      image: "/api/placeholder/300/250",
      description: "Custom conveyor systems for industrial use",
      features: ["Variable speed", "Heavy duty", "Modular design"],
      inStock: true,
      rating: 4.9
    }
  ];

  const generateProducts = () => {
    const categories = ["Agriculture", "Construction", "Industrial"];
    const products = [];
    
    const templates = {
      Agriculture: [
        { name: "Manual Maize Planter", price: 850 },
        { name: "Cargo Quad-cycle", price: 2500 },
        { name: "Farm Tool Rack", price: 75 }
      ],
      Construction: [
        { name: "Custom Iron Gate", price: 1200 },
        { name: "Steel Balustrade", price: 150 }
      ],
      Industrial: [
        { name: "Industrial Conveyor", price: 5000 }
      ]
    };

    let id = 1;
    categories.forEach(category => {
      templates[category].forEach(item => {
        products.push({
          id: id++,
          name: item.name,
          price: item.price,
          category,
          image: `/api/placeholder/300/250`,
          description: `High-quality ${item.name.toLowerCase()} for professional use`,
          features: ["Premium materials", "Expert craftsmanship", "Durable design"],
          inStock: Math.random() > 0.2, // 80% chance of being in stock
          rating: (4 + Math.random()).toFixed(1)
        });
      });
    });

    return products;
  };

  const [products] = useState(generateProducts());
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const { addToCart } = useContext(CartContext);
  const categories = ['All', ...new Set(products.map(product => product.category))];

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setFilteredProducts(
      category === 'All' 
        ? products 
        : products.filter(product => product.category === category)
    );
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
      )
    );
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const ProductCard = ({ product, index }) => (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
              Coming Soon
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400 mr-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                ★
              </span>
            ))}
          </div>
          <span className="text-gray-600 text-sm">({product.rating})</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-blue-600">
            GH₵{product.price.toLocaleString()}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => openProductModal(product)}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium flex items-center justify-center transition-colors"
          >
            <FaEye className="mr-2" /> View Details
          </button>
          {product.inStock && (
            <button
              onClick={() => addToCart(product)}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center transition-colors"
            >
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-4">
            Product Store
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of agricultural machinery and custom metal fabrication products
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8" data-aos="fade-up">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <FaFilter className="text-gray-500" />
              <span className="text-gray-700 font-medium">Filter:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No products found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      {showModal && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Shop;