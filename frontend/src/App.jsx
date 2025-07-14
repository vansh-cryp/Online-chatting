import React, {useEffect } from 'react';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';
import  ProfilePage from './pages/ProfilePage';  
import { useAuthStore } from './store/useAuthStore.js';
import './App.css';
import {Loader} from "lucide-react"
const App = () => {
  const {authUser, checkAuth ,isCheckingAuth} = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log("Auth User:", authUser);

if(isCheckingAuth && !authUser) {
    return(
      <div className='LoaderContainer'> 
        <Loader size={40}className='animate-spin'/>
      </div>
    )
  }
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={authUser?<HomePage/>:<Navigate to="/login"/>} />
        <Route path="/signup" element={!authUser?<SignupPage/>:<Navigate to="/"/>} />
        <Route path="/login" element={!authUser?<LoginPage/>:<Navigate to="/" />} />
        <Route path="/settings" element={<SettingsPage/>} />
        <Route path="/profile" element={authUser?<ProfilePage/>:<Navigate to="/login"/>} />

      </Routes>
    </div>
  )
}

export default App