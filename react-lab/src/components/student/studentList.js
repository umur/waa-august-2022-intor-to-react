import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchStudents, fetchStudentsWithDetails} from "../redux/studentSlice";
import Student from "./student";


export default function StudentList() {
  const {students, studentsWithDetails, loading, state, error} = useSelector((state) => state.student);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents())
  },[])

  useEffect(() => {
    if(students && students.length > 0)
    dispatch(fetchStudentsWithDetails(students.map(st => st.id)))

  }, [students])
  useEffect(() => {
    console.log('---details----', studentsWithDetails);

  }, [studentsWithDetails])
  return ( loading ? <div>Loading.... Request {state}</div> :
    <div>
      Student List
      {
        students.map(student => <Student key={student.id} student={student}/>)
      }
    </div>
  );
}
