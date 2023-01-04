import {useContext, useEffect, useRef} from "react";
import {ColorContext} from "./propsCounter";

export default function ColorContextDemo() {
  const color = useContext(ColorContext)
  const bgRef = useRef(null);
  console.log(color)

  useEffect(() => {
    bgRef.current.style.background = color;
  },[color])

  return (
    <h1 ref={bgRef}>color is {color}</h1>
  )
}
