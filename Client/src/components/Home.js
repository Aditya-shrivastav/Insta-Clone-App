import React from 'react';
import {Card, CardImg, CardBody, CardText} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderPost({post,fetchPost}){



    const likeAndUnlike = (id) => {

        console.log(id)
        fetch(`/posts/${id}/likeAndUnlike`,{
            method:'PUT',
            headers:{ 
                'Authorization': 'Bearer '+ localStorage.getItem('token')
            },
            body: JSON.stringify({id})
        })
        .then(() => fetchPost())
    }

    return (
        
        <Card>
            <CardBody>
                <div className="row d-flex">
                    <div className="col-4 col-md-2">
                        <img src={'/images/'+post.user.photo} alt={post.user.photo} width="60px" height="60px"  style={{borderRadius:"50%",border:"1px solid grey"}}/>
                    </div>
                    <div className="col-6 col-md-8"style={{alignSelf:"center",fontFamily:'Georgia',fontSize:"20px"}}>
                        <Link to={`profile/${post.user._id}`}>
                            <CardText style={{color:"black"}}>
                                {post.user.username}
                            </CardText>
                        </Link>
                    </div>
                </div>
            </CardBody>
            <CardImg top src={'/images/'+post.image} alt={post.image} width="200px" height="600px" />
            <CardBody>
                {
                    post.likes.includes(localStorage.getItem('userId'))?
                    <span className="fa fa-heart" style={{color:"red",marginRight:"10px"}} onClick={()=>likeAndUnlike(post._id)}></span>:
                    <span className="fa fa-heart-o" style={{marginRight:"10px"}}onClick={()=>likeAndUnlike(post._id)}></span>
                }
                {   
                    <Link to={`/explore/${post._id}`}>
                        <span className="fa fa-comment-o" ></span>
                    </Link>
                }
                <CardText>{post.likes.length} likes</CardText>
                <CardText><div className="row"><div style={{marginLeft:"10px",fontWeight:"bold"}}>{post.user.username}</div><div className="col-0"></div><div className="col-6 mr-auto">{post.caption}</div></div></CardText>
            </CardBody>
        </Card>
    )
    
}

const Home = (props) => {
    const posts = props.posts.posts.map((post) => {
        return (
            <div key={post._id} className="col-12 post">
                <RenderPost post={post} fetchPost={props.fetchPost}/>
            </div>
        )
    })

    return (
        props.posts.posts?
        <div className="container Pagecontainer box">
            <div className="row">
                <div className="col-12 col-md-8">
                    {posts}
                </div>
                <div className="col-12 side col-md-4">
                    <div className="col-12 smImg img">
                        {console.log(props.user)}
                        {props.user?
                        <img src={`/images/${props.user.photo}`} alt={props.user.photo}/>
                        :<div></div>}    
                        <Link to="/profile"><div className="name" style={{float:"right",paddingTop:"9px",color:"black"}} >{props.user? props.user.username : null}</div></Link>
                    </div>           
                </div>
                </div>
        </div>:
        <div></div>
    )
}

export default Home;