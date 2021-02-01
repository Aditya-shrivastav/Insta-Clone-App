import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderProfilePost(post){
    return (
        <Link to={`../explore/${post.post._id}`}>
            <img src={`/images/${post.post.image}`} alt={post.post.image} />
        </Link>
    )
}

class UserProfile extends React.Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this)

    }

    followAndUnfollow = (id) => {
        return fetch(`/profile/${id}/followAndUnfollow`,{
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer '+localStorage.getItem('token')
            }
        })
        .then((response) => response.json())
        .then((res) => console.log(res))
        .catch((err) => {console.log(err)})
    }

    handleClick(id){
        this.followAndUnfollow(id)
        .then(()=> this.props.fetchUser())
        .catch((err) => alert(err));
    }

    render(){
        
        const posts = this.props.posts.map((post) => {
            return (
                <div key={post._id} className="col-12 col-md-4 img1">
                    <RenderProfilePost post={post} />
                </div>
            )
        })

        return(
            this.props.user?
            <div className="container Pagecontainer box">
                <div className="row profileBio pb-5" style={{borderBottom:"1px solid gray"}}>
                    <div className="col-12 col-md-3 img">
                        <img src={`/images/${this.props.user.photo}`} alt={this.props.user.photo}/>
                    </div>
                    <div className="col-12 col-md-8 mt-3" style={{fontFamily:"Zilla Slab, serif", fontSize:"20px"}}>
                        <h2 className="mb-2">{this.props.user.username}</h2>
                        <div className="mb-2">{this.props.user.firstname+" "+this.props.user.lastname}</div>
                        <div className="row mb-3">
                            <div className="col-3">{this.props.posts.length + " Posts" }</div>
                            <div className="col-4 col-md-4">{this.props.user.followers.length + " Followers"}</div>
                            <div className="col-5 col-md-4">{this.props.user.following.length + " Following"}</div>
                        </div>
                        <div>
                            <Button onClick={()=> this.handleClick(this.props.user._id) } style={{backgroundColor:"#0099ff",border:"none"}}>
                                {
                                    this.props.user.followers.includes(localStorage.getItem('userId'))?
                                    <div>Unfollow</div>
                                    :<div>Follow</div>
                                }
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    {posts}
                </div>
            </div>:
            <div></div>

        )
    }
}

export default UserProfile;