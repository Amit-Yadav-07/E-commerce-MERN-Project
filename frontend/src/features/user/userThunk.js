import { toast } from "react-toastify";
import customFetch from "../../utils/axios";


export const registerUserThunk = async (url, user, thunkAPI) => {
    try {
      const resp = await customFetch.post(url, user);
      
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  };

  export const loginUserThunk = async (url, user, thunkAPI) => {
    try {
      const resp = await customFetch.post(url, user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  };

