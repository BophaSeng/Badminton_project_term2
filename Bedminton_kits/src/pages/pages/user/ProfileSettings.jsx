/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import "./ProfileSettings.css";

function ProfileSettings() {
  // Initial state starts empty or with defaults
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: "https://via.placeholder.com/150", 
  });

  const fileInputRef = useRef(null);

  // Load the logged-in user data when the component mounts
  useEffect(() => {
    const activeUser = localStorage.getItem("userProfile");
    if (activeUser) {
      const userData = JSON.parse(activeUser);
      setProfile({
        ...profile,
        name: userData.name || "New User",
        email: userData.email || "No Email Provided",
        phone: userData.phone || "",
        avatar: userData.avatar || "https://via.placeholder.com/150"
      });
    }
  }, []);
  const handleChange = (e) => {

    const { name, value } = e.target;

    setProfile((prev) => ({ ...prev, [name]: value }));

  }; 

  // 2. Handle input changes (updates sidebar in real-time)
  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      // result is the Base64 string of the image
      setProfile((prev) => ({ ...prev, avatar: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  // 4. Save updated info back to localStorage
  const saveProfile = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🏸 BADMINTON<span className="logo-highlight">SHOP</span></div>
        <div className="search-bar">
          <input type="text" placeholder="Search for rackets, shoes..." />
        </div>
        <div className="nav-links">
          <span>Home</span> <span className="active-link">Shop</span>
          <span>🔔</span> <span>🛒 Cart (3)</span> <span>👤 Profile</span>
        </div>
      </nav>

      <div className="main-layout">
        {/* Sidebar - Dynamically follows 'profile.name' */}
        <aside className="sidebar">
          <div className="profile-card">
            <p className="subtext">Welcome back,</p>
            <h4 className="dynamic-name">{profile.name || "User"}</h4>
            <div className="nav-item active">👤 Profile Settings</div>
            <div className="nav-item">📦 Order History</div>
            <div className="nav-item">❤️ Wishlist</div>
            <button className="logout-btn" onClick={() => window.location.href="/login"}>
              ↳ Log Out
            </button>
          </div>
          
          <div className="promo-card">
            <span className="pro-label">PRO MEMBER</span>
            <h2>2,450 pts</h2>
            <p className="promo-text">You're 550 points away from a free restringing!</p>
            <button className="btn-redeem">Redeem Rewards</button>
          </div>
        </aside>

        {/* Profile Content */}
        <section className="content-area">
          <h1 className="page-title">Profile Settings</h1>
          <p className="page-subtitle">Update your personal information and security preferences.</p>

          <div className="settings-card">
            <div className="card-header">
              <span className="header-icon">🪪</span>
              <h3>Personal Information</h3>
            </div>

            <div className="profile-form-container">
              {/* Avatar Section */}
              <div className="avatar-section">
                <div className="avatar-wrapper" onClick={() => fileInputRef.current.click()}>
                  <img src={profile.avatar} alt="Profile" className="profile-img" />
                  <div className="camera-icon">📷</div>
                </div>

                <input type="file" ref={fileInputRef} onChange={handleAvatar} style={{ display: "none" }} />
              </div>

              {/* Inputs Grid */}
              <div className="inputs-grid">
                <div className="input-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={profile.name} 
                    onChange={handleChange} 
                    placeholder="Enter full name"
                  />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={profile.email} 
                    onChange={handleChange} 
                    disabled // Usually email is locked after signup
                  />
                </div>
                <div className="input-group full-width">
                  <label>Phone Number</label>
                  <input 
                    type="text" 
                    name="phone" 
                    value={profile.phone} 
                    onChange={handleChange} 
                    placeholder="+855 ..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="button-container">
            <button className="save-changes-btn" onClick={saveProfile}>
               💾 SAVE CHANGES
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProfileSettings;