import React, { useContext, useState, useCallback } from "react";
import "./Auth.css";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ id: "", password: "" });
  const { setisLoading, fetchUserData, user } = useContext(AuthContext);
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  // Handle form submission
  const submitForm = useCallback(
    async (e) => {
      e.preventDefault();
      setisLoading(true);
      try {
        const { id, password } = formData;
        const response = await axios.post(`${apiBaseUrl}/auth/login`, {
          s_id: id,
          password,
        });
        localStorage.setItem("attendance-token", response.data.token);
        await fetchUserData(response.data.token);
        toast.success("Successfully logged in");
        navigate(`/student`); // Redirect to dashboard after successful login
      } catch (error) {
        const errorMsg =
          error.response?.data?.message || "Invalid ID or Password";
        toast.error(errorMsg); // Display error message based on the response
      } finally {
        setisLoading(false);
      }
    },
    [formData, setisLoading, fetchUserData, apiBaseUrl]
  );

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }, []);

  return (
    <div className="Login">
      <div className="green-upper-side"></div>
      <form onSubmit={submitForm}>
        <h2>Login to your account</h2>
        <label htmlFor="name">Student_id</label>
        <input
          type="text"
          id="name"
          name="id"
          placeholder="Enter ID"
          value={formData.id}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="text"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
