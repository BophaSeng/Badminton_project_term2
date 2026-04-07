import React from 'react';
import { Bell, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const AdminHeader = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="admin-header glass">
      <div className="admin-logo">
        <Link to="/" className="logo-link">
          <div className="logo-icon">
            <img src="/badminton.svg" alt="Logo" width="24" height="24" />
          </div>
          <span className="logo-text">BADMINTON<span style={{ color: 'var(--accent)' }}>SHOP</span></span>
        </Link>
      </div>
      
      <nav className="admin-nav">
        <Link to="/admin" className={`nav-item ${isActive('/admin')}`}>Dashboard</Link>
        <Link to="/admin/products" className={`nav-item ${isActive('/admin/products')}`}>Products</Link>
        <Link to="/admin/orders" className={`nav-item ${isActive('/admin/orders')}`}>Orders</Link>
      </nav>

      <div className="admin-header-actions">
        <button className="action-icon"><Bell size={20} /></button>
        <button className="action-icon"><Settings size={20} /></button>
        <div className="admin-profile">
          <div className="profile-info">
            <span className="profile-name">Alex Morgan</span>
            <span className="profile-role">ADMIN</span>
          </div>
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" className="table-avatar" style={{ border: '2px solid var(--accent-soft)' }} />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
