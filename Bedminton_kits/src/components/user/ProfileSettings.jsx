import React, { useRef } from 'react';
import { Camera, Save, Contact } from 'lucide-react';

const ProfileSettings = ({ profile, handleChange, handleAvatar, saveProfile, saving }) => {
  const fileInputRef = useRef(null);

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="profile-settings-container animate-fade-in">
      <div className="settings-page-header">
        <h1 className="settings-page-title">Profile Settings</h1>
        <p className="settings-page-subtitle">Update your personal information and security preferences.</p>
      </div>

      <div className="settings-card">
        <div className="settings-card-header">
          <div className="settings-card-icon">
            <Contact size={26} />
          </div>
          <h2 className="settings-card-title">Personal Information</h2>
        </div>

        <div className="settings-card-body">
          <div className="avatar-column">
            <div className="avatar-preview-wrapper">
              <img
                src={
                  profile?.avatar ||
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

            <div className="avatar-info-text">
              <p>JPG, GIF or PNG.</p>
              <p>Max size 2MB.</p>
            </div>
          </div>

          <div className="form-column">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  value={profile?.name || ""}
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
                  value={profile?.email || ""}
                  readOnly
                  className="premium-input readonly-input"
                  title="Email cannot be changed"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full-width">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  value={profile?.phone || ""}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="premium-input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="settings-footer">
        <button
          type="button"
          onClick={saveProfile}
          className={`btn-save-settings ${saving ? 'saving' : ''}`}
          disabled={saving}
        >
          {saving ? (
            <span className="loader-small"></span>
          ) : (
            <Save size={20} />
          )}
          <span>{saving ? 'SAVING...' : 'SAVE CHANGES'}</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
