import { useSelector } from "react-redux";
import { selectToken } from "./auth/authSlice";
import NewStudent from "./NewStudent";

import "../layout/Root.css"
import Student2 from "./Student2";

const mockData = [
  {
    student: true,
    firstName: "Amy",
    lastName: "Winters",
    done: true,
  },
  {
    student: true,
    firstName: "Todrick",
    lastName: "Summer",
    done: true,
  },
  {
    student: false,
    firstName: "Chris",
    lastName: "Spring",
    done: false,
  },
  {
    student: true,
    firstName: "August",
    lastName: "Jones",
    done: false,
  },
]

/** Main interface for user to interact with their tasks */
export default function StudentList() {
  const students = useSelector(state => state.students)
  console.log(students)
  // const token = useSelector(selectToken);
  // const { data: students, isLoading } = useGetStudentsQuery();

  // if (!token) {
  //   return <p>You must be logged in to see your list of students.</p>;
  // }

  return (
    <>
    {students?.map((s,i) => <Student2 student={s} key={`${s.firstName}-${i}`}/>)}
    
    </>
    // <div className="students">
    //   <h1>Students</h1>
    //   <h2>Add New Student</h2>
    //   <NewStudent />
    //   <h2>Your Students</h2>
    //   {isLoading && <p>Loading students...</p>}
    //   {students && (
    //     <ul>
    //       {students.map((student) => (
    //         <Student key={student.id} student={student} />
    //       ))}
    //     </ul>
    //   )}
    // </div>
  );
}