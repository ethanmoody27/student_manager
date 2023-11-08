import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const List = ({ student }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div key={student.id}>
        <div>
          <h2>{student.firstname}</h2>
          <h3>
            <Link to={`/students/${student.id}`}>See Details</Link>
          </h3>
        </div>
      </div>
      <br />
    </>
  );
};

export default List;
