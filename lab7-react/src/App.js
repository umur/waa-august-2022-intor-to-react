import logo from './logo.svg';
import './App.css';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import {Link} from 'react-router-dom';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li><Link to='/signin'>Sign In</Link></li>
          <li><Link to='/signup'>Sign Up</Link></li>
        </ul>

        <Routes>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/signup' element={<Signup />}/>
      </Routes>
      </header>
      
    </div>
  );
}

export default App;
