
import {product_list_fail,
    product_list_request,
    product_list_success,
    product_details_success,
    product_details_request,
    product_details_fail
} from "../constant/productConstant";


export const productListResucer=( state = {loading: true, products: [] },action)=>{
    switch (action.type) {
        case product_list_request:
            return{
                loading: true,
            }
        case product_list_success:
            return{
                loading: false,
                products:action.payload
            }
        case product_list_fail:
            return{
                loading: false,
                error: action.payload

            }
        default :
            return state;
    }
}

export const productDetailsReducer=( state = {loading: true,
    product: [] },
                                  action)=>{
    switch (action.type) {
        case product_details_request:
            return{
                loading: true,
            }
        case product_details_success:
            return{
                loading: false,
                product:action.payload
            }
        case product_details_fail:
            return{
                loading: false,
                error: action.payload

            }
        default :
            return state;
    }
}

