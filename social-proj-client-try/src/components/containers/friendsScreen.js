import React, { Component } from 'react';
import '../../App.css';
import {Loader} from '../utils/loader';

import {GetFriends} from '../elements/getFriends';
import {CheckFriendsRequest} from '../elements/checkFriendRequest';
import {AcceptFriendRequest} from '../elements/acceptFriendRequest';
import {SendFriendRequest} from '../elements/sendFriendRequest';

import {FriendsRequests} from '../elements/friendsRequests';

// Friends container
export class FriendsScreen extends Component{
    render(){
      return(
        <div className="row">
          <div className="col s4">
            <GetFriends/>
          </div>
          <div className="col s4">
            <FriendsRequests/>
          </div>
          <div className="col s4">
            <SendFriendRequest/>
          </div>
        </div>
      )
    }
  }