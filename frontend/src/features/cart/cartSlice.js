import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserCartItemsThunk, manageCartThunk } from "./cartThunk";




const initialState = {
  // cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  // amount: JSON.parse(localStorage.getItem('cartItemsAmount')) || 0,
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
};

export const manageCart = createAsyncThunk(
  'cart/manageCart',
  async (cartItems, thunkAPI) => {
    console.log(cartItems)
    return manageCartThunk('/cart/manage', cartItems, thunkAPI);
  }
);
export const getCartItems = createAsyncThunk(
  'cart/getItems',
  async (thunkAPI) => {
    return getUserCartItemsThunk('/cart', thunkAPI);
  }
);



const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      console.log(payload)
      state.cartItems = [...state.cartItems, { ...payload, amount: 1 }]
      state.amount = state.amount + 1
    },
    removeFromCart: (state, { payload }) => {

      const cartItem = state.cartItems.find((item) => {
        return item.product._id === payload.product._id;
      })

      const itemAmount = cartItem.amount

      const newProducts = state.cartItems.filter((item) => {
        return item.product._id !== payload.product._id
      })
      state.cartItems = [...newProducts]

      state.amount = state.amount - itemAmount
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0
      manageCart({cartItems:state.cartItems})
    },
    removeItem: (state, action) => {
      
      const itemId = action.payload.id;
      const cartItem = state.cartItems.find((item) => {
        return item.product._id === itemId
      })
      const itemAmount = cartItem.amount;
      state.amount = state.amount - itemAmount
      state.cartItems = state.cartItems.filter((item) => item.product._id !== itemId);

      manageCart({cartItems:state.cartItems})

    },
    increase: (state, action) => {

      const cartItem = state.cartItems.find((product) => {
        console.log(product.product)
        return product.product._id === action.payload.id;
      });

      console.log(cartItem);
      cartItem.amount = action.payload.amount + 1;
      state.amount = state.amount + 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find((product) => {
        console.log(product.product)
        return product.product._id === action.payload.id;
      });
      cartItem.amount = cartItem.amount - 1;
      state.amount = state.amount - 1;
      if(state.cartItems.length === 0){
        manageCart({cartItems:state.cartItems})
      }

    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.product.productPrice;

      });


      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(manageCart.pending, (state) => {
        state.isLoading = true;
      }).addCase(manageCart.fulfilled, (state) => {
        state.isLoading = false
      }).addCase(manageCart.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCartItems.fulfilled, (state,{payload}) => {
        
        state.isLoading = false
        state.cartItems = payload.data

        let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.product.productPrice;

      });


      state.amount = amount;
      state.total = total;
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false
      })
  }
})

export const { addToCart, removeFromCart, clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;