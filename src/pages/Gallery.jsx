import React from 'react';

const galleryImages = [
  // Example structure; replace src with your actual image paths
  { src: '/images/gallery1.jpg', alt: 'Innovator at work', caption: 'Crafting a custom gate' },
  { src: '/images/gallery2.jpg', alt: 'Welding process', caption: 'Precision welding in progress' },
  { src: '/images/gallery3.jpg', alt: 'Finished product', caption: 'Completed metal staircase' },
  // Add more images as needed
];

const Gallery = () => {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-600 mb-4">Gallery</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Explore our gallery to see our innovator in action and discover a variety of custom metal works, creative projects, and behind-the-scenes moments from our workshop.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform hover:-translate-y-2"
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-1">{img.alt}</h4>
                <p className="text-gray-600 text-sm">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;