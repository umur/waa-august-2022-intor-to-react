import{createAsyncThunk, createSlice}from '@reduxjs/toolkit';
import axios from 'axios';

import{useNavigate} from 'react-router-dom'

export const fetchAllProducts= createAsyncThunk("fetchall products",async (param)=>{
    const result = await axios.get("http://localhost:8080/products");
    
    return result.data;
})

export const fetchProductDetails= createAsyncThunk("fetch product details",async (param)=>{
    const result = await axios.get("http://localhost:8080/products/"+param);
    
    return result.data;
})

export const createProduct= createAsyncThunk("create product",async (product)=>{
    const result = await axios.post("http://localhost:8080/products/", product);
    
    return result.data;
})

const productSlice = createSlice({
    name:"product slice",
    initialState:{
        products:[],
        product:{}
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProducts.fulfilled, (state, action)=>{
            console.log("+++++++++++");
            console.log(action.payload);
            state.products =action.payload;
            //state.products.push() ;
        })
        builder.addCase(fetchProductDetails.fulfilled, (state, action)=>{
            
            state.product =action.payload;
            //state.products.push() ;
        })
        builder.addCase(createProduct.fulfilled, (state, action)=>{
            //state.productAdded =action.payload;
           console.log("fulfield", action);
           const nav = useNavigate();
           nav('/products')
        })

    }
})

export default productSlice.reducer;