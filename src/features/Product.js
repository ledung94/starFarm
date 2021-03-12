import { createSlice } from "@reduxjs/toolkit";
import products from '../components/products/data'


const Product = createSlice({
    name: "product",
    initialState: products,
    reducers: {
        addProduct(state,action){

        }
    }
})

export const {addProduct} = Product.actions;
export default Product.reducer;