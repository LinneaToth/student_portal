//This component returns each news item (received as prop), styled as a full-width card.

import { v4 as uuidv4 } from "uuid";

export default function NewsItem({ newsItem }) {
  return (
    <article
      className="card container m-3 shadow-sm rounded-3 bg-light"
      style={{ padding: "2.5rem", lineHeight: "1.75" }}>
      <h3 className="h3 pb-2 mb-4 text-primary lead">{newsItem.title}</h3>
      <p>
        <strong>Topics:</strong>
        {newsItem.tags.map((topic) => (
          <span
            key={uuidv4()}
            className="badge text-bg-primary text-white ms-2 mb-2">
            {topic}
          </span>
        ))}{" "}
      </p>
      <p>{newsItem.body} </p>
      <figcaption className="blockquote-footer mt-4 mb-0 text-end text-primary">
        Posted by <cite title="Source Title">{newsItem.author}</cite>
      </figcaption>
    </article>
  );
}
