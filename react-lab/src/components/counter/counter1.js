const {useState} = require("react");


export default function Counter1() {
  let [counterState, setCounter] = useState(0)

  function inc() {
    setCounter(++counterState);
  }

  function dec() {
    setCounter(--counterState);
  }

  return (
    <div>
      <input type="button" onClick={inc} value="+" />
      <h1>{counterState}</h1>
      <input type="button" onClick={dec} value="-" />
    </div>
  );

}
