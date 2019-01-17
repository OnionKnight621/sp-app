import React, { Component } from 'react';
import '../../App.css';

export class CellPhoneInput extends Component{
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