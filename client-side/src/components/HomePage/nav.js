import React from "react";
import { Link } from "react-router-dom";
import textKeys from "../../testKeys/textKeys";
import './nav.css';
import axios from "axios";
class Navitems extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            searchBoxValue:"",
            timeOut:0
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.callApi=this.callApi.bind(this);

    }
    handleClick() {
        this.props.emptyState({ userDetails: { username: "", email: "" } })
    }
    handleSearch(event){
        if(this.state.timeOut){
            clearTimeout(this.state.timeOut);
        }
       
        
           this.setState({
               searchBoxValue:event.target.value,
            timeOut:setTimeout(()=>{
                this.callApi(this.state.searchBoxValue)
            },1000)})
        
    }
     callApi(searchValue){
        axios.get(`http://localhost:8000/api/v1/searchedPet?searchItem=${searchValue}`)
        .then(response => {
                this.props.setSearchTerm({searchTerm:response.data})
        })
        .catch(error => {
            console.log(error);
        })
        
    }
    render() {
        return (
            <React.Fragment>
                <div className="navbarcontainer">
                    <nav>
                        <ul>
                            
                            <li className="search">
                                <input id="searchinput" placeholder="Search" onChange={(event)=>{this.handleSearch(event)}} type="text"/>
                                </li>
                           
                        </ul>
                        <div className="imageelement">
                            <img src="./images/user-2.png" alt="user"/>
                                <div className="names">
                                    <h4>{this.props.setname}</h4>
                                    <h5>{this.props.setemail}</h5>
                                </div>
                                <div className="headerbtn">
                                   
                                    <button onClick={this.handleClick}>{textKeys.navTextKeys.logoutButtonLabel}</button>
                                   <Link to='/addpost'> <button>{textKeys.navTextKeys.addButtonLabel}</button></Link>
                                </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}
export default Navitems;