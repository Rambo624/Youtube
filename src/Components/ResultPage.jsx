import React, { useEffect } from 'react'

function ResultPage() {

    
  async function fetchResults(){
    const data= await fetch(RESULTS_API)
    const json=await data.json()
    console.log(json)
  }
 
useEffect(()=>{
fetchResults()
},[])

  return (
    <div>ResultPage</div>
  )
}

export default ResultPage