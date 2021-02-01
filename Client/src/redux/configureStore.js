import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Auth } from './auth';
import { SignIn } from './signingIn';
import {Posts} from './posts';
import {Profile} from './profile'
import {Explore} from './explore';
import {userProfile} from './userProfile';

export const ConfigureStore = () => {
    const store = createStore(
       combineReducers({
           user: userProfile,
           explore : Explore,
           profile: Profile,
           posts: Posts,
           auth: Auth,
           signIn : SignIn
       }),
        applyMiddleware(thunk, logger)
    )

    return store;
}