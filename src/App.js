import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./routes/Login";
import NotFound from "./routes/NotFound";
import Product from "./routes/Product";
import SignUp from "./routes/SignUp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Product/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<SignUp/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
