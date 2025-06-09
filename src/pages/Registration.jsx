import { useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";
import RegistrationDialog from "../components/RegistrationDialog";
import { v4 as uuidv4 } from "uuid";
import { courses } from "../data/courses";

export default function Register() {
  const { registeredCourses, setRegisteredCourses } =
    useContext(StudentContext);

  function removeRegistration(id) {
    const coursesAfterRemoval = registeredCourses.filter((c) => c.id !== id);
    setRegisteredCourses([...coursesAfterRemoval]);
  }

  return (
    <main className="justify-content-center container-fluid">
      <h1 className="text-center mb-5 display-5 mb-5 mt-5">
        Course Registration
      </h1>
      <div
        className="shadow-sm rounded-3 bg-light container border"
        style={{ padding: "2.5rem" }}>
        <h3 className="lead mb-5">
          Your current registrations: {registeredCourses.length}
        </h3>
        <ul className="list-group list-group-flush mb-5 mt-5">
          {registeredCourses.map((c) => (
            <a
              key={uuidv4()}
              href={`#/courses/${c.id}`}
              className="text-decoration-none position-relative">
              <li className="list-group-item list-group-item-action border-0 border-start border-secondary border-2 mb-1 d-flex justify-content-between">
                <div id="reg-course">
                  {c.title}
                  <p>
                    <small className="text-muted">{c.subject}</small>
                  </p>
                </div>
                <span
                  className="h3"
                  style={{ marginLeft: "-2rem" }}
                  onClick={(e) => {
                    e.preventDefault();
                    removeRegistration(c.id);
                  }}>
                  &times;
                </span>
              </li>
            </a>
          ))}
        </ul>

        <RegistrationDialog buttonText="Click to add courses" />
      </div>
    </main>
  );
}
