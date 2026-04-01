import React from 'react';
import './ProductCarousel.css';
import ProductCard from './ProductCard';

const ProductCarousel = () => {
  const products = [
    {
      id: 101, // Added IDs for card keys and links
      brand: 'YONEX',
      name: 'Astrox 88D Pro Badminton Racket - Camel Gold',
      price: '200.59',
      oldPrice: '289.95',
      badge: 'SAVE 35%',
      badgeType: 'sale',
      img: '/products/NF1000Z_Lightning_Yellow_1.webp'
    },
    {
      id: 102,
      brand: 'YONEX',
      name: "Power Cushion 65 X3 - Men's Court Shoes",
      price: '99.99',
      badge: 'BESTSELLER',
      badgeType: 'bestseller',
      img: '/products/ALL_SHBVAZM1_452-1.webp'
    },
    {
      id: 103,
      brand: 'YONEX',
      name: 'Aerobite Hybrid Badminton String - 200m Reel',
      price: '144.50',
      oldPrice: '169.95',
      badge: 'SAVE 15%',
      badgeType: 'sale',
      img: '/products/AC149_White_2.webp'
    },
    {
      id: 104,
      brand: 'VICTOR',
      name: 'Tournament Bag BR9609 - 12 Racket Capacity',
      price: '85.00',
      img: '/products/INT_BA72631WEX_007-1.webp'
    }
  ];

  return (
    <section className="product-carousel-section">
      <div className="carousel-header">
        <h2 className="carousel-title">Popular Right Now</h2>
        <div className="carousel-controls">
          <button className="control-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button className="control-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;
