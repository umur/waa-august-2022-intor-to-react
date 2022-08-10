import {createContext, useEffect} from "react";
import MiddleColorContext from "./MiddleColorContext";

const {useState} = require("react");

export const ColorContext = createContext();

export default function PropsCounter(props) {
  const {initialValue} = props;
  let [counterState, setCounterState] = useState(initialValue && !isNaN(initialValue) ? parseInt(initialValue) : 0)

  let [colorState, setColorState] = useState(counterState % 2 ? "RED" : "GREEN");

  useEffect(() => {
    setColorState(counterState % 2 ? "RED" : "GREEN");
  }, [counterState]);



  function inc() {
    setCounterState(++counterState);
  }

  function dec() {
    setCounterState(--counterState);
  }

  return (
    <div>
      <input type="button" onClick={inc} value="+" />
      <h1>{counterState}</h1>
      <input type="button" onClick={dec} value="-" />
      <div>
        <ColorContext.Provider value={colorState}>
          <MiddleColorContext color={colorState} />
        </ColorContext.Provider>
      </div>
    </div>
  );

}
