import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import productSlice from './features/product/productSlice';
import allProductsSlice from './features/allProducts/allProductsSlice';
import cartSlice from './features/cart/cartSlice';

export const store = configureStore({
    reducer: {
        // ! user related redux functionality
        user : userSlice,
        // ! product related redux functionality
        product : productSlice,
        // ! allProducts related redux functionality
        allProducts : allProductsSlice,
        // ! cart related redux functionality
        cart : cartSlice
    },
  });