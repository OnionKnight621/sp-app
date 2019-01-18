import React, { Component } from 'react';
import '../../App.css';
import {Loader} from '../utils/loader';

import {AcceptFriendRequest} from './acceptFriendRequest';

export class FriendsRequests extends Component{
    constructor(props){
        super(props);
        this.state = {
            friendRequests: [],
            userEmail: '',
            response: ''
        }

        this.renderFriendsRequests = this.renderFriendsRequests.bind(this);
        this.getFriendsRequests = this.getFriendsRequests.bind(this)
        this.submit = this.submit.bind(this);
    }

    renderFriendsRequests({userEmail, userName}){
        return (
            <div key={userEmail}>
                Name: {userName} | email: {userEmail} <br/>
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