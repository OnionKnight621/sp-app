import React, { Component } from 'react';
import '../../App.css';
import {Loader} from '../utils/loader';

import {AddressInput} from '../inputs/addressInput';
import {AgeInput} from '../inputs/ageInput';
import {CellPhoneInput} from '../inputs/cellPhoneInput';
import {ChooseBtn} from '../inputs/chooseBtn';
import {InformationInput} from '../inputs/informatonInpt';
import {FirstNameInput} from '../inputs/firstNameInput';
import {LastNameInput} from '../inputs/lastNameInput';
import {UploadImgBtn} from '../inputs/uploadImage';

export class CreateProfile extends Component{
    constructor(props){
      super(props);
      this.state = {
        userProfile: {
          userFirstName: '',
          userLastName: '',
          userAge: '',
          userAddress: '',
          userCellPhone: '',
          userInformation: '',
          profileType: 'private',
          profileImage: null
        },
        response: {},
        imageResponse: {}
      }
  
      this.submit = this.submit.bind(this)
      this.onFirstNameChange = this.onFirstNameChange.bind(this);
      this.onLastNameChange = this.onLastNameChange.bind(this);
      this.onAgeChange = this.onAgeChange.bind(this);
      this.onAddressChange = this.onAddressChange.bind(this);
      this.onCellPhoneChange = this.onCellPhoneChange.bind(this);
      this.onInformationChange = this.onInformationChange.bind(this);
      this.onTypeChange = this.onTypeChange.bind(this)
      this.onImageUpload = this.onImageUpload.bind(this)
    }
  
    onFirstNameChange(val){
      let {userProfile} = this.state;
      this.setState({userProfile: {...userProfile, userFirstName: val}})
    }
  
    onLastNameChange(val){
      let {userProfile} = this.state;
      this.setState({userProfile: {...userProfile, userLastName: val}})
    }
  
    onAgeChange(val){
      let {userProfile} = this.state;
      this.setState({userProfile: {...userProfile, userAge: val}})
    }
  
    onAddressChange(val){
      let {userProfile} = this.state;
      this.setState({userProfile: {...userProfile, userAddress: val}})
    }
  
    onCellPhoneChange(val){
      let {userProfile} = this.state;
      this.setState({userProfile: {...userProfile, userCellPhone: val}})
    }
  
    onInformationChange(val){
      let {userProfile} = this.state;
      this.setState({userProfile: {...userProfile, userInformation: val}})
    }
  
    onTypeChange(val){
      let {userProfile} = this.state;
      this.setState({userProfile: {...userProfile, profileType: val}})
    }
  
    onImageUpload(val){
      let {userProfile} = this.state;
      this.setState({userProfile: {...userProfile, profileImage: val}})
    }
  
    submit(e){
      e.preventDefault();
      let {userProfile} = this.state;
      let nameRe = /^[a-z]+$/i;
      let ageRe = /^[0-9]+$/;
      let strRe = /[0-9a-z]{1,255}/i;
      let phoneRe = /^\+?([0-9]{2})?\(?\+?[0-9]{3}\)?[- ]?[0-9]{3}[- ]?[0-9]{4}$/;
      if(!nameRe.test(userProfile.userFirstName)){
        return alert("Check first name field")
      }
  
      if(!nameRe.test(userProfile.userLastName)){
        return alert("Check first name field")
      }
  
      if(userProfile.userAge && !ageRe.test(userProfile.userAge)){
        return alert("Check age field")
      }
  
      if(userProfile.userAddress && !strRe.test(userProfile.userAddress)){
        return alert("Check address field")
      }
  
      if(userProfile.userInformation && !strRe.test(userProfile.userInformation)){
        return alert("Check information field")
      }
  
      if(userProfile.userCellPhone && !phoneRe.test(userProfile.userCellPhone)){
        return alert("Check cell phone field")
      }
      
      fetch("http://localhost:5001/profiles/createprofile", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          'firstName': `${userProfile.userFirstName}`,
          'lastName': `${userProfile.userLastName}`,
          'userAge': `${userProfile.userAge}`,
          'userAddress': `${userProfile.userAddress}`,
          'userCellPhone': `${userProfile.userCellPhone}`,
          'userInformation': `${userProfile.userInformation}`,
          'profileType': `${userProfile.profileType}`
        })
      })
      .then(res => res.json())
      .then(res => {
        this.setState({response: res});
        console.log(this.state.response)
        if(this.state.response.error){
          return alert(this.state.response.error)
        }
        return alert(this.state.response.message)
        
      })
      .then(() => {
        if(userProfile.profileImage){
          let queryedType = '?profileType=' + userProfile.profileType
          fetch(`http://localhost:5001/profiles/addavatar${queryedType}`, {
            method: 'POST',
            headers: {
              'Content-Type':'multipart/form-data'
            },
            body: JSON.stringify({
              'avatar': `${userProfile.profileImage}`
            })
          })
          .then(response => response.json())
          .then(response => {
            this.setState({imageResponse: response});
            console.log(this.state.imageResponse)
            if(this.state.imageResponse.error){
              return alert(this.state.imageResponse.error)
            }
            return alert(this.state.imageResponse.message)
            
          })
          .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err))
    }
  
    render(){
      return(
        <div>
          <form className="createProfileForm">
            <h2>Create profile</h2>
            <FirstNameInput onChange={this.onFirstNameChange}/>
            <LastNameInput onChange={this.onLastNameChange}/>
            <AgeInput onChange={this.onAgeChange}/>
            {this.state.userProfile.profileType === "private" && <AddressInput onChange={this.onAddressChange}/>}
            {this.state.userProfile.profileType === "private" && <CellPhoneInput onChange={this.onCellPhoneChange}/>}
            <InformationInput onChange={this.onInformationChange}/>
            <UploadImgBtn onChange={this.onImageUpload}/>
            <ChooseBtn onClick={this.onTypeChange}/>
            <button type="submit" className="btn" id="registerSubmit" onClick={this.submit}>Submit</button>
          </form>
        </div>
      )
    }
}