import React from "react";
import successMessages from "../../testKeys/successMessages";
import textKeys from "../../testKeys/textKeys";
import './popupBox.css';
class Popupbox extends React.Component{
    constructor(props){
        super(props)
        this.removeflexbox=this.removeflexbox.bind(this);
        this.removeflexbox2=this.removeFlexBoxSecond.bind(this);
        this.deleteCard=this.deleteCard.bind(this);
    }
    deleteCard(){
        this.props.setYes({ifYesTriggered:true})
    }
    removeflexbox(){
            this.props.removePopup({isPopUpTriggered:false})
            
    }
    removeFlexBoxSecond(){
        this.props.removePopupBox({triggerPopUpBox:false})
    }
    render(){
        return(
            <React.Fragment>
                <div className="login-flex">
                    <div className="responsecontent">
                        {this.props.setEdittedPetName?<h3 id="loginheading">{this.props.setEdittedPetName} {successMessages.editSucessMessage.sucessFullyEdit}<br/></h3>:
                        <h3 id="loginheading">{this.props.setPopupmessage}<br/></h3>}
                        {this.props.setBtns?<button id="removebtn1" onClick={this.deleteCard}>{textKeys.popUpBoxKeys.yes}</button>:""}
                        {this.props.setBtns?<button onClick={this.removeFlexBoxSecond} id="removebtn">{textKeys.popUpBoxKeys.no}</button>:<button id="removebtn" onClick={this.removeflexbox}>{textKeys.popUpBoxKeys.ok}</button>}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Popupbox;