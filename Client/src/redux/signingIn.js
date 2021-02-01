import * as ActionTypes from './ActionTypes';

export const SignIn = (state = {
    user : [],
    errMess : null,
    ok : false
}, action) => {
    switch (action.type) {
        case ActionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                user : action.payload,
                errMess : null,
                ok : true 
            }      
        case ActionTypes.SIGNUP_FAILED: 
            return {
                ...state,
                user : [],
                errMess : action.message,
                ok : false
            }      

        default:
            return state;
    }
}