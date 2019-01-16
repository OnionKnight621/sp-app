import React, { Component } from 'react';
import './App.css';
// import { createStore } from 'redux';


// Input components
class NicknameInput extends Component{
  constructor(props){
    super(props);

    this.state = {nickname: ''}

    this.onNicknameChange = event => this.handleNicknameInput(event.target.value);
  }

  handleNicknameInput(value){
    this.setState({nickname: value})
    this.props.onChange(value);

    console.log("Nickname: ", value)
  }

  render(){
    return(
      <div>
        <label htmlFor="userNickname">Nickname:</label><br/>
        <input type="text" id="userNickname" width="20" placeholder="some nickname" value={this.state.nickname} onChange={this.onNicknameChange}/><br/>
      </div>
    )
  }
}

class EmailInput extends Component{
  constructor(props){
    super(props)

    this.state = {email: ''}

    this.onEmailChange = event => this.handleEmailInput(event.target.value);
  }

  handleEmailInput(value){
    // this.setState({email: `${value}`.trim()})
    this.setState({email: value.replace(/\s/g, '')})
    this.props.onChange(value)

    console.log("Email: ",value)
  }

  render(){
    return(
      <div>
        <label htmlFor="userEmail">Email:</label><br/>
        <input type="email" name="email" id="userEmail" width="20" placeholder="somemail@gmail.com" value={this.state.email} onChange={this.onEmailChange}/><br/>
      </div>
    )
  }
}

class PasswordInput extends Component{
  constructor(props){
    super(props)

    this.state = {password: ''}

    this.onPasswordChange = event => this.handlePasswordInput(event.target.value);
  }

  handlePasswordInput(value){
    let re = /^[0-9a-z]+$/
    
    if(value === '' || re.test(value)){
      this.setState({password: value})
      this.props.onChange(value)
    }
    
    console.log("pass: ",value)
  }

  render(){
    return(
      <div>
        <label htmlFor="userPassword">Password:</label><br/>
        <input type="password" name="password" id="userPassword" width="20" placeholder="somepassword1234" value={this.state.password} onChange={this.onPasswordChange}/><br/><br/>
      </div>
    )
  }
}

class FirstNameInput extends Component{
  constructor(props){
    super(props)

    this.state = {firstName: ''}

    this.onFirstNameChange = event => this.handleFirstNameInput(event.target.value);
  }

  handleFirstNameInput(value){
    let re = /^[a-z]+$/i
    
    if(value === '' || re.test(value)){
      this.setState({firstName: value.replace(/\s/g, '')})
      this.props.onChange(value)
    }
    
    console.log("first: ",value)
  }

  render(){
    return(
      <div>
        <label htmlFor="userFirstName">First name:</label><br/>
        <input type="text" name="userFirstName" id="userFirstName" width="20" placeholder="first name" value={this.state.firstName} onChange={this.onFirstNameChange}/><br/><br/>
      </div>
    )
  }
}

class LastNameInput extends Component{
  constructor(props){
    super(props)

    this.state = {lastName: ''}

    this.onLastNameChange = event => this.handleLastNameInput(event.target.value);
  }

  handleLastNameInput(value){
    let re = /^[a-z]+$/i
    
    if(value === '' || re.test(value)){
      this.setState({lastName: value.replace(/\s/g, '')})
      this.props.onChange(value)
    }
    
    console.log("last: ",value)
  }

  render(){
    return(
      <div>
        <label htmlFor="userLastName">Last name:</label><br/>
        <input type="text" name="userLastName" id="userLastName" width="20" placeholder="last name" value={this.state.lastName} onChange={this.onLastNameChange}/><br/><br/>
      </div>
    )
  }
}

class AgeInput extends Component{
  constructor(props){
    super(props)

    this.state = {age: ''}

    this.onAgeChange = event => this.handleAgeInput(event.target.value);
  }

  handleAgeInput(value){
    let re = /^[0-9]+$/
    
    if(value === '' || re.test(value)){
      this.setState({age: value.replace(/\s/g, '')})
      this.props.onChange(value)
    }
    
    console.log("age: ",value)
  }

