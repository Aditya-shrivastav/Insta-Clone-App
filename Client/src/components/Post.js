import { Button,Modal, ModalBody,Input,Row } from 'reactstrap';
import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Post extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            file : null,
            caption: '',
            isModalOpen : false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleChange(event){
        this.setState({
            caption : event.target.value
        })
    }

    handleSubmit(){
        const formData = new FormData();
        formData.append("imageFile",this.state.file,this.state.file.name);
        formData.append('caption',this.state.caption)
        this.toggleModal()
        console.log(this.state.file)
        fetch('/posts/explore',{
            method : 'POST',
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: formData
        })
        .then((res) => res.json())
        .then((res) => {
            if(res._id){
                NotificationManager.success('Post Created');
            }
            else{
                NotificationManager.error('Could not Create your Post')
            }
        } )
        .then(()=> this.props.explore())
        .then(() => this.props.userProfile())
        .catch((err) => {
            console.log(err)
            NotificationManager.error('Only Images can be Posted')
        })
    }

    render(){
        return (
            <div className="container">
                <div className="row addPost">
                    <Button onClick={this.toggleModal} color="none" style={{border:"none"}}><i className="fa fa-plus-circle" aria-hidden="true" style={{color:"#6699ff",fontSize:"60px"}}></i></Button>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalBody>
                        <Row className="inputField">
                            <Input type="file" name="imageFile" onChange={this.handleFileChange} />
                        </Row>
                        <Row className="inputField">
                            <Input type="text" placeholder="Enter the Caption..." onChange={this.handleChange} style={{border:"none", borderBottom: "1px solid grey"}}/>
                        </Row>
                        <Row className="inputField">
                            <Button color="primary" onClick={this.handleSubmit} >Upload</Button>
                        </Row>                       
                    </ModalBody>
                </Modal>
                <NotificationContainer/>
            </div>
        )
    }
}

export default Post;