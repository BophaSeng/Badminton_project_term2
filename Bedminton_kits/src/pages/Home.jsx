import React from 'react';
import Hero from '../components/Hero';
import USPBar from '../components/USPBar';
import CategoryGrid from '../components/CategoryGrid';
import BrandBar from '../components/BrandBar';
import ProductCarousel from '../components/ProductCarousel';
import ZERVBanner from '../components/ZERVBanner';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <USPBar />
      <CategoryGrid />
      <BrandBar />
      <ProductCarousel />
      <ZERVBanner />
    </div>
  );
};

export default Home;
