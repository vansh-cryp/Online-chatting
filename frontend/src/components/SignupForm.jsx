import React from 'react';
import '../css/SignUpForm.css';

export default function SignUpForm() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <form className="signup-form">
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="input" 
              required 
            />
            <span className="input-highlight"></span>
          </div>
          
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="input" 
              required 
            />
            <span className="input-highlight"></span>
          </div>
          
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Password" 
              className="input" 
              required 
            />
            <span className="input-highlight"></span>
          </div>
          
          <button type="submit" className="submit-btn">
            <span className="btn-text">Sign Up</span>
            <div className="btn-ripple"></div>
          </button>
          
          <div className="form-footer">
            <p>Already have an account? <a href="#" className="login-link">Sign In</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}