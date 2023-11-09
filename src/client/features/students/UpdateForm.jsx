import React, { useState } from "react";
import { useUpdateInfoMutation } from "./studentsSlice";
const UpdateForm = ({ id }) => {
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [gpa, setGpa] = useState(null);

  const [updateInfo] = useUpdateInfoMutation();
  console.log(id);
  const handleUpdate = (e) => {
    e.preventDefault();
    const studentData = {
      id: id,
      firstName: firstname,
      lastName: lastname,
      email: email,
      imageUrl: imageUrl,
      gpa: gpa,
    };
    console.log(studentData);
    updateInfo(studentData);
    // setFirstname("");
    // setLastname("");
    // setEmail("");
  };
  return (
    <>
      <h2>Update Form</h2>
      <br />
      <form onSubmit={handleUpdate}>
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
        </label>{" "}
        <br />
        <label>
          Image URL:
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>{" "}
        <br />
        <label>
          gpa:
          <input
            type="number"
            step=".01"
            value={gpa}
            onChange={(e) => setGpa(parseFloat(e.target.value))}
          />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default UpdateForm;
