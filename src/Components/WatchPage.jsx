import React, { useEffect, useState } from 'react'
import { VIDEO_API } from '../Constants/url'
import { useDispatch } from 'react-redux'
import { closeSideMenu } from '../Constants/appSlice'
import { useSearchParams } from 'react-router-dom'

import { addVideoDetails } from '../Constants/VideoSlice'
import { useSelector } from 'react-redux'
function WatchPage() {
    const dispatch=useDispatch()
   // const [videoDetails, setVideoDetails]=useState([])//
    const [searchParams]=useSearchParams()
const VideoDetails=useSelector((store)=>store.video.videoDetails)
    async function fetchData(){
        const data= await fetch(`${VIDEO_API}&id=${searchParams.get("v")}`)
        const json=await data.json()
        console.log(json)
        dispatch(addVideoDetails(json.items[0]))

    }
    
  
    
  
 

useEffect(()=>{
dispatch(closeSideMenu())
fetchData()
},[])

if(!VideoDetails) return <h1>Loading....</h1>
const {snippet,statistics}=VideoDetails
const {channelTitle,description,thumbnails,title}=snippet
const {viewCount}=statistics


  return (
    <>
    {VideoDetails &&  (<div className='m-5'>
        <iframe className='rounded-lg' width="900" height="500" src={`https://www.youtube.com/embed/${searchParams.get("v")}?si=9iTXoM17FeoRlrWJ`}title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
   
    <h1  className='font-bold w-10/12 text-2xl'>{title}</h1>
    <p>{channelTitle}</p>
    <p>{viewCount} views</p>
    </div>)}
    
   </>
  
  )
}

export default WatchPage