// import React, { useContext, useState } from 'react';
// import { CartContext } from '../context/CartContext';
// import { FaCreditCard, FaLock, FaMobile, FaMoneyBillWave, FaUser, FaBell, FaEnvelope, FaWhatsapp, FaSms } from 'react-icons/fa';

// // Notification service to handle multiple notification channels
// const NotificationService = {
//   async sendNotifications(orderData) {
//     const notifications = [];
    
//     try {
//       // Email notification to manager
//       notifications.push(this.sendEmailNotification(orderData));
      
//       // WhatsApp notification
//       notifications.push(this.sendWhatsAppNotification(orderData));
      
//       // SMS notification
//       notifications.push(this.sendSMSNotification(orderData));
      
//       // In-app notification
//       notifications.push(this.sendInAppNotification(orderData));
      
//       await Promise.all(notifications);
//       console.log('All notifications sent successfully');
//     } catch (error) {
//       console.error('Error sending notifications:', error);
//     }
//   },

//   async sendEmailNotification(orderData) {
//     // Simulate email API call
//     const emailData = {
//       to: 'manager@restaurant.com',
//       subject: `New Order #${orderData.orderId} - ${orderData.customer.firstName} ${orderData.customer.lastName}`,
//       html: `
//         <h2>New Order Received</h2>
//         <p><strong>Order ID:</strong> ${orderData.orderId}</p>
//         <p><strong>Customer:</strong> ${orderData.customer.firstName} ${orderData.customer.lastName}</p>
//         <p><strong>Email:</strong> ${orderData.customer.email}</p>
//         <p><strong>Phone:</strong> ${orderData.customer.phone}</p>
//         <p><strong>Total Amount:</strong> GH₵${orderData.total.toFixed(2)}</p>
//         <p><strong>Payment Method:</strong> ${orderData.paymentMethod}</p>
//         <p><strong>Delivery Address:</strong> ${orderData.address}</p>
//         <h3>Order Items:</h3>
//         <ul>
//           ${orderData.items.map(item => `<li>${item.name} x ${item.quantity} - GH₵${(item.price * item.quantity).toFixed(2)}</li>`).join('')}
//         </ul>
//       `
//     };
    
//     // Replace with actual email service (SendGrid, Mailgun, etc.)
//     console.log('Email sent to manager:', emailData);
//     return Promise.resolve();
//   },

//   async sendWhatsAppNotification(orderData) {
//     const message = `🍕 NEW ORDER ALERT! 
// Order #${orderData.orderId}
// Customer: ${orderData.customer.firstName} ${orderData.customer.lastName}
// Phone: ${orderData.customer.phone}
// Total: GH₵${orderData.total.toFixed(2)}
// Payment: ${orderData.paymentMethod}
// Address: ${orderData.address}`;

//     // Replace with actual WhatsApp Business API
//     console.log('WhatsApp notification sent:', message);
//     return Promise.resolve();
//   },

//   async sendSMSNotification(orderData) {
//     const message = `New order #${orderData.orderId} from ${orderData.customer.firstName} ${orderData.customer.lastName}. Total: GH₵${orderData.total.toFixed(2)}. Check dashboard for details.`;
    
//     // Replace with actual SMS service (Twilio, etc.)
//     console.log('SMS sent to manager:', message);
//     return Promise.resolve();
//   },

//   async sendInAppNotification(orderData) {
//     // For real implementation, this would update a notifications state/context
//     const notification = {
//       id: Date.now(),
//       type: 'new-order',
//       title: 'New Order Received',
//       message: `Order #${orderData.orderId} from ${orderData.customer.firstName} ${orderData.customer.lastName}`,
//       timestamp: new Date(),
//       read: false
//     };
    
//     console.log('In-app notification created:', notification);
//     return Promise.resolve(notification);
//   }
// };

