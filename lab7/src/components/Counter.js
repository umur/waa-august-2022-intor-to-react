import {useState} from "react";

const Counter = ()=>{

    let [counterState, setCounterState] = useState(0);

    let [valueState, setValueState] = useState(0);

    const onDecClicked = () => {
        setCounterState(--counterState);
    }

    const onIncClicked = () => {
        setCounterState(++counterState);
    }

    const onValueChanged = (event) => {
        setValueState(event.target.value);
        setCounterState(Number(valueState) + counterState);
    }

    return (
        <>
            <input
                type= 'button'
                value='+'
                onClick={onIncClicked}
            />

            <h1>{counterState}</h1>
            <input type='text' value={valueState} onChange={onValueChanged}/>

            <input 
                type='button'
                value='-'
                onClick={onDecClicked}
            />
        </>
    )
}

export default Counter;