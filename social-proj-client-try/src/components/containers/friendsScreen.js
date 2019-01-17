import React, { Component } from 'react';
import '../../App.css';
import {Loader} from '../utils/loader';

import {GetFriends} from '../elements/getFriends';
import {CheckFriendsRequest} from '../elements/checkFriendRequest';
import {AcceptFriendRequest} from '../elements/acceptFriendRequest';
import {SendFriendRequest} from '../elements/sendFriendRequest';

// Friends container
export class FriendsScreen extends Component{
    render(){
      return(
        <div className="row">
          <div className="col s4">
            <GetFriends/>
          </div>
          <div className="col s4">
            <CheckFriendsRequest/><br/>
            <AcceptFriendRequest/>
          </div>
          <div className="col s4">
            <SendFriendRequest/>
          </div>
        </div>
      )
    }
  }