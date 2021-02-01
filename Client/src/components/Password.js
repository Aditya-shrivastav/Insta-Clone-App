import React from 'react';
import {Form , FormGroup,Input, Button} from 'reactstrap'
import  history from '../shared/history';
import {Link} from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Password extends React.Component{

    constructor(props){
        super(props)
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handlePasswordChange(event){
        
        var data = { username : this.username.value, email: this.email.value, password: this.newPassword.value}

        fetch('/users/changePassword',{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((res)=>res.json())
        .then((res)=> {
            if(res.success){
                NotificationManager.success('Password Changed Successfully!')
            }
            else{
                NotificationManager.error('Something Went Wrong!','',10000);
            }
            return res;
        })
        .then((res)=>{
            if(res.success){
                setTimeout(()=>{ history.push('/')}, 2000)
            }
            else{
                setTimeout(()=>{ history.push('/changePassword')}, 2000)
            }
        })
        event.preventDefault()
    }
    

    render(){
        return (
            <div className="container loginContainer d-flex justify-content-center align-items-center">
                <div className="row login d-flex justify-content-center">
                    <div className="col-12 title">
                        Instagram
                    </div>
                    <div className="col-10">
                        <Form onSubmit={this.handlePasswordChange}>
                            <FormGroup>
                                <Input type="text" id="username" name="username" placeholder="username" innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="email" id="email" name="email" placeholder="Email" innerRef={(input) => this.email = input} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" id="newPassword" name="newPassword" placeholder="New Password" innerRef={(input) => this.newPassword = input}/>
                            </FormGroup>
                            <Button className="col-12" type="submit" value="submit" color="primary">Change Password</Button>
                        </Form>
                    </div>
                    <div className="col-12">
                        <Link to="/signup">
                            Create New Account
                        </Link>
                    </div>
                    <div className="col-12">
                        <Link to="/">
                            Back To Login
                        </Link>
                    </div>
                </div>
                <NotificationContainer/>
            </div>
        )
    }
}

export default Password;