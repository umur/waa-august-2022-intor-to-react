import React from "react";
import { useState } from "react";
import{useNavigate} from 'react-router-dom'
import{useDispatch} from 'react-redux'
import axios from 'axios'

export default function AddProduct(){
    const [pro, setProduct]= useState({});
    const nav = useNavigate();
    var dispatch = useDispatch();

    const createProduct = async(data)=>{
        const result = await axios.post("http://localhost:8080/products/", data);
    
        if(result.status==201){
            nav('/products');
        }
    }

    const addProductClick=()=>{

        let obj = {
            name:pro.name,
            price:pro.price,
            rating:pro.rating,
            category:{
                name:"cat_name",
                id:1000
            }
        }
        createProduct(obj);

       // nav('/products');
    }

    return(<div>
    Name: <input type="text" value={pro.name} onChange={(e)=>{ pro.name = e.target.value; setProduct(pro)}}/><br/>
    Price: <input type="number" value={pro.price} onChange={(e)=>{ pro.price = e.target.value; setProduct(pro)}}/><br/>
    Rating: <input type="number" value={pro.rating} onChange={(e)=>{ pro.rating = e.target.value; setProduct(pro)}}/><br/>
    <button onClick = {addProductClick}>Add Product</button>
    </div>)
}