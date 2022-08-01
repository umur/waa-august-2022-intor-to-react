import React from 'react';
import { Routes, Route } from "react-router-dom";
import Product from "./Product";
import Counter from "./Counter";

function Private () {
    return (
        <Routes>
            <Route path={''} element={<Counter />}/>
            <Route path={'product'} element={<Product />}/>
            <Route path={'counter'} element={<Counter />}/>
        </Routes>
    )
}

export default Private;