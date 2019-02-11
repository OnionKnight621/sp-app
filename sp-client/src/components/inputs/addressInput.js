import React, { Component } from 'react';
import '../../App.css';

export class AddressInput extends Component{
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