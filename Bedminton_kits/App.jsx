
import React, { useState, useEffect ,useRef} from "react";
import "./App.css";

function ProfileSettings() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    avatar: "",
    history: [],
  });

   
   const fileInputRef= useRef(null);

  // Load saved profile from localStorage
  useEffect(() => {
  const loadProfile = () => {
    const saved = localStorage.getItem("userProfile");
    if (saved) setProfile(JSON.parse(saved));
  };
  loadProfile();
}, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
    
  };

  // Handle avatar upload
  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile((prev) => ({ ...prev, avatar: reader.result }));
    };
    reader.readAsDataURL(file);
  };
  const triggerFileSelect = () => {
    fileInputRef.current.click(); // trigger hidden file input
  };

  // Save profile to localStorage
  const saveProfile = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    alert("Profile saved successfully!");
  };

  return (
    <div className="card">
      <h2>User Profile</h2>

      <div className="avatar-container">
        <img
          src={profile.avatar || "/default-avatar.png"}
          className="avatar"
        />
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={handleAvatar}
        ref={fileInputRef}
        style={{display:"none"}}

      />
      <button 
       type="button"
       onClick={triggerFileSelect}
       className="upload-btn">Choose Photo</button>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={profile.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>

      <button
        onClick={saveProfile}
        
        className="save-btn"
      >
        Save Profile
      </button>

      <h3>Activity History</h3>
      {profile.history.length > 0 ? (
        <ul>
          {profile.history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No activity yet.</p>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <ProfileSettings />
    </div>
  );
}

export default App; 