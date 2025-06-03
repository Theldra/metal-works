import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-16 bg-[#1e446d] text-white">
      <div className="container mx-auto px-4 text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Updated with Our Latest Innovations
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for updates on new agricultural machinery, 
          training programs, and industry insights.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
          <div className="flex-1 relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-cyan-500 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;