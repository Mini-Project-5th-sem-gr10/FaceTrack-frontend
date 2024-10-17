import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
import { ChevronRight, MoveRight } from "lucide-react";

export default function TeacherDashboard() {
  const [userData, setUserData] = useState({});

  const { setisLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("attendance-token");
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    const fetchData = async () => {
      setisLoading(true);
      try {
        const response = await axios.get(`${apiBaseUrl}/getTeacher`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        toast.error("Failed to fetch data, please log in again.");
        localStorage.removeItem("attendance-token");
        navigate("/login");
      } finally {
        setisLoading(false);
      }
    };
    fetchData();
  }, [token, navigate, apiBaseUrl, setisLoading]);

  const randomCourseCardColors = [
    { bg: "#dee0f7", text: "#525fe1" },
    { bg: "#d5f3da", text: "#1b923c" },
    { bg: "#f9dac5", text: "#f86f03" },
    { bg: "#faf2d1", text: "#b99709" },
  ];

  const OneCourseCard = ({ onecourse, colorIndex }) => {
    const color =
      randomCourseCardColors[colorIndex % randomCourseCardColors.length];

    const navigate = useNavigate();
    return (
      <div
        onClick={() => {
          navigate(`/student/${onecourse.sec_id}/${onecourse.course_id}`);
        }}
        className="course-card"
        style={{
          backgroundColor: color.bg,
          color: color.text,
        }}
      >
        <h1>{onecourse.course_name}</h1>
        <h1>{onecourse.course_id}</h1>
        <div
          className="course-seperator"
          style={{
            backgroundColor: color.text,
          }}
        ></div>
        <div>
          <p>Section: {onecourse.sec_id}</p>
          <MoveRight />
        </div>
      </div>
    );
  };
  return (
    <div className="UserDashboard">
      <div className="userdetails">
        <div className="green-uppersection"></div>
        <div className="actual-details">
          <img
            src={userData.faculty_img || "/Images/profile.png"}
            alt="Faculty"
          />
          <div>
            <h1>
              <span>Hello</span>, {userData.faculty_name}
            </h1>
            <p>
              Faculty ID <ChevronRight size={16} fill="black" />{" "}
              <span>{userData.f_id}</span>
            </p>
            <p>
              Number Of Course Taugh <ChevronRight size={16} fill="black" />{" "}
              <span>{userData.courses_taught?.length}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="courseslist">
        <h1>Courses</h1>
        <div
          className="crlist-continer"
          style={{
            gridTemplateColumns: "1fr",
          }}
        >
          <div className="course-container">
            {userData.courses_taught?.map((onecourse, index) => (
              <OneCourseCard
                key={onecourse.course_id}
                onecourse={onecourse}
                colorIndex={index}
                sec_id={userData.sec_id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
