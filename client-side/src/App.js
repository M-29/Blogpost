import './App.css';
import HomeCards from './components/HomePage/homeInfo';
import './components/HomePage/homeInfo.css'
import Login from './components/Login/login';
import Register from './components/Register/Register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Viewdetails from './components/viewDetails';
import Addpost from './components/AddPost/addPost';
import { Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userDetails:{
        username:"",
        email:""
      },
      particularDogDetailId:"",
      dogIdForAddPost:"",
      moveToLoginOrRegister:false
    }
    this.changeState=this.changeState.bind(this);
    this.changeStateForDogId=this.changeStateForDogId.bind(this);
    this.moveToLoginOrRegister=this.moveToLoginOrRegister.bind(this);
    this.getIdForAddPost =this.getIdForAddPost.bind(this);
  }
  changeState(newstate) {
    this.setState({
      userDetails:{
        username:newstate.userDetails.username,
        email:newstate.userDetails.email
      }
    });
  }
  changeStateForDogId(newstate){
    this.setState({
      particularDogDetailId:newstate
    })
  }
  getIdForAddPost(newstate){
    this.setState({
      dogIdForAddPost:newstate.dogIdForAddPost
    })
  }
  moveToLoginOrRegister(newstate){
    this.setState({moveToLogin:newstate.moveToLogin})
  }
  render() {
   
    return (
      
      <div className="App">
        <BrowserRouter>
          <Switch>
            
            <Route exact path='/'>
              {!this.state.userDetails.username ? <Login setlogindetails={this.changeState} setLoginValue={this.moveToLoginOrRegister}/>:<HomeCards setlogindetails={this.changeState} setnamedetails={this.state.userDetails.username} setemaildetails={this.state.userDetails.email} setParticularDogDetailId={this.changeStateForDogId} />}
            </Route>
            <Route path='/login'><Login /></Route>
            <Route path='/register'>
              {this.state.moveToLogin ?<Register setRegisterValue={this.moveToLoginOrRegister} />:<Redirect to="/"/>}
              </Route>
            <Route path='/addpost'><Addpost setPetId={this.state.dogIdForAddPost} removePetIdForAdd={this.getIdForAddPost}/></Route>
            <Route path='/viewdetails'> <Viewdetails setDogdataId={this.state.particularDogDetailId} setForAddPost={this.getIdForAddPost}/></Route>
          
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}
export default App;

