import React from 'react';
import { Form, FormGroup,Input, Button} from 'reactstrap';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {Link} from 'react-router-dom';

class Signup extends React.Component{


    constructor(props){
        super(props);
        this.handleSignup = this.handleSignup.bind(this);
    }

    handleSignup(event){
        this.props.signupUser({username : this.username.value, firstname : this.firstname.value, lastname : this.lastname.value, email: this.email.value, password : this.password.value})
        .then((res)=>{
            if(res.success){
                NotificationManager.success('Account Created Successfully!');
            }
            else{
                NotificationManager.error('Username already exist!')
            }
        })
        event.preventDefault();
    }

    render(){
        return (
            <div className="container loginContainer d-flex justify-content-center align-items-center">
                <div className="row signup d-flex justify-content-center">
                    <div className="col-12 title">
                        Instagram
                    </div>
                    <div className="col-10">
                        <Form onSubmit={this.handleSignup}>
                            <FormGroup>
                                <Input type="text" id="firstname" name="firstname" placeholder="firstname" innerRef={(input) => this.firstname = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" id="lastname" name="lastname" placeholder="lastname" innerRef={(input) => this.lastname = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="email" id="email" name="email" placeholder="email" innerRef={(input) => this.email = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" id="username" name="username" placeholder="username" innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" id="password" name="password" placeholder="password" innerRef={(input) => this.password = input}/>
                            </FormGroup>
                            <Button className="col-12" type="submit" value="submit" color="primary">Sign up</Button>
                            <div style={{fontSize:"12px"}}>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</div>
                        </Form>
                    </div>
                    <div className="col-12">
                       Have an account ? <Link to="/">Log in</Link>
                    </div>
                </div>
                <NotificationContainer />
            </div>
        )
    }
}

export default Signup;