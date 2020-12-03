import {cart_add_item, cart_remove_item} from "../constant/cartConstant";

export const cartReducer = (state = { cartItems:[] },action)=>{
    switch (action.type) {
        case cart_add_item:
            const item = action.payload;
            const existItem = state.cartItems.find( x => x.product === item.product);

            if (existItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map( x => x.product === existItem.product ? item : x)
                };
            } else {
                return {
                    ...state, cartItems: [...state.cartItems, item]
                }
            }

        case cart_remove_item:
            return {
                ...state,
                cartItems: state.cartItems.filter( x => x.product !== action.payload )
            }

        default:
            return state;
    }
}