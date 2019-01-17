import React, { Component } from 'react';
import '../../App.css';
import {Loader} from '../utils/loader';

import {EmailInput} from '../inputs/emailInput';

export class GetProfile extends Component{
    constructor(props){
      super(props);
  
      this.state = {
        userProfiles: [],
        userEmail: '',
        url: ''
      }
  
      this.renderProfiles = this.renderProfiles.bind(this);
      this.getProfiles = this.getProfiles.bind(this);
      this.onEmailChange = this.onEmailChange.bind(this);
    }
    
    renderProfiles({_id, userName, userEmail, userAge, userInformation, userCellPhone, userAddress, profileType, userAvatarUri}){
  
      if(profileType === "public"){
        return (
          <div key={_id}>
          {/* <img src={this.state.url} alt="avatar" width="240" height="240"/><br/> */}
          <img src={userAvatarUri} alt="avatar" width="240" height="240"/><br/>
            First Name: {userName.firstName} <br/>
            Last Name: {userName.lastName} <br/>
            Full Name: {userName.fullName} <br/>
            Age: {userAge} <br/>
            Information: {userInformation} <br/>
            Email: {userEmail} <br/>
            
            <br/>
          </div>
        )
      }else{
        return (
          <div key={_id}>
            {/* <img src={this.state.url} alt="avatar" width="240" height="240"/> <br/> */}
            <img src={userAvatarUri} alt="avatar" width="240" height="240"/><br/>
            First Name: {userName.firstName} <br/>
            Last Name: {userName.lastName} <br/>
            Full Name: {userName.fullName} <br/>
            Age: {userAge} <br/>
            Information: {userInformation} <br/>
            Cell phone: {userCellPhone} <br/>
            Address: {userAddress} <br/>
            Email: {userEmail} <br/>
            <br/>
          </div>
          )
      }
    }
  
    onEmailChange(val) {
      this.setState({userEmail: val})
    }
  
    getProfiles(){
      let queryedEmail = '?userEmail=' + this.state.userEmail;
      fetch(`http://localhost:5001/profiles/getprofiles${queryedEmail}`, {
        method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
          }
      })
      .then(res => res.json())
      .then(res => this.setState({userProfiles: res.profiles, url: res.url}))
      .catch(err => console.log(err))
    }
    
    render(){
      let {userProfiles} = this.state;
      return(
        <div>
          <h2>Find user profile</h2>
          <EmailInput onChange={this.onEmailChange}/><br/>
          <button className="btn" onClick={this.getProfiles}>Find</button><br/><br/>
          <div>
            {this.state.userProfiles && userProfiles.map(this.renderProfiles)}
          </div>
        </div>
      )
    }
}