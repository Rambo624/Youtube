import React from 'react'
import Sidebar from './Sidebar'
import ButtonList from './ButtonList'
import MainContainer from './MainContainer'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <div className='flex'>
          <Sidebar/>
           <div>
      
       
        <Outlet/>

    </div>
    </div>
 
  )
}

export default Body