import { useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";
import { Link } from "react-router";

//If there are any courses registered to the user, they will be accessible with links to the corresponding course page in this drop down list.
export default function RegisteredCourses() {
  const { registeredCourses } = useContext(StudentContext);

  const isRegistered = registeredCourses.length > 0 ? true : false;

  return (
    <div className="dropdown d-none d-lg-inline w-25">
      <button
        className="btn btn-dark dropdown-toggle text-light w-100 text-start ps-5"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        Registered courses
      </button>
      <ul className="dropdown-menu">
        {isRegistered &&
          registeredCourses.map((c) => {
            return (
              <li className="dropdown-li" key={c.id}>
                <Link className="dropdown-item" to={`/courses/${c.id}`}>
                  {c.title}
                </Link>
              </li>
            );
          })}
        {!isRegistered && (
          <li>
            <span className="dropdown-item">No courses added</span>
          </li>
        )}
      </ul>
    </div>
  );
}
