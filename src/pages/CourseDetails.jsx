import { useParams } from "react-router";
import { courses } from "../data/courses";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function CourseDetails() {
  let { id } = useParams();
  id = id.slice(1); //to get rid of :

  const course = courses.find((course) => course.id == id);

  return (
    <>
      <a href="/courses">back to courses</a>
      <h1>{course.title}</h1>
      {course.description}
    </>
  );
}
