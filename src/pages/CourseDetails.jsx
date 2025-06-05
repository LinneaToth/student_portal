import { useParams } from "react-router";
import { courses } from "../data/courses";
import RegistrationDialog from "../components/RegistrationDialog";
import CourseDetailRow from "../components/CourseDetailRow";
import Button from "@mui/material/Button";

export default function CourseDetails() {
  let { id } = useParams();
  const course = courses.find((course) => course.id == id);

  return (
    <>
      <h1 className="h1 mb-5 display-5 mt-5">{course.title}</h1>
      <div className="container mb-5">
        <CourseDetailRow title="Course Description" body={course.description} />
        <CourseDetailRow title="Credits" body={course.credits} />
        <CourseDetailRow title="Location" body={course.location} />
        <CourseDetailRow title="Start Period" body={course.startPeriod} />
        <CourseDetailRow title="Language" body={course.language} />
        <CourseDetailRow title="Pace" body={course.studyPace} />
        <CourseDetailRow title="Subject" body={course.subject} />
      </div>
      <RegistrationDialog idProp={id} />
      <a className="btn btn-outline-primary" href="#/courses">
        To all Courses
      </a>
    </>
  );
}
