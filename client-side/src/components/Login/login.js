import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import './login.css';
import errorMessages from "../../testKeys/errorMessages";
import Popupbox from "../PopupBoxes/popUpBox";
import constKeys from "../../ConstantKeyValues/constantKeys";
import textKeys from "../../testKeys/textKeys";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                email: "",
                password: ""
            },
            error: {
                email: "",
                password: ""
            },
            isPopUpTriggered:false,
            popupMessage:""
        }
        this.removePopup=this.removePopup.bind(this);
        this.handleStateForLogin=this.handleStateForLogin.bind(this);
    }
    handleStateForLogin(){
        this.props.setLoginValue({moveToLogin:true})
    }
   
    handlechange(event, key) {
        switch (key) {
            case constKeys.email:
                this.setState({
                    user: {
                        email: event.target.value,
                        password: this.state.user.password
                    }
                })

                break;
            case constKeys.password:
                this.setState({
                    user: {
                        email: this.state.user.email,
                        password: event.target.value
                    }
                })
                break;
        }
    }
    handleClick(e) {
        e.preventDefault();
    
        if (!this.state.user.email && !this.state.user.password) {
            this.setState({
                error: {
                    email: errorMessages.errorMesage.usernameFieldEmpty,
                    password: errorMessages.errorMesage.passwordFieldEmpty
                }
            })
        }
        else if (this.state.user.email && !this.state.user.password) {
            this.setState({
                error: {
                    email: "",
                    password:errorMessages.errorMesage.passwordFieldEmpty
                }
            })
        }
        else if (this.state.user.email && this.state.user.password) {
            this.setState({
                error: {
                    email: "",
                    password: ""
                }
            })
           
            axios.post(`${process.env.REACT_APP_LOGIN_URI}`, this.state.user)
                .then(res => {
                    if(res.data.message===constKeys.passwordIncorrect)
                    {
                        this.setState({
                            isPopUpTriggered:true,
                            popupMessage:errorMessages.errorMesage.passwordNotCorrect
                        })
                    }
                    else if(res.data.message===constKeys.userNotRegistered)
                    {
                        this.setState({
                            isPopUpTriggered:true,
                            popupMessage:errorMessages.errorMesage.usernameNotRegistered
                        })
                    }
                    else{
                        this.props.setlogindetails({userDetails:{username :res.data.user.name,email:res.data.user.email}})
                    }
                    

                })
                .catch(err => {
                    console.log(err)
                })
        }

    }
    removePopup(newstate){
        this.setState({
            isPopUpTriggered:newstate.isPopUpTriggered,
        })
    }
    render() {
        
        return (
            <React.Fragment>
                <div className="loginparentdiv">
                    <div className="loginchilddiv">
                        <h1>{textKeys.loginRegisterTextKeys.loginHeading}</h1>
                        <form>
                            <div className="logininputbox">
                                {this.state.error.email && <p className="err">{this.state.error.email}</p>}
                                <input type="text" name={constKeys.email} value={this.state.user.email} onChange={event => { this.handlechange(event, constKeys.email) }} />
                                <label>{textKeys.loginRegisterTextKeys.usernameLabel}</label>
                            </div>
                            <div className="logininputbox">
                                {this.state.error.password && <p className="err">{this.state.error.password}</p>}
                                <input type="password" name={constKeys.password} value={this.state.user.password} onChange={event => { this.handlechange(event, constKeys.password) }} />
                                <label>{textKeys.loginRegisterTextKeys.passwordLabel}</label>
                            </div>
                            <button id="btn" type="button" onClick={event => this.handleClick(event)}>{textKeys.loginRegisterTextKeys.loginButtonLabel}</button>
                            <Link to="/register"><button id="btn1" type="button" onClick={this.handleStateForLogin}>{textKeys.loginRegisterTextKeys.registerButtonLabel}</button></Link>
                        </form>
                    </div>
                </div>
                {this.state.isPopUpTriggered ?<Popupbox setPopupmessage={this.state.popupMessage} removePopup={this.removePopup}/> : " " }
            </React.Fragment>
        )
    }
}
export default Login;