import { useKeycloak } from "@react-keycloak/web"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MyGlobalContext } from "../App";
import Product from "./Product";

export default function Products() {
    const token = useContext(MyGlobalContext)
    const [productsState, setProductsState] = useState([])

    const fetchProducts = async ()=>{
        const url = 'http://localhost:8080/products';
        const config = {
            headers: {
              'Authorization': `Bearer ${token}` 
            }
        }
        const response = await axios.get(url, config)
        setProductsState(response.data)
    }

    useEffect(()=>{
        fetchProducts();
    }, [])

    return (
        <>
        {token ?
            <div>
                <h1>Products</h1>
                {productsState.map(product => <Product product={product} key={product.id}/>)}
            </div>
            :
            <div>
                Please login to see products
            </div>
        }
            
        </>
    )
}