  render(){
    return(
      <div>
        <label htmlFor="userAge">Age:</label><br/>
        <input type="text" name="userAge" id="userAge" width="20" placeholder="age" value={this.state.age} onChange={this.onAgeChange}/><br/><br/>
      </div>
    )
  }
}

class AddressInput extends Component{
  constructor(props){
    super(props)

    this.state = {address: ''}

    this.onAddressChange = event => this.handleAddressInput(event.target.value);
  }

  handleAddressInput(value){
    let re = /^[0-9a-z]+/i
    
    if(value === '' || re.test(value)){
      this.setState({address: value})
      this.props.onChange(value)
    }
    
    console.log("address: ",value)
  }

  render(){
    return(
      <div>
        <label htmlFor="userAddress">Address:</label><br/>
        <input type="text" name="userAddress" id="userAddress" width="20" placeholder="address" value={this.state.address} onChange={this.onAddressChange}/><br/><br/>
      </div>
    )
  }
}

class CellPhoneInput extends Component{
  constructor(props){
    super(props)

    this.state = {cellPhone: ''}

    this.onCellPhoneChange = event => this.handleCellPhoneInput(event.target.value);
  }

  handleCellPhoneInput(value){
    let re = /^\+?[0-9]+$/
    
    if(value === '' || re.test(value)){
      this.setState({cellPhone: value})
      this.props.onChange(value)
    }
    
    console.log("cellPhone: ",value)
  }

  render(){
    return(
      <div>
        <label htmlFor="userCellPhone">Cell phone:</label><br/>
        <input type="text" name="userCellPhone" id="userCellPhone" width="20" placeholder="0220000000" value={this.state.cellPhone} onChange={this.onCellPhoneChange}/><br/><br/>
      </div>
    )
  }
}

class InformationInput extends Component{
  constructor(props){
    super(props)

    this.state = {information: ''}

    this.onInformationChange = event => this.handleInformationInput(event.target.value);
  }

  handleInformationInput(value){
    let re = /^[0-9a-z]+/i
    
    if(value === '' || re.test(value)){
      this.setState({information: value})
      this.props.onChange(value)
    }
    
    console.log("information: ",value)
  }

  render(){
    return(
      <div>
        <label htmlFor="userInformation">Information:</label><br/>
        <input type="text" name="userInformation" id="userInformation" width="20" placeholder="some inf" value={this.state.information} onChange={this.onInformationChange}/><br/><br/>
      </div>
    )
  }
}

class ChooseBtn extends Component{
  constructor(props){
    super(props)

    this.state = {type: 'private'};

    this.onTypeChange = event => this.handleTypeInput(event.target.value)
  }

  handleTypeInput(value){
    this.setState({type: value})
    this.props.onClick(value)
    console.log("Type: ",value)
  }

  render(){
    return(
      <div>
        <input type="radio" name="type" value="public" onClick={this.onTypeChange}/> Public
        <input type="radio" name="type" value="private" onClick={this.onTypeChange}/> Private
      </div>
    )
  }
}

class UploadImgBtn extends Component{
  constructor(props){
    super(props)
    this.state = {
      fileToUpload: {}
    }

    this.onFileChange = event => this.handleFileInput(event)
  }

  handleFileInput(event){
    console.log("File: ", event.target.files[0])
    this.setState({fileToUpload: event.target.files[0]}, () => {
      this.props.onChange(this.state.fileToUpload)
    })
    
    console.log("Img added")
  }

  render(){
    return(
      <div>
        <input type="file"  onChange={this.onFileChange}/>
      </div>
    )
  }
}


// Profile components
class CreateProfile extends Component{
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

class UpdateProfile extends Component{
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
    this.onTypeChange = this.onTypeChange.bind(this);
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
    if(userProfile.userFirstName && !nameRe.test(userProfile.userFirstName)){
      return alert("Check first name field")
    }

