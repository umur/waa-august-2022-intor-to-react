import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./components/home"
import Counter1 from "./components/counter/counter1";
import PropsCounter from "./components/counter/propsCounter";
import ReduxCounter from "./components/counter/reduxCounter";
import Index from "./components/student";
import NewStudent from "./components/student/newStudent";
import {createContext, useEffect, useRef, useState} from "react";
import {StudentDetails} from "./components/student/studentDetails";
export const LanguageContext = createContext({
  language: "EN",
  setLanguage: () => {}
})
export function App() {
  const ref = useRef();

  const setLanguage = (language) => {
    setLanguageState({...languageState, language: language})
  }
  const initialState = {
    language: 'EN',
    setLanguage: setLanguage

  }

  let [languageState, setLanguageState] = useState(initialState);



  useEffect(() => {
    ref.current.disabled = !(languageState.language === 'ES' || languageState.language === 'EN');
  },[languageState])

  function handleOnClick(e) {
    e.preventDefault();
    if(languageState.language ==='EN') {
      setLanguage('ES')
    } else if(languageState.language ==='ES') {
      setLanguage('EN')
    }
  }

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
      <div>
        Language {languageState.language}
        <button ref={ref} onClick={handleOnClick}>Change Language</button>
      </div>


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
          <Route element={ <LanguageContext.Provider value={languageState}>
              <StudentDetails/>
          </LanguageContext.Provider>} path='new/:id'/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
