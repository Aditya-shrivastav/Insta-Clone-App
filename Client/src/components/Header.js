import React from 'react';
import { Card, Navbar, NavbarBrand, DropdownToggle,DropdownMenu, DropdownItem,UncontrolledDropdown, NavItem , Nav, Input, CardBody, CardText} from 'reactstrap';
import {NavLink, Link} from 'react-router-dom'
import history from '../shared/history';


class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            result: [],
            query : '',
            errMess : ''
        }
        this.fetchSearchResults = this.fetchSearchResults.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.showSearchResult = this.showSearchResult.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

    fetchSearchResults = (query) => {

        if(query){
            const bearer = 'Bearer ' + localStorage.getItem('token')

            fetch(`/profile/search/${query}` , {
                method: 'GET',
                headers : {
                    'Authorization' : bearer
                }
            })
            .then((res) => {
                if(res.ok){
                    return res
                }
                else{
                    var err = new Error("Error "+ res.status + " : " + res.statusText)
                    err.response = res;
                    throw err;
                }
            },(err) => {throw err})
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                this.setState({
                    result : res,
                    errMess: ''
                })
            })
            .catch((err) => {
                this.setState({
                    errMess: err,
                    result: [],
                    query:''
                })
            })
            console.log(this.state.result)
        }
        else{
            this.setState({
                result : [],
                errMess : ''
            })
        }

    }

    handleClick(){
        this.setState({
            errMess: '',
            result:[],
            query:''
        })
    }

    showSearchResult = (result) => {
        if(result != null){
            return (
                <div>
                    {
                        result.map((res) => {
                            return (
                               <Card key={res._id}>
                                   <CardBody>
                                        <CardText><img src={'/images/' + res.photo} alt={res.photo} width="30px" height="30px" style={{margin:"5px"}}/>
                                            {
                                                res._id === localStorage.getItem('userId')?
                                                <Link to="/profile" onClick={this.handleClick}>
                                                    {res.username}
                                                </Link>:
                                                <Link to={`/profile/${res._id}`} onClick={this.handleClick}>
                                                    {res.username}
                                                </Link>
                                            }
                                        </CardText>
                                   </CardBody>
                               </Card>
                            )
                        })
                    }
                </div>
            )
        }
    }

    handleChange(event){
        const query = event.target.value;
        this.setState({query}, () => {
            this.fetchSearchResults(query);
        })
        console.log(event.target.value)
    }

    handleLogout(){
        this.props.logout()
        history.push('/')
    }

    render(){
        return (
            <React.Fragment>
                <Navbar fixed="top" dark expand color="white" className="navbar p-1">
                    <div className="container Pagecontainer">
                        <NavbarBrand className="p-0 m-0" href="/home">
                            <div style={{color: 'black', fontFamily:'Norican, cursive', fontSize: '30px'}}>Instagram</div>
                        </NavbarBrand>
                        <Nav navbar>
                            <NavItem>
                                <Input type="text" name="search" id="search" placeholder="search" value={this.state.query} onChange={this.handleChange}></Input>
                                <div className="res">
                                    {this.showSearchResult(this.state.result)}
                                </div>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/home" onClick={() => this.props.renderHome()}>
                                    <span className="fa fa-home fa-lg" ></span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/explore">
                                    <span className="fa fa-compass fa-lg" ></span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <UncontrolledDropdown>
                                    <DropdownToggle nav caret><span className="fa fa-user-circle-o fa-lg"></span></DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem><NavLink to="/profile">Profile</NavLink></DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem><div onClick={this.handleLogout}>Log Out</div></DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                        </NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;