import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/products' element={<Products />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
