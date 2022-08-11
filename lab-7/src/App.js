import logo from './logo.svg';
import './App.css';
import { store } from "./store/store";
import { Provider } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router'
import Products from './components/products';
import productDetails from './components/productDetails';
import AddProduct from './components/addProduct';
import ProductDetails from './components/productDetails';
import { useState } from 'react';
import { createContext } from 'react';

export const CurrencyContext= createContext();

function App() {
  const [cur, setCur]= useState("USD"); 
  const curChange=()=>{
    if(cur=="USD"){
      setCur("EUR");
    }else{
      setCur("USD");
    }
  }
  return (
    <Provider store={store}>
      <BrowserRouter>
      <CurrencyContext.Provider value={cur}>
      <div className="App">
          <ol>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/add-product">Add Product</Link></li>
          </ol>
          Currency: <button onClick={curChange}><label>
            {cur}
            </label></button>
          <Routes>
            <Route path='/products' element={<Products/>} />
            <Route path='/add-product' element={<AddProduct/>} />
            <Route path='/productDetails/:id' element={<ProductDetails/>} />
          </Routes>

        </div>
      </CurrencyContext.Provider>
        
      </BrowserRouter>
    </Provider>


  );
}

export default App;