// // Delivery calculator based on region and order value
// const DeliveryCalculator = {
//   calculateDelivery(region, orderTotal) {
//     const deliveryRates = {
//       'greater-accra': { base: 25, freeDeliveryThreshold: 200 },
//       'ashanti': { base: 35, freeDeliveryThreshold: 250 },
//       'central': { base: 40, freeDeliveryThreshold: 300 },
//       'western': { base: 45, freeDeliveryThreshold: 300 },
//       'eastern': { base: 40, freeDeliveryThreshold: 280 },
//       'volta': { base: 50, freeDeliveryThreshold: 350 },
//       'northern': { base: 60, freeDeliveryThreshold: 400 },
//       'upper-east': { base: 65, freeDeliveryThreshold: 450 },
//       'upper-west': { base: 65, freeDeliveryThreshold: 450 },
//       'brong-ahafo': { base: 45, freeDeliveryThreshold: 320 }
//     };

//     const regionRate = deliveryRates[region] || { base: 50, freeDeliveryThreshold: 300 };
    
//     if (orderTotal >= regionRate.freeDeliveryThreshold) {
//       return { cost: 0, isFree: true, threshold: regionRate.freeDeliveryThreshold };
//     }
    
//     return { cost: regionRate.base, isFree: false, threshold: regionRate.freeDeliveryThreshold };
//   }
// };

// // Tax calculator with flexible rates
// const TaxCalculator = {
//   calculateTax(subtotal, region) {
//     // Different regions might have different tax rates
//     const taxRates = {
//       'greater-accra': 0.125, // 12.5%
//       'ashanti': 0.125,
//       'central': 0.10,
//       'western': 0.10,
//       'eastern': 0.125,
//       'volta': 0.10,
//       'northern': 0.075,
//       'upper-east': 0.075,
//       'upper-west': 0.075,
//       'brong-ahafo': 0.10
//     };

//     const rate = taxRates[region] || 0.125;
//     return {
//       rate: rate,
//       amount: subtotal * rate,
//       percentage: (rate * 100).toFixed(1)
//     };
//   }
// };

// // Custom hook for form logic
// const useCheckoutForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
    
//     // Shipping Address
//     address: '',
//     city: '',
//     region: '',
//     postalCode: '',
    
//     // Payment Method
//     paymentMethod: 'mobile-money',
    
//     // Mobile Money
//     mobileNumber: '',
//     provider: 'mtn',
    
//     // Special Instructions
//     notes: '',
    
//     // User account linking
//     createAccount: false,
//     linkToUserIcon: false
//   });
//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value
//     });
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: ''
//       });
//     }
//   };

//   const validateStep = (step) => {
//     const newErrors = {};

//     if (step === 1) {
//       if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
//       if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
//       if (!formData.email.trim()) newErrors.email = 'Email is required';
//       if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
//     }

//     if (step === 2) {
//       if (!formData.address.trim()) newErrors.address = 'Address is required';
//       if (!formData.city.trim()) newErrors.city = 'City is required';
//       if (!formData.region.trim()) newErrors.region = 'Region is required';
//     }

