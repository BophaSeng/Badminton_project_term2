import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import './NavBar.css';

const NavBar = () => {
    const { cartCount } = useCart();
    const { user, logout, isAdmin } = useAuth();
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <div className="logo-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" fill="#0A192F" />
                        </svg>
                    </div>
                    <div className="logo-text">BADMINTON <span>SHOP</span></div>
                </Link>

                {/* Links */}
                <ul className="navbar-links">
                    <li><Link to="/" className={isActive('/')}>Home</Link></li>
                    <li><Link to="/shop" className={isActive('/shop')}>Shop</Link></li>
                    {isAdmin && <li><Link to="/admin" className={isActive('/admin')}>Admin</Link></li>}
                </ul>

                {/* Search Bar */}
                <div className="navbar-search">
                    <input
                        type="text"
                        placeholder="Search for rackets, shoes, shuttles..."
                        className="search-input"
                    />
                    <button className="search-button">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                    </button>
                </div>

                {/* Actions */}
                <div className="navbar-actions">
                    {user ? (
                        <div className="navbar-user-actions">
                            <Link to="/cart" className="action-item">
                                {cartCount > 0 && <div className="cart-badge">{cartCount}</div>}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                            </Link>
                            <Link to="/profile" className="navbar-avatar-link">
                                <div className="navbar-avatar-wrapper">
                                    <img 
                                        src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`} 
                                        alt="Profile" 
                                        className="navbar-avatar-img"
                                    />
                                </div>
                            </Link>
                            {!isAdmin && (
                                <button className="action-item logout-nav-btn" onClick={logout} title="Logout">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                                </button>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link to="/cart" className="action-item">
                                {cartCount > 0 && <div className="cart-badge">{cartCount}</div>}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                            </Link>
                            <Link to="/login" className="action-item">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;