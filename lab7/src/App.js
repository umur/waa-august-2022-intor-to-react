import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import Login from './Auth/Login';
import { Link } from 'react-router-dom';
import Signup from './Auth/Signup';
import { useState } from 'react';
function App() {
  let [counterState, setCounterState] = useState(0);

  const increament = () => {
    setCounterState(++counterState);
  }

  const decrement = () => {
    setCounterState(--counterState);
  }
  return (
    <div className="App">

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

      <ul>
        <li><Link to='/login'>Login</Link> </li>
        <li><Link to='/signup'>signup</Link> </li>
      </ul>

      <hi>Counter value : {counterState}</hi>
      <button onClick={increament}>Increament Counter</button>
      <button onClick={decrement}>Decrement Counter</button>
    </div>
  );
}

export default App;
