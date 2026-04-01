import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { api } from "../utils/api";
import ProfileSidebar from "../components/user/ProfileSidebar";
import ProfileSettings from "../components/user/ProfileSettings";
import OrderHistory from "../components/user/OrderHistory";
import Wishlist from "../components/user/Wishlist";
import "./Profile.css";

function Profile() {
  const { user, logout, updateUser, loading: authLoading } = useAuth();
  const [activeTab, setActiveTab] = useState('settings');
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    avatar: "",
    phone: "",
    location: "",
    points: 0
  });
  const [saving, setSaving] = useState(false);

  // Sync profile data when user from AuthContext changes
  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name || "",
        email: user.email || "",
        avatar: user.avatar || "",
        phone: user.phone || "",
        location: user.location || "",
        points: user.points || 0
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileData((prev) => ({ ...prev, avatar: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const saveProfile = async () => {
    if (!user?.id) {
        alert("Cannot save: User ID not found. Please log in again.");
        return;
    }

    setSaving(true);
    try {
      // For JSON-server, we need to know the ID
      await api.patch(`users/${user.id}`, profileData);
      
      // Update global context
      updateUser(profileData);
      
      alert("Profile saved successfully!");
    } catch (error) {
      console.error("Save Error:", error);
      alert("Failed to save profile to database.");
    } finally {
      setSaving(false);
    }
  };

  if (authLoading) return <div className="loading-state">Loading account...</div>;
  if (!user) return <div className="error-state">Please login to view your profile.</div>;

  const renderContent = () => {
    switch (activeTab) {
      case 'settings':
        return <ProfileSettings 
                  profile={profileData} 
                  handleChange={handleChange} 
                  handleAvatar={handleAvatar} 
                  saveProfile={saveProfile}
                  saving={saving}
                />;
      case 'orders':
        return <OrderHistory />;
      case 'wishlist':
        return <Wishlist />;
      default:
        return <ProfileSettings profile={profileData} />;
    }
  };

  return (
    <div className="profile-dashboard-page">
      <div className="dashboard-container">
        <main className="dashboard-content">
          {renderContent()}
        </main>
        <ProfileSidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          user={profileData} 
          onLogout={logout} 
        />
      </div>
    </div>
  );
}

export default Profile;
