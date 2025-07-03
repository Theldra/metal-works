import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaLinkedin,
  FaInstagram 
} from 'react-icons/fa';

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
              {/* Phone/WhatsApp section */}
              <div className="flex items-start">
                <div className="bg-cyan-500 p-4 rounded-full mr-6">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Phone/WhatsApp</h4>
                  <div className="space-y-2">
                    <a 
                      href="tel:+233541053744" 
                      className="text-cyan-200 hover:text-cyan-300 flex items-center"
                    >
                      <FaPhoneAlt className="mr-2 text-sm" />
                      +233 54 105 3744
                    </a>
                    <a 
                      href="https://wa.me/233541053744" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-200 hover:text-cyan-300 flex items-center"
                    >
                      <FaWhatsapp className="mr-2" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Email section */}
              <div className="flex items-center">
                <div className="bg-cyan-500 p-4 rounded-full mr-6">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Email</h4>
                  <a 
                    href="mailto:fabritech23@gmail.com" 
                    className="text-cyan-200 hover:text-cyan-300"
                  >
                    fabritech23@gmail.com
                  </a>
                </div>
              </div>

              {/* Location section */}
              <div className="flex items-center">
                <div className="bg-cyan-500 p-4 rounded-full mr-6">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Location</h4>
                  <p className="text-cyan-200">Parkoso Opp. Parkoso Comm. SHS, Kumasi</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/rita-asimpah-3a6302276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 p-4 rounded-full hover:bg-cyan-600 transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a 
                  href="https://www.instagram.com/fabritechgh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 p-4 rounded-full hover:bg-cyan-600 transition-colors"
                >
                  <FaInstagram className="text-xl" />
                </a>
              </div>
            </div>

            {/* Updated Business Hours container */}
            <div className="mt-12 p-6 bg-[#1e446d] rounded-xl">
              <h4 className="text-xl font-semibold mb-4 text-white">Business Hours</h4>
              <div className="space-y-2 text-white">
                <p>Monday - Friday: 8:30 AM - 5:30 PM</p>
                <p className="text-cyan-200">Weekends: Closed</p>
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