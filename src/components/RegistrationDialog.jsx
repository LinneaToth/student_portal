import * as React from "react";
import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { courses } from "../data/courses";
import { StudentContext } from "../contexts/StudentContext";

export default function RegistrationDialog({ idProp = null }) {
  const {
    availableCourses,
    activeStudent,
    setActiveStudent,
    registeredCourses,
    setRegisteredCourses,
  } = useContext(StudentContext);

  const [courseid, setCourseid] = useState(
    idProp ? idProp : availableCourses[0].id
  );

  const course = courses.find((c) => c.id === courseid); //finding the corresponding course object

  const isAlreadyRegistered = registeredCourses.some((c) => c.id === idProp);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button
        className="btn btn-primary me-2"
        onClick={(e) => {
          handleClickOpen();
          e.target.blur();
        }}
        disabled={isAlreadyRegistered}>
        {isAlreadyRegistered ? "Already registered" : "Register"}
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              setRegisteredCourses((regc) => [...regc, course]);
              console.log(registeredCourses);
              setCourseid(availableCourses[0].id);
              handleClose();
            },
          },
        }}>
        <DialogTitle>
          Register to {idProp ? course.title : "course"}
        </DialogTitle>
        <DialogContent>
          {idProp ? (
            ""
          ) : (
            <Select
              labelId="course-select"
              id="course-select"
              label="Age"
              value={courseid}
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
