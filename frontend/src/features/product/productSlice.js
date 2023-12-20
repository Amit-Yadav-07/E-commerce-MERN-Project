import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { createProductThunk, deleteProductThunk, editProductThunk } from './productThunk';
import {toast} from 'react-toastify'
const initialState = {
    isLoading : false,
    productName : '',
    productDescription : '',
    productPrice : '',
    productImages : [],
    productCategoryOptions : ['men/pants','men/hoodies','men/shirts','women/dresses','women/skirts','women/pants','kids'],
    productCategory : 'men/pants',
    isLoading : false

}

export const createProduct = createAsyncThunk('product/createProduct',createProductThunk);
export const editProduct = createAsyncThunk('product/editProduct',editProductThunk);
export const deleteProduct = createAsyncThunk('product/deleteProduct',deleteProductThunk);

const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers:{
        handleInputChange: (state, { payload: { name, value } }) => {
          
          console.log(state)
          state[name] = value;
          },
          clearValues: () => {
            return {
              ...initialState,
            };
          },
    },
    extraReducers:(builder)=>{
      builder
      .addCase(createProduct.pending,(state,{payload})=>{
        state.isLoading = true;
        console.log(payload)
      })
      .addCase(createProduct.fulfilled,(state,{payload})=>{
        state.isLoading = false;
        toast.success('Product added successfully');
      })
      .addCase(createProduct.rejected,(state,{payload})=>{
        state.isLoading = false;
        console.log(payload)
        toast.error(payload)
      })
    }
})

export const {handleInputChange,clearValues} = productSlice.actions;

export default productSlice.reducer;