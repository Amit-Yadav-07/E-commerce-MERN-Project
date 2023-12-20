import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {toast} from 'react-toastify'
import { getAllProductsThunk } from './allProductsThunk';
const initialFiltersState = {
    search: '',
    productCategory: 'all',
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
  };
  
  const initialState = {
    isLoading: false,
    products: [],
    totalProducts: 0,
    
    numOfPages: 1,
    page: 1,
  
    ...initialFiltersState,
  };

  export const getAllProducts = createAsyncThunk('allProducts/getAllProducts', getAllProductsThunk);

const allProductsSlice = createSlice({
    name : 'allProducts',
    initialState,
    reducers: {
        showLoading: (state) => {
          state.isLoading = true;
        },
        hideLoading: (state) => {
          state.isLoading = false;
        },
        handleChange: (state, { payload: { name, value } }) => {
          state.page = 1;
          if(value==='all-products'){
            state['productCategory'] = 'all'
          }else{

            state[name] = value;
          }
        },
        clearFilters: (state) => {
          return { ...state, ...initialFiltersState };
        },
        changePage: (state, { payload }) => {
          state.page = payload;
        },
        clearAllProductsState: (state) => initialState,
      },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProducts.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getAllProducts.fulfilled, (state, { payload }) => {
          state.isLoading = false;
          console.log(payload)
          state.products = payload.products;
          state.numOfPages = payload.numOfPages;
          state.totalProducts = payload.totalProducts;
        })
        .addCase(getAllProducts.rejected, (state, { payload }) => {
          state.isLoading = false;
          toast.error(payload);
        })
    }
})

export const {
    showLoading,
    hideLoading,
    handleChange,
    clearFilters,
    changePage,
    clearAllProductsState,
  } = allProductsSlice.actions;

  export default allProductsSlice.reducer;