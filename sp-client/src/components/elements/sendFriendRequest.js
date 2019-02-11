import React, { Component } from 'react';
import '../../App.css';
import {Loader} from '../utils/loader';

import {EmailInput} from '../inputs/emailInput';

export class SendFriendRequest extends Component{
    constructor(props){
      super(props);
      this.state = {
        userEmail: '',
        response: {}
      }
  
      this.onEmailChange = this.onEmailChange.bind(this);
      this.submit = this.submit.bind(this)
    }
  
    onEmailChange(val) {
      this.setState({userEmail: val})
    }
  
    submit(e){
      e.preventDefault();
      fetch('http://localhost:5001/users/sendfriendrequest',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          'userEmail': `${this.state.userEmail}`
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
          <form>
            <h2>Send friend request</h2>
            <EmailInput onChange={this.onEmailChange}/>
            <button type="submit" className="btn" onClick={this.submit}>Send</button>
          </form>
        </div>
      )
    }
}