// src/context/AuthContext.js

import axios from 'axios';
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
  });

  const signup = async (user) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', user); // Ensure this URL matches your backend
      setAuthState({ isAuthenticated: true, user: response.data });
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const login = async (user) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', user);
      setAuthState({ isAuthenticated: true, user: response.data });
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ ...authState, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};
