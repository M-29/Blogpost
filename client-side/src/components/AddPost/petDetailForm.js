import axios from "axios";
import React from "react";
import addPostConstKeys from "../../testKeys/addPostConstKeys";
import addpostDetails from "../../testKeys/addPostTestKeys";
import errorMessages from "../../testKeys/errorMessages";
import './petDetailForm.css'
class Petdetailform extends React.Component {
    constructor(props) {
        super(props)
        const current = new Date();
        const todayDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        this.state = {
            allDetails: {
                fullname: "",
                lastname: "",
                contact: "",
                states: "",
                city: "",
                localarea: "",
                petname: "",
                species: "",
                gender: "",
                breed: "",
                age: "",
                description: "",
                image1: [],
                image2:[],
                todayDate:todayDate
            },
            error:{
                petname:"",
                species:"",
                age:"",
                breed:""
            }
        }
        this.setValues = this.setValues.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        if(this.props.setId){
            axios.post(`${process.env.REACT_APP_EDIT_URI}/${this.props.setId}`)
            .then(res => {
                 this.setState({ allDetails: res.data.pet })
            })
            .catch(error => {
                console.log(error);
            })
        }
        else{
            console.log("entered else");
        } 
    }
    handleChange(event, key) {

        console.log(this.state.allDetails);
        const namePattern = /^[A-Za-z]+$/;
        switch (key) {
            case addPostConstKeys.petDetailsConstKeys.petname:
                if (event.target.value===""){
                    this.setState({
                        allDetails: {
                            petname:"",
                            age: this.state.allDetails.age,
                            gender: this.state.allDetails.gender,
                            species: this.state.allDetails.species,
                            breed: this.state.allDetails.breed,
                                image1: this.state.allDetails.image1,
                                image2:this.state.allDetails.image2,
                            description: this.state.allDetails.description,
                            fullname: this.props.setPersonInfo.fullname,
                            lastname: this.props.setPersonInfo.lastname,
                            contact: this.props.setPersonInfo.contact,
                            states: this.props.setPersonInfo.states,
                            city: this.props.setPersonInfo.city,
                            localarea: this.props.setPersonInfo.localarea,
                            todayDate:this.state.allDetails.todayDate
                        }
                    })
                    this.setState({
                        error: {
                            petname: errorMessages.errorMesage.fieldEmpty,
                            
                        }
                    })
                }
                else if(!namePattern.test(event.target.value)){
                    this.setState({
                        allDetails: {
                            petname: event.target.value,
                            age: this.state.allDetails.age,
                            gender: this.state.allDetails.gender,
                            species: this.state.allDetails.species,
                            breed: this.state.allDetails.breed,
                                image1: this.state.allDetails.image1,
                                image2:this.state.allDetails.image2,
                            description: this.state.allDetails.description,
                            fullname: this.props.setPersonInfo.fullname,
                            lastname: this.props.setPersonInfo.lastname,
                            contact: this.props.setPersonInfo.contact,
                            states: this.props.setPersonInfo.states,
                            city: this.props.setPersonInfo.city,
                            localarea: this.props.setPersonInfo.localarea,
                            todayDate:this.state.allDetails.todayDate
                        }
                    })
                    this.setState({
                        error: {
                            petname: errorMessages.errorMesage.validFirstName,
                            
                        }
                    })
                }
                else if(event.target.value || namePattern.test(event.target.value)){
                    this.setState({
                        error: {
                            petname:""
                        }
                    })
                this.setState({
                    allDetails: {
                        petname: event.target.value,
                        age: this.state.allDetails.age,
                        gender: this.state.allDetails.gender,
                        species: this.state.allDetails.species,
                        breed: this.state.allDetails.breed,
                            image1: this.state.allDetails.image1,
                            image2:this.state.allDetails.image2,
                        description: this.state.allDetails.description,
                        fullname: this.props.setPersonInfo.fullname,
                        lastname: this.props.setPersonInfo.lastname,
                        contact: this.props.setPersonInfo.contact,
                        states: this.props.setPersonInfo.states,
                        city: this.props.setPersonInfo.city,
                        localarea: this.props.setPersonInfo.localarea,
                        todayDate:this.state.allDetails.todayDate
                    }
                });}
                break;
           
            case addPostConstKeys.petDetailsConstKeys.age:
                this.setState({
                    allDetails: {
                        petname: this.state.allDetails.petname,
                        
                        age: event.target.value,
                        gender: this.state.allDetails.gender,
                        species: this.state.allDetails.species,
                        breed: this.state.allDetails.breed,
                            image1: this.state.allDetails.image1,
                            image2:this.state.allDetails.image2,
                        description: this.state.allDetails.description,
                        fullname: this.props.setPersonInfo.fullname,
                        lastname: this.props.setPersonInfo.lastname,
                        contact: this.props.setPersonInfo.contact,
                        states: this.props.setPersonInfo.states,
                        city: this.props.setPersonInfo.city,
                        localarea: this.props.setPersonInfo.localarea,
                        todayDate:this.state.allDetails.todayDate
                    }
                })
                break;
            case addPostConstKeys.petDetailsConstKeys.gender:
                this.setState({
                    allDetails: {
                        petname: this.state.allDetails.petname,
                        age: this.state.allDetails.age,
                        gender: event.target.value,
                        species: this.state.allDetails.species,
                        breed: this.state.allDetails.breed,
                            image1: this.state.allDetails.image1,
                            image2:this.state.allDetails.image2,
                        description: this.state.allDetails.description,
                        fullname: this.props.setPersonInfo.fullname,
                        lastname: this.props.setPersonInfo.lastname,
                        contact: this.props.setPersonInfo.contact,
                        states: this.props.setPersonInfo.states,
                        city: this.props.setPersonInfo.city,
                        localarea: this.props.setPersonInfo.localarea,
                        todayDate:this.state.allDetails.todayDate
                    }
                })
                break;
            case addPostConstKeys.petDetailsConstKeys.species:
                this.setState({
                    allDetails: {
                        petname: this.state.allDetails.petname,
                        age: this.state.allDetails.age,
                        gender: this.state.allDetails.gender,
                        species: event.target.value,
                        breed: this.state.allDetails.breed,
    
                            image1: this.state.allDetails.image1,
                            image2:this.state.allDetails.image2,
                        description: this.state.allDetails.description,
                        fullname: this.props.setPersonInfo.fullname,
                        lastname: this.props.setPersonInfo.lastname,
                        contact: this.props.setPersonInfo.contact,
                        states: this.props.setPersonInfo.states,
                        city: this.props.setPersonInfo.city,
                        localarea: this.props.setPersonInfo.localarea,
                        todayDate:this.state.allDetails.todayDate
                    }
                })
                break;
            case addPostConstKeys.petDetailsConstKeys.image1:
                this.setState({
                    allDetails: {
                        petname: this.state.allDetails.petname,
                        age: this.state.allDetails.age,
                        gender: this.state.allDetails.gender,
                        species: this.state.allDetails.species,
                        breed: this.state.allDetails.breed,
                        description: this.state.allDetails.description,
                        image1: event.target.files[0],
                        image2:this.state.allDetails.image2,
                        fullname: this.props.setPersonInfo.fullname,
                        lastname: this.props.setPersonInfo.lastname,
                        contact: this.props.setPersonInfo.contact,
                        states: this.props.setPersonInfo.states,
                        city: this.props.setPersonInfo.city,
                        localarea: this.props.setPersonInfo.localarea,
                        todayDate:this.state.allDetails.todayDate
                    }
                })
                break;
            case addPostConstKeys.petDetailsConstKeys.image2:
               
                const image2 = event.target.files[0]
                
                this.setState({
                    allDetails: {
                        petname: this.state.allDetails.petname,
                        age: this.state.allDetails.age,
                        gender: this.state.allDetails.gender,
                        species: this.state.allDetails.species,
                        breed: this.state.allDetails.breed,
                        description: this.state.allDetails.description,
                       image1: this.state.allDetails.image1,
                       image2:image2,
                        fullname: this.props.setPersonInfo.fullname,
                        lastname: this.props.setPersonInfo.lastname,
                        contact: this.props.setPersonInfo.contact,
                        states: this.props.setPersonInfo.states,
                        city: this.props.setPersonInfo.city,
                        localarea: this.props.setPersonInfo.localarea,
                        todayDate:this.state.allDetails.todayDate
                    }
                })
                break;
            case addPostConstKeys.petDetailsConstKeys.breed:
                this.setState({
                    allDetails: {
                        petname: this.state.allDetails.petname,
                        age: this.state.allDetails.age,
                        gender: this.state.allDetails.gender,
                        species: this.state.allDetails.species,
                        breed: event.target.value,
                    
                            image1: this.state.allDetails.image1,
                            image2:this.state.allDetails.image2,
                        description: this.state.allDetails.description,
                        fullname: this.props.setPersonInfo.fullname,
                        lastname: this.props.setPersonInfo.lastname,
                        contact: this.props.setPersonInfo.contact,
                        states: this.props.setPersonInfo.states,
                        city: this.props.setPersonInfo.city,
                        localarea: this.props.setPersonInfo.localarea,
                        todayDate:this.state.allDetails.todayDate
                    }
                })
                break;
            case addPostConstKeys.petDetailsConstKeys.description:
                
                this.setState({
                    allDetails: {
                        petname: this.state.allDetails.petname,
                        age: this.state.allDetails.age,
                        gender: this.state.allDetails.gender,
                        species: this.state.allDetails.species,
                        breed: this.state.allDetails.breed,
                            image1: this.state.allDetails.image1,
                            image2:this.state.allDetails.image2,
                        description: event.target.value,
                        fullname: this.props.setPersonInfo.fullname,
                        lastname: this.props.setPersonInfo.lastname,
                        contact: this.props.setPersonInfo.contact,
                        states: this.props.setPersonInfo.states,
                        city: this.props.setPersonInfo.city,
                        localarea: this.props.setPersonInfo.localarea,
                        todayDate:this.state.allDetails.todayDate                  
                    }
                })
                break;

        }
    }
    