    if(userProfile.userLastName && !nameRe.test(userProfile.userLastName)){
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

    if(!userProfile.profileImage && !userProfile.userFirstName && !userProfile.userLastName && !userProfile.userAge && !userProfile.userAddress && !userProfile.userInformation && !userProfile.userCellPhone){
      return alert("No information to send")
    }
    
    fetch("http://localhost:5001/profiles/editprofile", {
      method: 'PUT',
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
    .catch(err => console.log(err))

    if(userProfile.profileImage){
      var formData = new FormData();
      formData.append('avatar', userProfile.profileImage);
      let queryedType = '?profileType=' + userProfile.profileType
      fetch(`http://localhost:5001/profiles/addavatar${queryedType}`, {
        method: 'POST',
        body: formData
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
  }

  render(){
    return(
      <div>
        <form className="updateProfileForm">
          <h2>Update profile</h2>
          <FirstNameInput onChange={this.onFirstNameChange}/>
          <LastNameInput onChange={this.onLastNameChange}/>
          <AgeInput onChange={this.onAgeChange}/>
          {this.state.userProfile.profileType === "private" && <AddressInput onChange={this.onAddressChange}/>}
          {this.state.userProfile.profileType === "private" && <CellPhoneInput onChange={this.onCellPhoneChange}/>}
          <InformationInput onChange={this.onInformationChange}/>
          <UploadImgBtn onChange={this.onImageUpload}/>
          <ChooseBtn onClick={this.onTypeChange}/>
          <button type="submit" className="btn" id="updateSubmit" onClick={this.submit}>Submit</button>
        </form>
      </div>
    )
  }

}

class GetProfile extends Component{
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

// Profile container
class ProfileScreen extends Component{
  render(){
    return(
      <div className="row">
        <div className="col s4">
          <CreateProfile/>
        </div>
        <div className="col s4">
          <UpdateProfile/>
        </div>
        <div className="col s4">
          <GetProfile/>
        </div>
      </div>
    )
  }
}

// Post components
class CreatePost extends Component{
  constructor(props){
    super(props)

    this.state = {
      postContent: '',
      response: {},
      imgResponse: {},
      postType: 'private',
      postImage: null
    }
    
    this.submit = this.submit.bind(this);
    this.onInformationChange = this.onInformationChange.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onImageUpload = this.onImageUpload.bind(this);
  }

  onInformationChange(val){
    this.setState({postContent: val})
  }

  onTypeChange(val){
    this.setState({postType: val})
  }

  onImageUpload(val){
    this.setState({postImage: val})
  }

  submit(e){
    e.preventDefault();
    let queryedId = '';

    fetch("http://localhost:5001/posts/createpost", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        'postContent': `${this.state.postContent}`,
        'postType': `${this.state.postType}`
      })
    })
    .then(res => res.json())
    .then(res => {
      this.setState({response: res}, () => {
        queryedId = '?postId=' + res.post._id;
      });
      console.log(this.state.response)
      
      if(this.state.response.error){
        return alert(this.state.response.error)
      }
      return alert(this.state.response.message)
      
    })
    .then(() => {
      if(this.state.postImage){
        
        var formData = new FormData();
        formData.append('postImage', this.state.postImage);
        console.log(queryedId)
        return fetch(`http://localhost:5001/posts/addpostimage${queryedId}`, {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(response => {
          this.setState({imgResponse: response});
          console.log(this.state.imgResponse)
          if(this.state.imgResponse.error){
            return alert(this.state.imgResponse.error)
          }
          return alert(this.state.imgResponse.message)
          
        })
        .catch(err => console.log(err))
      }
    })
    .catch(err => console.log(err))
    
  }

  render(){
    return(
      <div>
        <form id="createPostForm">
          <h2>Create post</h2>
          <InformationInput onChange={this.onInformationChange}/>
          <ChooseBtn onClick={this.onTypeChange}/>
          <UploadImgBtn onChange={this.onImageUpload}/><br/>
          <button  type="submit" className="btn" id="createPostSubmit" onClick={this.submit}>Create</button>
        </form>
      </div>
    )
  }
}

class CreateComment extends Component{
  constructor(props){
    super(props);

    this.state = {
      commenting: false,
      comment: {
        commentContent: '',
        postId: props.postId,
        answerOnComment: props.answerOnComment,
      },
      response: {}
    }

    this.onCommenting = this.onCommenting.bind(this);
    this.onInformationChange = this.onInformationChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onCommenting(){
    this.setState({commenting: !this.state.commenting})
  }

  onInformationChange(val){
    let {comment} = this.state;
    this.setState({comment: {...comment, commentContent: val}})
  }

  submit(e){
    e.preventDefault()
    fetch("http://localhost:5001/comments/createcomment", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        'commentContent': `${this.state.comment.commentContent}`,
        'answerOnComment': `${this.state.comment.answerOnComment}`,
        'postId': `${this.state.comment.postId}`
      })
    })
    .then(res => res.json())
    .then(res => {
      this.setState({response: res, commenting: false});
      console.log(this.state.response)
      if(this.state.response.error){
        return alert(this.state.response.error)
      }
      this.props.onClick(this.state.comment)
      return alert(this.state.response.message)
      
    })
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div>
        <button className="btn" onClick={this.onCommenting}>Comment</button>
        {this.state.commenting && <div>
          {/* <IdInput onChange={this.onIdChange}/> */}
          <InformationInput  onChange={this.onInformationChange}/>
          {/* <IdInput onChange={this.onCommentIdChange}/> */}
          <button className="btn" onClick={this.submit} >Send</button>
        </div>}
      </div>
    )
  }
}

class GetPosts extends Component{
  constructor(props){
    super(props);

    this.state = {
      userPosts: [],
      userEmail: '',
      pagStartNum: 0,
      pagEndNum: 5,
      canUpdate: false,
      canGoBack: false,
      receivedComment: {}
    }

    this.renderPosts = this.renderPosts.bind(this);
    this.renderComments = this.renderComments.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.nextPosts = this.nextPosts.bind(this)
    this.previousPost = this.previousPost.bind(this)
    this.handleReceivingComment = this.handleReceivingComment.bind(this)
  }
  handleReceivingComment(val){
    this.getPosts()
    console.log(val)
  }

  renderPosts({_id, userEmail, postContent, comments, postType, postImage, postImageUri, numberOfComments}){
    // store.dispatch({ type: 'ADD_POST_ID', payload: `postID:${_id}`})
    return (
      <div key={_id}>
        Post: <br/>
        {postImage && <img src={postImageUri} alt="post image" width="240" height="240"/>} <br/>
        Id: {_id} <br/>
        Email: {userEmail} <br/>
        Post type: {postType} <br/>
        Post content: {postContent} <br/>
        Post comments ({numberOfComments}): 
        <CreateComment postId={_id} onClick={this.handleReceivingComment}/>
        {comments.length > 0 && <div className="comments">
          {comments.map(this.renderComments)}
        </div>}
        <br/>
      </div>
    )
  }

  componentWillReceiveProps(){
    this.getPosts()
  }

  renderComments({_id, postId, userEmail, answerOnComment, commentContent}){
    // store.dispatch({ type: 'ADD_COMMENT_ID', payload: `commentID:${_id}`});
    return (
      <div key={_id}>
        Comment: <br/>
        Id: {_id} <br/>
        Email: {userEmail} <br/>
        Comment content: {commentContent} <br/>
        {answerOnComment && answerOnComment !== "undefined" && <p>Answer on comment: {answerOnComment}</p>}
        <CreateComment postId={postId}  answerOnComment={_id} onClick={this.handleReceivingComment}/>
        <br/>
      </div>
    )
  }

  onEmailChange(val) {
    this.setState({userEmail: val})
  }

  getPosts(){
    let queryedEmail = '?userEmail=' + this.state.userEmail;
    let pagStart = '&pagStart=' + this.state.pagStartNum;
    let pagEnd = '&pagEnd=' + this.state.pagEndNum;
    fetch(`http://localhost:5001/posts/userposts${queryedEmail}${pagStart}${pagEnd}`, {
      method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
      this.setState({userPosts: res.posts}, () => {
        if (res.posts.length === 0 || res.posts.length < 5){
          this.setState({
            canUpdate: false, 
            canGoBack: false,

            pagStartNum: 0, 
            pagEndNum: 5,
          })
        }
      })
    })
    .catch(err => console.log(err))

    this.setState({canUpdate: true})
    
  }

  nextPosts(){
    this.setState({pagStartNum: this.state.pagStartNum + 5, pagEndNum: this.state.pagEndNum, canGoBack: true}, () => {
      this.getPosts();
    });
  }

  previousPost(){
    this.setState({pagStartNum: this.state.pagStartNum - 5, pagEndNum: this.state.pagEndNum}, () => {
      if(this.state.canGoBack && this.state.pagStartNum < 5){
        this.setState({canGoBack: false})
      }
      this.getPosts();
    });
  }
  
  render(){
    let {userPosts} = this.state;
    return(
      <div>
        <h2>Find user posts</h2>
        <EmailInput onChange={this.onEmailChange}/><br/>
        <button className="btn" onClick={this.getPosts}>Find</button><br/><br/>
        <div>
          {this.state.userPosts && userPosts.map(this.renderPosts)}
        </div>
        {this.state.canGoBack && <button className="btn" onClick={this.previousPost}>Previous 5</button>}
        {this.state.canUpdate && <button className="btn" onClick={this.nextPosts}>Next 5</button>}
      </div>
    )
  }
}

// Post container
class PostsScreen extends Component{
  render(){
    return(
      <div className="row">
        <div className="col s6">
          <CreatePost/>
        </div>
        <div className="col s6">
          <GetPosts/>
        </div>
      </div>
    )
  }
}

// Friends components
class GetFriends extends Component{
  constructor(props){
    super(props);
    this.state = {
      userFriends: [],
    }

    this.renderFriends = this.renderFriends.bind(this);
    this.getFriends = this.getFriends.bind(this)
  }

  renderFriends(){
    return (
      <div>
        {this.state.userFriends}
      </div>
    )

  }

  getFriends(){
    fetch(`http://localhost:5001/users/getfriends`, {
      method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        }
    })
    .then(res => res.json())
    .then(res => this.setState({userFriends: res.userFriends}))
    .catch(err => console.log(err))
  }

  componentWillMount(){
    this.getFriends()
  }
  
  render(){
    let {userFriends} = this.state;
    let haveFriends = false;
    if(userFriends.length > 0){
      haveFriends = true;
    }
    return(
      <div>
        <h2>User friends:</h2>
        <div>
          {haveFriends && userFriends.map(this.renderFriends)}
          {!haveFriends && <div>You have no friends</div>}
        </div>
      </div>
    )
  }
}

class SendFriendRequest extends Component{
  constructor(props){
    super(props);
    this.state = {
      userEmail: '',
      response: {}
    }

    this.onEmailChange = this.onEmailChange.bind(this);
    this.submit = this.submit.bind(this)
  }

