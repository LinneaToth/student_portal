import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";
import { useState } from "react";
import Search from "../components/Search";

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
      <h1 className="w-100 text-center display-5 mb-5 mt-5">Our Courses</h1>
      <Search
        setLookingFor={setLookingFor}
        lookingFor={lookingFor}
        placeholder="Title or Description"
      />
      <section className="d-flex flex-wrap">
        {coursesShowing.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </section>
    </main>
  );
}