//     if (step === 3) {
//       if (formData.paymentMethod === 'mobile-money' && !formData.mobileNumber.trim()) {
//         newErrors.mobileNumber = 'Mobile number is required';
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const nextStep = () => {
//     if (validateStep(currentStep)) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const prevStep = () => {
//     setCurrentStep(currentStep - 1);
//   };

//   return {
//     currentStep,
//     setCurrentStep,
//     formData,
//     errors,
//     handleInputChange,
//     validateStep,
//     nextStep,
//     prevStep
//   };
// };

// // Component for the Order Summary section
// const OrderSummary = ({ cartItems, getCartTotal, deliveryInfo, finalTotal }) => (
//   <div className="lg:col-span-1">
//     <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
//       <h3 className="text-xl font-bold mb-4">Order Summary</h3>
      
//       <div className="space-y-3 mb-4">
//         {cartItems.map((item) => (
//           <div key={item.id} className="flex items-center space-x-3">
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-12 h-12 object-cover rounded"
//             />
//             <div className="flex-1">
//               <p className="font-medium text-sm">{item.name}</p>
//               <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
//             </div>
//             <p className="font-semibold">
//               GH₵{(item.price * item.quantity).toLocaleString()}
//             </p>
//           </div>
//         ))}
//       </div>

//       <div className="border-t pt-4 space-y-2">
//         <div className="flex justify-between">
//           <span>Subtotal:</span>
//           <span>GH₵{getCartTotal().toLocaleString()}</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Delivery Fee:</span>
//           <span className={deliveryInfo.isFree ? 'text-green-600 font-medium' : ''}>
//             {deliveryInfo.isFree ? 'FREE' : `GH₵${deliveryInfo.cost}`}
//           </span>
//         </div>
//         {deliveryInfo.isFree && (
//           <p className="text-xs text-green-600">
//             🎉 Free delivery on orders over GH₵{deliveryInfo.threshold}
//           </p>
//         )}
//         <div className="flex justify-between font-bold text-lg border-t pt-2">
//           <span>Total:</span>
//           <span className="text-blue-600">GH₵{finalTotal.toFixed(2)}</span>
//         </div>
//       </div>

//       <div className="mt-4 p-3 bg-blue-50 rounded-lg">
//         <div className="flex items-center text-blue-600">
//           <FaLock className="mr-2" />
//           <span className="text-sm font-medium">Secure Checkout</span>
//         </div>
//         <p className="text-xs text-blue-600 mt-1">
//           Your payment information is encrypted and secure
//         </p>
//       </div>

//       {/* Notification indicators */}
//       <div className="mt-4 p-3 bg-green-50 rounded-lg">
//         <div className="flex items-center text-green-600 mb-2">
//           <FaBell className="mr-2" />
//           <span className="text-sm font-medium">Manager Notifications</span>
//         </div>
//         <div className="grid grid-cols-2 gap-2 text-xs">
//           <div className="flex items-center text-green-600">
//             <FaEnvelope className="mr-1" />
//             <span>Email</span>
//           </div>
//           <div className="flex items-center text-green-600">
//             <FaWhatsapp className="mr-1" />
//             <span>WhatsApp</span>
//           </div>
//           <div className="flex items-center text-green-600">
//             <FaSms className="mr-1" />
//             <span>SMS</span>
//           </div>
//           <div className="flex items-center text-green-600">
//             <FaBell className="mr-1" />
//             <span>In-App</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const GuestCheckout = () => {
//   const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const {
//     currentStep,
//     setCurrentStep,
//     formData,
//     errors,
//     handleInputChange,
//     validateStep,
//     nextStep,
//     prevStep
//   } = useCheckoutForm();

//   const subtotal = getCartTotal();
//   const deliveryInfo = DeliveryCalculator.calculateDelivery(formData.region, subtotal);
//   const finalTotal = subtotal + deliveryInfo.cost;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateStep(currentStep)) return;

//     setIsProcessing(true);

//     try {
//       // Generate order ID
//       const orderId = `ORD-${Date.now()}`;
      
//       // Prepare order data
//       const orderData = {
//         orderId,
//         items: cartItems,
//         customer: {
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           email: formData.email,
//           phone: formData.phone
//         },
//         address: `${formData.address}, ${formData.city}, ${formData.region}`,
//         paymentMethod: formData.paymentMethod,
//         total: finalTotal,
//         subtotal,
//         delivery: deliveryInfo.cost,
//         tax: 0, // Tax is now included in the item prices
//         notes: formData.notes,
//         timestamp: new Date().toISOString()
//       };

//       // Simulate payment processing
//       await new Promise(resolve => setTimeout(resolve, 3000));
      
//       // Send notifications to manager
//       await NotificationService.sendNotifications(orderData);
      
//       // Link to user icon if requested
//       if (formData.linkToUserIcon) {
//         // Store order in localStorage or user context for user icon access
//         const userOrders = JSON.parse(localStorage.getItem('userOrders') || '[]');
//         userOrders.push(orderData);
//         localStorage.setItem('userOrders', JSON.stringify(userOrders));
//       }

//       console.log('Order submitted:', orderData);

//       alert('Order placed successfully! The restaurant manager has been notified via email, WhatsApp, and SMS.');
//       clearCart();
//       setCurrentStep(5); // Success step
//     } catch (error) {
//       alert('Payment failed. Please try again.');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className="pt-24 pb-16 min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>

//           {/* Progress Steps */}
//           <div className="flex justify-center mb-8">
//             <div className="flex items-center space-x-4">
//               {[1, 2, 3, 4].map((step) => (
//                 <div key={step} className="flex items-center">
//                   <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
//                     currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
//                   }`}>
//                     {step}
//                   </div>
//                   {step < 4 && (
//                     <div className={`w-16 h-1 ${
//                       currentStep > step ? 'bg-blue-600' : 'bg-gray-300'
//                     }`} />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Main Form */}
//             <div className="lg:col-span-2">
//               <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6">
//                 {/* Step 1: Contact Information */}
//                 {currentStep === 1 && (
//                   <div>
//                     <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
//                     <div className="grid md:grid-cols-2 gap-4 mb-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           First Name *
//                         </label>
//                         <input
//                           type="text"
//                           name="firstName"
//                           value={formData.firstName}
//                           onChange={handleInputChange}
//                           className={`w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none ${
//                             errors.firstName ? 'border-red-500' : 'border-gray-300'
//                           }`}
//                         />
//                         {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Last Name *
//                         </label>
//                         <input
//                           type="text"
//                           name="lastName"
//                           value={formData.lastName}
//                           onChange={handleInputChange}
//                           className={`w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none ${
//                             errors.lastName ? 'border-red-500' : 'border-gray-300'
//                           }`}
//                         />
//                         {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
//                       </div>
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Email Address *
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         className={`w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none ${
//                           errors.email ? 'border-red-500' : 'border-gray-300'
//                         }`}
//                       />
//                       {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                     </div>
//                     <div className="mb-6">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Phone Number *
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         className={`w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none ${
//                           errors.phone ? 'border-red-500' : 'border-gray-300'
//                         }`}
//                       />
//                       {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//                     </div>

//                     {/* User account linking option */}
//                     <div className="mb-6 p-4 bg-gray-50 rounded-lg">
//                       <label className="flex items-center cursor-pointer mb-2">
//                         <input
//                           type="checkbox"
//                           name="linkToUserIcon"
//                           checked={formData.linkToUserIcon}
//                           onChange={handleInputChange}
//                           className="mr-3"
//                         />
//                         <FaUser className="mr-2 text-blue-600" />
//                         <span className="font-medium">Link this order to user account</span>
//                       </label>
//                       <p className="text-sm text-gray-600 ml-8">
//                         Check this to track your order history via the user icon
//                       </p>
//                     </div>
//                   </div>
//                 )}

//                 {/* Step 2: Shipping Address */}
//                 {currentStep === 2 && (
//                   <div>
//                     <h2 className="text-2xl font-bold mb-6">Delivery Details</h2>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Street Address *
//                       </label>
//                       <input
//                         type="text"
//                         name="address"
//                         value={formData.address}
//                         onChange={handleInputChange}
//                         className={`w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none ${
//                           errors.address ? 'border-red-500' : 'border-gray-300'
//                         }`}
//                       />
//                       {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
//                     </div>
//                     <div className="grid md:grid-cols-2 gap-4 mb-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           City *
//                         </label>
//                         <input
//                           type="text"
//                           name="city"
//                           value={formData.city}
//                           onChange={handleInputChange}
//                           className={`w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none ${
//                             errors.city ? 'border-red-500' : 'border-gray-300'
//                           }`}
//                         />
//                         {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Region *
//                         </label>
//                         <select
//                           name="region"
//                           value={formData.region}
//                           onChange={handleInputChange}
//                           className={`w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none ${
//                             errors.region ? 'border-red-500' : 'border-gray-300'
//                           }`}
//                         >
//                           <option value="">Select Region</option>
//                           <option value="greater-accra">Greater Accra</option>
//                           <option value="ashanti">Ashanti</option>
//                           <option value="central">Central</option>
//                           <option value="western">Western</option>
//                           <option value="eastern">Eastern</option>
//                           <option value="volta">Volta</option>
//                           <option value="northern">Northern</option>
//                           <option value="upper-east">Upper East</option>
//                           <option value="upper-west">Upper West</option>
//                           <option value="brong-ahafo">Brong Ahafo</option>
//                         </select>
//                         {errors.region && <p className="text-red-500 text-sm mt-1">{errors.region}</p>}
//                       </div>
//                     </div>
//                     <div className="mb-6">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Postal Code
//                       </label>
//                       <input
//                         type="text"
//                         name="postalCode"
//                         value={formData.postalCode}
//                         onChange={handleInputChange}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//                       />
//                     </div>

//                     {/* Delivery cost preview */}
//                     {formData.region && (
//                       <div className="p-4 bg-blue-50 rounded-lg">
//                         <h4 className="font-medium text-blue-800 mb-2">Delivery Information</h4>
//                         <p className="text-sm text-blue-700">
//                           {deliveryInfo.isFree ? (
//                             <>🎉 Free delivery to {formData.region}!</>
//                           ) : (
//                             <>Delivery fee to {formData.region}: GH₵{deliveryInfo.cost}</>
//                           )}
//                         </p>
//                         {!deliveryInfo.isFree && (
//                           <p className="text-xs text-blue-600 mt-1">
//                             Add GH₵{(deliveryInfo.threshold - subtotal).toFixed(2)} more for free delivery
//                           </p>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {/* Step 3: Payment Method */}
//                 {currentStep === 3 && (
//                   <div>
//                     <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
//                     <div className="space-y-4 mb-6">
//                       <div className="border rounded-lg p-4">
//                         <label className="flex items-center cursor-pointer">
//                           <input
//                             type="radio"
//                             name="paymentMethod"
//                             value="mobile-money"
//                             checked={formData.paymentMethod === 'mobile-money'}
//                             onChange={handleInputChange}
//                             className="mr-3"
//                           />
//                           <FaMobile className="mr-2 text-blue-600" />
//                           <span className="font-medium">Mobile Money</span>
//                         </label>
//                         {formData.paymentMethod === 'mobile-money' && (
//                           <div className="mt-4 space-y-3">
//                             <div>
//                               <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Provider
//                               </label>
//                               <select
//                                 name="provider"
//                                 value={formData.provider}
//                                 onChange={handleInputChange}
//                                 className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//                               >
//                                 <option value="mtn">MTN Mobile Money</option>
//                                 <option value="vodafone">Vodafone Cash</option>
//                                 <option value="airteltigo">AirtelTigo Money</option>
//                               </select>
//                             </div>
//                             <div>
//                               <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Mobile Number *
//                               </label>
//                               <input
//                                 type="tel"
//                                 name="mobileNumber"
//                                 value={formData.mobileNumber}
//                                 onChange={handleInputChange}
//                                 placeholder="0XX XXX XXXX"
//                                 className={`w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none ${
//                                   errors.mobileNumber ? 'border-red-500' : 'border-gray-300'
//                                 }`}
//                               />
//                               {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>}
//                             </div>
//                           </div>
//                         )}
//                       </div>

//                       <div className="border rounded-lg p-4">
//                         <label className="flex items-center cursor-pointer">
//                           <input
//                             type="radio"
//                             name="paymentMethod"
//                             value="bank-transfer"
//                             checked={formData.paymentMethod === 'bank-transfer'}
//                             onChange={handleInputChange}
//                             className="mr-3"
//                           />
//                           <FaCreditCard className="mr-2 text-blue-600" />
//                           <span className="font-medium">Bank Transfer</span>
//                         </label>
//                       </div>

//                       <div className="border rounded-lg p-4">
//                         <label className="flex items-center cursor-pointer">
//                           <input
//                             type="radio"
//                             name="paymentMethod"
//                             value="cash-on-delivery"
//                             checked={formData.paymentMethod === 'cash-on-delivery'}
//                             onChange={handleInputChange}
//                             className="mr-3"
//                           />
//                           <FaMoneyBillWave className="mr-2 text-blue-600" />
//                           <span className="font-medium">Cash on Delivery</span>
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Step 4: Review & Confirm */}
//                 {currentStep === 4 && (
//                   <div>
//                     <h2 className="text-2xl font-bold mb-6">Review Your Order</h2>
                    
