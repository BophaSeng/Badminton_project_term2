import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      login(email);
      // Redirect based on email
      if (email.toLowerCase().includes('admin')) {
        navigate('/admin');
      } else {
        navigate('/');
      }
    }
  };

  return (
    <div className="login-container animate-fade-in">
      <div className="login-card">
        <div className="login-logo-wrapper">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        </div>
        <h1>Welcome Back</h1>
        <p>Please enter your email to continue</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g., admin@gmail.com"
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>
        <div className="login-tips">
          <p><strong>Pro Tip:</strong> Use an email containing "admin" to access the dashboard!</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
