import { Routes, Route } from "react-router";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import News from "./pages/News";
import Registration from "./pages/Registration";
import Footer from "./components/Footer";
import { StudentContext } from "./contexts/StudentContext";
import { courses } from "./data/courses";

function App() {
  const [activeStudent, setActiveStudent] = useState({
    name: "Gandalf",
    id: "student123",
    email: "drgrey@wizmail",
  });

  const handleRegistration = function (courseID = null) {};

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

  return (
    <StudentContext.Provider
      value={{
        availableCourses,
        activeStudent,
        setActiveStudent,
        registeredCourses,
        setRegisteredCourses,
        handleRegistration,
      }}>
      <Navbar />
      <main className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/coursedetails" element={<CourseDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
        </Routes>
      </main>
      <Footer />
    </StudentContext.Provider>
  );
}

export default App;
