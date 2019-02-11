import React, { Component } from 'react';
import '../../App.css';

export class UploadImgBtn extends Component{
    constructor(props){
      super(props)
      this.state = {
        fileToUpload: {}
      }
  
      this.onFileChange = event => this.handleFileInput(event)
    }
  
    handleFileInput(event){
      console.log("File: ", event.target.files[0])
      this.setState({fileToUpload: event.target.files[0]}, () => {
        this.props.onChange(this.state.fileToUpload)
      })
      
      console.log("Img added")
    }
  
    render(){
      return(
        <div>
          <input type="file"  onChange={this.onFileChange}/>
        </div>
      )
    }
}