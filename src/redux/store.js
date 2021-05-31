import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "./reducer/CartReducer";
import { productDetailsReducer, productReducer } from "./reducer/productReducer";

const reducer = combineReducers({
    productList: productReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
});

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
    cart: { cartItems: cartItemsFromLocalStorage }
};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;