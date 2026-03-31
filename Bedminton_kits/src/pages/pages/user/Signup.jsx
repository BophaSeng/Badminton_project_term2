import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // 1. Get existing users from localStorage, or an empty array if none exist
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // 2. Check if the email is already registered
    const userExists = existingUsers.some(user => user.email === formData.email);

    if (userExists) {
      alert("This email is already registered. Please Sign In.");
      navigate("/signin");
      return;
    }

    // 3. Add the new user to the array
    existingUsers.push(formData);

    // 4. Save the updated array back to localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Account created successfully! Please sign in.");
    
    // 5. Redirect to the Signin page
    navigate("/signin");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>
        <p>Join the Badminton Shop community</p>
        
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" name="name" placeholder="John Doe" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="alex@example.com" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input type="text" name="phone" placeholder="+855..." onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="••••••••" onChange={handleChange} required />
          </div>

          <button type="submit" className="signup-btn">SIGN UP</button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;