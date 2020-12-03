import {cart_add_item ,cart_remove_item} from "../constant/cartConstant"
import Axios from "axios";


export const addToCart =(productId, qty)=> async(dispatch, getState)=>{

    const {data} = await Axios.get(`/api/products/${productId}`);
    dispatch({
        type: cart_add_item,
        payload:{
            name:data.name,
            image: data.image,
            price:data.price,
            countInStock:data.countInStock,
            product:data._id,
            qty,
        }
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}
export const removeFromCart =(productId)=> async(dispatch, getState)=>{

    dispatch({
        type: cart_remove_item,
        payload: productId
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}
