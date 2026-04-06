import React, { useRef, useState, useEffect } from 'react';
import { Camera, Save } from 'lucide-react';

const ProfileSettings = () => {
  const fileInputRef = useRef(null);

  const [profile, setProfile] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    avatar: ""
  });

  const [saving, setSaving] = useState(false);

  
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));

    // If no user → create fake (for testing)
    if (!user) {
      user = {
        id: "1",
        name: "fake",
        email: "fake1224@gmail.com",
        phone:"",
        location: "",
        avatar: ""
      };
      localStorage.setItem("user", JSON.stringify(user));
    }
    localStorage.setItem("userId", user.id);
    setProfile(user);
  }, []);

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Handle avatar
  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile({
        ...profile,
        avatar: imageUrl
      });
    }
  };

  const saveProfile = async () => {
    const userId = localStorage.getItem("userId");

    console.log("User ID:", userId);

    if (!userId) {
      alert("Cannot save: User ID not found. Please log in again.");
      return;
    }

    try {
      setSaving(true);

      
      await new Promise((resolve) => setTimeout(resolve, 1000));

      
      localStorage.setItem("user", JSON.stringify(profile));

      alert("Profile saved successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to save profile.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="profile-settings-container animate-fade-in">
      <h2 className="section-title">Profile Settings</h2>

      <div className="settings-card glass">
        
        <div className="avatar-edit-section">
          <div className="avatar-preview-wrapper">
            <img
              src={
                profile.avatar ||
                "https://api.dicebear.com/7.x/avataaars/svg?seed=User"
              }
              className="settings-avatar-img"
              alt="Profile"
            />
            <button
              type="button"
              className="avatar-edit-badge"
              onClick={triggerFileSelect}
            >
              <Camera size={16} />
            </button>
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleAvatar}
            ref={fileInputRef}
            style={{ display: "none" }}
          />

          <div className="avatar-info">
            <h4>Profile Picture</h4>
            <p>PNG, JPG or SVG. Max 2MB.</p>
          </div>
        </div>

        <div className="settings-form">
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="premium-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={profile.email}
                readOnly
                className="premium-input readonly-input"
                title="Email cannot be changed"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="premium-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                id="location"
                name="location"
                value={profile.location}
                onChange={handleChange}
                placeholder="City, Country"
                className="premium-input"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={saveProfile}
            className={`btn-save-settings ${saving ? 'saving' : ''}`}
            disabled={saving}
          >
            {saving ? (
              <span className="loader-small"></span>
            ) : (
              <Save size={18} />
            )}
            <span>{saving ? 'Saving...' : 'Save All Changes'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
