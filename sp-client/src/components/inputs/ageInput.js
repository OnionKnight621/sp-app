import React, { Component } from 'react';
import '../../App.css';

export class AgeInput extends Component{
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