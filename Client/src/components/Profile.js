import React from 'react';
import {Modal , ModalBody, Row, Input, Button} from 'reactstrap'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {Link} from 'react-router-dom';

function RenderProfilePost(post){

    return (
        <Link to={`/explore/${post.post._id}`}>
            <img src={`/images/${post.post.image}`} alt={post.post.image} />
        </Link>
    )
}

class Profile extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            file : null,
            isModalOpen : false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }

    handleFileChange(event){
        this.setState({
            file : event.target.files[0]
        })
    }

    handleEdit(){
        const formData = new FormData();
        formData.append("imageFile",this.state.file,this.state.file.name);
        this.toggleModal()
        console.log(this.state.file)
        fetch('/profile/changeDp',{
            method : 'PUT',
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: formData
        })
        .then((res)=> res.json())
        .then(()=> NotificationManager.success('Updated Profile Photo'))
        .then(()=>this.props.fetchProfile())
    }

    render(){

        const posts = this.props.posts.map((post) => {
            return (
                <div key={post._id}  className="col-12 col-md-4 img1">
                    <RenderProfilePost post={post}/>
                </div>
            )
        })

        return(
            this.props.user ?
            <div className="container Pagecontainer box">
                <div className="row profileBio pb-5" style={{borderBottom:"1px solid gray"}}>
                    <div className="col-12 col-md-3 img">
                        <img src={`/images/${this.props.user.photo}`} alt={this.props.user.photo}/>
                    </div>
                    <div className="col-12 col-md-8 mt-3" style={{fontFamily:"Zilla Slab, serif", fontSize:"20px"}}>
                        <h2 className="mb-2">{this.props.user.username}</h2>
                        <div className="mb-2">{this.props.user.firstname+" "+this.props.user.lastname}</div>
                        <div className="row">
                            <div className="col-3">{this.props.posts.length + " Posts" }</div>
                            <div className="col-4 col-md-4">{this.props.user.followers.length + " Followers"}</div>
                            <div className="col-5 col-md-4">{this.props.user.following.length + " Following"}</div>
                        </div>
                        <div className="mt-3">
                            <span className="fa fa-pencil" onClick={this.toggleModal}></span>
                        </div>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalBody>
                                <Row className="inputField">
                                    <Input type="file" name="imageFile" onChange={this.handleFileChange} />
                                </Row>
                                <Row className="inputField">
                                    <Button color="primary" onClick={this.handleEdit} >Change</Button>
                                </Row>                       
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
                <div className="row mt-5">
                    {posts}
                </div>
                <NotificationContainer/>
            </div>
            :
            <div>
                null
            </div>
        )
    }
}

export default Profile;