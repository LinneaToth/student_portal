export default function CourseCard({ course }) {
  return (
    <article className="col-md-6 col-lg-4 col-xxl-3 p-2">
      <div
        className="card card-body d-flex flex-wrap p-4"
        style={{ height: "325px" }}>
        <header className="card-title h5 mb-3" style={{ height: "2.75rem" }}>
          {course.title}
        </header>
        <p className="card-text">
          {course.description.slice(0, 150) + " ... "}
        </p>
        <a
          href={`#/courses/${course.id}`}
          className="btn btn-primary mt-auto card-link mt-auto"
          role="button">
          Read more
        </a>
      </div>{" "}
    </article>
  );
}
