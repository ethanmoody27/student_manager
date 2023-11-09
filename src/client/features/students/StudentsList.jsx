import React from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import { useGetStudentsQuery } from "./studentsSlice";
import AddStudent from "./AddStudent";
import List from "./List";

const Students = () => {
  const token = useSelector(selectToken);
  const { data, isError, isLoading } = useGetStudentsQuery();
  console.log(data);

  if (!token) {
    return <p>You must be logged in to see your tasks.</p>;
  }
  if (isLoading) {
    return <p>Loading . . .</p>;
  }

  if (isError) {
    return <p>Error . . .</p>;
  }
  return (
    <>
      <br />
      <h2>Student List: {data.length}</h2>
      <br />
      {data.map((student, id) => (
        <List student={student} key={id} />
      ))}
      <br />
      <br />
      <AddStudent />
    </>
  );
};

export default Students;
