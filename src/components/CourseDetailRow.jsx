//This component exports rows for the course info pages, to save some space in the parent component's code. Content received as props.

export default function CourseDetailRow({ title, body }) {
  return (
    <div className="row mb-2">
      <div className="col-sm">
        <strong className="lead">{title}</strong>
      </div>
      <div className="col-sm-9">{body}</div>
    </div>
  );
}
