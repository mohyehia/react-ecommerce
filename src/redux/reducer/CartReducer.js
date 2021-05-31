import { CART_ITEM_ADD, CART_ITEM_REMOVE } from '../types/CartTypes';
const initialState = {
    cartItems: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ITEM_ADD:
            const item = action.payload;
            const retrievedItem = state.cartItems.find(x => x.product === item.product);
            if (retrievedItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === retrievedItem.product ? item : x)
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                };
            }
        case CART_ITEM_REMOVE:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload)
            }
        default:
            return state;
    }
}