import * as React from "react";
import { useContext, useState, useEffect } from "react";

//MUI imports
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

//Data and context
import { courses } from "../data/courses";
import { StudentContext } from "../contexts/StudentContext";

//If there is an idProp, it indicates the dialog was accessed from a specific course page. buttonText can be added if wanting something else than "Register" for the button that opens the modal
export default function RegistrationDialog({
  idProp = null,
  buttonText = null,
}) {
  const { availableCourses, registeredCourses, setRegisteredCourses } =
    useContext(StudentContext);

  //courseid is targeting the course the student is about to enlist on. If the dialog has been accessed with a specific course in mind, that is going to preset. Otherwise, it will just add the first available course on the list as default.
  const [courseid, setCourseid] = useState(
    idProp ? idProp : availableCourses[0].id
  );

  const course = courses.find((c) => c.id === courseid); //finding the corresponding course object

  const isAlreadyRegistered = registeredCourses.some((c) => c.id === idProp); //checks if the user is already registered

  const [open, setOpen] = React.useState(false); //If the modal is open or not

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //On opening the modal (or when available courses change), the current course is set to idProp if it's a valid course in the list — otherwise, it defaults to the first available course (or an empty string if none are available).
  useEffect(() => {
    if (open) {
      const validCourseId =
        idProp && availableCourses.find((c) => c.id === idProp)
          ? idProp
          : availableCourses[0]?.id || "";

      setCourseid(validCourseId);
    }
  }, [open, idProp, availableCourses]);

  return (
    <React.Fragment>
      <button
        className="btn btn-primary me-2"
        onClick={(e) => {
          handleClickOpen();
          e.target.blur();
        }}
        disabled={isAlreadyRegistered}>
        {isAlreadyRegistered ? "Already registered" : buttonText || "Register"}
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (e) => {
              e.preventDefault();
              setRegisteredCourses((regc) => [...regc, course]);
              setCourseid(availableCourses[0].id);
              handleClose();
            },
          },
        }}>
        <DialogTitle>
          Register to {idProp ? course.title : "course"}
        </DialogTitle>
        <DialogContent>
          {/*The drop down will only show if there is no pre-targeted course */}
          {idProp ? (
            ""
          ) : (
            <Select
              labelId="course-select"
              id="course-select"
              label="Age"
              value={
                availableCourses.some((c) => c.id === courseid) ? courseid : ""
              }
              onChange={(e) => setCourseid(e.target.value)}>
              {availableCourses.map((c) => (
                <MenuItem value={c.id}>{c.title}</MenuItem>
              ))}
            </Select>
          )}
          <DialogContentText>
            To register for this course, please provide your name and e-mail
            below.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Full name"
            type="name"
            fullWidth
            variant="standard"
          />{" "}
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
            }}>
            Cancel
          </Button>
          <Button type="submit">Register</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
