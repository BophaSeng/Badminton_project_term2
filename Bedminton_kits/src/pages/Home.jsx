import React from 'react';
import Hero from '../components/user/Hero';
import USPBar from '../components/user/USPBar';
import CategoryGrid from '../components/user/CategoryGrid';
import BrandBar from '../components/user/BrandBar';
import ProductCarousel from '../components/user/ProductCarousel';
import STEAVBanner from '../components/user/STEAVBanner';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <USPBar />
      <CategoryGrid />
      <BrandBar />
      <ProductCarousel />
      <STEAVBanner />
    </div>
  );
};

export default Home;
