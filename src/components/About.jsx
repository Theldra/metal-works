import React from 'react';
import { FaHeart, FaLeaf, FaTools, FaUsers, FaEye, FaFlag, FaStar } from 'react-icons/fa';
import ceo from '../assets/images/ritt.jpg'; 
import workshop1 from '../assets/images/atshop.jpg';
import workshop2 from '../assets/images/melt.jpg';
import workshop3 from '../assets/images/btyre.jpg';
import workshop4 from '../assets/images/bproc.jpg';
import motivationalImg from '../assets/images/motivate.jpeg';

const About = () => {
  const features = [
    {
      icon: <FaUsers />,
      title: "Female-Owned Enterprise",
      description: "Empowering women through metal fabrication training and entrepreneurship"
    },
    {
      icon: <FaLeaf />,
      title: "Sustainable Materials",
      description: "Using local and eco-friendly materials to support farming processes"
    },
    {
      icon: <FaTools />,
      title: "Expert Fabrication",
      description: "Specialized in agricultural machinery, automotive works, and industrial solutions"
    },
    {
      icon: <FaHeart />,
      title: "Community Impact",
      description: "Enhancing lives of smallholder farmers through innovative solutions"
    }
  ];

  const workshopImages = [
    {
      src: workshop1,
      alt: "Welding Process",
      caption: "Precision welding for agricultural machinery"
    },
    {
      src: workshop2,
      alt: "Metal Fabrication",
      caption: "Custom metal work fabrication"
    },
    {
      src: workshop3,
      alt: "Quality Inspection",
      caption: "Ensuring quality standards"
    },
    {
      src: workshop4,
      alt: "Final Assembly",
      caption: "Assembling farm equipment"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-4xl font-bold text-cyan-300 mb-6">
            About 
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Fabri-Tech Impressions, we blend creativity, precision,
            and technology to deliver exceptional metal fabrication services
            tailored to your unique needs. Our team is passionate about turning
            your ideas into reality—whether it’s a one-of-a-kind custom project
            or large-scale industrial solutions. We pride ourselves on our 
            attention to detail, commitment to quality, and dedication to 
            customer satisfaction. By embracing innovation and continuous 
            improvement, we ensure that every product we create not only 
            meets but exceeds expectations. Partner with us and experience 
            the difference that expert craftsmanship and a customer-focused 
            approach can make for your next project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-cyan-700 rounded-2xl p-8 md:p-12 text-white" data-aos="fade-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Innovation Story</h3>
              <p className="text-lg opacity-90 mb-6">
                Recognizing the need for innovative solutions in Ghana's metal fabrication industry, our founder Rita embarked on a journey through apprenticeship and skill development. Driven by a passion for solving real-world challenges, Fabri-Tech Impressions was born to bridge gaps across various sectors through advanced metal works.
              </p>
              <p className="text-lg opacity-90">
                Today, we specialize in creating custom machinery, structural components, and diverse metal fabrication projects that enhance efficiency and productivity for clients in multiple industries.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white">
                <img
                  src={ceo} 
                  alt="Rita Ohenewaa Asimpah - Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg font-semibold">Rita Ohenewaa Asimpah</p>
              <p className="opacity-80">Founder & CEO</p>
            </div>
          </div>
        </div>

        <div className="my-16" data-aos="fade-up">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-t from-black/80 via-black/40 to-transparent p-0 md:p-0">
            <div className="flex flex-col md:flex-row items-center md:items-stretch">
              {/* Image on the left, reduced size */}
              <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center items-center bg-black/60">
                <img
                  src={motivationalImg}
                  alt="Rita Ohenewaa Asimpah - Motivational"
                  className="object-cover rounded-l-2xl w-full h-64 md:h-full max-h-80"
                />
              </div>
              {/* Text on the right */}
              <div className="flex-1 flex flex-col justify-center p-8">
                <blockquote className="text-2xl md:text-3xl font-medium italic mb-4 text-white">
                  "Empowering women in metal fabrication, one innovation at a time"
                </blockquote>
                <p className="text-cyan-300 font-semibold">
                  - Rita Ohenewaa Asimpah
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Our Workshop <span className="text-cyan-300">in Action</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workshopImages.map((image, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg h-72"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Workshop+Image';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h4 className="text-white font-semibold mb-1">{image.alt}</h4>
                    <p className="text-white/90 text-sm">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View Gallery Button */}
          <div className="text-center mt-10">
            <a
              href="/gallery"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold shadow transition-all"
            >
              View Gallery
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mt-16" data-aos="fade-up">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision Section */}
            <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-cyan-500 mr-2">
                  <FaEye className="w-6 h-6" />
                </span>
                Vision
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  To provide outstanding works to make a difference in the market environment
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Inculcate diverse cultures into contemporary art to have a blend with science and technology in the Agricultural, creative and industrial sector
                </li>
              </ul>
            </div>

            {/* Goals Section */}
            <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-cyan-500 mr-2">
                  <FaFlag className="w-6 h-6" />
                </span>
                Goals
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Producing works in their tip-top conditions to satisfy customers
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Produce works by first considering the taste and comfortability of the customer
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Affordability of products to customers
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Optimum service to customers to breed positive feedback
                </li>
              </ul>
            </div>

            {/* Core Values Section */}
            <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-cyan-500 mr-2">
                  <FaStar className="w-6 h-6" />
                </span>
                Core Values
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Loyalty and Honesty in service
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Building confidence between workers and clients
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Provision of Bona fide accountability
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Respect without discrimination
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Embracing gender equality (SDG No. 5)
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Creation of employment (SDG No. 8)
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Innovativeness in service (SDG No. 9)
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">•</span>
                  Providing quality skill training
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-gray-200">
            <p className="text-xl text-gray-800">
              Our Slogan: <em className="text-cyan-500 font-medium">"Creativity in your style"</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;