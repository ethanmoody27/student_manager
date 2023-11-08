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
  return <div>SingleStudent</div>;
};

export default SingleStudent;
