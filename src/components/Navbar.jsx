//Navbar, made with bootstrap and with active sections indicated using NavLinks

import { NavLink } from "react-router";
import RegisteredCourses from "./RegisteredCourses";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {" "}
      <div className="container-fluid">
        <NavLink
          to="/"
          className="navbar-brand"
          style={{ fontFamily: "Pixelify Sans" }}>
          Pixel Academy
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/courses" className="nav-link">
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/news" className="nav-link">
                News
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/registration" className="nav-link">
                Registration
              </NavLink>
            </li>
          </ul>
        </div>

        {/*Calls the component that generates a drop down list with all currently registered courses: */}
        <RegisteredCourses />
      </div>
    </nav>
  );
}
