import React, { useState } from 'react';
import { FaArrowRight, FaCalendar, FaSearch, FaUser } from 'react-icons/fa';

import cargoImg from '../assets/images/rmode.jpeg';
import empowerVideo from '../assets/videos/welvid.mp4';

const BlogCard = ({ post, index }) => (
  <article 
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2"
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <div className="relative">
      {post.isVideo ? (
        <div className="relative h-48">
          <video
            className="w-full h-full object-cover"
            controls
          >
            <source src={post.video} type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>
      ) : (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="absolute top-4 right-4">
        <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <FaCalendar className="mr-2" />
          {new Date(post.date).toLocaleDateString()}
        </div>
        <span>{post.readTime}</span>
      </div>
    </div>
  </article>
);

const FeaturedPost = ({ post }) => (
  <div className="relative">
    {post.isVideo ? (
      <div className="relative h-64 lg:h-full">
        <video
          className="w-full h-full object-cover"
          poster={post.thumbnail}
          controls
        >
          <source src={post.video} type="video/mp4" />
          Your browser does not support video playback.
        </video>
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </span>
        </div>
      </div>
    ) : (
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 lg:h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </span>
        </div>
      </div>
    )}
  </div>
);

const Blog = () => {
  const [blogPosts] = useState([
    {
      id: 2,
      title: "Women in Metal Fabrication: Breaking Barriers",
      excerpt: "Exploring the journey of female entrepreneurs in the traditionally male-dominated metal fabrication industry.",
      content: "Full article content here...",
      author: "Rita Ohenewaa Asimpah",
      date: "2025-01-10",
      category: "Empowerment",
      video: empowerVideo,
      isVideo: true,
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "From Concept to Creation: The Cargo Quad-cycle Journey",
      excerpt: "Behind the scenes look at developing our multipurpose cargo farm bike from initial design to market testing.",
      content: "Full article content here...",
      author: "Rita Ohenewaa Asimpah",
      date: "2024-12-15",
      category: "Product Development",
      image: cargoImg,
      readTime: "6 min read"
    }
  ]);

  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Empowerment', 'Product Development'];

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setFilteredPosts(
      category === 'All' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === category)
    );
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredPosts(
      blogPosts.filter(post =>
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.category.toLowerCase().includes(term)
      )
    );
  };

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-cyan-300">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights on agricultural innovation, women empowerment, 
            and sustainable farming practices from Fabri-Tech Impressions.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12" data-aos="fade-up">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;