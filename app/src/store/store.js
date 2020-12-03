
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {productDetailsReducer, productListResucer} from "./reducer/productReducer";
import {cartReducer} from "./reducer/cartReducers";
import {userSigninResucer} from "./reducer/userReducer";
const initialState = {
    user:{
        userInfo: localStorage.getItem('userInfo') ?
            JSON.parse(localStorage.getItem("userInfo")) : null,
    },
    cart:{
        cartItems: localStorage.getItem('cartItems') ?
            JSON.parse(localStorage.getItem("cartItems")) : [],
    },

};
const  reducer = combineReducers({
    productList: productListResucer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    user: userSigninResucer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;