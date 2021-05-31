import axios from "axios"
import { CART_ITEM_ADD, CART_ITEM_REMOVE } from "../types/CartTypes";

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/products/${id}`);

    dispatch({
        type: CART_ITEM_ADD,
        payload: {
            product: data.productId,
            name: data.productName,
            price: data.productPrice,
            image: data.imageUrl,
            countInStock: data.countInStock,
            qty
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: CART_ITEM_REMOVE,
        payload: id
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}