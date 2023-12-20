import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';

export const getAllProductsThunk = async (_, thunkAPI) => {
  const { page, search, productCategory, sort } = 
    thunkAPI.getState().allProducts;

  let url = `/products?productCategory=${productCategory}&sort=${sort}&page=${page}`;
  if (search) {
    url = url + `&search=${search}`;
  }
  console.log(url,'from get all products thunk')
  try {
    const resp = await customFetch.get(url);
    console.log(resp)
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};