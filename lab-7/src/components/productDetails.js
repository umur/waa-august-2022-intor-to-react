import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { CurrencyContext } from "../App";
import { fetchProductDetails } from "../store/productSlice";

export default function ProductDetails(){

    var crr= useContext(CurrencyContext);
    var param = useParams();
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(fetchProductDetails(param.id))
    },[param.id]);

    const pro = useSelector(state=>state.product.product);

    const price = crr =="USD" ? pro.price: pro.price*100;

    return(<>
    <h1>Product</h1>
    <h5>Name: {pro.name}</h5>
    <h5>Name: {pro.rating}</h5>
    <h5>Name: {
            price
    }</h5>
    </>)
}