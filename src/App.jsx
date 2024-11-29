import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import AdventureDetails from './pages/AdventureDetails';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import AuthProvider from './context/AuthContext';
import UpdateProfile from './pages/UpdateProfile';
import ForgotPassword from './pages/ForgotPassword';
import { ToastContainer } from 'react-toastify';
import DynamicTitle from './components/DynamicTitle';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import Preloader from './components/Preloader';


import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <AuthProvider>
      <DynamicTitle />
      <div className="min-h-screen flex flex-col font-ptSerif scroll-smooth">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/update-profile"
            element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }
          />
          <Route path="/adventure/:slug" element={<AdventureDetails />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </AuthProvider>
  );
}

export default App;
