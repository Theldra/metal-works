import React from 'react';
import { FaHeart, FaLeaf, FaTools, FaUsers } from 'react-icons/fa';
import ceo from '../assets/images/rita.jpeg'; 
import workshop1 from '../assets/images/atshop.jpg';
import workshop2 from '../assets/images/melt.jpg';
import workshop3 from '../assets/images/btyre.jpg';
import workshop4 from '../assets/images/bproc.jpg';

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
            Founded by Rita Ohenewaa Asimpah in Ayigya, Kumasi, we're dedicated to transforming 
            Ghana's agricultural landscape through innovative metal fabrication solutions.
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
                Recognizing the mechanization challenges in Ghana's agricultural sector, our founder 
                Rita embarked on a journey through apprenticeship and skills
                passion for creating solutions and solving real-world problems, Fabri-Tech Impressions 
                was born to bridge the gap in agricultural technology.
              </p>
              <p className="text-lg opacity-90">
                Today, we specialize in creating multipurpose cargo farm bikes, maize planting machines, 
                and various metal fabrication works that directly impact the efficiency and productivity 
                of smallholder farmers.
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

        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Our Workshop <span className="text-cyan-300">in Action</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workshopImages.map((image, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 text-sm">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;