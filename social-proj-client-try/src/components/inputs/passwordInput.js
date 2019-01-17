import React, { Component } from 'react';
import '../../App.css';

export class PasswordInput extends Component{
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