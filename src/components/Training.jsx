import React from 'react';
import trainingFlyer from '../assets/images/training-prog.jpeg';

const Training = () => {
  return (
    <section id="training" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            Metal Fabrication <span className="text-cyan-500">Training Program</span>
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {/* Reduced padding from p-8 to p-6 */}
            <div className="mb-6">
              {/* Reduced margin from mb-8 to mb-6 */}
              <img 
                src={trainingFlyer} 
                alt="Metal Fabrication Training Program Flyer" 
                className="w-full rounded-lg shadow-md mx-auto max-w-xl"
                // Reduced max-width from max-w-2xl to max-w-xl
              />
            </div>

            <div className="max-w-2xl mx-auto">
              {/* Reduced max-width from max-w-3xl to max-w-2xl */}
              <p className="text-gray-700 text-base leading-relaxed text-center">
                {/* Reduced text size from text-lg to text-base */}
                In a growing world where unemployment is a key factor due to the growing population, 
                skills become the backbone of every growing economy and entrepreneurship becomes indispensable. 
                Fabri-Tech Impressions Ltd. seeks to solve this problem by introducing a skill training program 
                to equip the youth, especially females, with industry-relevant skill training in metal fabrication, 
                computer aided design and electrical work, enhancing their employability and contributing to the 
                country's economic development.
              </p>
              <p className="text-cyan-600 font-semibold text-lg mt-4 text-center">
                {/* Reduced margin from mt-6 to mt-4 and text size */}
                Are you a resident of Kumasi? Are you interested in learning and mastering the technical skills mentioned above?
              </p>
              <p className="text-xl font-bold text-center mt-3 text-gray-800">
                {/* Reduced text size and margin */}
                Join Fabri-Tech Impressions Training program today!
              </p>
              
              <div className="text-center mt-6">
                {/* Reduced margin from mt-8 to mt-6 */}
                <a
                  href="https://wa.me/233541053744?text=Hello%2C%20I'm%20interested%20in%20the%20metal%20fabrication%20training%20program."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-all"
                  // Reduced padding
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;