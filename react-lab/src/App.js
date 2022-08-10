import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./components/home"
import Counter1 from "./components/counter/counter1";
import PropsCounter from "./components/counter/propsCounter";
import ReduxCounter from "./components/counter/reduxCounter";
import Index from "./components/student";
import NewStudent from "./components/student/newStudent";
function App() {
  return (
    <div className="App">
      <ul>
        <Link to='/counter'>Counter without redux</Link>
      </ul>
      <ul>
        <Link to='/counter/props'>Counter Pops</Link>
      </ul>
      <ul>
        <Link to='/counter/redux'>Redux counter</Link>
      </ul>
      <ul>
        <Link to='/student'>Student</Link>
      </ul>

      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/counter'>
          <Route index element={<Counter1/>} />
          <Route path='props' element={<PropsCounter initialValue={10}/>} />
          <Route path='redux' element={<ReduxCounter />} />
        </Route>
        <Route path='/student'>
          <Route element={<Index/> } index/>
          <Route element={<NewStudent/> } path='new'/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
