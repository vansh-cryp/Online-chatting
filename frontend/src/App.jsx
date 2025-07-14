import React, {useEffect } from 'react';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';
import  ProfilePage from './pages/ProfilePage';  
import { useAuthStore } from './store/useAuthStore.js';
import {Loader} from "lucide-react"
import './css/loader.css'; // Importing the loader CSS
const App = () => {
  const {authUser, checkAuth ,isCheckingAuth} = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log("Auth User:", authUser);

if(true) {
    return(
      <div className="Loader">
        <Loader className="size-10 animate-spin"/>
      </div>
    )
  }
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/settings" element={<SettingsPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />

      </Routes>
    </div>
  )
}

export default App