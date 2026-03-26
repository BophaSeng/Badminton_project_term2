import React from 'react';
import './ZERVBanner.css';

const ZERVBanner = () => {
  return (
    <section className="zerv-banner">
      <div className="zerv-container">
        <div className="zerv-content">
          <div className="zerv-logo">ZERV</div>
          <h2 className="zerv-title">High End Gear, <br /> Low End Price</h2>
          <p className="zerv-desc">
            Our house brand ZERV delivers premium quality without the premium price tag. Designed by badminton enthusiasts for everyday heroes.
          </p>
          <div className="zerv-props">
            <div className="prop-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              Danish Design
            </div>
            <div className="prop-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              Top Tier Materials
            </div>
            <div className="prop-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              Exclusive Deals
            </div>
          </div>
          <a href="#" className="btn-zerv">Shop ZERV Collection</a>
        </div>
        <div className="zerv-visuals">
          <div className="zerv-promo-card">
            <img src="/zerv_racket.png" alt="Rackets" className="promo-img" />
            <div className="promo-info">
              <h4>Rackets</h4>
              <p>Save up to 60%</p>
            </div>
          </div>
          <div className="zerv-promo-card">
            <img src="/shoes.png" alt="Shoes" className="promo-img" />
            <div className="promo-info">
              <h4>Shoes</h4>
              <p>From $49,00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZERVBanner;