  onEmailChange(val) {
    this.setState({userEmail: val})
  }

  submit(e){
    e.preventDefault();
    fetch('http://localhost:5001/users/sendfriendrequest',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        'userEmail': `${this.state.userEmail}`
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
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div>
        <form>
          <h2>Send friend request</h2>
          <EmailInput onChange={this.onEmailChange}/>
          <button type="submit" className="btn" onClick={this.submit}>Send</button>
        </form>
      </div>
    )
  }
}

class CheckFriendsRequest extends Component{
  constructor(props){
    super(props);
    this.state = {
      friendRequests: []
    }

    this.renderFriendsRequests = this.renderFriendsRequests.bind(this);
    this.getFriendsRequests = this.getFriendsRequests.bind(this)
  }

  renderFriendsRequests(){
    return (
      <div>
        {this.state.friendRequests}
      </div>
    )
  }

  getFriendsRequests(){
    fetch(`http://localhost:5001/users/checkfriendrequest`, {
      method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        }
    })
    .then(res => res.json())
    .then(res => this.setState({friendRequests: res.friendRequests}))
    .catch(err => console.log(err))
  }

  componentWillMount(){
    this.getFriendsRequests()
  }
  
  render(){
    let {friendRequests} = this.state;
    let haveRequests = false;
    if(this.state.friendRequests.length > 0){
      haveRequests = true;
    }
    return(
      <div>
        <h2>User friends requests:</h2>
        <div>
          {haveRequests && friendRequests.map(this.renderFriendsRequests)}
          {!haveRequests && <div>You have no friend requests</div>}
        </div>
      </div>
    )
  }
}

class AcceptFriendRequest extends Component{
  constructor(props){
    super(props);
    this.state = {
      userEmail: '',
      response: ''
    }
    this.onEmailChange = this.onEmailChange.bind(this);
    this.submit = this.submit.bind(this)
  }

