import React, { useState } from 'react';
import './Checkout.css';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { cartItems, cartTotal } = useCart();
    const [paymentMethod, setPaymentMethod] = useState('card');

    const tax = cartTotal * 0.08;
    const grandTotal = cartTotal + tax;

    return (
        <div className="checkout-page animate-fade-in">
            <div className="checkout-container">
                <header className="checkout-header">
                    <div className="breadcrumb">HOME / CART / CHECKOUT</div>
                    <h1>Checkout</h1>
                </header>

                <div className="checkout-layout">
                    {/* Form Content */}
                    <div className="checkout-form-content">
                        {/* 1. Shipping Information */}
                        <section className="checkout-section">
                            <div className="section-title">
                                <div className="step-number">1</div>
                                <h2>Shipping Information</h2>
                            </div>
                            <div className="checkout-form">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="heang smos" />
                                </div>
                                <div className="form-group">
                                    <label>Location</label>
                                    <input type="text" placeholder="123 Smash Court" />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="text" placeholder="+855- 000-0000" />
                                </div>
                            </div>
                        </section>

                        {/* 2. Payment Method */}
                        <section className="checkout-section">
                            <div className="section-title">
                                <div className="step-number">2</div>
                                <h2>Payment Method</h2>
                            </div>
                            <div className="payment-options">
                                <div 
                                    className={`payment-card ${paymentMethod === 'card' ? 'active' : ''}`}
                                    onClick={() => setPaymentMethod('card')}
                                >
                                    <div className="radio-circle"></div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                                    <span>Credit or Debit Card</span>
                                    <div className="payment-icon">💳</div>
                                </div>
                                <div 
                                    className={`payment-card ${paymentMethod === 'aba' ? 'active' : ''}`}
                                    onClick={() => setPaymentMethod('aba')}
                                >
                                    <div className="radio-circle"></div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                                    <span>ABA KHQR Payment</span>
                                    <div className="payment-icon">📱</div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Order Summary */}
                    <aside className="order-summary">
                        <div className="order-summary-card">
                            <h3>Order Summary</h3>
                            <div className="summary-items">
                                {cartItems.map(item => (
                                    <div key={item.id} className="mini-item">
                                        <div className="mini-img">
                                            <img src={item.img} alt={item.name} />
                                        </div>
                                        <div className="mini-info">
                                            <h4>{item.name}</h4>
                                            <p>Qty: {item.quantity}</p>
                                        </div>
                                        <div className="mini-price">${(parseFloat(item.price) * item.quantity).toFixed(2)}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="summary-details">
                                <div className="detail-row">
                                    <span>Subtotal</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="detail-row free">
                                    <span>Shipping Cost</span>
                                    <span>FREE</span>
                                </div>
                                <div className="detail-row">
                                    <span>Estimated Tax</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="grand-total-row">
                                <span>Total</span>
                                <span>${grandTotal.toFixed(2)}</span>
                            </div>

                            <button className="place-order-btn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                Place Order
                            </button>

                            <p className="terms-note">
                                By placing your order, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>. Secure 256-bit SSL encrypted payment.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
