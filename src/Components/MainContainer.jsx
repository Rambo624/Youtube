import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_API } from '../Constants/url'
import ButtonList from './ButtonList'
import { Link } from 'react-router-dom'


function MainContainer() {
const [videoList, setVideoList]=useState(null)

    async function fetchData() {
        try {
            const data = await fetch(YOUTUBE_API)
            const json = await data.json()
          
            setVideoList(json.items)
        } catch (error)
         {
            console.log(error)
        }
      
    }



    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
         <ButtonList/>
        {videoList && <div className=' flex flex-wrap justify-between p-3 '>
            {videoList.map((video)=><Link key={video.id} to={`/watch?v=${video.id}`}> <VideoCard  videoList={video} /></Link>)}
           
        </div>}
        </>
        
    )
}

export default MainContainer