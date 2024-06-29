// src/App.js
import React from "react";
import "./App.css";
import Loading from "./components/loading";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import { Routes, Route, Router } from "react-router-dom";
import Hero from "./components/Hero";
import Signup from "./components/Signup";
import { useAuth } from "./context/AuthContext";
import ForgotPassword from "./components/otp/ForgotPassword";
import VerifyOtp from "./components/otp/VerifyOtp";
import ResetPassword from "./components/otp/ResetPassword";
import ThankYou from "./components/Thanks";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const { isLoggedIn } = useAuth();

  // const login = window.localStorage.getItem('Islogin');

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* <Route path="/verify-otp" element={<VerifyOtp />} /> */}
            <Route path="/thank-you" element={<ThankYou />} />
            
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
          {/* <Loading /> */}
        </div>
      )}
    </>
  );
}

export default App;
