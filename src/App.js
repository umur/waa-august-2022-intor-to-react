import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Login from "./Login"; 
import NotFound from "./NotFound";
import Products from "./Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
