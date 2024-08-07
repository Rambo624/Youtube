import React from 'react'
import Comment from './Comment'
import CommentList from './CommentList'

function CommentContainer() {

    const CommentData=[{
        name:"Akshay",
        Text:"Hello I am Akshay",
        Reply:[]
    },
    {
        name:"Akshay",
        Text:"Hello I am Akshay",
        Reply:[{
            name:"Akshay",
            Text:"Hello I am Akshay",
            Reply:[{
                name:"Akshay",
                Text:"Hello I am Akshay",
                Reply:[{
                    name:"Akshay",
                    Text:"Hello I am Akshay",
                    Reply:[]
                }]
            }]
        }]
    },
    {
        name:"Akshay",
        Text:"Hello I am Akshay",
        Reply:[{
            name:"Akshay",
            Text:"Hello I am Akshay",
            Reply:[{
                name:"Akshay",
                Text:"Hello I am Akshay",
                Reply:[{
                    name:"Akshay",
                    Text:"Hello I am Akshay",
                    Reply:[]
                }]
            }]
        }]
    }
]
  return (
    <div className='mt-5'>
            <h1 className='font-bold mb-5'>Comments :</h1>
           <CommentList comments={CommentData}/>
       
    </div>
  )
}

export default CommentContainer