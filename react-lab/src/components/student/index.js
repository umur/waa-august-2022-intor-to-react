import {Route, Routes, useNavigate} from "react-router-dom";
import NewStudent from "./newStudent";
import StudentList from "./studentList";

export default function Index() {
  const navigate = useNavigate();

  return(
    <div>
      <div>
        <StudentList/>

      </div>
      <button onClick={() => navigate('new')}>New Student</button>

      <Routes>
        <Route path='new' element={<NewStudent/>}/>
      </Routes>
    </div>
  );

}
