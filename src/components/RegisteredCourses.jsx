import { useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";

export default function RegisteredCourses() {
  const {
    activeStudent,
    setActiveStudent,
    registeredCourses,
    setRegisteredCourses,
  } = useContext(StudentContext);

  const isRegistered = registeredCourses.length > 0 ? true : false;

  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        Registered courses
      </button>
      <ul class="dropdown-menu">
        {isRegistered &&
          registeredCourses.map((c) => {
            return (
              <li>
                <a class="dropdown-item" href={`/courses/:${c.id}`}>
                  {c.name}
                </a>
              </li>
            );
          })}
        {!isRegistered && (
          <li>
            <a class="dropdown-item">No courses added</a>
          </li>
        )}
      </ul>
    </div>
  );
}
