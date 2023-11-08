import { useParams } from "react-router-dom";
import { useGetStudentQuery } from "./studentsSlice";

const SingleStudent = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetStudentQuery(id);
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
      </div>
    </>
  );
};

export default SingleStudent;
