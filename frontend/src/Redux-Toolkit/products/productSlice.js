import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import {createProductAPI,fetchProductAPI} from './productAPI'
import toast from 'react-hot-toast';

const initialState = {
    product:[],
    status:'idle'
}

export const fetchAllProductsAsync = createAsyncThunk(
    'product/fetchproducts',
    async () =>{
        const response = await fetchProductAPI();
        return response.data;
    }
)

export const createproductAsync = createAsyncThunk(
    'product/createProduct',
    async(product)=>{
        const response = await createProductAPI(product);
        return response.data
    }
)

export const productSlice = createSlice({
    name:"product",
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(fetchAllProductsAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.product = action.payload;
          })
          .addCase(createproductAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(createproductAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.product.products.push(action.payload);
            toast.success("Product Created Successfully")
          })
}})

export const selectProducts = (state) => state.productsReducer?.product?.products;
export default productSlice.reducer;