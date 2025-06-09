import { Routes, Route } from "react-router";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import News from "./pages/News";
import Registration from "./pages/Registration";
import PageNotFound from "./pages/PageNotFound";

import { StudentContext } from "./contexts/StudentContext";
import { courses } from "./data/courses";

function App() {
  const [registeredCourses, setRegisteredCourses] = useState([]);

  const getAvailableCourses = function () {
    let availableCourses;
    if (registeredCourses.length > 0) {
      availableCourses = courses.filter((c) => {
        return !registeredCourses.some((course) => course.id === c.id);
      });
    } else {
      availableCourses = courses;
    }
    return availableCourses;
  };

  const availableCourses = getAvailableCourses();

  //context ensures that user's enrolled courses are available site-wide
  //Router provides connection between path and corresponding components
  return (
    <StudentContext.Provider
      value={{
        availableCourses,
        registeredCourses,
        setRegisteredCourses,
      }}>
      <Navbar />
      <div className="container mt-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/coursedetails" element={<CourseDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </StudentContext.Provider>
  );
}

export default App;
