  import React, { useState } from 'react';
  import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom';
  import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


  function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
    
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Registered Successfully");
        // Optionally navigate to login or dashboard
      } catch (error) {
        console.error("Error during registration:", error.message);
        alert(error.message);
      }
    };
    
    

    return (
      <div style={loginContainerStyle}>
        <div style={loginCardStyle}>
          <h1 style={loginTitleStyle}>Register</h1>
          <form onSubmit={handleSubmit}>
            <div style={inputContainerStyle}>
              <label htmlFor="email" style={inputLabelStyle}>Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div style={inputContainerStyle}>
              <label htmlFor="password" style={inputLabelStyle}>Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div style={inputContainerStyle}>
              <label htmlFor="confirmPassword" style={inputLabelStyle}>Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={inputStyle}
              />
            </div>
            <button
              type="submit"
              style={submitBtnStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = '#2f66a4'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#3a7bd5'}
            >
              Register
            </button>
          </form>
          <p style={forgotPasswordStyle}>
            <a href="/login" style={forgotPasswordLinkStyle}>Already have an account? Login</a>
          </p>
        </div>
      </div>
    );
  }

  // Style definitions
  const loginContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px'
  };

  const loginCardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    width: '100%',
    maxWidth: '400px'
  };

  const loginTitleStyle = {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333'
  };

  const inputContainerStyle = {
    marginBottom: '20px'
  };

  const inputLabelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    color: '#555'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    boxSizing: 'border-box'
  };

  const submitBtnStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#3a7bd5',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  };

  const forgotPasswordStyle = {
    textAlign: 'center',
    marginTop: '20px',
    color: '#666'
  };

  const forgotPasswordLinkStyle = {
    color: '#3a7bd5',
    textDecoration: 'none'
  };

  export default Register;