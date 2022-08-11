import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Product(prop){
    //{"id":1000,"name":"product 1","price":25.5,"rating":4.5}
    const nav = useNavigate()
    const onProductClick=()=>{
        //alert(prop.pre.id)
        nav("/productDetails/"+prop.pre.id)
    }
    return(<>
    <div >
        <h5>Product Name: {prop.pre.name}</h5>
        <h5>Rating: {prop.pre.rating}</h5>
        <button onClick={onProductClick}>View Details</button>
    </div>
    

    </>)
}