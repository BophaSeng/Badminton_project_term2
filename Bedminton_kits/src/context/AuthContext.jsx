import React, { createContext, useContext, useState, useEffect } from 'react';
import { getStorage, setStorage, removeStorage } from '../utils/localstorage';
import { api } from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on mount
  useEffect(() => {
    const initAuth = async () => {
      const savedUser = getStorage('user');
      if (savedUser) {
        setUser(savedUser);
      }
      setLoading(false);
    };
    initAuth();
  }, []);

  const login = async (email) => {
    try {
      const users = await api.get('users');
      const foundUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
      
      const userData = foundUser || { email, role: 'user', name: 'Guest' };
      setUser(userData);
      setStorage('user', userData);
      return userData;
    } catch (error) {
      console.error("Login Error:", error);
      const guestData = { email, role: 'user', name: 'Guest' };
      setUser(guestData);
      setStorage('user', guestData);
      return guestData;
    }
  };

  const logout = () => {
    setUser(null);
    removeStorage('user');
  };

  const updateUser = (newData) => {
    const updated = { ...user, ...newData };
    setUser(updated);
    setStorage('user', updated);
  };

  const isAdmin = user?.role === 'admin' || user?.email?.toLowerCase().includes('admin');

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin, updateUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
