import React from 'react'
import { useSearchParams } from 'react-router-dom'

function VideoCard({videoList}) {

    const {snippet,statistics}=videoList
const {channelTitle,title,thumbnails}=snippet
const {viewCount}=statistics
  return (
    <div className=' w-[450px]  p-2 shadow-lg rounded-xl'>
        
        <img className="rounded-xl " src={thumbnails?.standard?.url} alt="" />
        <ul>
            <li className='font-semibold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard