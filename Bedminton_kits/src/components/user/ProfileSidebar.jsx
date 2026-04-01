import React from 'react';
import { User, ShoppingBag, Heart, LogOut, Award, ChevronRight } from 'lucide-react';
import './ProfileSidebar.css';

const ProfileSidebar = ({ activeTab, setActiveTab, user, onLogout }) => {
  const menuItems = [
    { id: 'settings', label: 'Profile Settings', icon: User },
    { id: 'orders', label: 'Order History', icon: ShoppingBag },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
  ];

  return (
    <aside className="profile-sidebar">
      <div className="sidebar-welcome glass">
        <h3>Welcome back,</h3>
        <p className="user-name">{user?.name || 'Badminton Enthusiast'}</p>
      </div>

      <nav className="sidebar-nav glass">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
            {activeTab === item.id && <ChevronRight size={16} className="active-arrow" />}
          </button>
        ))}
        
        <button className="nav-item logout-item" onClick={onLogout}>
          <LogOut size={20} />
          <span>Log Out</span>
        </button>
      </nav>

      <div className="pro-member-card">
        <div className="pro-badge">PRO MEMBER</div>
        <div className="points-display">
          <span className="points-value">2,450</span>
          <span className="points-label">pts</span>
        </div>
        <p className="pro-info">You're 550 points away from a free restringing!</p>
        <button className="redeem-btn">Redeem Rewards</button>
        <Award className="card-bg-icon" size={80} />
      </div>
    </aside>
  );
};

export default ProfileSidebar;
