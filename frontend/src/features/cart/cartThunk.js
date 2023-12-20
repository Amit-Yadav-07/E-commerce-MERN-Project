// ! cart Thunk to manage/get cart items in the database

import customFetch from "../../utils/axios";

// ! whenever user changes items to the cart, this function is used to send the current state

export const manageCartThunk = async (url, cart, thunkAPI) => {
    try {

      
      const resp = await customFetch.post(url, cart);
      return resp.data;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  };

  
  // ! request to get cart items of a particular user from the database

  export const getUserCartItemsThunk = async (url, thunkAPI) => {
    try {
      // ! custom fetch means the customized axios request
      const resp = await customFetch.get(url);
      
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  };
 

