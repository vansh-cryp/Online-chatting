import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';

const SignupPage = () => {
  const[showPassword, setShowPassword] = useState(false);
  const[formData, setFormData] = useState({
    fullName:"",
    email:"",
    password:""
  })
  const{isSignedUp, signup} = useAuthStore();

  const validateForm = () => {

  };
  const handleSubmit = async (e) => {
    e.preventDefault();// so that it does not refresh the page
    // validate the form data before submitting
    if (!validateForm()) return;
    await signup(formData);
  };
  return (
    <div >SignupPage</div>
  )
}

export default SignupPage