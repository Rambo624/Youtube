import React, { useState } from 'react'
import Chatmsg from './chatmsg'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addMessage } from '../Constants/chatSlice'
import { useEffect } from 'react'
import generate from '../Constants/helper'
import { RandomString } from '../Constants/helper'
function ChatBox() {
    const [liveMessage, setLiveMessage]=useState("")
    const dispatch=useDispatch()
    const chat=useSelector((store)=>store.chat.messages)

    
    useEffect(() => {
       const i= setInterval(() => {
      const name=generate()
      const text=RandomString(20)
     
          const message={name:name, text:text}
           dispatch(addMessage(message))
           }, 1000)
        return ()=>  clearInterval(i)
    }, [])


  return (
    <div>
          <div className='ml-2 p-2 border border-black w-full h-[500px] bg-gray-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
     {chat.map((m,index)=> <Chatmsg key={index} name={m.name} message={m.text}/>)}
    
   
    
    </div>
    <div >
      <form onSubmit={(e)=>{
        e.preventDefault()
        dispatch(addMessage({name:"Akshay",text:liveMessage}))
        setLiveMessage("")
        }} className='flex'>
      <input value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}  type="text" placeholder='Type Message' className='border border-black p-2 shadow-lg rounded-lg w-full ml-2 mt-2' />
      <button className='bg-green-400 rounded-lg border border-black mt-2 ml-3 px-2'>Send</button>
      </form>
   
        
       
    </div>
    </div>
  
  )
}

export default ChatBox