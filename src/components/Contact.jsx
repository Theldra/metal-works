// components/Contact.jsx
import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="py-20 bg-[#29629b] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-4xl font-bold mb-6">
            Get In <span className="text-cyan-300">Touch</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ready to transform your farming operations? Contact us today to discuss 
            your agricultural machinery needs or custom fabrication projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-cyan-500 p-4 rounded-full mr-6">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Phone</h4>
                  <p className="text-cyan-200">+233 54 105 3744</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-cyan-500 p-4 rounded-full mr-6">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Location</h4>
                  <p className="text-cyan-200">Ayigya, Kumasi, Ghana</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-cyan-500 p-4 rounded-full mr-6">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Founder</h4>
                  <p className="text-cyan-200">Rita Ohenewaa Asimpah</p>
                </div>
              </div>
            </div>

            {/* Update Business Hours container */}
            <div className="mt-12 p-6 bg-[#1e446d] rounded-xl">
              <h4 className="text-xl font-semibold mb-4 text-white">Business Hours</h4>
              <div className="space-y-2 text-white">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            {/* Update Form container and inputs */}
            <form onSubmit={handleSubmit} className="bg-[#1e446d] p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg bg-[#29629b] placeholder-white/80 text-white border border-transparent focus:border-cyan-300 focus:outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg bg-[#29629b] placeholder-white/80 text-white border border-transparent focus:border-cyan-300 focus:outline-none"
                  required
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-[#29629b] placeholder-white/80 text-white border border-transparent focus:border-cyan-300 focus:outline-none mb-4"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-4 rounded-lg bg-[#29629b] placeholder-white/80 text-white border border-transparent focus:border-cyan-300 focus:outline-none mb-6"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center transition-all transform hover:scale-105"
              >
                Send Message <FaPaperPlane className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;