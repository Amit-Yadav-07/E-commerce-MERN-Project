import axios from 'axios';
import { getUserFromLocalStorage } from "./localStorage";


// ! customized axios request url
const customFetch = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
  });

  // ! jwt token
customFetch.interceptors.request.use((config) => {

    const user = getUserFromLocalStorage();
    if (user) {
      config.headers['Authorization'] = `Bearer ${user.token}`;
    }
    return config;
});

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  console.log(error)

  if(error.message==='Network Error'){
    return thunkAPI.rejectWithValue('There is some network issue. Please try again later.')
  }
    if (error?.response?.status === 401) {
      return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
    }
    return thunkAPI.rejectWithValue(error.response.data.message);
  };

  /// ! custom fetch helps us to customize our requests which we are sending from the frontend

// ! helps us to avoid repeating the baseURL over and over again in our requests

export default customFetch;