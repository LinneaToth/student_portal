import { useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";

export default function Register() {
  const {
    activeStudent,
    setActiveStudent,
    registeredCourses,
    setRegisteredCourses,
  } = useContext(StudentContext);

  return <h1>Register</h1>;
}
