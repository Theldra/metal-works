import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { FaCheck, FaShoppingCart, FaStar, FaTimes } from 'react-icons/fa';

const ProductModal = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  if (!isOpen) return null;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              <FaTimes />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Product Details */}
            <div>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                  ))}
                </div>
                <span className="text-gray-600">({product.rating}) Rating</span>
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <FaCheck className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">
                  GH₵{product.price.toLocaleString()}
                </span>
              </div>

              {product.inStock ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity:
                    </label>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center transition-colors"
                  >
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              ) : (
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <p className="text-gray-600 font-medium">Currently in market testing phase</p>
                  <p className="text-sm text-gray-500">Contact us for availability updates</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;