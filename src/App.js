import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Public from "./public/Public";
import Private from "./private/Private";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Public title={'Public pages'} />} />
              <Route path="sign-in" element={<SignIn />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="/p/*" element={<Private />} />
          </Routes>
      </Router>
  );
}

export default App;
