import React, { useState } from 'react';
import './ProductDetail.css';
import { useCart } from '../context/CartContext';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState('3U-G5');

    // In a real app, fetch by ID. Here we use dummy data.
    const product = {
        id: parseInt(id),
        brand: 'YONEX',
        name: 'Astrox 88D Pro Professional Racket',
        price: '290.59',
        oldPrice: '289.95',
        save: '35%',
        img: '/racket.png',
        thumbnails: ['/racket.png', '/racket.png', '/racket.png']
    };

    const sizes = ['3U-G5', '4U-G5', '4U-G6'];

    return (
        <div className="product-detail-page">
            <div className="detail-container">
                {/* Visuals */}
                <div className="product-gallery">
                    <div className="main-image">
                        <img src={product.img} alt={product.name} />
                    </div>
                    <div className="thumbnail-list">
                        {product.thumbnails.map((thumb, i) => (
                            <div key={i} className={`thumbnail ${i === 0 ? 'active' : ''}`}>
                                <img src={thumb} alt="thumb" />
                            </div>
                        ))}
                        <div className="thumbnail video-placeholder">
                            <div className="play-icon">▶</div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="product-info">
                    <div className="breadcrumb">
                        <Link to="/">HOME</Link> / <Link to="/shop">RACKETS</Link> / PROFESSIONAL / ASTROX 88D PRO
                    </div>
                    <div className="professional-tag">PROFESSIONAL CHOICE</div>
                    <h1 className="detail-title">{product.name}</h1>
                    <div className="detail-brand">BRAND: <span>{product.brand}</span></div>

                    <div className="detail-price-box">
                        <span className="detail-price">${product.price}</span>
                        <span className="detail-old-price">${product.oldPrice}</span>
                        <span className="detail-save-badge">SAVE {product.save}</span>
                    </div>

                    <div className="variant-section">
                        <span className="variant-label">Weight / Grip Size</span>
                        <div className="variant-chips">
                            {sizes.map(size => (
                                <button 
                                    key={size} 
                                    className={`chip ${selectedSize === size ? 'active' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="stock-status">
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                         In Stock - 24h Shipping
                    </div>

                    <div className="detail-actions">
                        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                            Add to Cart
                        </button>
                        <button className="wishlist-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
