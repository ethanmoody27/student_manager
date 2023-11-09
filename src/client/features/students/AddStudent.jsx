import React, { useState } from "react";
import { useAddStudentMutation } from "./studentsSlice";

const AddStudent = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [addStudent] = useAddStudentMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      imageUrl: "add later",
      gpa: 5,
    };
    console.log(studentData);
    addStudent(studentData);
    setFirstname("");
    setLastname("");
    setEmail("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <br />
        <button type="submit">Add Student</button>
      </form>
    </>
  );
};

export default AddStudent;
