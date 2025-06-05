export default function newsItem({ newsItem }) {
  return (
    <article className="container m-2 p-3 shadow-sm rounded-3 bg-light">
      <h3 className="lead">{newsItem.title} </h3>
      <p>
        <strong>Topics:</strong>
        {newsItem.tags.map((topic) => (
          <span className="badge text-bg-primary text-white ms-1">{topic}</span>
        ))}{" "}
      </p>
      <p>{newsItem.body} </p>
      <figcaption className="blockquote-footer mt-2 text-end">
        Posted by <cite title="Source Title">{newsItem.author}</cite>
      </figcaption>
    </article>
  );
}
