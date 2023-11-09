import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const List = ({ student }) => {
  const dispatch = useDispatch();
  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div key={student.id}>
        <div>
          <h2>
            {student.firstname}
            {"    "} {"   "}
            <button onClick={() => handleDelete(student.id)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </h2>

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
