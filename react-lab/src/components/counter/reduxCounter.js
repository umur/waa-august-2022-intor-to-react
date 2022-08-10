import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByValue} from "../redux/counterSlice";
import {useState} from "react";


export default function ReduxCounter() {
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [inputValueState, setInputValueState] = useState(12)

  function handleOnChange(event) {
    setInputValueState(event.target.value);
  }

  return(
    <div>
      <input type="button" onClick={() => dispatch(increment())} value="+" />

      <h1>Counter is {counter}</h1>

      <input type="button" onClick={() => dispatch(decrement())} value="-" />
      <br/>
      <input type="number" onChange={handleOnChange} value="10" />
      <br/>
      <input type="button" onClick={() => dispatch(incrementByValue({key1: inputValueState}))} value="increment by value" />
    </div>
  );

}
