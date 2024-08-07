import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Constants/chatSlice'

function Chatmsg({name,message}) {




    return (
        <div className='flex py-2'>
            
                <img className='w-6 rounded-full' src="https://yt3.ggpht.com/yti/ANjgQV_AY-luLTQMLKHMO7oiH8JgnhmNR2GrbCL7k911zzc=s88-c-k-c0x00ffffff-no-rj" alt="" />
            

            
                
                <>
                <span className='font-semibold ml-2'>{name}</span>
                <span className='ml-3'>{message}</span><br />
                </>
                
    

        </div>
    )
}

export default Chatmsg