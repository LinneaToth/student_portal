import { Routes, Route } from "react-router";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import News from "./pages/News";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import { StudentContext } from "./contexts/StudentContext";

function App() {
  const [activeStudent, setActiveStudent] = useState({
    name: "Kim Kimsson",
    id: "student123",
    email: "kim@email.email",
  });

  const [registeredCourses, setRegisteredCourses] = useState([]);

  return (
    <StudentContext.Provider
      value={{
        activeStudent,
        setActiveStudent,
        registeredCourses,
        setRegisteredCourses,
      }}>
      <Navbar />
      <main className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/coursedetails" element={<CourseDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
        </Routes>
      </main>
      <Footer />
    </StudentContext.Provider>
  );
}

export default App;
