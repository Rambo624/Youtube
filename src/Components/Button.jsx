import React from 'react'

function Button() {
    const list=["Deadpool","Deadpool & Wolverine","music","Live","dance","javascript","gaming" ]
  return (
    <div className='mt-4' >
      <button  className='bg-black text-white p-1 px-2 rounded-lg  mx-2'>All</button>
        {list.map((obj)=>  <button key={obj} className='bg-gray-200 p-1 px-2 rounded-lg  mx-2'>{obj}</button>)}
      
       
    </div>
  )
}

export default Button