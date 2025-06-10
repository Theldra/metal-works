import React, { useState } from 'react';
import { FaArrowRight, FaCalendar, FaSearch, FaUser } from 'react-icons/fa';

const Blog = () => {
  const [blogPosts] = useState([
    {
      id: 1,
      title: "Revolutionizing Small-Scale Farming in Ghana",
      excerpt: "How our manual maize planter is transforming agricultural practices for smallholder farmers across the Ashanti region.",
      content: "Full article content here...",
      author: "Rita Ohenewaa Asimpah",
      date: "2025-01-15",
      category: "Agriculture",
      image: "/api/placeholder/400/250",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Women in Metal Fabrication: Breaking Barriers",
      excerpt: "Exploring the journey of female entrepreneurs in the traditionally male-dominated metal fabrication industry.",
      content: "Full article content here...",
      author: "Rita Ohenewaa Asimpah",
      date: "2025-01-10",
      category: "Empowerment",
      image: "/api/placeholder/400/250",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Sustainable Materials in Agricultural Machinery",
      excerpt: "The importance of using local and eco-friendly materials in creating farming equipment that supports environmental conservation.",
      content: "Full article content here...",
      author: "Rita Ohenewaa Asimpah",
      date: "2025-01-05",
      category: "Sustainability",
      image: "/api/placeholder/400/250",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Future of Agric Mechanization in West Africa",
      excerpt: "Predictions and trends in agricultural mechanization and how Ghana is positioning itself as a leader in the sector.",
      content: "Full article content here...",
      author: "Rita Ohenewaa Asimpah",
      date: "2024-12-28",
      category: "Innovation",
      image: "/api/placeholder/400/250",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Training the Next Generation of Female Fabricators",
      excerpt: "Our comprehensive training programs designed to empower women with metal fabrication skills and entrepreneurship knowledge.",
      content: "Full article content here...",
      author: "Rita Ohenewaa Asimpah",
      date: "2024-12-20",
      category: "Training",
      image: "/api/placeholder/400/250",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "From Concept to Creation: The Cargo Quad-cycle Journey",
      excerpt: "Behind the scenes look at developing our multipurpose cargo farm bike from initial design to market testing.",
      content: "Full article content here...",
      author: "Rita Ohenewaa Asimpah",
      date: "2024-12-15",
      category: "Product Development",
      image: "/api/placeholder/400/250",
      readTime: "6 min read"
    }
  ]);

  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Agriculture', 'Empowerment', 'Sustainability', 'Innovation', 'Training', 'Product Development'];

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === category));
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = blogPosts.filter(post =>
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.category.toLowerCase().includes(term)
    );
    setFilteredPosts(filtered);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
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

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-16" data-aos="fade-up">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-blue-600 font-medium">{filteredPosts[0].category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {filteredPosts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6">{filteredPosts[0].excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <FaUser className="mr-2" />
                        {filteredPosts[0].author}
                      </div>
                      <div className="flex items-center">
                        <FaCalendar className="mr-2" />
                        {formatDate(filteredPosts[0].date)}
                      </div>
                      <span>{filteredPosts[0].readTime}</span>
                    </div>
                  </div>

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center transition-colors">
                    Read More <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <FaCalendar className="mr-2" />
                    {formatDate(post.date)}
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center transition-colors">
                  Read More <FaArrowRight className="ml-2 text-sm" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-cyan-700 rounded-2xl p-8 text-white text-center" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-lg opacity-90 mb-6">
            Subscribe to our newsletter for the latest articles on agricultural innovation and women empowerment.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
            />
            <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;