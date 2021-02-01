import * as ActionTypes from './ActionTypes'

export const Profile = (state = {
    err : '',
    user : null,
    posts : []
},action) => {
    switch (action.type) {
        case ActionTypes.FETCH_PROFILE_FAILED:
            return{
                ...state,
                err: action.payload,
                user: null,
                posts: []
            }
        case ActionTypes.FETCH_PROFILE_SUCCESS:
            return{
                ...state,
                err: '',
                user: action.profile,
                posts: action.posts
            }
        default:
            return state
    }
}