import {useContext, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createStudent} from "../redux/studentSlice";
import {useLocation, useParams} from "react-router-dom";
import {LanguageContext} from "../../App";


export default function NewStudent() {
  const [studentState, setStudentSate] = useState({id: 0, name: '', cgpa: 0});
  const {loading, state, error} =useSelector((s) => s.student);
  const dispatch = useDispatch();



  const parms = useParams();
  const location = useLocation();
  useEffect(() => {
    if(location.state) {
      setStudentSate(location.state);
      console.log(location.state)
    }
  }, [location.state])


  function handleOnChange(event) {
    let {name, value} = event.target;
    if(name === 'cgpa') {
      value = isNaN(value) ? 0 : parseFloat(value);
    }
    setStudentSate({...studentState, [name]: value})
  }

  function handleOnClickCreate(event) {
    event.preventDefault();

    dispatch(createStudent(studentState));

  }


  useEffect(() => {
    if(!loading && state === 'fulfilled') {
      //setStudentSate({id: 0, name: '', cgpa: 0});
    }
  }, [loading])



  return (
    <div>
      <div>
        <label>Name</label>
        <input type='text' onChange={handleOnChange} value={studentState.name} name="name"/>
      </div>
      <div>
        <label>CGPA</label>
        <input type='number' onChange={handleOnChange} value={studentState.cgpa} name="cgpa"/>
      </div>

      <button onClick={handleOnClickCreate}>Create</button>

      {state} {error}
      {
        state === 'rejected' ? <div>{error}</div> : <></>
      }



    </div>
  );
}