    setValues(event) {
        event.preventDefault();
        if(!this.state.allDetails.petname && !this.state.allDetails.age && !this.state.allDetails.breed && !this.state.allDetails.species){
            this.setState({
                error:{
                    petname:errorMessages.errorMesage.fieldEmpty,
                    age:errorMessages.errorMesage.fieldEmpty,
                    species:errorMessages.errorMesage.fieldEmpty,
                    breed:errorMessages.errorMesage.fieldEmpty
                }
            })
        }
        if(this.state.allDetails.petname && this.state.allDetails.age && this.state.allDetails.breed && this.state.allDetails.species && this.state.allDetails.description && this.state.allDetails.image1 ){
        this.setState({
            error:{
                petname:"",
                species:"",
                age:"",
                breed:""
            }
        })
        if(!this.props.setId){
        const formData = new FormData();
        formData.append("petname",this.state.allDetails.petname);
        formData.append("age",this.state.allDetails.age);
        formData.append("gender",this.state.allDetails.gender);
        formData.append("species",this.state.allDetails.species);
        formData.append("breed",this.state.allDetails.breed);
        formData.append("description",this.state.allDetails.description);
        formData.append("image1",this.state.allDetails.image1);
        formData.append("image1",this.state.allDetails.image2);
        formData.append("fullname",this.state.allDetails.fullname);
        formData.append("lastname",this.state.allDetails.lastname);
        formData.append("contact",this.state.allDetails.contact);
        formData.append("city",this.state.allDetails.city);
        formData.append("states",this.state.allDetails.states);
        formData.append("localarea",this.state.allDetails.localarea);
        formData.append("todayDate",this.state.allDetails.todayDate);
        console.log(formData);
        axios({
            method: "post",
            url: `${process.env.REACT_APP_PETDATA_URI}`,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(res => {
                console.log(res);
                this.props.setPopUpBox({isPopUpTriggered:true})
            })
            .catch(err => {
                console.log(err);
            })
        }
        else{
            
            const formData = new FormData();
        formData.append("petname",this.state.allDetails.petname);
        formData.append("age",this.state.allDetails.age);
        formData.append("gender",this.state.allDetails.gender);
        formData.append("species",this.state.allDetails.species);
        formData.append("breed",this.state.allDetails.breed);
        formData.append("description",this.state.allDetails.description);
        formData.append("image1",this.state.allDetails.image1);
        formData.append("image1", this.state.allDetails.image2);
        formData.append("fullname",this.state.allDetails.fullname);
        formData.append("lastname",this.state.allDetails.lastname);
        formData.append("contact",this.state.allDetails.contact);
        formData.append("city",this.state.allDetails.city);
        formData.append("states",this.state.allDetails.states);
        formData.append("localarea",this.state.allDetails.localarea);
        formData.append("todayDate",this.state.allDetails.todayDate);
           
            axios({
                method: "put",
                url: `${process.env.REACT_APP_EDIT_URI}/${this.props.setId}`,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(res => {
                    
                    this.props.setPopUpBox({isPopUpTriggered:true,
                    petName:res.data.petname +" "+ res.data.species})
                })
                .catch(err => {
                    console.log(err);
                })
    
       
        }
        
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
                                    <span>{addpostDetails.petDetailsTestKeys.petname}</span>
                                    {this.state.error.petname && <div id="errmsg2" className="errmsg">{this.state.error.petname}</div>}
                                    <input type="text" value={this.state.allDetails.petname} placeholder={addpostDetails.petDetailsTestKeys.breeds.breed2} onChange={(event) => { this.handleChange(event, addPostConstKeys.petDetailsConstKeys.petname) }} />
                                </div>
                                <div className="inputBox">
                                    <span>{addpostDetails.petDetailsTestKeys.age}</span>
                                    {this.state.error.age && <div id="errmsg2" className="errmsg">{this.state.error.age}</div>}
                                    <input type="text" value={this.state.allDetails.age} placeholder={addpostDetails.petDetailsTestKeys.age} onChange={(event) => { this.handleChange(event, addPostConstKeys.petDetailsConstKeys.age) }} />
                                </div>
                                <div className="inputBox">
                                    <span>{addpostDetails.petDetailsTestKeys.description}</span>
                                    <textarea value={this.state.allDetails.description} placeholder={addpostDetails.petDetailsTestKeys.description} className="textarea" onChange={(event) => { this.handleChange(event, addPostConstKeys.petDetailsConstKeys.description) }} />
                                </div>

                            </div>

                            <div className="col">
                               
                                <div className="inputBox">
                                    <span>{addpostDetails.petDetailsTestKeys.specie}</span>
                                    {this.state.error.species && <div id="errmsg2" className="errmsg">{this.state.error.species}</div>}
                                    <select className="selectboxes" value={this.state.allDetails.species} onChange={(event) => { this.handleChange(event, addPostConstKeys.petDetailsConstKeys.species) }}>
                                        <option value="" disabled selected hidden>
                                        {addpostDetails.petDetailsTestKeys.species.option1}
                                        </option>
                                        <option> 
                                        {addpostDetails.petDetailsTestKeys.species.option2}
                                        </option>
                                        <option > 
                                        {addpostDetails.petDetailsTestKeys.species.option3}
                                        </option>
                                    </select>

                                </div>
                                <div className="inputBox">
                                    <span> {addpostDetails.petDetailsTestKeys.breed}</span>
                                    {this.state.error.breed && <div id="errmsg2" className="errmsg">{this.state.error.breed}</div>}
                                    <select className="selectboxes" value={this.state.allDetails.breed} onChange={(event) => { this.handleChange(event, addPostConstKeys.petDetailsConstKeys.breed) }}>
                                        <option value="" disabled selected hidden>
                                        {addpostDetails.petDetailsTestKeys.breeds.breed1}
                                        </option>
                                        <option> {addpostDetails.petDetailsTestKeys.breeds.breed2}
                                        </option>
                                        <option >{addpostDetails.petDetailsTestKeys.breeds.breed3}
                                        </option>
                                    </select>


                                </div>
                                <div className="inputBox">
                                    <span>{addpostDetails.petDetailsTestKeys.gender}</span>
                                    <select className="selectboxes" value={this.state.allDetails.gender} onChange={(event) => { this.handleChange(event, addPostConstKeys.petDetailsConstKeys.gender) }}>
                                        <option value="" disabled selected hidden>
                                        {addpostDetails.petDetailsTestKeys.genders.gender}
                                        </option>
                                        <option> 
                                        {addpostDetails.petDetailsTestKeys.genders.male}
                                        </option>
                                        <option >
                                        {addpostDetails.petDetailsTestKeys.genders.female}
                                        </option>
                                    </select>

                                </div>



                            </div>

                        </div>

                    </form>
                </div>
                <div className="inputBox">
                    <span>{addpostDetails.petDetailsTestKeys.petimage}</span>
                </div>
                <div className="imagepicker-container">
                    <div className="images">
                        <img src="./images/camera3.png" alt=""/>
                        <div className="image-uploader">
                            <input type="file" id="input" accept="image" onChange={(event) => { this.handleChange(event, addPostConstKeys.petDetailsConstKeys.image1) }} />
                            <label htmlFor="input">{addpostDetails.petDetailsTestKeys.uploads.uploadImage1}</label>
                        </div>
                    </div>
                    <div className="images">
                        <img src="./images/camera3.png" alt="" />
                        <div className="image-uploader">
                            <input type="file" id="input1" accept="image" onChange={(event) => { this.handleChange(event, addPostConstKeys.petDetailsConstKeys.image2) }} />
                            <label htmlFor="input1">{addpostDetails.petDetailsTestKeys.uploads.uploadImage2}</label>
                        </div>
                    </div>
                </div>

                <div className="post">
                    <button onClick={(event => { this.setValues(event) })} >{addpostDetails.petDetailsTestKeys.btnPost}</button>
                </div>
            </React.Fragment>
        )
    }
}
export default Petdetailform;