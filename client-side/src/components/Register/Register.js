import React from "react";
import './Register.css';
import axios from "axios";
import Popupbox from "../PopupBoxes/popUpBox";
import constKeys from "../../ConstantKeyValues/constantKeys";
import errorMessages from "../../testKeys/errorMessages";
import textKeys from "../../testKeys/textKeys";


class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {
                name: "",
                email: "",
                password: ""
            },
            error: {
                name: "",
                email: "",
                password: ""
            },
            isPopuptriggered:false,
            popupMessage:"",
        
        }
        this.removeRegisterPopup=this.removeRegisterPopup.bind(this);
    }
    handlechange(event, key) {
        switch (key) {
            case constKeys.name:
                this.setState({
                    user: {
                        name: event.target.value,
                        email: this.state.user.email,
                        password: this.state.user.password
                    }
                })

                break;
            case constKeys.email:
                this.setState({
                    user: {
                        name: this.state.user.name,
                        email: event.target.value,
                        password: this.state.user.password
                    }
                })

                break;
            case constKeys.password:
                this.setState({
                    user: {
                        name: this.state.user.name,
                        email: this.state.user.email,
                        password: event.target.value
                    }
                })
                break;
        }
    }
    handleClick(e) {
        e.preventDefault();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!this.state.user.name && !this.state.user.email && !this.state.user.password) {
            this.setState({
                error: {
                    name: errorMessages.errorMesage.usernameFieldEmpty,
                    email: errorMessages.errorMesage.emailFieldEmpty,
                    password: errorMessages.errorMesage.passwordFieldEmpty
                }
            })
        }
        if (this.state.user.name && !this.state.user.email && !this.state.user.password) {
            this.setState({
                error: {
                    name: "",
                    email:errorMessages.errorMesage.emailFieldEmpty,
                    password:  errorMessages.errorMesage.passwordFieldEmpty
                }
            })
        }
        if (this.state.user.name && this.state.user.email && !this.state.user.password) {
            this.setState({
                error: {
                    name: "",
                    email: "",
                    password:  errorMessages.errorMesage.passwordFieldEmpty
                }
            })
        }
        if (!this.state.user.name && !this.state.user.email && this.state.user.password) {
            this.setState({
                error: {
                    name: errorMessages.errorMesage.usernameFieldEmpty,
                    email:errorMessages.errorMesage.emailFieldEmpty,
                    password: ""
                }
            })
        }
        if (this.state.user.name && this.state.user.email && this.state.user.password) {
            this.setState({
                error: {
                    name: "",
                    email: "",
                    password: ""
                }
            })
        }

        if (this.state.user.name && this.state.user.email && this.state.user.password.length < 6) {
            this.setState({
                error: {
                    name: "",
                    email: "",
                    password: errorMessages.errorMesage.passwordNotCorrect
                }
            })
        }
        if (!this.state.user.name && this.state.user.email && !this.state.user.password) {
            this.setState({
                error: {
                    name: errorMessages.errorMesage.usernameFieldEmpty,
                    email: "",
                    password: errorMessages.errorMesage.passwordFieldEmpty
                }
            })
        }
        if (!this.state.user.name && this.state.user.email && this.state.user.password) {
            this.setState({
                error: {
                    name: errorMessages.errorMesage.usernameFieldEmpty,
                    email: "",
                    password: ""
                }
            })
        }
        if (this.state.user.name && !regex.test(this.state.user.email) && this.state.user.password) {
            this.setState({
                error: {
                    name: "",
                    email: errorMessages.errorMesage.emailNotCorrect,
                    password: ""
                }
            })
        }
        if (this.state.user.name && !this.state.user.email && !this.state.user.password) {
            this.setState({
                error: {
                    name: "",
                    email: errorMessages.errorMesage.emailFieldEmpty,
                    password:  errorMessages.errorMesage.passwordFieldEmpty
                }
            })
        }
        else if (this.state.user.name && !this.state.user.email && this.state.user.password.length < 6) {
            this.setState({
                error: {
                    name: "",
                    email: errorMessages.errorMesage.emailFieldEmpty,
                    password:errorMessages.errorMesage.passwordNotCorrect
                }
            })
        }
        else if (this.state.user.name && !regex.test(this.state.user.email) && this.state.user.password.length < 6) {
            this.setState({
                error: {
                    name: "",
                    email: errorMessages.errorMesage.emailNotCorrect,
                    password:errorMessages.errorMesage.passwordNotCorrect
                }
            })
        }
        if (this.state.user.name && regex.test(this.state.user.email) && this.state.user.password.length < 6) {
            this.setState({
                error: {
                    name: "",
                    email: "",
                    password:errorMessages.errorMesage.passwordNotCorrect
                }
            })
        }
        if(this.state.user.name && !regex.test(this.state.user.email) && !this.state.user.password){
            this.setState({
                error: {
                    name: "",
                    email: errorMessages.errorMesage.emailNotCorrect,
                    password:errorMessages.errorMesage.passwordFieldEmpty
                }
            })
        }
        if(this.state.user.name && !this.state.user.email && !this.state.user.password){
            this.setState({
                error: {
                    name: "",
                    email: errorMessages.errorMesage.emailFieldEmpty,
                    password:errorMessages.errorMesage.passwordFieldEmpty
                }
            })
        }
        if(this.state.user.name && this.state.user.email && !this.state.user.password){
            this.setState({
                error: {
                    name: "",
                    email: "",
                    password:errorMessages.errorMesage.passwordFieldEmpty
                }
            })
        }
        if(this.state.user.name && !regex.test(this.state.user.email) && this.state.user.password.length>6){
            this.setState({
                error: {
                    name: "",
                    email: errorMessages.errorMesage.emailNotCorrect,
                    password:""
                }
            })
        }
        if(this.state.user.name && !regex.test(this.state.user.email) && !this.state.user.password){
            this.setState({
                error: {
                    name: "",
                    email: errorMessages.errorMesage.emailNotCorrect,
                    password:errorMessages.errorMesage.passwordFieldEmpty
                }
            })
        }
        if(this.state.user.name && !this.state.user.email && !this.state.user.password){
            this.setState({
                error: {
                    name: "",
                    email: errorMessages.errorMesage.emailFieldEmpty,
                    password:errorMessages.errorMesage.passwordFieldEmpty
                }
            })
        }
        if (this.state.user.name && regex.test(this.state.user.email) && this.state.user.password.length > 6) {
            
            
            axios.post(`${process.env.REACT_APP_REGISTER_URI}`, this.state.user)
                .then(res => {
                    
                    if(res.data.message===constKeys.failedKey)
                    {
                        this.setState({
                            isPopuptriggered:true,
                            popupMessage:errorMessages.errorMesage.userAlreadyRegistered
                        })
                    }
                    else if(res.data.message===constKeys.passedKey){
                        
                        this.props.setRegisterValue({mobeToLogin:false})   
                                       
                    }
                }).catch(err => {
                    console.log(err);
                })
        }
    }
    removeRegisterPopup(newstate){
        this.setState({
            isPopuptriggered:newstate.isPopuptriggered,
        })
    }
    render() {
        
        return (
            <React.Fragment>
                <div className="parentdiv">
                    <div className="childdiv">
                        <h1>{textKeys.loginRegisterTextKeys.registerHeading}</h1>
                        <form>

                            <div className="inputvalues">
                                {this.state.error.name && <p className="err">{this.state.error.name}</p>}
                                <input type="text" name={constKeys.name} value={this.state.user.name} onChange={event => { this.handlechange(event, constKeys.name) }} />
                                <label>{textKeys.loginRegisterTextKeys.usernameLabel}</label>
                            </div>
                            <div className="inputvalues">
                                {this.state.error.email && <p className="err">{this.state.error.email}</p>}
                                <input type="text" name={constKeys.email} value={this.state.user.email} onChange={event => { this.handlechange(event, constKeys.email) }} />
                                <label>{textKeys.loginRegisterTextKeys.emailLabel}</label>
                            </div>
                            <div className="inputvalues">
                                {this.state.error.password && <p className="err">{this.state.error.password}</p>}
                                <input type="password" name={constKeys.password} value={this.state.user.password} onChange={event => { this.handlechange(event, constKeys.password) }} />
                                <label>{textKeys.loginRegisterTextKeys.passwordLabel}</label>
                            </div>


                            <button type="button" onClick={event => this.handleClick(event)}>{textKeys.loginRegisterTextKeys.registerButtonLabel}</button>
                        </form>
                    </div>
                </div>
                {this.state.isPopuptriggered ?<Popupbox setPopupmessage={this.state.popupMessage} removePopup={this.removeRegisterPopup}/> : " " }
            </React.Fragment>

        )
    }
}
export default Register;