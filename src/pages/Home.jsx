import { useContext, useState } from "react";
import { StudentContext } from "../contexts/StudentContext";
import splashImage from "../assets/img/splash.png";
import splashMobile from "../assets/img/splash_mobile.png";

export default function Home() {
  const { activeStudent } = useContext(StudentContext);
  const [isSmall, setIsSmall] = useState(
    window.innerWidth < 640 ? true : false
  );

  window.addEventListener("resize", () => {
    setIsSmall(window.innerWidth < 767 ? true : false);
  });

  return (
    <main
      id="front-main"
      className="h-100 container-fluid d-flex flex-column justify-content-around ">
      <img
        id="splash-img"
        src={isSmall ? splashMobile : splashImage}
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
