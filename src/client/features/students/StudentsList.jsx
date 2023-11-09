import React from "react";
import { useGetStudentsQuery } from "./studentsSlice";
import AddStudent from "./AddStudent";
import List from "./List";

const Students = () => {
  const { data, isError, isLoading } = useGetStudentsQuery();
  console.log(data);
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
