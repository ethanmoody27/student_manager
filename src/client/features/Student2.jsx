import "../layout/Root.css"
import StudentList from "./StudentList"

export default function Student2({student}) {
  console.log(student)
  return (
    
    <div className={student.done ? 'done' : 'todo'}>{student.firstName} {student.lastName}</div>
  )
}