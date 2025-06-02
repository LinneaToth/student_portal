export default function Home() {
  return (
    <main className="container-fluid">
      <h1>PixelAcademy, big chunky gradient text</h1>
      <h2>Why we're awesome</h2>
      <a href={`/courses/`} className="btn btn-primary mt-auto" role="button">
        Courses
      </a>
      <a href={`/news/`} className="btn btn-primary mt-auto" role="button">
        News
      </a>
    </main>
  );
}
