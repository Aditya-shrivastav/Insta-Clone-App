import * as ActionTypes from './ActionTypes';

export const Posts = (state = {
        err : '',
        posts : []
    },action) => {
        
    switch (action.type) {
        case ActionTypes.POSTS_FAILED:
            return{
                ...state,
                err : action.payload,
                posts : []
            }
        case ActionTypes.POSTS_SUCCESS:
            return{
                ...state,
                err: '',
                posts : action.payload
            }
        default:
            return state;
    }
}