  onEmailChange(val) {
    this.setState({userEmail: val})
  }

  submit(e){
    e.preventDefault();
    fetch('http://localhost:5001/users/acceptfriendrequest',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        'friend': `${this.state.userEmail}`
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
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div>
        <form>
          <h2>Accept friend request</h2>
          <EmailInput onChange={this.onEmailChange}/>
          <button type="submit" className="btn" onClick={this.submit}>Accept</button>
        </form>
      </div>
    )
  }
}

// Friends container
class FriendsScreen extends Component{
  render(){
    return(
      <div className="row">
        <div className="col s4">
          <GetFriends/>
        </div>
        <div className="col s4">
          <CheckFriendsRequest/><br/>
          <AcceptFriendRequest/>
        </div>
        <div className="col s4">
          <SendFriendRequest/>
        </div>
      </div>
    )
  }
}

class Logout extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: {
        userEmail: '',
        userPassword: '',
        userNickname: ''
      },
      logged: true,
      response: {}
    }

    this.submit = this.submit.bind(this);
  }

  submit(e){
    // e.preventDefault();
    fetch("http://localhost:5001/login/logout", {
      method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({response: res, logged: false});
        console.log(this.state.response);
        if(this.state.response.error){
          return alert(this.state.response.error)
        }
        alert(this.state.response.message)
        this.props.onChange(false)
      })
      .catch(err => console.log(err))

      
  }

  render(){
    return(
      <div>
        <form id="logoutForm">
          <h2>Logout</h2>
          <button type="submit" className="btn" id="logoutSubmit" onClick={this.submit}>Logout</button>
        </form>
        
      </div>
    )
  }

}

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: {
        userEmail: '',
        userPassword: '',
        userNickname: ''
      },
      logged: false,
      response: {}
    }

    this.submit = this.submit.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPassChange = this.onPassChange.bind(this);
  }

  onEmailChange(val) {
    let {user} = this.state;
    this.setState({user: {...user, userEmail: val}})
  }
  onPassChange(val){
    let {user} = this.state;
    this.setState({user: {...user, userPassword: val}})
  }

  submit(e){
    // e.preventDefault();
    let passRe = /^[0-9a-z]{6,}$/;
    let emailRe = /^([a-zA-Z0-9_\-\.]+){3,}@([a-zA-Z0-9_\-\.]+){2,}\.([a-z]{2,5}){1,3}$/;
    if(!emailRe.test(this.state.user.userEmail)){
      return alert(`Check email field`)
    }

    if(!passRe.test(this.state.user.userPassword)){
      return alert(`Check password field`)
    }
    
    fetch("http://localhost:5001/login", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        'userPassword': `${this.state.user.userPassword}`,
        'userEmail': `${this.state.user.userEmail}`
      })
    })
    .then(res => res.json())
    .then(res => {
      this.setState({response: res, logged: true});
      console.log(this.state.response)
      if(this.state.response.error){
        return alert(this.state.response.error)
      }
      alert(`User -( Email: ${this.state.user.userEmail} Password: ${this.state.user.userPassword} ) added`)
      this.props.onChange(true)
      
    })
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div>
        <form className="loginForm">
            <h2>Login</h2>
            <EmailInput onChange={this.onEmailChange}/>
            <PasswordInput onChange={this.onPassChange}/>
            <button type="submit" className="btn" id="loginSubmit" onClick={this.submit}>Submit</button>
        </form>
      </div>
    )
  }
}

