import React, { Component } from 'react';
import '../../App.css';
import {Loader} from '../utils/loader';

import {CreateComment} from '../elements/createComment';
import {EmailInput} from '../inputs/emailInput';

export class GetPosts extends Component{
    constructor(props){
      super(props);
  
      this.state = {
        userPosts: [],
        userEmail: '',
        pagStartNum: 0,
        pagEndNum: 5,
        canUpdate: false,
        canGoBack: false,
        receivedComment: {}
      }
  
      this.renderPosts = this.renderPosts.bind(this);
      this.renderComments = this.renderComments.bind(this);
      this.getPosts = this.getPosts.bind(this);
      this.onEmailChange = this.onEmailChange.bind(this);
      this.nextPosts = this.nextPosts.bind(this)
      this.previousPost = this.previousPost.bind(this)
      this.handleReceivingComment = this.handleReceivingComment.bind(this)
    }
    handleReceivingComment(val){
      this.getPosts()
      console.log(val)
    }
  
    renderPosts({_id, userEmail, postContent, comments, postType, postImage, postImageUri, numberOfComments}){
      // store.dispatch({ type: 'ADD_POST_ID', payload: `postID:${_id}`})
      return (
        <div key={_id}>
          Post: <br/>
          {postImage && <img src={postImageUri} alt="post image" width="240" height="240"/>} <br/>
          Id: {_id} <br/>
          Email: {userEmail} <br/>
          Post type: {postType} <br/>
          Post content: {postContent} <br/>
          Post comments ({numberOfComments}): 
          <CreateComment postId={_id} onClick={this.handleReceivingComment}/>
          {comments.length > 0 && <div className="comments">
            {comments.map(this.renderComments)}
          </div>}
          <br/>
        </div>
      )
    }
  
    componentWillReceiveProps(){
      this.getPosts()
    }
  
    renderComments({_id, postId, userEmail, answerOnComment, commentContent}){
      // store.dispatch({ type: 'ADD_COMMENT_ID', payload: `commentID:${_id}`});
      return (
        <div key={_id}>
          Comment: <br/>
          Id: {_id} <br/>
          Email: {userEmail} <br/>
          Comment content: {commentContent} <br/>
          {answerOnComment && answerOnComment !== "undefined" && <p>Answer on comment: {answerOnComment}</p>}
          <CreateComment postId={postId}  answerOnComment={_id} onClick={this.handleReceivingComment}/>
          <br/>
        </div>
      )
    }
  
    onEmailChange(val) {
      this.setState({userEmail: val})
    }
  
    getPosts(){
      let queryedEmail = '?userEmail=' + this.state.userEmail;
      let pagStart = '&pagStart=' + this.state.pagStartNum;
      let pagEnd = '&pagEnd=' + this.state.pagEndNum;
      fetch(`http://localhost:5001/posts/userposts${queryedEmail}${pagStart}${pagEnd}`, {
        method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
          }
      })
      .then(res => res.json())
      .then(res => {
        this.setState({userPosts: res.posts}, () => {
          if (res.posts.length === 0 || res.posts.length < 5){
            this.setState({
              canUpdate: false, 
              canGoBack: false,
  
              pagStartNum: 0, 
              pagEndNum: 5,
            })
          }
        })
      })
      .catch(err => console.log(err))
  
      this.setState({canUpdate: true})
      
    }
  
    nextPosts(){
      this.setState({pagStartNum: this.state.pagStartNum + 5, pagEndNum: this.state.pagEndNum, canGoBack: true}, () => {
        this.getPosts();
      });
    }
  
    previousPost(){
      this.setState({pagStartNum: this.state.pagStartNum - 5, pagEndNum: this.state.pagEndNum}, () => {
        if(this.state.canGoBack && this.state.pagStartNum < 5){
          this.setState({canGoBack: false})
        }
        this.getPosts();
      });
    }
    
    render(){
      let {userPosts} = this.state;
      return(
        <div>
          <h2>Find user posts</h2>
          <EmailInput onChange={this.onEmailChange}/><br/>
          <button className="btn" onClick={this.getPosts}>Find</button><br/><br/>
          <div>
            {this.state.userPosts && userPosts.map(this.renderPosts)}
          </div>
          {this.state.canGoBack && <button className="btn" onClick={this.previousPost}>Previous 5</button>}
          {this.state.canUpdate && <button className="btn" onClick={this.nextPosts}>Next 5</button>}
        </div>
      )
    }
}