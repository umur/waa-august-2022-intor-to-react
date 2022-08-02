import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Auth from './components/uaa/auth';
import Main from "./components/modules/main";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Navigate to="/auth" />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App; 
