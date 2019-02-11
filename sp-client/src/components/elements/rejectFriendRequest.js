import React, { Component } from 'react';
import '../../App.css';
import {Loader} from '../utils/loader';

export class RejectFriendRequest extends Component{
    constructor(props){
      super(props);
      this.state = {
        userEmail: '',
        response: '',
        userEmail: props.userEmail
      }
      this.submit = this.submit.bind(this)
    }
  
    submit(e){
      e.preventDefault();
      fetch('http://localhost:5001/users/rejectfriendrequest',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          'friendEmail': `${this.state.userEmail}`
        })
      })
      .then(res => res.json())
      .then(res => {
        this.setState({response: res});
        console.log(this.state.response)
        if(this.state.response.error){
          return alert(this.state.response.error)
        }
        return alert(this.state.response.message)
        
      })
      .catch(err => console.log(err))
    }
  
    render(){
      return(
        <div>
          <button type="submit" className="btn" onClick={this.submit}>Reject</button>
        </div>
      )
    }
}