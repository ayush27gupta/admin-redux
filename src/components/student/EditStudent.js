import { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import "./inputText.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { editStudent } from "../../redux/students/actions/studentActions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const EditStudent = () => {
  const nav = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const students = useSelector((state) => state.studentData);

  const [stu, setStu] = useState({
    name: "",
    age: "",
    batch: "",
    course: "",
    change: "",
    id: "",
  });

  let loc = +location.state.itemID;

  useEffect(() => {
    students.map((prevState) => {
      if (+prevState.id === loc) {
        setStu({
          name: prevState.name,
          age: prevState.age,
          batch: prevState.batch,
          course: prevState.course,
          change: prevState.change,
          id: prevState.id,
        });
      }
    });
  }, [loc, students]);

  const onSubmit = () => {
    dispatch(editStudent(stu));
    nav("/students");
  };

  const btnDisable =
    stu.name === "" || stu.age === "" || stu.batch === "" || stu.course === "";

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
                  value={stu.name}
                  onChange={(e) =>
                    setStu({ ...stu, [e.target.id]: e.target.value })
                  }
                  focused
                  id="name"
                />
              </div>
              <div className="text-input">
                <TextField
                  label="AGE"
                  color="secondary"
                  value={stu.age}
                  onChange={(e) =>
                    setStu({ ...stu, [e.target.id]: e.target.value })
                  }
                  focused
                  id="age"
                />
              </div>
            </div>
            <div className="text-input-parent2">
              <div className="text-input">
                <TextField
                  label="COURSE"
                  color="secondary"
                  value={stu.course}
                  onChange={(e) =>
                    setStu({ ...stu, [e.target.id]: e.target.value })
                  }
                  focused
                  id="course"
                />
              </div>
              <div className="text-input">
                <TextField
                  label="BATCH"
                  color="secondary"
                  value={stu.batch}
                  onChange={(e) =>
                    setStu({ ...stu, [e.target.id]: e.target.value })
                  }
                  focused
                  id="batch"
                />
              </div>
            </div>
          </div>
        </Box>

        <button className="btn-edit" disabled={btnDisable} onClick={onSubmit}>
          Submit
        </button>

        <Link to="/students">
          <button className="btn-edit-back">Go Back</button>
        </Link>
      </div>
    </>
  );
};

export default EditStudent;
