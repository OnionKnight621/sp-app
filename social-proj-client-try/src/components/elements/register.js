import React, { Component } from 'react';
import '../../App.css';
import {Loader} from '../utils/loader';

import {NicknameInput} from '../inputs/nicknameInput';
import {EmailInput} from '../inputs/emailInput';
import {PasswordInput} from '../inputs/passwordInput';

export class Register extends Component{
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