class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: {
        userEmail: '',
        userPassword: '',
        userNickname: ''
      }
    }
    
    this.submit = this.submit.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPassChange = this.onPassChange.bind(this)
    this.onNicknameChange = this.onNicknameChange.bind(this);
  }

  
  onEmailChange(val) {
    let {user} = this.state;
    this.setState({user: {...user, userEmail: val}})
  }
  onPassChange(val){
    let {user} = this.state;
    this.setState({user: {...user, userPassword: val}})
  }
  onNicknameChange(val){
    let {user} = this.state;
    this.setState({user: {...user, userNickname: val}})
  }

  submit(e){
    e.preventDefault();
    let {user} = this.state;
    let nickRe = /^[a-z]{3,}$/i;
    let passRe = /^[0-9a-z]{6,}$/;
    let emailRe = /^([a-zA-Z0-9_\-\.]+){3,}@([a-zA-Z0-9_\-\.]+){2,}\.([a-z]{2,5}){1,3}$/;
    if(!emailRe.test(user.userEmail)){
      return alert("Check email field")
    }

    if(!passRe.test(user.userPassword)){
      return alert("Check password field")
    }

    if(!nickRe.test(user.userNickname)){
      return alert("Check nick name field")
    }
    
    alert(`User -( Email: ${user.userEmail} Password: ${user.userPassword} Nickname: ${user.userNickname} ) added`)
      fetch("http://localhost:5001/users/registration", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          'userName': `${user.userNickname}`,
          'userPassword': `${user.userPassword}`,
          'userEmail': `${user.userEmail}`
        })
      })
  }

  render(){
    return(
      <div>
        <form className="registerForm">
          <h2>Register</h2>
          <NicknameInput onChange={this.onNicknameChange}/>
          <EmailInput onChange={this.onEmailChange}/>
          <PasswordInput onChange={this.onPassChange}/>
          <button type="submit" className="btn" id="registerSubmit" onClick={this.submit}>Submit</button>
        </form>
      </div>
    )
  }
}

