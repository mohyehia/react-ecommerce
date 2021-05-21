import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productDetailsReducer, productReducer } from "./reducer/productReducer";

const reducer = combineReducers({
    productList: productReducer,
    productDetails: productDetailsReducer
});
const initialState = [];
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;