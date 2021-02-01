import * as ActionTypes from './ActionTypes';

export const requestLogin = (creds) => {
    return {
        type : ActionTypes.LOGIN_REQUEST,
        creds
    }
}

export const receiveLogin = (response) => {
    console.log(response)

    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token : response.token,
        userId : response.userId
    }
}

export const loginError = (message) => {
    console.log(message)
    return { 
        type: ActionTypes.LOGIN_FAILED,
        message
    }
}

export  const loginUser = (creds) => (dispatch) => {

    dispatch(requestLogin(creds));

    return fetch('/users/login' , {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(creds)
    })
    .then(response => {
        if(response.ok){
            return response
        }
        else{
            var err = new Error("Error "+ response.status + " : " + response.statusText)
            err.response = response;
            throw err;
        }
    },error => {
        throw error;
    }
    )
    .then((response) => response.json())
    .then((response) => {
        if(response.success){
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify(creds));
            localStorage.setItem('userId',response.userId)
            dispatch(fetchPosts())
            dispatch(fetchProfile())
            dispatch(fetchExplorePosts())
            dispatch(fetchUserProfile())
            dispatch(receiveLogin(response));
            return response;

        }
        else{
            var err = new Error("Error "+ response.status + " : " + response.statusText)
            err.response = response;
            throw err;
        }
    })
    .catch((err) => dispatch(loginError(err.message)))
}

export const receiveLogout = () => {
    return {
        type: ActionTypes.LOGOUT_SUCCESS
    }
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(receiveLogout());
}

export const receiveSignup = (creds) => {
    return {
        type : ActionTypes.SIGNUP_SUCCESS,
        payload : creds
    }
}

export const signupError = (message) => {
    console.log(message)
    return {
        type: ActionTypes.SIGNUP_FAILED,
        message
    }
}

export const signupUser = (creds) => (dispatch) => {

    
    return fetch('/users/signup', {
        method : 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(creds)
    })
    .then((res) => {
        if(res.ok){
            return res;
        }
        else{
            var err = new Error("Error "+ res.status + " : " + res.statusText)
            err.response = res;
            throw err;
        }
    },err => { throw err; })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            console.log("Signup Successfull!")
            dispatch(receiveSignup(res))
            return res;
        }
        else{
            var err = new Error("Error "+ res.status + " : " + res.statusText)
            err.response = res;
            throw err;
        }
    })
    .catch((err) => dispatch(signupError(err.message)))
}

export const addPosts = (posts) => ({
    type : ActionTypes.POSTS_SUCCESS,
    payload : posts
})

export const postsFailed = (err) => ({
    type: ActionTypes.POSTS_FAILED,
    payload : err
})

export const fetchPosts = () => (dispatch) => {


    return fetch('/posts/myNewsFeed',{
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then((response) => response.json())
    .then(res => {dispatch(addPosts(res.posts.reverse()))})
    .catch(err =>{console.log(err)
        dispatch(postsFailed(err))});;
}

export const showProfile = (profile, posts) => ({
    type: ActionTypes.FETCH_PROFILE_SUCCESS,
    profile,
    posts
})

export const profileFailed = (err) => ({
    type: ActionTypes.FETCH_PROFILE_FAILED,
    payload : err
})

export const fetchProfile = () => (dispatch) => {
    
    return fetch('/profile',{
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then((response) => response.json())
    .then((res) => {dispatch(showProfile(res.profile,res.posts))})
    .catch(err => dispatch(profileFailed(err)))
}

export const fetchExplorePosts = () => (dispatch) => {
    return fetch('/posts/explore',{
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then((response) => response.json())
    .then(res => {dispatch(addExplorePosts(res.reverse()))})
    .catch(err => dispatch(explorePostsFailed(err)));
}

export const addExplorePosts = (res) => ({
    type: ActionTypes.EXPLORE_POSTS_SUCCESS,
    payload : res
})

export const explorePostsFailed = (err) => ({
    type: ActionTypes.EXPLORE_POSTS_FAILED,
    payload : err
})

export const fetchUserProfile = () => (dispatch) => {

    return fetch('/profile/users', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then((response) => response.json())
    .then((res) => dispatch(showUserProfile(res)))
    .catch((err) => dispatch(errorUserProfile(err)))
}

export const showUserProfile = (user) => ({
    type: ActionTypes.USER_PROFILE_SUCCESS,
    payload: user
})

export const errorUserProfile = (err) => ({
    type : ActionTypes.USER_PROFILE_FAILED,
    payload : err
})

