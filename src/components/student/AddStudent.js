import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import "./inputText.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addStudent } from "../../redux/students/actions/studentActions";

import { useDispatch } from "react-redux";

const AddStudent = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [batch, setBatch] = useState("");
  const [course, setCourse] = useState("");

  const btnDisable = name === "" || age === "" || batch === "" || course === "";

  const onAdd = () => {
    dispatch(
      addStudent({
        name: name,
        age: age,
        batch: batch,
        course: course,
        change: "Edit",
        id: Date.now(),
      })
    );
  };
  return (
    <>
      <div className="edit-container">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="text-input-parent">
            <div className="text-input-parent1">
              <div className="text-input">
                <TextField
                  label="NAME"
                  color="secondary"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  focused
                />
              </div>
              <div className="text-input">
                <TextField
                  label="AGE"
                  color="secondary"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  focused
                />
              </div>
            </div>
            <div className="text-input-parent2">
              <div className="text-input">
                <TextField
                  label="COURSE"
                  color="secondary"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  focused
                />
              </div>
              <div className="text-input">
                <TextField
                  label="BATCH"
                  color="secondary"
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                  focused
                />
              </div>
            </div>
          </div>
        </Box>
        <div className="btns">
          <Link to="/students">
            <button className="btn-edit" onClick={onAdd} disabled={btnDisable}>
              Add
            </button>
          </Link>
          <Link to="/students">
            <button className="btn-edit-back">Go Back</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
