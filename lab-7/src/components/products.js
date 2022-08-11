import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from "../store/productSlice";
import Product from "./product";

export default function Products(){
    const pro = useSelector(store=>store.product);
    console.log("=================");
    console.log(pro);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllProducts("abc"));
    },[])


    return(
        <>

        {
            pro.products.map(p=>{
                return(
                    <Product key={p.id} pre={p}/>
                )
            } )
        }
        </>
        
    )
}