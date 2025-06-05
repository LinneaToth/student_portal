export default function newsItem({ newsItem }) {
  return (
    <article className="container m-2 p-3 shadow-sm rounded-3">
      <h3>{newsItem.title} </h3>
      <p>
        <strong>Topics:</strong>
        {newsItem.tags.map((topic) => (
          <span className="badge text-bg-light ms-1">{topic}</span>
        ))}{" "}
      </p>
      <p>{newsItem.body} </p>
      <figcaption className="blockquote-footer mt-2">
        Posted by <cite title="Source Title">{newsItem.author}</cite>
      </figcaption>
    </article>
  );
}
