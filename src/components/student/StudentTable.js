import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

import "./table.css";
import { useSelector } from "react-redux";

const StudentTable = () => {
  const students = useSelector((state) => state.studentData);

  let navigate = useNavigate();

  const handleEdit = (e) => {
    const itemId = e.target.value;

    navigate("/editStudent", { state: { itemID: itemId } });
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Course</TableCell>
              <TableCell align="right">Batch</TableCell>
              <TableCell align="right">Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow
                key={student.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {student.name}
                </TableCell>
                <TableCell align="right">{student.age}</TableCell>
                <TableCell align="right">{student.course}</TableCell>
                <TableCell align="right">{student.batch}</TableCell>
                <TableCell align="right">
                  <button
                    className="change-link"
                    onClick={handleEdit}
                    value={student.id}
                  >
                    {student.change}
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StudentTable;
