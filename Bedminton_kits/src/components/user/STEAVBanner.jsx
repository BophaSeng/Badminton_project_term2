import React from 'react';
import './STEAVBanner.css';

const STEAVBanner = () => {
  return (
    <section className="steav-banner">
      <div className="steav-container">
        <div className="steav-content">
          <div className="steav-logo">STEAV</div>
          <h2 className="steav-title">High End Gear, <br /> Low End Price</h2>
          <p className="steav-desc">
            Our house brand STEAV delivers premium quality without the premium price tag. Designed by badminton enthusiasts for everyday heroes.
          </p>
          <div className="steav-props">
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
          <a href="#" className="btn-steav">Shop STEAV Collection</a>
        </div>
        <div className="steav-visuals">
          <div className="steav-promo-card">
            <img src="/zerv_racket.png" alt="Rackets" className="promo-img" />
            <div className="promo-info">
              <h4>Rackets</h4>
              <p>Save up to 60%</p>
            </div>
          </div>
          <div className="steav-promo-card">
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

export default STEAVBanner;
