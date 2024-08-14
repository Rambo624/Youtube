import React from 'react'

function ResultCard({result}) {
    console.log(result)
    const {snippet}=result
    const{title,thumbnails,channelTitle,description}=snippet
  return (
    <div className='mt-5 flex ml-6'>
       <img src={thumbnails.high.url} alt="pic" />
        <div className='ml-4'>
        <h1 className='font-semibold '>{title}</h1>
        <p className='mt-4'>{channelTitle}</p>
        <p className='mt-8'>{description}</p>
        
        </div>
    
       
    </div>
  )
}

export default ResultCard