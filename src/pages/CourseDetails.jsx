import { useParams } from "react-router";
import { courses } from "../data/courses";

export default function CourseDetails() {
  let { id } = useParams();
  id = id.slice(1); //to get rid of :

  const course = courses.find((course) => course.id == id);

  return (
    <article>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </article>
  );
}
