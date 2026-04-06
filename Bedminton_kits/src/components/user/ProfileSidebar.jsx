import React from 'react';
import { User, Archive, Heart, LogOut, Award } from 'lucide-react';
import './ProfileSidebar.css';

const ProfileSidebar = ({ activeTab, setActiveTab, user, onLogout }) => {
  const menuItems = [
    { id: 'settings', label: 'Profile Settings', icon: User },
    { id: 'orders', label: 'Order History', icon: Archive },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
  ];

  return (
    <aside className="profile-sidebar">
      <div className="sidebar-card">
        <div className="sidebar-welcome">
          <h3>Welcome back,</h3>
          <p className="user-name">{user?.name || 'Badminton Enthusiast'}</p>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon size={24} className="nav-icon" />
              <span>{item.label}</span>
            </button>
          ))}
          
          <div className="sidebar-divider"></div>

          <button className="nav-item logout-btn" onClick={onLogout}>
            <LogOut size={24} className="nav-icon" />
            <span>Log Out</span>
          </button>
        </nav>
      </div>

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
