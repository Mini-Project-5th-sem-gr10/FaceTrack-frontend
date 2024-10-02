import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(false);
  const [user, setUser] = useState({
    isLoggedIn: false,
    name: "",
    role: "",
    profilePhoto: "",
    id: "",
  });
  const [token, setToken] = useState(
    localStorage.getItem("attendance-token") || null
  );
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    if (token) {
      fetchUserData(token);
    }
  }, [token]);

  const fetchUserData = async (token) => {
    setisLoading(true);
    try {
      const response = await axios.get(`${apiBaseUrl}/auth/getUser`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser({
        isLoggedIn: true,
        id: response.data.id,
        name: response.data.name,
        role: response.data.role,
        profilePhoto: response.data.img_src,
      });
    } catch (error) {
      console.error("Failed to fetch user data", error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        setisLoading,
        fetchUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
