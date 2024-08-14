import React, { useEffect,useState } from 'react'
import { RESULTS_API } from '../Constants/url'
import ButtonList from './ButtonList'
import ResultCard from './ResultCard'
function ResultPage() {
const [results,setResults]=useState(null)
    
  async function fetchResults(){
    const data= await fetch(RESULTS_API)
    const json=await data.json()
 
    setResults(json.items)
  }
 
useEffect(()=>{
fetchResults()
},[])

if(!results) return <h1>Loading...</h1>

  return  (
    
    <div>
      <ButtonList/>
      {results.map((result,i)=>results?<ResultCard key={i} results={result} />:<h1>No Results Found</h1> )}
 
  
   
    </div>
  )
}

export default ResultPage