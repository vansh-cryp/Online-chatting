import React, { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import Silk from "../components/Silk/Silk";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {Eye,EyeOff} from "lucide-react"
import '../css/SignupPage.css';
import toast from 'react-hot-toast';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if(!formData.username.trim()) {
      return toast.error("Username is required");
    }
    if (!formData.email.trim()) {
      return toast.error("Email is required");
    }
    if(!/\S+@\S+\.\S+/.test(formData.email)) {
      return toast.error("Invalid email format");
    }
    if (!formData.password) {
      return toast.error("Password is required");
    }
    if(formData.password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    await signup(formData);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="full-page">
      {/* Silk Animation Background */}
      <div className="silk-background">
        <Silk
          speed={5}
          scale={1}
          color= "rgb(82 39 255)"
          noiseIntensity={1.5}
          rotation={0}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1
          }}
        />
      </div>

      {/* Split Layout */}
      <div className="signin-page">
        {/* Left Half - Sign In Form */}
        <div className="signin-form-section">
          <div className="form-wrapper">
            <motion.div
              className="signin-form-container"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="form-header">
                <h1>Welcome Back</h1>
                <p>Sign in to your account</p>
              </div>

              <form className="signin-form" onSubmit={handleSubmit}>

                {/* username */}
                <div className="form-container">
                  <label className="label">
                    <span>Username</span>
                  </label>
                  <div className="input-container">
                    <input
                      type="text"
                      placeholder="Enter your username"
                      value={formData.username}
                      onChange={(e) => handleInputChange('username', e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="form-container">
                  <label className="label">
                    <span>Email</span>
                  </label>
                  <div className="input-container">
                    <input
                      type="email"
                      placeholder="xyz@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="form-container">
                  <label className="label">
                    <span>Password</span>
                  </label>
                  <div className="input-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      required
                    />
                    <button 
                      type="button" 
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSigningUp || !validateForm()}
                >
                  {isSigningUp ? 'Signing In...' : 'Sign In'}
                </button>
              </form>

              <div className="form-footer">
                <p>
                  {"Don't have an account? "}
                  <Link to="/signup" className="signup-link">
                    Create Account
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Half - Transparent Section */}
        <div className="transparent-section"></div>
      </div>
    </div>
  );
};

export default SignupPage;