import { useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";

export default function Home() {
  const { activeStudent } = useContext(StudentContext);

  return (
    <main className="container-fluid">
      <h1 className="text-center logo-heading">PixelAcademy</h1>
      <h2>
        Welcome to Pixel Academy, home to the higher arts of virtual
        craftsmanship!
      </h2>
      <a href={`#/courses/`} className="btn btn-primary mt-auto" role="button">
        Courses
      </a>
      <a href={`#/news/`} className="btn btn-primary mt-auto" role="button">
        News
      </a>
    </main>
  );
}
