import { useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";
import splashImage from "../assets/img/splash.png";

export default function Home() {
  const { activeStudent } = useContext(StudentContext);

  return (
    <main
      id="front-main"
      className="h-100 container-fluid d-flex flex-column justify-content-around ">
      <img
        id="splash-img"
        src={splashImage}
        className="img-fluid"
        alt="Responsive image"
      />
      <h1 className="w-100 text-end text-primary display-6">
        - Home to the <span className="fst-italic">fine arts </span>of virtual
        craftsmanship
      </h1>
    </main>
  );
}
