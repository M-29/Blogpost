import React from "react";
import { Link } from "react-router-dom";
import successMessages from "../../testKeys/successMessages";
import Popupbox from "../PopupBoxes/popUpBox";
import './addPost.css';
import Personaldetailform from "./personalDetailForm";
import Petdetailform from "./petDetailForm";
import Progressbarone from "./progressBar1";
import ProgressbarSecond from "./progressBar2";


class Addpost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allData: {
                fullname: "",
                lastname: "",
                contact: "",
                states: "",
                city: "",
                localarea: "",
                
            },
            isProgressbarTriggered: false,
            isFormTriggered: false,
            isPopUpTriggered:false,
            petName:""
        }
        this.changeState = this.changeState.bind(this);
        this.changePetState=this.changePetState.bind(this);
        this.handlePopUpBox =this.handlePopUpBox.bind(this);
        this.removePopUpBox=this.removePopUpBox.bind(this);
        this.removePetId = this.removePetId.bind(this);
        
    }
   
    handlePopUpBox(newstate){
        this.setState({
            isPopUpTriggered:newstate.isPopUpTriggered,
            petName:newstate.petName
        })
    }
    removePetId(){
        this.props.removePetIdForAdd({
            dogIdForAddPost:""
        })
    }
    changeState(newstate) {
        this.setState({
            
            allData: {
                fullname: newstate.allData.fullname,
                lastname: newstate.allData.lastname,
                contact: newstate.allData.contact,
                states: newstate.allData.states,
                city: newstate.allData.city,
                localarea: newstate.allData.localarea,
               
            },
            isProgressbarTriggered: newstate.isProgressbarTriggered,
        })
    }
    changePetState(newstate){
        this.setState({
            isProgressbarTriggered:newstate.isProgressbarTriggered
        })
    }
    removePopUpBox(newstate){
        this.setState({
            isPopUpTriggered:newstate.isPopUpTriggered
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="main-container">
                    <div className="backarrow">
                        {this.props.setPetId ?<Link to="/"><img src="./images/left-arrow.png" alt=""  onClick={this.removePetId}/></Link>
                        :<Link to="/"><img src="./images/left-arrow.png" alt=""/></Link>}
                        {!this.props.setPetId ?<h3>Add Post</h3> :<h3>Edit Data</h3>}
                    </div>
                    {this.state.isProgressbarTriggered ? <ProgressbarSecond setChangeState={this.changePetState} />
                     : <Progressbarone setChangeState2={this.changeState} />}
                    {this.state.isProgressbarTriggered ? <Petdetailform setChangePetState={this.changePetState} setId={this.props.setPetId}
                     setPersonInfo={this.state.allData} setPopUpBox={this.handlePopUpBox} />
                     : <Personaldetailform setChangePersonState={this.changeState} settingDetails={this.state.allData} 
                       isPetId={this.props.setPetId}/>}
                </div>
                {this.state.isPopUpTriggered ? <Popupbox setPopupmessage={successMessages.addPostSucessMessage.successfullyAdded} setEdittedPetName={this.state.petName} removePopup={this.removePopUpBox}/> :""}
            </React.Fragment>
        )
    }
}
export default Addpost;