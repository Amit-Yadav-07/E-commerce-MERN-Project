import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios"

export const createProductThunk = async(product,thunkAPI)=>{
    try {
        const response = await customFetch.post('/products/testProductCRUD',product);
        console.log(response)
        return response.data?.message;
    } catch (error) {
        console.log(error)
        return checkForUnauthorizedResponse(error,thunkAPI);
    }
}

export const editProductThunk = async(product,thunkAPI)=>{
    try {
        const response = await customFetch.patch('/products',product);
        thunkAPI.dispatch(clearValues());
        return response.data?.message;
    } catch (error) {
        // return checkForUnauthorizedResponse(error,thunkAPI);
        console.log(error)
    }
}

export const deleteProductThunk = async(productId,thunkAPI)=>{
    try {
        const resp = await customFetch.delete(`/products/${productId}`);
        thunkAPI.dispatch(getAllProducts());
        return resp.data.msg;
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkAPI);
    }
}