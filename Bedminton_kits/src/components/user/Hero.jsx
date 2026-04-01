import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src="/hero_banner.png" alt="Hero Banner" />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content animate-fade-in">
        <span className="new-arrival-badge">New Arrival</span>
        <h1 className="hero-title">
          STEAV Collection
          <span>Play Like a Pro</span>
        </h1>
        <p className="hero-description">
          Discover the latest gear engineered for performance, used by world champions on the professional circuit.
        </p>
        <div className="hero-buttons">
          <a href="#" className="btn-premium-primary">Shop Collection</a>
          <a href="#" className="btn-premium-secondary" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>Watch Promo</a>
        </div>
      </div>
      <div className="hero-slider-dots">
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </section>
  );
};

export default Hero;
