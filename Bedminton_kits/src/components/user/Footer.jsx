import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="shuttlecock-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" fill="#0A192F"/>
              </svg>
            </div>
            <div className="logo-text">BADMINTON <span>SHOP</span></div>
          </div>
          <p className="footer-description">
            Europe’s leading specialized shop for badminton gear. We provide expert advice and high-performance equipment for players of all levels.
          </p>
          <div className="footer-socials">
            <div className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </div>
          </div>
        </div>

        {/* Customer Service Column */}
        <div className="footer-column">
          <h4 className="column-heading">Customer Service</h4>
          <ul className="footer-links">
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#">Racket Stringing Service</a></li>
            <li><a href="#">Warranty Claim</a></li>
          </ul>
        </div>

        {/* About Us Column */}
        <div className="footer-column">
          <h4 className="column-heading">About Us</h4>
          <ul className="footer-links">
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Work with us</a></li>
            <li><a href="#">Club Deals</a></li>
            <li><a href="#">B2B Sales</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-column">
          <h4 className="column-heading">Newsletter</h4>
          <p className="newsletter-text">
            Get the latest deals and expert tips delivered to your inbox.
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email" 
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">JOIN</button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="copyright">
          © 2026 Badminton Shop. All rights reserved.
        </div>
        <div className="payment-methods">
          <span className="payment-logo">VISA</span>
          <span className="payment-logo">ABA</span>
          <span className="payment-logo">Apple Pay</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
