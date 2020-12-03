import Axios from "axios";
import {product_list_fail,
    product_list_request,
    product_list_success,
    product_details_fail,
    product_details_request,
    product_details_success
} from "../constant/productConstant";


export const listProducts = () =>{
   return async (dispatch)=>{
       try {
           dispatch({
               type: product_list_request,

           })
           const {data} = await  Axios.get("/api/products");
           dispatch({
               type:product_list_success,
               payload: data
           })

       }catch (e) {

           dispatch({
               type:product_list_fail,
               payload:e.message()
           })
       }
   }

}

export const detailsProduct = (productId) =>{
   return async (dispatch)=>{
       try {
           dispatch({
               type: product_details_request,
               payload: productId

           })
           const {data} = await  Axios.get(`/api/products/${productId}`);
           dispatch({
               type:product_details_success,
               payload: data
           })

       }catch (e) {

           dispatch({
               type:product_details_fail,
               payload:
                   e.response&& e.response.data.message ?
                       e.response.data.message : e.message,
           })
       }
   }

}





















