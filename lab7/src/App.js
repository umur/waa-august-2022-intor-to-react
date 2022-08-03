import React from 'react';
import Navbar from './component/navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Category from './pages/category';
import Product from './pages/product';
import User from './pages/user';
import Address from './pages/address';
import Review from './pages/review';

export default function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/category' element={<Category/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/user' element={<User/>}/>
                <Route path='/address' element={<Address/>}/>
                <Route path='/review' element={<Review/>}/>
            </Routes>
        </Router>
    );
}