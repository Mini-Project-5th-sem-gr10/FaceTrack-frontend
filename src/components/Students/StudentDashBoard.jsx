import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ChevronRight, MoveRight } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Student.css";

const randomCourseCardColors = [
  { bg: "#dee0f7", text: "#525fe1" },
  { bg: "#d5f3da", text: "#1b923c" },
  { bg: "#f9dac5", text: "#f86f03" },
  { bg: "#faf2d1", text: "#b99709" },
];

const OneCourseCard = ({ onecourse, colorIndex }) => {
  const color =
    randomCourseCardColors[colorIndex % randomCourseCardColors.length];
  return (
    <div
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
        <p>Faculty Name: {onecourse.faculty_name}</p>
        <MoveRight />
      </div>
    </div>
  );
};

function StudentDashBoard() {
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
        const response = await axios.get(`${apiBaseUrl}/getStudent`, {
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

  return (
    <div className="UserDashboard">
      <div className="userdetails">
        <div className="green-uppersection"></div>
        <div className="actual-details">
          <img
            src={userData.student_img || "/Images/profile.png"}
            alt="Student"
          />
          <div>
            <h1>
              <span>Hello</span>, {userData.student_name}
            </h1>
            <p>
              Student ID <ChevronRight size={16} fill="black" />{" "}
              <span>{userData.s_id}</span>
            </p>
            <p>
              Roll No <ChevronRight size={16} fill="black" />{" "}
              <span>{userData.roll_no}</span>
            </p>
            {userData.sec_id && (
              <>
                <p>
                  Branch <ChevronRight size={16} fill="black" />{" "}
                  <span>{userData.sec_id.slice(0, 4)}</span>
                </p>
                <p>
                  Semester <ChevronRight size={16} fill="black" />{" "}
                  <span>{userData.sec_id[6]}th</span>
                </p>
                <p>
                  Section <ChevronRight size={16} fill="black" />{" "}
                  <span>{userData.sec_id[7]}</span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="courseslist">
        <h1>Subjects</h1>
        <div className="course-container">
          {userData.enrolled_courses?.map((onecourse, index) => (
            <OneCourseCard
              key={onecourse.course_id}
              onecourse={onecourse}
              colorIndex={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentDashBoard;
