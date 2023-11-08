import { useState } from "react";
import "../layout/Root.css"

/** Form for creating new students */
export default function NewStudent() {
  const [student, setStudent] = useState("");
  // const [createStudent] = useCreateStudentMutation();

  const create = (e) => {
    e.preventDefault();
    // createStudent(student);
    setStudent("");
  };

  return (
    <form onSubmit={create}>
      <input
        type="text"
        value={student}
        onChange={(e) => setStudent(e.target.value)}
      />
      <button>Create</button>
    </form>
  );
}