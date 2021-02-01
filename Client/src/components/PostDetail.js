import React from 'react';
import {Card, CardBody,CardImg,CardText,Input,Button,Form,Row,Col} from 'reactstrap';
import {Link} from 'react-router-dom'


class PostDetail extends React.Component{

    constructor(props){
        super(props)

        this.state={
            post :null,
            comment: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    fetchPost = (id) => {

        fetch(`/posts/${id}`,{
            method:'GET',
            headers:{
                'Authorization': localStorage.getItem('token')
            }
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
        })
        .then(() => console.log(this.state))
        .catch((err) => console.log(err))
    }

    handleChange(e){
        this.setState({
            comment : e.target.value
        })
    }

    handleSubmit = (id,comment) => {
        
        const com = { comment : comment};

        console.log(comment)

        fetch(`/posts/${id}/comments`,{
            method: 'POST',
            body: JSON.stringify(com),
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': "application/json"
            }
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .then(()=>console.log("done"))
    }

    render(){
        console.log(this.props.post)
        return (
            this.props.post?
            <div className="container d-flex align-items-center Pagecontainer" style={{marginTop:"10vh"}}>
                <div className="row" style={{backgroundColor:"#f2f2f2"}}>
                    <div className="col-12 col-md-7">
                        <Card style={{fontWeight: "bold", fontFamily:'Georgia', fontSize:"20px"}}>   
                            <CardImg top src={'/images/'+this.props.post.image} alt={this.props.post.image} width="200px" height="700px" style={{borderBottom:"1px solid black"}}/>
                            <CardBody>
                                <CardText>{this.props.post.caption}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5">
                        <Card>
                            <CardBody className="commentBox" style={{padding:"8px",borderBottom:"1px solid grey"}}>
                                <div className="row" >
                                    <div className="col-3 col-md-3">
                                        <img src={'/images/'+this.props.post.user.photo} alt={this.props.post.user.photo} width="60px" height="60px" style={{border:"1px solid black",borderRadius:"50%"}}/>
                                    </div>
                                    <div className="col-6 col-md-9" style={{alignSelf:"center",fontFamily:'Georgia',fontSize:"20px"}}>
                                        <Link to={`profile/${this.props.post.user._id}`}>
                                            <CardText style={{color:"black"}}>
                                                {this.props.post.user.username}
                                            </CardText>
                                        </Link>
                                    </div>
                                </div> 
                            </CardBody>
                            <div>
                            <ul className="list-unstyled" style={{overflowY:"scroll",height:"590px",marginTop:"20px",borderBottom:"1px solid grey"}}>
                                {
                                    this.props.post.comments.map((comment) => {
                                        return(
                                            <li key={comment._id} className="comment">
                                                <div><span style={{fontWeight:"bold",marginRight:"10px"}}>{comment.author.username}</span>{comment.comment}</div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            </div>
                            <CardBody style={{bottom:"10px",padding:"15px",right:"10px",width:"inherit"}}>
                                <Form className="commentForm" onSubmit={()=>this.handleSubmit(this.props.post._id,this.state.comment)}>
                                    <Row>
                                        <Col className="col-9"><Input type="text" placeholder="Enter comment" name="comment" value={this.state.comment} onChange={this.handleChange}/></Col>
                                        <Col className="col-3"><Button type="submit" color="primary" ><i className="fa fa-send-o"></i></Button></Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>:
            <div>
               {
                    console.log("nothing")
                   
                }
                null
            </div>
            
        )
    }
}

export default PostDetail;