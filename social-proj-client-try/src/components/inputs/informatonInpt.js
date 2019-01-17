import React, { Component } from 'react';
import '../../App.css';

export class InformationInput extends Component{
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