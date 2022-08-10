import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchStudents} from "../redux/studentSlice";
import Student from "./student";


export default function StudentList() {
  const {students, loading, state, error} = useSelector((state) => state.student);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents())
  },[])

  return ( loading ? <div>Loading.... Request {state}</div> :
    <div>
      Student List
      {
        students.map(student => <Student key={student.id} student={student}/>)
      }
    </div>
  );
}
