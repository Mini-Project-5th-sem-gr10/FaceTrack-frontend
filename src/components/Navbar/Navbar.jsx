import React, { useContext } from "react";
import "./Navbar.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <h2>Attendance System</h2>
        {user.isLoggedIn ? (
          <div
            className="nav-right"
            onClick={() => {
              navigate(`/student`);
            }}
          >
            <img
              src={
                user.img_src
                  ? img_src
                  : "https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
              }
              alt=""
            />
            <p>Welcome, {user.name}</p>
          </div>
        ) : (
          <div className="nav-right">
            <Link to={"/login"}>Login</Link>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
