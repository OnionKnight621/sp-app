import React, { Component } from 'react';
import '../../App.css';

export class LastNameInput extends Component{
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