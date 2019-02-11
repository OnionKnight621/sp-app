import React, { Component } from 'react';
import '../../App.css';
import {Loader} from '../utils/loader';

export class Logout extends Component{
    constructor(props){
      super(props);
      this.state = {
        user: {
          userEmail: '',
          userPassword: '',
          userNickname: ''
        },
        logged: true,
        response: {}
      }
  
      this.submit = this.submit.bind(this);
    }
  
    submit(e){
      // e.preventDefault();
      fetch("http://localhost:5001/login/logout", {
        method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
          }
      })
        .then(res => res.json())
        .then(res => {
          this.setState({response: res, logged: false});
          console.log(this.state.response);
          if(this.state.response.error){
            return alert(this.state.response.error)
          }
          alert(this.state.response.message)
          this.props.onChange(false)
        })
        .catch(err => console.log(err))
    }
  
    render(){
      return(
        <div>
          <form id="logoutForm">
            <h2>Logout</h2>
            <button type="submit" className="btn" id="logoutSubmit" onClick={this.submit}>Logout</button>
          </form>
        </div>
      )
    }
}