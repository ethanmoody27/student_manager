import { Link } from "react-router-dom";

// A Student Card displays a brief preview of the Student in the StudentList

// Check how the API has data listed after student

export default function StudentCard({ student }) {
  console.log(student);
  return (
    <li className="student-card">
      <div className="student-image">
        {/* Link seeded image here: */}
        <img src={student.imageUrl} alt=""/> 
      </div>
      <section className="student-info">
        <h2>{student.firstName}</h2>
        <h2>{student.lastName}</h2>
      <Link to={`/students/${student.id}`}>More Info</Link>
      </section>
      </li>
  );
};