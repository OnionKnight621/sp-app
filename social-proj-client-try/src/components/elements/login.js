import React, { Component } from 'react';
import '../../App.css';
import {Loader} from '../utils/loader';

import {EmailInput} from '../inputs/emailInput';
import {PasswordInput} from '../inputs/passwordInput';

export class Login extends Component{
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