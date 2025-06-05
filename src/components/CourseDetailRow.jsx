export default function CourseDetailRow({ title, body }) {
  return (
    <div className="row mb-2">
      <div className="col-sm">
        <strong>{title}</strong>
      </div>
      <div className="col-sm-9">{body}</div>
    </div>
  );
}
