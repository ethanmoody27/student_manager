import { useParams } from "react-router-dom";
import { useGetStudentQuery } from "./studentsSlice";
import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import UpdateForm from "./UpdateForm";

const SingleStudent = () => {
  const token = useSelector(selectToken);
  const { id } = useParams();
  const { data, error, isLoading } = useGetStudentQuery(id);
  if (!token) {
    return <p>You must be logged in to see your tasks.</p>;
  }
  if (isLoading) {
    return <div className="loading-message">Loading...</div>;
  }

  if (error) {
    return (
      <div className="error-message">Error fetching data: {error.message}</div>
    );
  }
  console.log(data);
  return (
    <>
      <div key={data.id}>
        <div>
          <img src={data.imageUrl} alt="photo" width="250" height="300" />
        </div>
        <div>
          <p>Student Name:</p>
          <h2>
            {data.firstname} {"   "}
            {data.lastname}
          </h2>
          <p>Email:</p>
          <h3>{data.email}</h3>
          <p>GPA:</p>
          <h4>{data.gpa}</h4>
        </div>
      </div>{" "}
      <br />
      <UpdateForm id={data.id} />
    </>
  );
};

export default SingleStudent;
