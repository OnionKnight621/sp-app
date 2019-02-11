import React, { Component } from 'react';
import '../../App.css';

export class NicknameInput extends Component{
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