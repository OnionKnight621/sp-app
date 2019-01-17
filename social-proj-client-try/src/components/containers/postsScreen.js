import React, { Component } from 'react';
import '../../App.css';
import {Loader} from '../utils/loader';

import {CreatePost} from '../elements/createPost';
import {GetPosts} from '../elements/getPosts';

// Post container
export class PostsScreen extends Component{
    render(){
      return(
        <div className="row">
          <div className="col s6">
            <CreatePost/>
          </div>
          <div className="col s6">
            <GetPosts/>
          </div>
        </div>
      )
    }
}