import {USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCECC, USER_SIGNOUT} from "../constant/userConstant";

export const userSigninResucer=( state = {},action)=>{
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return{
                loading: true,
            }

        case  USER_SIGNIN_SUCCECC:
            return {
                loading: false,
                userIngo : action.payload
            }

        case USER_SIGNIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case USER_SIGNOUT:
            return {}

        default :
            return state;
    }
}