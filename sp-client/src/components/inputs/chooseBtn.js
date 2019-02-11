import React, { Component } from 'react';
import '../../App.css';

export class ChooseBtn extends Component{
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