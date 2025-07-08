import React from 'react';

import weldImg from "../assets/images/weld.jpeg";
import rweldImg from "../assets/images/rweld.jpeg";
import rspImg from "../assets/images/rsp.jpg";
import rmilImg from "../assets/images/rmil.jpg";
import rquadImg from "../assets/images/rquad.jpeg";
import plugImg from "../assets/images/plug.jpg";

const galleryImages = [
  { src: rweldImg, alt: 'Innovator at work', caption: 'Crafting a custom gate' },
  { src: weldImg, alt: 'Welding process', caption: 'Precision welding in progress' },
  { src:plugImg, alt: 'Finished product', caption: 'Completed metal staircase' },
  { src: rspImg, alt: 'Finished product', caption: 'Completed metal staircase' },
  { src: rmilImg, alt: 'Finished product', caption: 'Completed metal staircase' },
  { src: rquadImg, alt: 'Finished product', caption: 'Completed metal staircase' },
];

const Gallery = () => {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-600 mb-4">Gallery</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Explore our gallery to see our innovator in action and discover 
            a variety of custom metal works, creative projects, and 
            behind-the-scenes moments from our workshop.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform hover:-translate-y-2"
            >
              <div className="h-64 w-full overflow-hidden flex items-center justify-center bg-gray-100">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              {/* Removed title and description below the image */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;