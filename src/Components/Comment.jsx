import React from 'react'

function Comment({data}) {
    const {name,Text,Reply}=data
  return (
    <div className='flex'>
<img className='w-8 m-4 rounded-full' src="https://yt3.ggpht.com/yti/ANjgQV_AY-luLTQMLKHMO7oiH8JgnhmNR2GrbCL7k911zzc=s88-c-k-c0x00ffffff-no-rj" alt="" />
<div className='w-[50rem] bg-gray-200 shadow-lg p-2 rounded-lg '>
<p className='font-bold'>{name}</p>
<p>{Text}</p>
</div>

    </div>
  )
}

export default Comment