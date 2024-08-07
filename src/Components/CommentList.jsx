import React from 'react'
import Comment from './Comment'

function CommentList({comments}) {
  return comments.map((comment,index)=>(
    <div key={index}>
        <Comment  data={comment} />
        <div className='m-3 border-black border-l'>
        <CommentList  comments={comment.Reply}/>
        </div>
    </div>
    
    
  ))
}

export default CommentList