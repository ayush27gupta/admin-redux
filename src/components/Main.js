import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./navbar/Navbar";
import Student from "./student/Student";
import NotFound from "./NotFound";
import EditStudent from "./student/EditStudent";
import AddStudent from "./student/AddStudent";

export default function Main() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/students" element={<Student />} />
          <Route path="/editStudent" element={<EditStudent />} />
          <Route path="/addStudent" element={<AddStudent />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
