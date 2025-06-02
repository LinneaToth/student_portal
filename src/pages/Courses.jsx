import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";
import { useState } from "react";

export default function Courses() {
  const [lookingFor, setLookingFor] = useState("");
  let coursesShowing = courses;

  if (lookingFor) {
    lookingFor.toLowerCase();
    coursesShowing = courses.filter(
      (c) =>
        c.title.toLowerCase().includes(lookingFor) ||
        c.description.toLowerCase().includes(lookingFor)
    );
  }

  return (
    <main className="justify-content-center">
      <h1 className="w-100 text-center">Courses</h1>
      <label htmlFor="lookFor">Filter courses by</label>
      <input
        name="lookFor"
        onChange={(e) => setLookingFor(e.target.value)}
        type="text"
        placeholder="Title or description"
        value={lookingFor}
      />
      <button
        onClick={() => {
          setLookingFor("");
        }}>
        Reset
      </button>
      <section className="d-flex flex-wrap">
        {coursesShowing.map((course) => (
          <CourseCard course={course} />
        ))}
      </section>
    </main>
  );
}
