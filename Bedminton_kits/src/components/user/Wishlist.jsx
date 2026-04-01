import React from 'react';
import { ShoppingCart, Trash2, Share2, Plus } from 'lucide-react';
import './Wishlist.css';

const Wishlist = () => {
  const wishlistItems = [
    { id: 1, name: 'Elite Power 100 ZZ', price: '$239.00', status: 'IN STOCK', image: '/racket.png' },
    { id: 2, name: 'Master No.3 Feather', price: '$34.50', status: 'IN STOCK', image: '/shuttle.png' },
    { id: 3, name: 'Super Grap (3-Pack)', price: '$12.00', status: 'LOW STOCK', image: '/grip.png', statusClass: 'status-low' },
    { id: 4, name: 'Pro Tournament Bag', price: '$89.00', status: 'IN STOCK', image: '/bag.png' },
  ];

  return (
    <div className="wishlist-container animate-fade-in">
      <div className="wishlist-header">
        <div className="header-left">
          <h2 className="section-title">My Wishlist</h2>
          <p className="subtitle">You have {wishlistItems.length} items saved for later.</p>
        </div>
        <div className="header-actions">
          <button className="btn-share">
            <Share2 size={18} />
            <span>Share Wishlist</span>
          </button>
          <button className="btn-add-all">
            <Plus size={18} />
            <span>Add All to Cart</span>
          </button>
        </div>
      </div>

      <div className="wishlist-grid">
        {wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-card glass">
            <button className="remove-btn" title="Remove from wishlist">
              <Trash2 size={16} />
            </button>
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-info">
              <div className="info-top">
                <h3 className="item-name">{item.name}</h3>
                <span className={`stock-badge ${item.statusClass || ''}`}>{item.status}</span>
              </div>
              <p className="item-price">{item.price}</p>
              <button className="btn-add-cart">
                <ShoppingCart size={18} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