class User extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: [],
      loading: true
    }

    this.renderUsers = this.renderUsers.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  renderUsers({_id, userEmail, userName}){
    return (
    <div key={_id}>
      Name: {userName} | email: {userEmail} <br/>
    </div>
    )
  }

  getUsers(){
    fetch("http://localhost:5001/users/getusers", {
      method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        }
    })
    .then(res => res.json())
    .then(res => this.setState({users: res.users, loading: false}))
    .catch(err => console.log(err))
  }

  componentDidMount(){
    this.getUsers()
  }

  render() {
    let {users} = this.state;

    return (
      <div>
        <Loader loading={this.state.loading}>
          <h2>Users</h2>
          {users.map(this.renderUsers)}
        </Loader>
      </div>
    );
  }
}

//Loader wrapper
const Loader = ({loading, children}) => {
  const loader = (
    <h1 align="center" className="loader">
      Loading...
    </h1>
  )

  return(
    // aria-busy - element attribute that says if the element and it`s subtree are updating
    <div aria-busy={loading}>
      <br/><br/>
      {loading ? loader : children}
      <br/><br/>
    </div>
  )
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      showingUsers: false,
      showingRegistration: false,
      showingLoginization: false,
      showingLogouting: false,
      showingProfiles: false,
      showingPosts: false,
      showingFriends: false,
      users: [],
      user: {
        userName: "",
        userPassword: "",
        userEmail: ""
      },
      logged: false,
      loading: true
    }

    this.showUsers = this.showUsers.bind(this);
    this.showRegistration = this.showRegistration.bind(this);
    this.showLoginization = this.showLoginization.bind(this);
    this.showLogout = this.showLogout.bind(this);
    this.showProfiles = this.showProfiles.bind(this);
    this.showPosts = this.showPosts.bind(this)
    this.loaded = this.loaded.bind(this)
    this.showFriends = this.showFriends.bind(this)

    this.onLogged = loggedTrue => this.handleLogin(loggedTrue);
    this.onNotLogged = loggedFalse => this.handleLogout(loggedFalse);
  }

  loaded() {
    this.setState({
      loading: false
    });
  }

  // Check if user logged
  componentWillMount(){
    fetch("http://localhost:5001/login/check", {
      method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({response: res});
        if(this.state.response.error){
          return this.setState({logged: false, loading: false});
        }
        return this.setState({logged: true, loading: false});
      })
      .catch(err => console.log(err))
  }

  handleLogin(loggedTrue){
    this.setState({
      logged: loggedTrue
    })
  }

  handleLogout(loggedFalse){
    this.setState({
      logged: loggedFalse
    })
  }

  // Switchers between containers
  showUsers(){
    this.setState({
      showingUsers: true,
      showingRegistration: false,
      showingLoginization: false,
      showingLogouting: false,
      showingProfiles: false,
      showingPosts: false,
      showingFriends: false,
    })
  }

  showRegistration(){
    this.setState({
      showingUsers: false,
      showingRegistration: true,
      showingLoginization: false,
      showingLogouting: false,
      showingProfiles: false,
      showingPosts: false,
      showingFriends: false,
    })
  }

  showLoginization(){
    this.setState({
      showingUsers: false,
      showingRegistration: false,
      showingLoginization: true,
      showingLogouting: false,
      showingProfiles: false,
      showingPosts: false,
      showingFriends: false,
    })
  }

  showLogout(){
    this.setState({
      showingUsers: false,
      showingRegistration: false,
      showingLoginization: false,
      showingLogouting: true,
      showingProfiles: false,
      showingPosts: false,
      showingFriends: false,
    })
  }

  showProfiles(){
    this.setState({
      showingUsers: false,
      showingRegistration: false,
      showingLoginization: false,
      showingLogouting: false,
      showingProfiles: true,
      showingPosts: false,
      showingFriends: false,
    })
  }

  showPosts(){
    this.setState({
      showingUsers: false,
      showingRegistration: false,
      showingLoginization: false,
      showingLogouting: false,
      showingProfiles: false,
      showingPosts: true,
      showingFriends: false,
    })
  }

  showFriends(){
    this.setState({
      showingUsers: false,
      showingRegistration: false,
      showingLoginization: false,
      showingLogouting: false,
      showingProfiles: false,
      showingPosts: false,
      showingFriends: true,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Loader loading={this.state.loading}>
            <div>
              <h1>Some Header</h1>
              <button className="btn btn-primary" onClick={this.showUsers}>Show users</button>
              {!this.state.logged && <button className="btn btn-primary" onClick={this.showLoginization}>Login</button>}
              {this.state.logged && <button className="btn btn-primary" onClick={this.showLogout}>Logout</button>}
              {!this.state.logged && <button className="btn btn-primary" onClick={this.showRegistration}>Register</button>}
              {this.state.logged && <button className="btn btn-primary" onClick={this.showProfiles}>Profiles</button>}
              {this.state.logged && <button className="btn btn-primary" onClick={this.showPosts}>Posts</button>}
              {this.state.logged && <button className="btn btn-primary" onClick={this.showFriends}>Friends</button>}
            </div><hr/>
            <div>
              {this.state.showingUsers && <User />}
              {this.state.showingRegistration && <Register />}
              {this.state.showingLoginization && <Login onChange={this.onLogged}/>}
              {this.state.showingLogouting && <Logout onChange={this.onNotLogged}/>}
              {this.state.showingProfiles && <ProfileScreen/>}
              {this.state.showingPosts && <PostsScreen/>}
              {this.state.showingFriends && <FriendsScreen/>}
            </div>
          </Loader>
        </div>
      </div>
    );
  }
}

export default App;
