import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
import { ChevronRight, CheckCircle, XCircle, ChartPie } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import OneAttendanceChart from "../Students/OneAttendanceChart";

function OneTeacherAttendanceTeacherView() {
  const [data, setdata] = useState({
    courseData: { course_name: "", course_id: "", faculty_name: "" },
    attendance: [],
    student_name: "",
  });

  const { s_id, c_id, sec_id } = useParams();
  const { setisLoading } = useContext(AuthContext);
  const token = localStorage.getItem("attendance-token");
  const navigate = useNavigate();
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  // Format date as "1 Oct 2024"
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  // Format time as "10am"
  const formatTime = (timeString) => {
    return new Date("1970-01-01T" + timeString).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      setisLoading(true);
      try {
        // Passing sec_id and c_id as query parameters
        const response = await axios.post(
          `${apiBaseUrl}/getStudentAttendence`,
          {
            sec_id: sec_id, // Section ID
            c_id: c_id, // Course ID
            s_id: s_id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setdata(response.data);
        console.log(response.data);
      } catch (error) {
        toast.error("Failed to fetch data, please log in again.");
        localStorage.removeItem("attendance-token");
        navigate("/login");
      } finally {
        setisLoading(false);
      }
    };

    fetchData();
  }, [token, navigate, apiBaseUrl, sec_id, c_id, setisLoading]);

  if (!data.attendance) {
    return <div>Loading...</div>;
  }
  return (
    <div className="UserDashboard">
      <div className="userdetails">
        <div
          className="green-uppersection"
          style={{
            height: "30vh",
          }}
        ></div>
        <div
          className="actual-details"
          style={{
            height: "fit-content",
            transform: "translateY(-20vh)",
          }}
        >
          <div>
            <p>
              Course Name <ChevronRight size={16} fill="black" />{" "}
              <span>{data.courseData.course_name}</span>
            </p>
            <p>
              Course ID <ChevronRight size={16} fill="black" />{" "}
              <span>{data.courseData.course_id}</span>
            </p>
            <p>
              Student <ChevronRight size={16} fill="black" />{" "}
              <span>{data.student_name}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="actual-attendace">
        <div className="attendance_table">
          <div>
            <p>Date</p>
            <p>Start Time</p>
            <p>Classroom</p>
            <p>Status</p>
          </div>
          {data.attendance.map((attendance, index) => (
            <div key={index}>
              <p>{formatDate(attendance.date)}</p>
              <p>{formatTime(attendance.start)}</p>
              <p>{attendance.classroom}</p>
              <p
                style={{
                  color: attendance.isPresent === "1" ? "green" : "red",
                }}
              >
                {attendance.isPresent === "1" ? "Present" : "Absent"}
              </p>
            </div>
          ))}
        </div>
        <div className="attendance_stats">
          <div className="attendace_numberstat">
            <div
              style={{
                color: "green",
              }}
            >
              <h2>Present</h2>
              <span>
                <CheckCircle />
                <h2>
                  {
                    data.attendance.filter(
                      (attendance) => attendance.isPresent === "1"
                    ).length
                  }
                </h2>
              </span>
            </div>
            <div
              style={{
                color: "red",
              }}
            >
              <h2>Absent</h2>
              <span>
                <XCircle />
                <h2>
                  {
                    data.attendance.filter(
                      (attendance) => attendance.isPresent === "0"
                    ).length
                  }
                </h2>
              </span>
            </div>
            <div>
              <h2>Total</h2>
              <span>
                <ChartPie />
                <h2>{data.attendance.length}</h2>
              </span>
            </div>
          </div>
          <div className="att-chart">
            <h2>Attendance Comparison Chart Overall</h2>
            <OneAttendanceChart data={data.attendance} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneTeacherAttendanceTeacherView;
