import React from 'react';
import './BrandBar.css';

const BrandBar = () => {
  const brands = ['YONEX', 'ASHAWAY', 'asics', 'FZ FORZA', 'LI-NING', 'RSL'];

  return (
    <section className="brand-bar">
      <div className="brand-container">
        {brands.map((brand, index) => (
          <div key={index} className="brand-logo">{brand}</div>
        ))}
        <a href="#" className="see-all-brands">
          See all brands 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </section>
  );
};

export default BrandBar;
