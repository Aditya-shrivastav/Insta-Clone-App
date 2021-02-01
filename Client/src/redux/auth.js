import * as ActionTypes from './ActionTypes';

export const Auth = (state = {
    isAuthenticated : localStorage.getItem('token') ? true : false,
    token : localStorage.getItem('token'),
    user: localStorage.getItem('creds') ? JSON.parse(localStorage.getItem('creds')) : null,
    errmess : null,
    userId : localStorage.getItem('userId')
}, action ) => {
    switch (action.type) {
        case ActionTypes.LOGIN_FAILED:
            return {
                ...state,
                errmess : action.message,
                isAuthenticated: false
            };
        case ActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                isAuthenticated: false,
                user : action.creds
            };
        case ActionTypes.LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticated: true,
                errmess: '',
                token: action.token,
                userId : action.userId
            }
        case ActionTypes.LOGOUT_SUCCESS:
            return{
                ...state,
                isAuthenticated: false,
                token : '',
                user : null
            }
        default:
            return state
    }
}