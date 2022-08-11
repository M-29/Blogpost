import React from "react";
import addpostDetails from "../../testKeys/addPostTestKeys";
import addPostConstKeys from "../../testKeys/addPostConstKeys";
import './personalDetailForm.css'
import errorMessages from "../../testKeys/errorMessages";
import axios from "axios";
class Personaldetailform extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                fullname: "",
                lastname: "",
                contact: "",
                states: "",
                city: "",
                localarea: ""
            },
            error: {
                firstname: "",
                lastname: "",
                contact: "",
                states: "",
                city: "",
                localarea: ""
            }
        }
        this.setValues = this.setValues.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        if(this.props.isPetId){
        axios.post(`${process.env.REACT_APP_EDIT_URI}/${this.props.isPetId}`)
        .then(res => {
             this.setState({ user: res.data.pet })
        })
        .catch(error => {
            console.log(error);
        })
    }
    else{
        this.setState({user:this.props.settingDetails})
    } 
    }
    setValues(e) {
        e.preventDefault()
        const pattern = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
        if (!this.state.user.fullname && !this.state.user.city && !this.state.user.contact) {
            this.setState({
                error: {
                    firstname: errorMessages.errorMesage.fieldEmpty,
                    city: errorMessages.errorMesage.fieldEmpty,
                    contact: errorMessages.errorMesage.fieldEmpty
                }
            })
        }
        if (this.state.user.fullname && !this.state.user.city && !pattern.test(this.state.user.contact)) {
            this.setState({
                error: {
                    firstname: "",
                    city: errorMessages.errorMesage.fieldEmpty,
                    contact: errorMessages.errorMesage.validContactNumber
                }
            })
        }
        else if (this.state.user.fullname && !this.state.user.city && this.state.user.contact.length !== 10) {
            this.setState({
                error: {
                    firstname: "",
                    city: errorMessages.errorMesage.fieldEmpty,
                    contact: errorMessages.errorMesage.validTenDigitNumber
                }
            })
        }
        if (this.state.user.fullname && !this.state.user.city && pattern.test(this.state.user.contact) && this.state.user.contact.length === 10) {
            this.setState({
                error: {
                    firstname: "",
                    city: errorMessages.errorMesage.fieldEmpty,
                    contact: ""
                }
            })
        }
        if (this.state.user.fullname && this.state.user.city && pattern.test(this.state.user.contact) && this.state.user.contact.length === 10) {
            this.setState({
                error: {
                    firstname: "",
                    city: "",
                    contact: ""
                }
            })
        }
        if (this.state.user.fullname && this.state.user.city && this.state.user.contact && this.state.user.lastname && this.state.user.localarea && this.state.user.states) {
            this.setState({
                error: {
                    firstname: "",
                    city: "",
                    contact: ""
                }
            })
            console.log("entering data")
            this.props.setChangePersonState({
                isProgressbarTriggered: true, allData: {
                    fullname: this.state.user.fullname,
                    lastname: this.state.user.lastname,
                    contact: this.state.user.contact,
                    states: this.state.user.states,
                    city: this.state.user.city,
                    localarea: this.state.user.localarea,
                }
            });
        }
    }
    handleChange(event, key) {
        
        const namePattern = /^[A-Za-z]+$/;
        const pattern = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
        switch (key) {
            case addPostConstKeys.personConstKeys.fullname:
                if (event.target.value==="") {
                    this.setState({
                        user:{
                            fullname: "",
                        lastname: this.state.user.lastname,
                        contact: this.state.user.contact,
                        states: this.state.user.states,
                        city: this.state.user.city,
                        localarea: this.state.user.localarea
                        }
                    });
                    this.setState({
                        error: {
                            firstname: errorMessages.errorMesage.fieldEmpty,
                            
                        }
                    })
                }
                else if(!namePattern.test(event.target.value)){
                    this.setState({
                        user:{
                            fullname: event.target.value,
                        lastname: this.state.user.lastname,
                        contact: this.state.user.contact,
                        states: this.state.user.states,
                        city: this.state.user.city,
                        localarea: this.state.user.localarea
                        }
                    });
                    this.setState({
                        error: {
                            firstname:errorMessages.errorMesage.validFirstName,
                            
                        }
                    })
                }
                else if(event.target.value || namePattern.test(event.target.value)){
                    this.setState({
                        error: {
                            firstname:""
                        }
                    })
                this.setState({
                    user: {
                        fullname: event.target.value,
                        lastname: this.state.user.lastname,
                        contact: this.state.user.contact,
                        states: this.state.user.states,
                        city: this.state.user.city,
                        localarea: this.state.user.localarea

                    }
                });
            }
                break;
            case addPostConstKeys.personConstKeys.lastname:
                if (event.target.value==="") {
                    this.setState({
                        user:{
                            fullname: this.state.user.fullname,
                        lastname:"",
                        contact: this.state.user.contact,
                        states: this.state.user.states,
                        city: this.state.user.city,
                        localarea: this.state.user.localarea
                        }
                    });
                    this.setState({
                        error: {
                            lastname: errorMessages.errorMesage.fieldEmpty,
                            
                        }
                    })
                }
                else if(!namePattern.test(event.target.value)){
                    this.setState({
                        user:{
                            fullname: this.state.user.fullname,
                        lastname: event.target.value,
                        contact: this.state.user.contact,
                        states: this.state.user.states,
                        city: this.state.user.city,
                        localarea: this.state.user.localarea
                        }
                    });
                    this.setState({
                        error: {
                            lastname:errorMessages.errorMesage.validLastName,
                            
                        }
                    })
                }
                else if(event.target.value || namePattern.test(event.target.value)){
                    this.setState({
                        error: {
                            lastname:""
                        }
                    })
                this.setState({
                    user: {
                        fullname: this.state.user.fullname,
                        lastname: event.target.value,
                        contact: this.state.user.contact,
                        states: this.state.user.states,
                        city: this.state.user.city,
                        localarea: this.state.user.localarea
                    }
                });}
                break;
            case addPostConstKeys.personConstKeys.contact:
                if (event.target.value==="") {
                    this.setState({
                        user:{
                            fullname: this.state.user.fullname,
                        lastname: this.state.user.lastname,
                        contact:"",
                        states: this.state.user.states,
                        city: this.state.user.city,
                        localarea: this.state.user.localarea
                        }
                    });
                    this.setState({
                        error: {
                            contact: errorMessages.errorMesage.fieldEmpty
                            
                        }
                    })
                }
                else if(!pattern.test(event.target.value)){
                    this.setState({
                        user:{
                            fullname: this.state.user.fullname,
                            lastname: this.state.user.lastname,
                            contact: event.target.value,
                            states: this.state.user.states,
                            city: this.state.user.city,
                            localarea: this.state.user.localarea
                        }
                    });
                    this.setState({
                        error: {
                            contact:errorMessages.errorMesage.validContactNumber
                            
                        }
                    })
                }
                else if(event.target.value.length!==10){
                    this.setState({
                        user:{
                            fullname: this.state.user.fullname,
                            lastname: this.state.user.lastname,
                            contact: event.target.value,
                            states: this.state.user.states,
                            city: this.state.user.city,
                            localarea: this.state.user.localarea
                        }
                    });
                    this.setState({
                        error: {
                            contact:errorMessages.errorMesage.validTenDigitNumber
                            
                        }
                    })

                }
                else if(event.target.value || pattern.test(event.target.value) ||event.target.value.length===10){
                    
                    this.setState({
                        error: {
                            contact:""
                        }
                    })
                this.setState({
                    user: {
                        fullname: this.state.user.fullname,
                        lastname: this.state.user.lastname,
                        contact: event.target.value,
                        states: this.state.user.states,
                        city: this.state.user.city,
                        localarea: this.state.user.localarea
                    }
                });}
                break;
            case addPostConstKeys.personConstKeys.states:
                if (event.target.value==="") {
                    this.setState({
                        user:{
                            fullname: this.state.user.fullname,
                        lastname: this.state.user.lastname,
                        contact:this.state.user.contact,
                        states: "",
                        city: this.state.user.city,
                        localarea: this.state.user.localarea
                        }
                    });
                    this.setState({
                        error: {
                            states: errorMessages.errorMesage.fieldEmpty
                            
                        }
                    })
                }
                else{
                this.setState({
                    user: {
                        fullname: this.state.user.fullname,
                        lastname: this.state.user.lastname,
                        contact: this.state.user.contact,
                        states: event.target.value,
                        city: this.state.user.city,
                        localarea: this.state.user.localarea
                    }
                });}
                break;
            case addPostConstKeys.personConstKeys.city:
                this.setState({
                    user: {
                        fullname: this.state.user.fullname,
                        lastname: this.state.user.lastname,
                        contact: this.state.user.contact,
                        states: this.state.user.states,
                        city: event.target.value,
                        localarea: this.state.user.localarea
                    }
                });
                break;
            case addPostConstKeys.personConstKeys.localarea:
                if (event.target.value==="") {
                    this.setState({
                        user:{
                            fullname: this.state.user.fullname,
                        lastname:this.state.user.lastname,
                        contact: this.state.user.contact,
                        states: this.state.user.states,
                        city: this.state.user.city,
                        localarea: ""
                        }
                    });
                    this.setState({
                        error: {
                            localarea: errorMessages.errorMesage.fieldEmpty,
                            
                        }
                    })
                }
                else if(!namePattern.test(event.target.value)){
                    this.setState({
                        user:{
                            fullname: this.state.user.fullname,
                        lastname: this.state.user.lastname,
                        contact: this.state.user.contact,
                        states: this.state.user.states,
                        city: this.state.user.city,
                        localarea: event.target.value
                        }
                    });
                    this.setState({
                        error: {
                            localarea:errorMessages.errorMesage.validLocalArea,
                            
                        }
                    })
                }
                else if(event.target.value || namePattern.test(event.target.value)){
                    this.setState({
                        error: {
                            localarea:""
                        }
                    })
                this.setState({
                    user: {
                        fullname: this.state.user.fullname,
                        lastname:this.state.user.lastname,
                        contact: this.state.user.contact,
                        states: this.state.user.states,
                        city: this.state.user.city,
                        localarea: event.target.value
                    }
                });}
                break;
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <form >
                        <div className="row">
                            <div className="col">
                                <div className="inputBox">
                                    <span>{addpostDetails.personDetailsTestKeys.fullname} </span>
                                    {this.state.error.firstname && <div id="errmsg2" className="errmsg">{this.state.error.firstname}</div>}
                                    <input type="text" placeholder="E.g Rohit" value={this.state.user.fullname} onChange={(event) => { this.handleChange(event, addPostConstKeys.personConstKeys.fullname) }} />
                                </div>
                                <div className="inputBox">
                                    <span>{addpostDetails.personDetailsTestKeys.contact} </span>
                                    {this.state.error.contact && <div id="errmsg2" className="errmsg">{this.state.error.contact}</div>}
                                    <input type="text" name={addPostConstKeys.personConstKeys.contact} value={this.state.user.contact} placeholder="+91 | 12345677" onChange={(event) => { this.handleChange(event, addPostConstKeys.personConstKeys.contact) }} />
                                </div>
                                <div className="inputBox">
                                    <span>{addpostDetails.personDetailsTestKeys.city}  </span>
                                    {this.state.error.city && <div id="errmsg2" className="errmsg">{this.state.error.city}</div>}
                                    <select value={this.state.user.city} id="city"  onChange={(event) => { this.handleChange(event, addPostConstKeys.personConstKeys.city) }}>
                                        <option  value="" disabled selected hidden className="disable">
                                            {addpostDetails.personDetailsTestKeys.cities.city9}
                                        </option>
                                        <option> {addpostDetails.personDetailsTestKeys.cities.city1}
                                        </option>
                                        <option >{addpostDetails.personDetailsTestKeys.cities.city2}
                                        </option>
                                        <option > {addpostDetails.personDetailsTestKeys.cities.city3}
                                        </option>
                                        <option >{addpostDetails.personDetailsTestKeys.cities.city4}
                                        </option>
                                        <option > {addpostDetails.personDetailsTestKeys.cities.city5}
                                        </option>
                                        <option >{addpostDetails.personDetailsTestKeys.cities.city6}
                                        </option>
                                        <option > {addpostDetails.personDetailsTestKeys.cities.city7}
                                        </option>
                                        <option > {addpostDetails.personDetailsTestKeys.cities.city8}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="col">
                                <div className="inputBox">
                                    <span>{addpostDetails.personDetailsTestKeys.lastname}</span>
                                    {this.state.error.lastname && <div id="errmsg2" className="errmsg">{this.state.error.lastname}</div>}
                                    <input type="text" value={this.state.user.lastname} placeholder="E.g sharma" onChange={(event) => { this.handleChange(event, addPostConstKeys.personConstKeys.lastname) }} />
                                </div>
                                <div className="inputBox">
                                    <span>{addpostDetails.personDetailsTestKeys.state}</span>
                                    {this.state.error.states && <div id="errmsg2" className="errmsg">{this.state.error.states}</div>}
                                    <select value={this.state.user.states} id="state" onChange={(event) => { this.handleChange(event, addPostConstKeys.personConstKeys.states) }}>
                                        <option  value="" disabled selected hidden>  {addpostDetails.personDetailsTestKeys.states.state9}
                                        </option>
                                        <option> {addpostDetails.personDetailsTestKeys.states.state1}
                                        </option>
                                        <option > {addpostDetails.personDetailsTestKeys.states.state2}
                                        </option>
                                        <option >{addpostDetails.personDetailsTestKeys.states.state3}
                                        </option>
                                        <option > {addpostDetails.personDetailsTestKeys.states.state4}
                                        </option>
                                        <option > {addpostDetails.personDetailsTestKeys.states.state5}
                                        </option>
                                        <option > {addpostDetails.personDetailsTestKeys.states.state6}
                                        </option>
                                        <option >{addpostDetails.personDetailsTestKeys.states.state7}
                                        </option>
                                        <option >{addpostDetails.personDetailsTestKeys.states.state8}
                                        </option>
                                    </select>
                                </div>
                                <div className="inputBox">
                                    <span>{addpostDetails.personDetailsTestKeys.location}</span>
                                    {this.state.error.localarea && <div id="errmsg2" className="errmsg">{this.state.error.localarea}</div>}
                                    <input value={this.state.user.localarea} type="text" placeholder="Enter local area" onChange={(event) => { this.handleChange(event, addPostConstKeys.personConstKeys.localarea) }} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="saveproceed">
                    <button onClick={(event) => { this.setValues(event) }}>{addpostDetails.personDetailsTestKeys.buttonLabel}</button>
                </div>
            </React.Fragment>
        )
    }
}
export default Personaldetailform;