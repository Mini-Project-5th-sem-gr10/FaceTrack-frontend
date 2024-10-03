import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Authentication/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Loader from "./components/Common/Loader";
import StudentDashBoard from "./components/Students/StudentDashBoard";
import OneSubjectAttendace from "./components/Students/OneSubjectAttendace";

function App() {
  const { isLoading } = useContext(AuthContext);
  return (
    <>
      {isLoading && <Loader />}
      <ToastContainer
        position="top-center"
        autoClose={800}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="login" element={<Login />} />
          <Route path="student" element={<StudentDashBoard />} />
          <Route
            path="student/:sec_id/:c_id"
            element={<OneSubjectAttendace />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
