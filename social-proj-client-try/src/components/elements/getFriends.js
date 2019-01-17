import React, { Component } from 'react';
import '../../App.css';
import {Loader} from '../utils/loader';

export class GetFriends extends Component{
    constructor(props){
      super(props);
      this.state = {
        userFriends: [],
      }
  
      this.renderFriends = this.renderFriends.bind(this);
      this.getFriends = this.getFriends.bind(this)
    }
  
    renderFriends(){
      return (
        <div>
          {this.state.userFriends}
        </div>
      )
    }
  
    getFriends(){
      fetch(`http://localhost:5001/users/getfriends`, {
        method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
          }
      })
      .then(res => res.json())
      .then(res => this.setState({userFriends: res.userFriends}))
      .catch(err => console.log(err))
    }
  
    componentWillMount(){
      this.getFriends()
    }
    
    render(){
      let {userFriends} = this.state;
      let haveFriends = false;
      if(userFriends.length > 0){
        haveFriends = true;
      }
      return(
        <div>
          <h2>User friends:</h2>
          <div>
            {haveFriends && userFriends.map(this.renderFriends)}
            {!haveFriends && <div>You have no friends</div>}
          </div>
        </div>
      )
    }
}