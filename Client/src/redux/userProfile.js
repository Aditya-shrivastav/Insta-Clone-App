import * as ActionTypes from './ActionTypes'

export const userProfile = (state = {
    err : '',
    user : null
},action) => {
    switch (action.type) {
        case ActionTypes.USER_PROFILE_FAILED:
            return{
                ...state,
                err: action.payload,
                user: null
            }
        case ActionTypes.USER_PROFILE_SUCCESS:
            return{
                ...state,
                err: '',
                user: action.payload
            }
        default:
            return state;
    }
}