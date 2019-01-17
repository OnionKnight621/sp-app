import React, { Component } from 'react';
import '../../App.css';

export class EmailInput extends Component{
    constructor(props){
        super(props)

        this.state = {email: ''}

        this.onEmailChange = event => this.handleEmailInput(event.target.value);
    }

    handleEmailInput(value){
        // this.setState({email: `${value}`.trim()})
        this.setState({email: value.replace(/\s/g, '')})
        this.props.onChange(value)

        console.log("Email: ",value)
    }

    render(){
        return(
        <div>
            <label htmlFor="userEmail">Email:</label><br/>
            <input type="email" name="email" id="userEmail" width="20" placeholder="somemail@gmail.com" value={this.state.email} onChange={this.onEmailChange}/><br/>
        </div>
        )
    }
}