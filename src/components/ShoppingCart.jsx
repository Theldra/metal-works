// // components/ShoppingCart.jsx
// import React, { useContext } from 'react';
// import { CartContext } from '../context/CartContext';
// import { useNavigate } from 'react-router-dom';
// import { FaMinus, FaPlus, FaTimes, FaTrash } from 'react-icons/fa';

// const ShoppingCart = () => {
//   const {
//     cartItems,
//     removeFromCart,
//     updateQuantity,
//     clearCart,
//     getCartTotal,
//     isCartOpen,
//     setIsCartOpen
//   } = useContext(CartContext);

//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     setIsCartOpen(false);
//     navigate('/checkout');
//   };

//   if (!isCartOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
//       <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
//         <div className="flex flex-col h-full">
//           {/* Header */}
//           <div className="flex items-center justify-between p-4 border-b">
//             <h2 className="text-xl font-bold">Shopping Cart</h2>
//             <button
//               onClick={() => setIsCartOpen(false)}
//               className="text-gray-500 hover:text-gray-700"
//             >
//               <FaTimes className="text-xl" />
//             </button>
//           </div>

//           {/* Cart Items */}
//           <div className="flex-1 overflow-y-auto p-4">
//             {cartItems.length === 0 ? (
//               <div className="text-center py-8">
//                 <p className="text-gray-500 mb-4">Your cart is empty</p>
//                 <button
//                   onClick={() => {
//                     setIsCartOpen(false);
//                     navigate('/shop');
//                   }}
//                   className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   Continue Shopping
//                 </button>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="border rounded-lg p-4">
//                     <div className="flex items-center space-x-4">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-16 h-16 object-cover rounded"
//                       />
//                       <div className="flex-1">
//                         <h3 className="font-medium text-gray-800">{item.name}</h3>
//                         <p className="text-blue-600 font-semibold">
//                           GH₵{item.price.toLocaleString()}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-center justify-between mt-4">
//                       <div className="flex items-center space-x-2">
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                           className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
//                         >
//                           <FaMinus className="text-xs" />
//                         </button>
//                         <span className="w-8 text-center">{item.quantity}</span>
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
//                         >
//                           <FaPlus className="text-xs" />
//                         </button>
//                       </div>

//                       <button
//                         onClick={() => removeFromCart(item.id)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         <FaTrash />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Footer */}
//           {cartItems.length > 0 && (
//             <div className="border-t p-4 space-y-4">
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-semibold">Total:</span>
//                 <span className="text-xl font-bold text-blue-600">
//                   GH₵{getCartTotal().toLocaleString()}
//                 </span>
//               </div>

//               <div className="space-y-2">
//                 <button
//                   onClick={handleCheckout}
//                   className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//                 >
//                   Proceed to Checkout
//                 </button>
//                 <button
//                   onClick={clearCart}
//                   className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors"
//                 >
//                   Clear Cart
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;