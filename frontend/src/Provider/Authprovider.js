import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api"; // Adjust the import path as needed

// Create the context
const AuthContext = createContext();

// Create the provider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();

  // Function to handle login
  const loginAction = async (data) => {
    const apiData = new api();
    try {
      const response = await apiData.login(data); // Ensure to await the promise

      if (response && response.token) {
        setUser(response.user);
        setToken(response.token);
        localStorage.setItem("site", response.token);
        navigate("/dashboard");
      } else {
        throw new Error(response.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Function to handle logout
  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("/login");
  };

  // Context value
  const contextValue = {
    token,
    user,
    loginAction,
    logOut,
    isAuthenticated: !!user, // Boolean indicating if user is authenticated
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