//                     <div className="space-y-6">
//                       {/* Contact Info Review */}
//                       <div className="border-b pb-4">
//                         <h3 className="font-semibold mb-2">Contact Information</h3>
//                         <p>{formData.firstName} {formData.lastName}</p>
//                         <p>{formData.email}</p>
//                         <p>{formData.phone}</p>
//                         {formData.linkToUserIcon && (
//                           <p className="text-sm text-blue-600 mt-1">
//                             ✓ Order will be linked to user account
//                           </p>
//                         )}
//                       </div>

//                       {/* Shipping Address Review */}
//                       <div className="border-b pb-4">
//                         <h3 className="font-semibold mb-2">Shipping Address</h3>
//                         <p>{formData.address}</p>
//                         <p>{formData.city}, {formData.region}</p>
//                         {formData.postalCode && <p>{formData.postalCode}</p>}
//                       </div>

//                       {/* Payment Method Review */}
//                       <div className="border-b pb-4">
//                         <h3 className="font-semibold mb-2">Payment Method</h3>
//                         <p>
//                           {formData.paymentMethod === 'mobile-money' && 'Mobile Money'}
//                           {formData.paymentMethod === 'bank-transfer' && 'Bank Transfer'}
//                           {formData.paymentMethod === 'cash-on-delivery' && 'Cash on Delivery'}
//                         </p>
//                         {formData.paymentMethod === 'mobile-money' && (
//                           <p className="text-sm text-gray-600">{formData.provider.toUpperCase()} - {formData.mobileNumber}</p>
//                         )}
//                       </div>

