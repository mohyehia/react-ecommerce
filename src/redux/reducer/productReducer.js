import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILED } from '../types/productTypes';
const initialState = {
    products: []
};
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {
                loading: true,
                products: []
            };
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload
            };
        case PRODUCT_LIST_FAILED:
            return {
                loading: false,
                products: [],
                error: action.payload
            };
        default:
            return state;
    }
}