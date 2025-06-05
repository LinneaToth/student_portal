import { useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";
import RegistrationDialog from "../components/RegistrationDialog";
import { courses } from "../data/courses";

export default function Register() {
  const {
    availableCourses,
    activeStudent,
    setActiveStudent,
    registeredCourses,
    setRegisteredCourses,
  } = useContext(StudentContext);

  console.log("these should be the available courses:", availableCourses);

  return (
    <main className="justify-content-center container-fluid">
      <h1 className="text-center mb-5">Course Registration</h1>
      <h3>
        You are currently registered on {registeredCourses.length} courses with
        us
      </h3>
      <ul className="list-group list-group-flush">
        {registeredCourses.map((c) => (
          <a href={`#/courses/${c.id}`} className="text-decoration-none">
            <li className="list-group-item list-group-item-action border-0">
              {c.title}
              <p>
                <small className="text-muted">{c.subject}</small>
              </p>
            </li>
          </a>
        ))}
      </ul>
      <p>Click the button below to add courses to your registration.</p>
      <RegistrationDialog />
    </main>
  );
}
