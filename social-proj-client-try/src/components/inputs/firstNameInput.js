import React, { Component } from 'react';
import '../../App.css';

export class FirstNameInput extends Component{
    constructor(props){
        super(props)

        this.state = {firstName: ''}

        this.onFirstNameChange = event => this.handleFirstNameInput(event.target.value);
    }

    handleFirstNameInput(value){
        let re = /^[a-z]+$/i
        
        if(value === '' || re.test(value)){
        this.setState({firstName: value.replace(/\s/g, '')})
        this.props.onChange(value)
        }
        
        console.log("first: ",value)
    }

    render(){
        return(
        <div>
            <label htmlFor="userFirstName">First name:</label><br/>
            <input type="text" name="userFirstName" id="userFirstName" width="20" placeholder="first name" value={this.state.firstName} onChange={this.onFirstNameChange}/><br/><br/>
        </div>
        )
    }
}