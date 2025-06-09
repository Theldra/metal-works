import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';


const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Products />
      <Contact />
      <Newsletter />
    </div>
  );
};

export default Home;