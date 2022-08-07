import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import LoginPage from "./pages/Login";
import Header from "./component/Header";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;