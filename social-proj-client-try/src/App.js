import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createStore } from 'redux';
import './App.css';

import {User} from './components/elements/user';
import {ProfileScreen} from './components/containers/profileScreen';
import {PostsScreen} from './components/containers/postsScreen';
import {FriendsScreen} from './components/containers/friendsScreen';
import {Logout} from './components/elements/logout';
import {Login} from './components/elements/login';
import {Register} from './components/elements/register';
import {Loader} from './components/utils/loader';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showingUsers: false,
      showingRegistration: false,
      showingLoginization: false,
      showingLogouting: false,
      showingProfiles: false,
      showingPosts: false,
      showingFriends: false,
      users: [],
      user: {
        userName: "",
        userPassword: "",
        userEmail: ""
      },
      logged: false,
      loading: true
    }

    this.showUsers = this.showUsers.bind(this);
    this.showRegistration = this.showRegistration.bind(this);
    this.showLoginization = this.showLoginization.bind(this);
    this.showLogout = this.showLogout.bind(this);
    this.showProfiles = this.showProfiles.bind(this);
    this.showPosts = this.showPosts.bind(this)
    this.loaded = this.loaded.bind(this)
    this.showFriends = this.showFriends.bind(this)

    this.onLogged = loggedTrue => this.handleLogin(loggedTrue);
    this.onNotLogged = loggedFalse => this.handleLogout(loggedFalse);
  }

  loaded() {
    this.setState({
      loading: false
    });
  }

  // Check if user logged
  componentWillMount(){
    fetch("http://localhost:5001/login/check", {
      method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({response: res});
        if(this.state.response.error){
          return this.setState({logged: false, loading: false});
        }
        return this.setState({logged: true, loading: false});
      })
      .catch(err => console.log(err))
  }

  handleLogin(loggedTrue){
    this.setState({
      logged: loggedTrue
    })
  }

  handleLogout(loggedFalse){
    this.setState({
      logged: loggedFalse
    })
  }

  // Switchers between containers
  showUsers(){
    this.setState({
      showingUsers: true,
      showingRegistration: false,
      showingLoginization: false,
      showingLogouting: false,
      showingProfiles: false,
      showingPosts: false,
      showingFriends: false,
    })
  }

  showRegistration(){
    this.setState({
      showingUsers: false,
      showingRegistration: true,
      showingLoginization: false,
      showingLogouting: false,
      showingProfiles: false,
      showingPosts: false,
      showingFriends: false,
    })
  }

  showLoginization(){
    this.setState({
      showingUsers: false,
      showingRegistration: false,
      showingLoginization: true,
      showingLogouting: false,
      showingProfiles: false,
      showingPosts: false,
      showingFriends: false,
    })
  }

  showLogout(){
    this.setState({
      showingUsers: false,
      showingRegistration: false,
      showingLoginization: false,
      showingLogouting: true,
      showingProfiles: false,
      showingPosts: false,
      showingFriends: false,
    })
  }

  showProfiles(){
    this.setState({
      showingUsers: false,
      showingRegistration: false,
      showingLoginization: false,
      showingLogouting: false,
      showingProfiles: true,
      showingPosts: false,
      showingFriends: false,
    })
  }

  showPosts(){
    this.setState({
      showingUsers: false,
      showingRegistration: false,
      showingLoginization: false,
      showingLogouting: false,
      showingProfiles: false,
      showingPosts: true,
      showingFriends: false,
    })
  }

  showFriends(){
    this.setState({
      showingUsers: false,
      showingRegistration: false,
      showingLoginization: false,
      showingLogouting: false,
      showingProfiles: false,
      showingPosts: false,
      showingFriends: true,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Loader loading={this.state.loading}>
            <div>
              <h1>Some Header</h1>
              <button className="btn btn-primary" onClick={this.showUsers}>Show users</button>
              {!this.state.logged && <button className="btn btn-primary" onClick={this.showLoginization}>Login</button>}
              {this.state.logged && <button className="btn btn-primary" onClick={this.showLogout}>Logout</button>}
              {!this.state.logged && <button className="btn btn-primary" onClick={this.showRegistration}>Register</button>}
              {this.state.logged && <button className="btn btn-primary" onClick={this.showProfiles}>Profiles</button>}
              {this.state.logged && <button className="btn btn-primary" onClick={this.showPosts}>Posts</button>}
              {this.state.logged && <button className="btn btn-primary" onClick={this.showFriends}>Friends</button>}
            </div><hr/>
            <div>
              {this.state.showingUsers && <User />}
              {this.state.showingRegistration && <Register />}
              {this.state.showingLoginization && <Login onChange={this.onLogged}/>}
              {this.state.showingLogouting && <Logout onChange={this.onNotLogged}/>}
              {this.state.showingProfiles && <ProfileScreen/>}
              {this.state.showingPosts && <PostsScreen/>}
              {this.state.showingFriends && <FriendsScreen/>}
            </div>
          </Loader>
        </div>
      </div>
    );
  }
}

export default App;
