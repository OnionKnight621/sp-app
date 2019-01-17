import React, { Component } from 'react';
import '../../App.css';
import {Loader} from '../utils/loader';

 export class User extends Component{
    constructor(props){
      super(props);
      this.state = {
        users: [],
        loading: true
      }
  
      this.renderUsers = this.renderUsers.bind(this);
      this.getUsers = this.getUsers.bind(this);
    }
  
    renderUsers({_id, userEmail, userName}){
      return (
      <div key={_id}>
        Name: {userName} | email: {userEmail} <br/>
      </div>
      )
    }
  
    getUsers(){
      fetch("http://localhost:5001/users/getusers", {
        method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
          }
      })
      .then(res => res.json())
      .then(res => this.setState({users: res.users, loading: false}))
      .catch(err => console.log(err))
    }
  
    componentDidMount(){
      this.getUsers()
    }
  
    render() {
      let {users} = this.state;
  
      return (
        <div>
          <Loader loading={this.state.loading}>
            <h2>Users</h2>
            {users.map(this.renderUsers)}
          </Loader>
        </div>
      );
    }
}