import {useNavigate} from "react-router-dom";


export default function Student(props) {
  const {id, name, cgpa} = props.student;
  const navigate = useNavigate();

  return (
    <div>
      <div>
        Student Name: {name}
        <br/>
        CGPA: {cgpa}
        <button onClick={() => navigate('/student/new/' + id, {
          state: {
            id, name, cgpa
          }
        })}>Details</button>
      </div>
      <br/>
    </div>

  );
}
