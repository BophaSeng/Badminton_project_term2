import React from 'react';
import './CartPage.css';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="cart-page">
                <div className="cart-container empty-cart">
                    <h2>Your cart is empty</h2>
                    <Link to="/shop" className="back-to-shop">GO TO SHOP</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="cart-container">
                <header className="cart-header">
                    <div className="breadcrumb">HOME / SHOPPING CART</div>
                    <h1>Shopping Cart</h1>
                </header>

                <div className="cart-layout">
                    {/* Items List */}
                    <div className="cart-items-section">
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>PRODUCT</th>
                                    <th>QUANTITY</th>
                                    <th>PRICE</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id} className="cart-item-row">
                                        <td>
                                            <div className="product-cell">
                                                <div className="cart-item-img">
                                                    <img src={item.img} alt={item.name} />
                                                </div>
                                                <div className="cart-item-info">
                                                    <h3>{item.name}</h3>
                                                    <p>Size: {item.size || 'Standard'}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="quantity-control">
                                                <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>−</button>
                                                <span className="qty-value">{item.quantity}</span>
                                                <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                                            </div>
                                        </td>
                                        <td className="price-cell">${(parseFloat(item.price) * item.quantity).toFixed(2)}</td>
                                        <td className="action-cell">
                                            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                                REMOVE
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Summary Sidebar */}
                    <aside className="cart-summary">
                        <div className="summary-card">
                            <div className="summary-row">
                                <span>Total</span>
                                <span className="total-price">${cartTotal.toFixed(2)}</span>
                            </div>
                            <Link to="/checkout" className="checkout-btn">
                                CHECKOUT
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                            </Link>
                            <div className="security-note">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                                Secure Checkout & SSL Encrypted
                            </div>
                        </div>

                        <div className="returns-banner">
                            <div className="returns-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                            </div>
                            <div className="returns-text">
                                <h4>Easy Returns</h4>
                                <p>Changed your mind? Return within 30 days for a full refund.</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
