import React from "react";
import './viewDetails.css';
import axios from "axios";
import { Link } from "react-router-dom";
import viewDetailsKeys from "../ConstantKeyValues/viewDetailsConstantKeys";
class Viewdetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dogDetail: {
                age: "",
                breed: "",
                city: "",
                contact: "",
                description: "",
                fullname: "",
                gender: "",
                image1:[],
                lastname: "",
                localarea: "",
                petid: "",
                petname: "",
                species: "",
                states: "",
                todayDate:""
            },
            imageTriggered: false
        }
        this.changeImage1 = this.changeImage.bind(this);
        this.setId = this.setId.bind(this);
    }
    changeImage() {
        if (this.state.imageTriggered === false) {
            this.setState({
                imageTriggered: true
            })
        }
        else if (this.state.imageTriggered === true) {
            this.setState({
                imageTriggered: false
            })
        }

    }
    changeImage2() {
        this.setState({
            imageTriggered: false
        })
    }

    componentDidMount() {
        axios.post(`${process.env.REACT_APP_EDIT_URI}/${this.props.setDogdataId.particularDogDetailId}`)
            .then(res => {
                this.setState({ dogDetail: res.data.pet })
            })
    }
    setId(){
        this.props.setForAddPost({
            dogIdForAddPost:this.props.setDogdataId.particularDogDetailId
        })
    }
    render() {
        const imageurl2=[];
        for(let i=0;i<this.state.dogDetail.image1.length;i++)
        {
            imageurl2[i]=this.state.dogDetail.image1[i].path;
        }
        return (
            <React.Fragment>
                <div className="viewparentdiv">
                    <Link to="/"><img src="./images/left-arrow.png" alt="" /></Link>
                    <h3>{viewDetailsKeys.info.heading}</h3>
                    <div className="col2">
                        <div className="viewchilddiv">
                            <div className="detailsdiv">
                                <h3>{this.state.dogDetail.petname}</h3>
                                <div className="savetag">
                                    <img src="./images/savetocollection.png" alt="" />
                                </div>
                            </div>
                            <div className="petdiv">

                                <div className="date">
                                    <p className="datehead">{viewDetailsKeys.info.date}</p> <p className="datevalue">{this.state.dogDetail.todayDate}</p>
                                </div>
                            </div>

                            <div className="petdetailheading">
                                <p>{viewDetailsKeys.info.petDetailsHeading}</p>
                            </div>
                            <div className="speciestype">
                                <p>{viewDetailsKeys.info.species}</p>
                                <div className="speciesname">
                                    <p>{this.state.dogDetail.species}</p>
                                </div>
                            </div>

                            <div className="breedtype">
                                <p>{viewDetailsKeys.info.breed}</p>
                                <div className="breedname">
                                    <p>{this.state.dogDetail.breed}</p>
                                </div>
                            </div>
                            <div className="petgender">
                                <p>{viewDetailsKeys.info.gender}</p>
                                <div className="petgendertype">
                                    <p>{this.state.dogDetail.gender}</p>
                                </div>
                            </div>
                            <div className="petage">
                                <p>{viewDetailsKeys.info.age}</p>
                                <div className="petagevalue">
                                    <p>{this.state.dogDetail.age}</p>
                                </div>
                            </div>
                            <div className="descriptionheading">
                                <p>{viewDetailsKeys.info.description}</p>
                                <div className="description">
                                    <p>{this.state.dogDetail.description}</p>
                                </div>
                            </div>
                            <div className="contactdetailheading">
                                <p>{viewDetailsKeys.info.contactDetailHeading}</p>
                            </div>
                            <div className="ownerdetail">
                                <p>{viewDetailsKeys.info.name}</p>
                                <div className="ownername">
                                    <p>{this.state.dogDetail.fullname} {this.state.dogDetail.lastname}</p>
                                </div>
                            </div>
                            <div className="owneraddress">
                                <p>{viewDetailsKeys.info.location}</p>
                                <div className="address">
                                    <p className="city">{this.state.dogDetail.city}</p> <p className="state">{this.state.dogDetail.states}</p>
                                </div>
                            </div>
                            <div className="ownerphonenumber">
                                <p>{viewDetailsKeys.info.contactNumber}</p>
                                <div className="phonenumber">
                                    <p className="mobileno">{this.state.dogDetail.contact}</p>
                                </div>
                            </div>
                            <div className="requestbtn">
                               <Link to="/addPost"> <button onClick={this.setId}>{viewDetailsKeys.info.buttonLabel}</button></Link>
                            </div>
                        </div>
                        <div className="imgdiv">
                            {this.state.imageTriggered ?<img id="dogimage" src={`${process.env.REACT_APP_IMAGE_URI}/${imageurl2[0]}`} alt="" /> :<img id="dogimage" src={`${process.env.REACT_APP_IMAGE_URI}/${imageurl2[1]}`} alt="" />}
                        </div>


                    </div>
                    <div className="arrowdiv">
                        <img src="./images/leftarrow.png" onClick={(event) => this.changeImage(event)} alt="" className="leftarrow" />
                        <img src="./images/rightarrow.png" onClick={(event) => this.changeImage(event)} alt="" />
                    </div>
                </div>

            </React.Fragment>
            
        )
    }
}
export default Viewdetails;