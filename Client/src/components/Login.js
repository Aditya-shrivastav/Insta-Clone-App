import React from 'react';
import { Form, FormGroup,Input, Button} from 'reactstrap';
import history from '../shared/history'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {Link} from 'react-router-dom';


class Login extends React.Component{

    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {

        this.props.loginUser({username: this.username.value, password: this.password.value})
        .then((res)=> {
            console.log(res.type)
            if(res.type === 'LOGIN_SUCCESS'){
                NotificationManager.success('Logged In Successfully!');
                history.push('/home')
            }
            else{
                if(res.type === 'LOGIN_FAILED'){
                    NotificationManager.error('Error : Wrong Password or Username')
                }
            }
        })

    }

    render(){
        console.log(this.props)
        return(
            <div className="container loginContainer d-flex justify-content-center align-items-center">
                <div className="row login d-flex justify-content-center">
                    <div className="col-12 title">
                        Instagram
                    </div>
                    <div className="col-10">
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Input type="text" id="username" name="username" placeholder="username" innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" id="password" name="password" placeholder="password" innerRef={(input) => this.password = input}/>
                            </FormGroup>
                            <Button className="col-12" type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </div>
                    <div className="col-12">
                        <Link to="/changePassword">
                            Forgot Password?
                        </Link>
                    </div>
                    <div className="col-12">
                        Don't have an account ? <Link to="/signup">Sign up</Link>
                    </div>
                </div>
                <NotificationContainer />
            </div>
        )
    }
}

export default Login;