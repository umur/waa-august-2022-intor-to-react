import {useState} from "react";

let Person = () => {

    let [personState, setPersonState] = useState({
        fname: 'default fname',
        lname: 'default lname'
    })

    const onChanged = (event) => {
        setPersonState({...personState, [event.target.name]: event.target.value})
    }

    // const onLnameChanged = (event) => {
    //     setPersonState({...personState, lname: event.target.value})
    // }

    const resetFields = () => {
        setPersonState({fname: "", lname: ""})
    }

    const saveFields = () => {
        console.log(personState.fname+" "+personState.lname);
        resetFields();
    }

    return (
        <>
            <input type='text' value={personState.fname} onChange={(event) => onChanged(event)} name='fname'/>
            <input type='text' value={personState.lname} onChange={(event) => onChanged(event)} name='lname'/>
            <input type='button' value='Reset' onClick={resetFields}/>
            <input type='button' value='Save' onClick={saveFields}/>
        </>
    )
}

export default Person;