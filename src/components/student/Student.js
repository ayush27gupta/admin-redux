import React from "react";

import StudentTable from "./StudentTable";
import "./table.css";
import { Link } from "react-router-dom";

export default function Student() {
  return (
    <div>
      <div className="head-student">
        <div className="heading-student">
          <h1>Student Details</h1>
        </div>
        <div>
          <Link to="/addStudent">
            <button className="btn-student">Add Student</button>
          </Link>
        </div>
      </div>
      <div className="table-container">
        <div className="table">
          <StudentTable />
        </div>
      </div>
    </div>
  );
}
