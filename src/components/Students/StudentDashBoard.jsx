import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";

function StudentDashBoard() {
  const [userData, setUserData] = useState({});
  const { setisLoading } = useContext(AuthContext);
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const token = localStorage.getItem("attendance-token");
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if no token is available
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      setisLoading(true);
      try {
        const response = await axios.get(`${apiBaseUrl}/getStudent`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch data, please log in again.");
        localStorage.removeItem("attendance-token");
        navigate("/login");
      } finally {
        setisLoading(false);
      }
    };

    fetchData();
  }, [token, navigate, apiBaseUrl, setisLoading]);

  return (
    <div>
      <h1>Student Dashboard</h1>
      {userData ? <pre>{JSON.stringify(userData, null, 2)}</pre> : "Loading..."}
    </div>
  );
}

export default StudentDashBoard;
