// src/context/AuthContext.js
import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name,setName] = useState()

  // console.log(isLoggedIn)

   useEffect(() => {
     axios
       .get("http://localhost:3001/api/auth")
       .then((res) => {
         console.log(res.data.isLoggedIn);
         if (res.data.isLoggedIn) {
           setIsLoggedIn(res.data.user);
           setIsLoggedIn(res.data.isLoggedIn);
          //  navigate("/");
         }
       })
       .catch((err) => console.log(err));
   });

  const login = (res,name) => {
    // window.localStorage.setItem("Islogin", true);
    setIsLoggedIn(res);
    setName(name);
  };

  const logout = (res) => {
    // window.localStorage.setItem(false);
    setIsLoggedIn(res);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout,name }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
