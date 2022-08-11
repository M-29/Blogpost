import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import textKeys from "../../testKeys/textKeys";
import Popupbox from "../PopupBoxes/popUpBox";
import Navitems from "./nav";

class HomeCards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dogDetails: [],
            // searchTerm: [],
            petId:"",
            triggerPopUpBox:false,
            ifYesTriggered:false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSearchItem = this.handleSearchItem.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.removeDialogBox =this.removeDialogBox.bind(this);
        this.yesTriggered =this.yesTriggered.bind(this);
    }
    yesTriggered(newstate){
        this.setState({ifYesTriggered:newstate.ifYesTriggered})
        if(this.state.ifYesTriggered){
            axios.delete(`${process.env.REACT_APP_DELETE_URI}/${this.state.petId}`)
                .then(res => {
                    this.setState({
                        dogDetails: this.state.dogDetails.filter((pet) => {
                            return pet._id !== this.state.petId;
                        })
                    })
                    this.setState({triggerPopUpBox:false})
                })
            }
            else{
                console.log("error");
            }
    }
    removeDialogBox(newstate){
        this.setState({triggerPopUpBox:newstate.triggerPopUpBox})
    }
    handleSearchItem(newstate) {
        //this.setState({searchTerm:newstate.searchTerm});
        this.setState({dogDetails:newstate.searchTerm})
    }
    handleClick(event) {
        this.props.setParticularDogDetailId({ particularDogDetailId: event.target.id })

    }
    handleDeleteClick(event) {
        this.setState({triggerPopUpBox:true})
        this.setState({petId:event.target.id})
       
    }
    componentDidMount() {
            axios.get(`${process.env.REACT_APP_ALLPETS_URI}`)
                .then(response => {

                    this.setState({ dogDetails: response.data.pets })
                })
                .catch(error => {
                    console.log(error);
                })
    }
    render() {
        let renderDogdata = this.state.dogDetails.map(dogsData => {
           
            const imageurl = `${process.env.REACT_APP_IMAGE_URI}/${dogsData.image1[0].path}`;
            const imageurl1 = `${process.env.REACT_APP_IMAGE_URI}/${dogsData.image1[1].path}`;
            return (

                <div className="card" key={dogsData._id}>
                    <div className="imgbox">
                        <img src={dogsData.url}
                            onMouseOver={e => (e.currentTarget.src = imageurl)}
                            onMouseOut={e => (e.currentTarget.src = imageurl1)} alt="" />
                    </div>
                    <div className="info">
                        <div className="subinfo">
                            <div className="heading">
                                <h3>{dogsData.petname}</h3>
                            </div>
                            <div className="distance">
                                <img src="./images/map.png" alt="" />
                                <h6>{textKeys.homeTextkeys.distance}</h6>
                            </div>
                        </div>

                        <p>{textKeys.homeTextkeys.breed}:{dogsData.breed}</p>

                        <div className="infotags">
                            <div className="heading2">
                                <p>{textKeys.homeTextkeys.dogGender}: {dogsData.gender}</p>
                            </div>
                            <div className="infotag">
                                <img src="./images/savetocollection.png" alt="" />
                                <div className="viewdata">
                                    <Link to="/viewdetails"><button id={dogsData._id} onClick={(event) => this.handleClick(event)}>{textKeys.homeTextkeys.viewButtonLabel}</button></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="deleteDiv" >
                        <button className="deleteBtn" id={dogsData._id} onClick={(event) => this.handleDeleteClick(event)}>X</button>
                    </div>
                </div>
            )
        })
        return (
            <React.Fragment>
                <Navitems emptyState={this.props.setlogindetails} setname={this.props.setnamedetails} setemail={this.props.setemaildetails} setSearchTerm={this.handleSearchItem} />
                <div className="cardcontainer">
                    <div className="cardview">
                        {renderDogdata}
                    </div>
                </div>
                {this.state.triggerPopUpBox?<Popupbox setBtns={this.state.triggerPopUpBox} setPopupmessage={textKeys.homeMessages.deleteConfirmationMessage} removePopupBox={this.removeDialogBox} setYes={this.yesTriggered}/>:""}
            </React.Fragment>
        )
    }
}
export default HomeCards;