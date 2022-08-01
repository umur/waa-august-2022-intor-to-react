import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [by, setBy] = useState(0);

    const incrementBy = () => {
        setCount(count + by);
        setBy(0);
    }

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <div>
                <button className={'small-button'} onClick={decrement}>-
                </button>
                <div className={'simple-text'}>{count}</div>
                <button className={'small-button'} onClick={increment}>+
                </button>
            </div>
            <div>
                <input value={by} onChange={event => setBy(+event.target.value)}/>
                <button onClick={() => incrementBy()}>Increment by
                </button>
            </div>
        </>
    )
}

export default Counter;