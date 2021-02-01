import React from 'react';
import Login from './Login';
import Signup from './Signup';
import Header from './Header';
import Home from './Home';
import Explore from './Explore';
import Profile from './Profile';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser,logoutUser, signupUser, fetchPosts, fetchProfile, fetchExplorePosts, fetchUserProfile} from '../redux/ActionCreators';
import UserProfile from './UserProfile';
import PostDetail from './PostDetail';
import Post from './Post'
import Password from './Password';

const mapStateToProps = state => {
    return {
        user: state.user,
        explore: state.explore,
        profile : state.profile,
        posts : state.posts,
        auth: state.auth,
        signIn : state.signIn
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchUserProfile : () => dispatch(fetchUserProfile()),
    fetchProfile : () => dispatch(fetchProfile()),
    loginUser : (creds) => dispatch(loginUser(creds)),
    logoutUser : () => dispatch(logoutUser()),
    signupUser : (creds) => dispatch(signupUser(creds)),
    fetchPosts : () => dispatch(fetchPosts()),
    fetchExplorePosts : () => dispatch(fetchExplorePosts())
})

class Main extends React.Component{

    componentDidMount() {
        this.props.fetchPosts()
        this.props.fetchProfile()
        this.props.fetchExplorePosts()
        this.props.fetchUserProfile()
    }

    render(){

        

        const UserWithId = ({match}) => {
            return (
                this.props.user.user?
                <UserProfile user={this.props.user.user.filter((user)=>user._id === match.params.id)[0]} posts={this.props.explore.allPosts.filter((post)=>post.user._id === match.params.id)} fetchUser={this.props.fetchUserProfile}/>:
                <UserProfile user={this.props.user.user} posts={this.props.explore.allPosts}/>
            )
        }

        const Details = ({match}) => {
            console.log(this.props.explore.allPosts)
            return (
                this.props.explore.allPosts?
                <PostDetail post={this.props.explore.allPosts.filter((post) => post._id === match.params.id)[0]}/>:
                <PostDetail post={this.props.explore.allPosts} />
            )
        }


        const PrivateRoute = ({component: Component, ...rest}) => {
            console.log(this.props.auth.isAuthenticated);
            return (
        
                <Route {...rest} render={props => (
                    this.props.auth.isAuthenticated?
                        <Component {...props} />
                    : <Redirect to={{
                        pathname: '/'
                    }} />
                )} />
            );
        };
        const SignRoute = ({component: Component, ...rest}) => {
            console.log(this.props.signIn.ok)
            return (
                <Route {...rest} render={props =>(
                    this.props.signIn.ok ?
                    <Redirect to="/" />
                    : <Component {...props} />
                )} />
            )
        }


        return (
            <div>
                <Header logout={this.props.logoutUser} renderHome={this.props.fetchPosts}/>
                <Switch>
                    {console.log(this.props)}
                    <PrivateRoute exact path="/home" component={() => <Home posts={this.props.posts} fetchPost={this.props.fetchPosts} user={this.props.profile.user}/>} />
                    <Route exact path="/" component={() => <Login auth={this.props.auth} loginUser={this.props.loginUser} home={this.props.fetchPosts}/>} />
                    <PrivateRoute path="/profile/:id" component={UserWithId} />
                    <PrivateRoute exact path="/explore" component={()=> <Explore explore={this.props.explore} fetchPost={this.props.fetchExplorePosts} user={this.props.profile.user}/>} />
                    <PrivateRoute exact path="/profile" component={() => <Profile user={this.props.profile.user} posts={this.props.profile.posts} fetchProfile={this.props.fetchProfile}/>} />
                    <PrivateRoute path="/explore/:id" component={Details} />
                    <SignRoute path="/signup" component={() => <Signup signIn={this.props.signIn} signupUser={this.props.signupUser} />} />
                    <Route path="/changePassword" component={Password} />
                    <Redirect to="/home" />
                </Switch>
                <Post userProfile={this.props.fetchProfile} posts={this.props.fetchPosts} explore={this.props.fetchExplorePosts}/>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));