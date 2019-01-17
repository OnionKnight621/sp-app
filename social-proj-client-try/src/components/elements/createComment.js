import React, { Component } from 'react';
import '../../App.css';
import {Loader} from '../utils/loader';

import {InformationInput} from '../inputs/informatonInpt';

export class CreateComment extends Component{
    constructor(props){
      super(props);
  
      this.state = {
        commenting: false,
        comment: {
          commentContent: '',
          postId: props.postId,
          answerOnComment: props.answerOnComment,
        },
        response: {}
      }
  
      this.onCommenting = this.onCommenting.bind(this);
      this.onInformationChange = this.onInformationChange.bind(this);
      this.submit = this.submit.bind(this);
    }
  
    onCommenting(){
      this.setState({commenting: !this.state.commenting})
    }
  
    onInformationChange(val){
      let {comment} = this.state;
      this.setState({comment: {...comment, commentContent: val}})
    }
  
    submit(e){
      e.preventDefault()
      fetch("http://localhost:5001/comments/createcomment", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          'commentContent': `${this.state.comment.commentContent}`,
          'answerOnComment': `${this.state.comment.answerOnComment}`,
          'postId': `${this.state.comment.postId}`
        })
      })
      .then(res => res.json())
      .then(res => {
        this.setState({response: res, commenting: false});
        console.log(this.state.response)
        if(this.state.response.error){
          return alert(this.state.response.error)
        }
        this.props.onClick(this.state.comment)
        return alert(this.state.response.message)
        
      })
      .catch(err => console.log(err))
    }
  
    render(){
      return(
        <div>
          <button className="btn" onClick={this.onCommenting}>Comment</button>
          {this.state.commenting && <div>
            <InformationInput  onChange={this.onInformationChange}/>
            <button className="btn" onClick={this.submit} >Send</button>
          </div>}
        </div>
      )
    }
}