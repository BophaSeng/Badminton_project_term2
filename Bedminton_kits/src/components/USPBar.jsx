import React from 'react';
import './USPBar.css';

const USPBar = () => {
  const usps = [
    {
      title: 'Official Distributor',
      desc: '100% Authentic Products',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      )
    },
    {
      title: 'Free Global Shipping',
      desc: 'Orders above $99',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
      )
    },
    {
      title: 'Expert Advice',
      desc: 'Speak to pro coaches',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      )
    },
    {
      title: 'Secure Payment',
      desc: 'Fully encrypted checkout',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      )
    }
  ];

  return (
    <section className="usp-bar">
      <div className="usp-container">
        {usps.map((usp, index) => (
          <div key={index} className="usp-item">
            <div className="usp-icon">{usp.icon}</div>
            <div className="usp-text">
              <h4>{usp.title}</h4>
              <p>{usp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default USPBar;
