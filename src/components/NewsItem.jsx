export default function newsItem({ newsItem }) {
  return (
    <article className="container m-2 p-3 shadow-sm rounded-3">
      <h3>{newsItem.title} </h3>
      <p>{newsItem.body} </p>
    </article>
  );
}
