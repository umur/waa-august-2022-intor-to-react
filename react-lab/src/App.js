import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/home"
import Counter1 from "./components/counter/counter1";
function App() {
  return (
    <div className="App">
      <ul>
        <Link to='/counter'>Counter without redux</Link>
      </ul>

      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/counter'>
          <Route index element={<Counter1/>} />
          <Route path='two' element={<Counter1/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
