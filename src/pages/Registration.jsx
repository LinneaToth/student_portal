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
      <h1 className="text-center mb-5 display-5">Course Registration</h1>
      <div className="shadow-sm rounded-3 bg-light container p-3">
        <h3 className="lead mb-5 mt-3">
          Your current registrations: {registeredCourses.length}
        </h3>
        <ul className="list-group list-group-flush mb-5">
          {registeredCourses.map((c) => (
            <a
              href={`#/courses/${c.id}`}
              className="text-decoration-none position-relative">
              <li className="list-group-item list-group-item-action border-0 border-start border-secondary border-2 mb-1">
                {c.title}
                <p>
                  <small className="text-muted">{c.subject}</small>
                </p>
              </li>
            </a>
          ))}
        </ul>

        <RegistrationDialog buttonText="Click to add courses" />
      </div>
    </main>
  );
}
