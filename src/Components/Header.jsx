import React from 'react'
import { YOUTUBE_LOGO, MICROPHONE_ICON, BELL_ICON, SEARCH_API } from '../Constants/url'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../Constants/appSlice'
import { useState, useEffect } from 'react'

import { cacheSearch } from '../Constants/SearchSlice'

function Header() {
 
  const dispatch = useDispatch()
const searchCache=useSelector((store)=>store.search)
  const [searchQuery, setsearchQuery] = useState("")
  const [showSuggestions, setshowSuggestions] = useState(false)
  const [Suggestions, setSuggestions] = useState([])


 
  function toggleSidebarMenu() {
    dispatch(toggleSidebar())
  }


  async function getSearchSuggestions() {
    const data = await fetch(`${SEARCH_API}q=${searchQuery}`)
    const json = await data.json()
    
    setSuggestions(json[1])
dispatch(cacheSearch({[searchQuery]:json[1]}))
    
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery])
        setSuggestions(searchCache[searchQuery])
      else
      getSearchSuggestions()
    }, 200);

    return () => {
      clearTimeout(timer)
    }

  }, [searchQuery])

 function search(){

 }

  return (
    <div className="grid  grid-flow-col shadow-lg">
      <div className='flex col-span-1'>
        <img onClick={toggleSidebarMenu} className='w-10 cursor-pointer' src="https://www.svgrepo.com/show/312300/hamburger-menu.svg" alt="" />
        <a href="/"><img className='w-24 ml-4 mt-4' src={YOUTUBE_LOGO} alt="" /></a>
      </div>
      <div>
        <div className='col-span-10 p-5 text-center '>
          <input onBlur={() => setshowSuggestions(false)} onFocus={() => setshowSuggestions(true)} onChange={(e) => { setsearchQuery(e.target.value) }} value={searchQuery} className='w-[80%] p-2 rounded-l-full border border-gray-400 ' type="text" placeholder='Search' />
          <button className='bg-white p-2 border border-gray-400 rounded-r-full '>🔍</button>
          <button className='bg-gray-200 ml-3 rounded-full p-3'><img className='w-5' src={MICROPHONE_ICON} alt="" /></button>
        </div>
        {showSuggestions && (
          <div className='absolute'>
            <ul className='bg-white ml-8 border border-gray-200 p-2 rounded-lg -mt-4 w-[30rem] shadow-2xl font-semibold'>
              {Suggestions.map((s, index) => <li key={index}  className=' hover:bg-gray-200 cursor-default'><a href="/results">{s}</a></li>)}




            </ul>


          </div>)}

      </div>

      <div className='col-span-1 text-right'>
        <button><img className='w-5 mr-5 mt-5' src={BELL_ICON} alt="" /></button>
        <button className='rounded-full bg-[#fb522a] p-3 px-4 mt-5 mr-5'>A</button>
      </div>

    </div>
  )
}

export default Header