import { useParams } from "react-router";
import { courses } from "../data/courses";

export default function CourseDetails() {
  let { id } = useParams();
  id = id.slice(1); //to get rid of :

  const course = courses.find((course) => course.id == id);

  return (
    <article>
      <a href="/courses">back to courses</a>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </article>
  );
}

// import { useParams } from "react-router";
// import { courses } from "../data/courses";

// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// export default function CourseDetails() {
//   let { id } = useParams();
//   id = id.slice(1); //to get rid of :

//   const course = courses.find((course) => course.id == id);

//   const handleClose = () => (location.href = "/courses");

//   return (
//     <>
//       <Modal
//         show={true}
//         onHide={handleClose}
//         backdrop="static"
//         fullscreen={true}
//         keyboard={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>{course.title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>{course.description}</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
