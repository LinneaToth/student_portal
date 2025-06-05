export default function CourseCard({ course }) {
  return (
    <article className="col-md-6 col-lg-4 col-xxl-3 p-2 mt-3 ">
      <div
        className="card border-1 d-flex flex-wrap p-4 shadow-sm rounded-3 course-card"
        style={{ height: "325px" }}>
        <header
          className="card-title h5 mb-3 border-bottom border-1 border-primary text-primary"
          style={{ height: "3.5rem" }}>
          <h3 className="lead">{course.title}</h3>
        </header>
        <p className="card-text">{course.description.slice(0, 150) + "... "}</p>
        <a
          href={`#/courses/${course.id}`}
          className="btn btn-outline-primary mt-auto card-link mt-auto"
          role="button">
          <span className="text-secondary"> &#10697;</span> Read more
        </a>
      </div>{" "}
    </article>
  );
}
