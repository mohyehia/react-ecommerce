import axios from "axios";
import { PRODUCT_LIST_FAILED, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../types/productTypes"

export const retrieveProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await axios.get('/api/v1/products');
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data.products
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAILED,
            payload: error.response.data.message
        })
    }
}