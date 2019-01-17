import React, { Component } from 'react';
import '../../App.css';
import {Loader} from '../utils/loader';

import {ChooseBtn} from '../inputs/chooseBtn';
import {InformationInput} from '../inputs/informatonInpt';
import {UploadImgBtn} from '../inputs/uploadImage';

export class CreatePost extends Component{
    constructor(props){
      super(props)
  
      this.state = {
        postContent: '',
        response: {},
        imgResponse: {},
        postType: 'private',
        postImage: null
      }
      
      this.submit = this.submit.bind(this);
      this.onInformationChange = this.onInformationChange.bind(this);
      this.onTypeChange = this.onTypeChange.bind(this);
      this.onImageUpload = this.onImageUpload.bind(this);
    }
  
    onInformationChange(val){
      this.setState({postContent: val})
    }
  
    onTypeChange(val){
      this.setState({postType: val})
    }
  
    onImageUpload(val){
      this.setState({postImage: val})
    }
  
    submit(e){
      e.preventDefault();
      let queryedId = '';
  
      fetch("http://localhost:5001/posts/createpost", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          'postContent': `${this.state.postContent}`,
          'postType': `${this.state.postType}`
        })
      })
      .then(res => res.json())
      .then(res => {
        this.setState({response: res}, () => {
          queryedId = '?postId=' + res.post._id;
        });
        console.log(this.state.response)
        
        if(this.state.response.error){
          return alert(this.state.response.error)
        }
        return alert(this.state.response.message)
        
      })
      .then(() => {
        if(this.state.postImage){
          
          var formData = new FormData();
          formData.append('postImage', this.state.postImage);
          console.log(queryedId)
          return fetch(`http://localhost:5001/posts/addpostimage${queryedId}`, {
            method: 'POST',
            body: formData
          })
          .then(response => response.json())
          .then(response => {
            this.setState({imgResponse: response});
            console.log(this.state.imgResponse)
            if(this.state.imgResponse.error){
              return alert(this.state.imgResponse.error)
            }
            return alert(this.state.imgResponse.message)
            
          })
          .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err))
      
    }
  
    render(){
      return(
        <div>
          <form id="createPostForm">
            <h2>Create post</h2>
            <InformationInput onChange={this.onInformationChange}/>
            <ChooseBtn onClick={this.onTypeChange}/>
            <UploadImgBtn onChange={this.onImageUpload}/><br/>
            <button  type="submit" className="btn" id="createPostSubmit" onClick={this.submit}>Create</button>
          </form>
        </div>
      )
    }
}