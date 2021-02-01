import * as ActionTypes from './ActionTypes';

export const Explore = (state = {
        err : '',
        allPosts : []
    },action) => {
        
    switch (action.type) {
        case ActionTypes.EXPLORE_POSTS_FAILED:
            return{
                ...state,
                err : action.payload,
                allPosts : []
            }
        case ActionTypes.EXPLORE_POSTS_SUCCESS:
            return{
                ...state,
                err: '',
                allPosts : action.payload
            }
        default:
            return state;
    }
}