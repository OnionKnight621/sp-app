import React, { Component } from 'react';
import '../../App.css';
import {Loader} from '../utils/loader';

export class CheckFriendsRequest extends Component{
    constructor(props){
      super(props);
      this.state = {
        friendRequests: []
      }
  
      this.renderFriendsRequests = this.renderFriendsRequests.bind(this);
      this.getFriendsRequests = this.getFriendsRequests.bind(this)
    }
  
    renderFriendsRequests(){
      return (
        <div>
          {this.state.friendRequests}
        </div>
      )
    }
  
    getFriendsRequests(){
      fetch(`http://localhost:5001/users/checkfriendrequest`, {
        method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
          }
      })
      .then(res => res.json())
      .then(res => this.setState({friendRequests: res.friendRequests}))
      .catch(err => console.log(err))
    }
  
    componentWillMount(){
      this.getFriendsRequests()
    }
    
    render(){
      let {friendRequests} = this.state;
      let haveRequests = false;
      if(this.state.friendRequests.length > 0){
        haveRequests = true;
      }
      return(
        <div>
          <h2>User friends requests:</h2>
          <div>
            {haveRequests && friendRequests.map(this.renderFriendsRequests)}
            {!haveRequests && <div>You have no friend requests</div>}
          </div>
        </div>
      )
    }
}