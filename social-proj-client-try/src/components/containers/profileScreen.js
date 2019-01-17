import React, { Component } from 'react';
import '../../App.css';
import {Loader} from '../utils/loader';

import {CreateProfile} from '../elements/createProfile';
import {UpdateProfile} from '../elements/updateProfile';
import {GetProfile} from '../elements/getProfile';

// Profile container
export class ProfileScreen extends Component{
    render(){
      return(
        <div className="row">
          <div className="col s4">
            <CreateProfile/>
          </div>
          <div className="col s4">
            <UpdateProfile/>
          </div>
          <div className="col s4">
            <GetProfile/>
          </div>
        </div>
      )
    }
  }