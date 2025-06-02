import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CourseCard({
  course = {
    title: "Course title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi consectetur rerum, ab impedit, corporis ipsum non totam, ratione dolorum alias unde officia placeat iure aperiam iusto labore porro illo?",
    id: "123",
  },
}) {
  console.log(course.id);
  return (
    <article className="col-sm-6 col-lg-4 col-xxl-3 p-2">
      <Card style={{ minHeight: "300px" }}>
        <Card.Body className="d-flex flex-column justify-content-start">
          <header className="h5" style={{ height: "2.5rem" }}>
            {course.title}
          </header>
          <Card.Text className="pt-2">
            {course.description.slice(0, 150) + " ... "}
          </Card.Text>
          <a
            href={`/courses/:${course.id}`}
            className="btn btn-primary mt-auto"
            role="button">
            Read more
          </a>
        </Card.Body>
      </Card>
    </article>
  );
}
