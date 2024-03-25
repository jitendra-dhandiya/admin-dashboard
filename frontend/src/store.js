import {configureStore} from '@reduxjs/toolkit'
import authSlice from './Redux-Toolkit/auth/authSlice';
import productSlice from './Redux-Toolkit/products/productSlice';
import visitorSlice from './Redux-Toolkit/visitors/visitorSlice';

const store = configureStore({
    reducer:{
        authReducer:authSlice,
        productsReducer:productSlice,
        visitorsReducer:visitorSlice,
    }
})

export default store;