//                       {/* Manager Notification Info */}
//                       <div className="border-b pb-4">
//                         <h3 className="font-semibold mb-2">Manager Notifications</h3>
//                         <p className="text-sm text-gray-600 mb-2">
//                           The manager will be notified instantly via:
//                         </p>
//                         <div className="grid grid-cols-2 gap-2 text-sm">
//                           <div className="flex items-center text-green-600">
//                             <FaEnvelope className="mr-2" />
//                             <span>Email notification</span>
//                           </div>
//                           <div className="flex items-center text-green-600">
//                             <FaWhatsapp className="mr-2" />
//                             <span>WhatsApp message</span>
//                           </div>
//                           <div className="flex items-center text-green-600">
//                             <FaSms className="mr-2" />
//                             <span>SMS alert</span>
//                           </div>
//                           <div className="flex items-center text-green-600">
//                             <FaBell className="mr-2" />
//                             <span>Dashboard notification</span>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Special Instructions */}
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Special Instructions (Optional)
//                         </label>
//                         <textarea
//                           name="notes"
//                           value={formData.notes}
//                           onChange={handleInputChange}
//                           rows="3"
//                           className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
//                           placeholder="Any special delivery instructions..."
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Success Step */}
//                 {currentStep === 5 && (
//                   <div className="text-center py-8">
//                     <div className="mb-6">
//                       <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                         <FaLock className="text-green-600 text-2xl" />
//                       </div>
//                       <h2 className="text-2xl font-bold text-green-600 mb-2">Order Confirmed!</h2>
//                       <p className="text-gray-600 mb-4">
//                         Thank you for your order. Our team will process it shortly.
//                       </p>
//                       <div className="grid grid-cols-2 gap-4 max-w-md mx-auto text-sm">
//                         <div className="flex items-center justify-center text-green-600">
//                           <FaEnvelope className="mr-2" />
//                           <span>Email sent ✓</span>
//                         </div>
//                         <div className="flex items-center justify-center text-green-600">
//                           <FaWhatsapp className="mr-2" />
//                           <span>WhatsApp sent ✓</span>
//                         </div>
//                         <div className="flex items-center justify-center text-green-600">
//                           <FaSms className="mr-2" />
//                           <span>SMS sent ✓</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Navigation Buttons */}
//                 {currentStep < 5 && (
//                   <div className="flex justify-between pt-6">
//                     {currentStep > 1 && (
//                       <button
//                         type="button"
//                         onClick={prevStep}
//                         className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors"
//                       >
//                         Previous
//                       </button>
//                     )}
                    
//                     {currentStep < 4 ? (
//                       <button
//                         type="button"
//                         onClick={nextStep}
//                         className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors ml-auto"
//                       >
//                         Next
//                       </button>
//                     ) : (
//                       <button
//                         type="submit"
//                         disabled={isProcessing}
//                         className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
//                       >
//                         {isProcessing ? 'Processing...' : 'Place Order'}
//                       </button>
//                     )}
//                   </div>
//                 )}
//               </form>
//             </div>

//             <OrderSummary 
//               cartItems={cartItems}
//               getCartTotal={getCartTotal}
//               deliveryInfo={deliveryInfo}
//               finalTotal={finalTotal}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GuestCheckout;