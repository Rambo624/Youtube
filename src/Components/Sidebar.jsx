import React from 'react'
import { useSelector } from 'react-redux'
function Sidebar() {
    const sidebar=useSelector((store)=>store.app.isMenuOpen)
  return (
  <>
 
    {sidebar && <div className=' w-60 pr-10  text-center '>
        <div className=' border-b-2 border-b-gray-300 pt-10 '>
        <ul className='text-left ml-2 mt-2'>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>
        </div>
        <div className=' border-b-2 border-b-gray-300 mt-5 '>
            <p className='font-bold'>YOU</p>
            <ul className='text-left ml-2'>
                <li>Your Channel</li>
                <li>History</li>
                <li>Playlists</li>
                <li>Your Videos</li>
                <li>Watch Later</li>
                
            </ul>
        </div>
        <div className=' border-b-2 border-b-gray-300 mt-5 '>
        <p className='font-bold'>Explore</p>
            <ul className='text-left ml-2'>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Films</li>
                <li>Live</li>
                
            </ul>
        </div>
        <div className=' border-b-2 border-b-gray-300 mt-5 '>
        <p className='font-bold'>Explore</p>
            <ul className='text-left ml-2'>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Films</li>
                <li>Live</li>
                
            </ul>
        </div>
        <div className=' border-b-2 border-b-gray-300 mt-5 '>
        <p className='font-bold'>Explore</p>
            <ul className='text-left ml-2'>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Films</li>
                <li>Live</li>
                
            </ul>
        </div>
        <div className=' border-b-2 border-b-gray-300 mt-5 '>
        <p className='font-bold'>Explore</p>
            <ul className='text-left ml-2'>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Films</li>
                <li>Live</li>
                
            </ul>
        </div>
    </div>}
    </>
  )
}

export default Sidebar