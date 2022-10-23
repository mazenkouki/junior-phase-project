import React from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { useState } from 'react'
function Popular(props) {
const [data,setData] = useState([])

useEffect(()=>{
  axios.get("http://localhost:3000/get").then((response)=>{
    setData((response.data))
  })
},[])
    
  return (
    <div>
{data.map((e,i)=>{
  return (
  <div  key = {i}>
   <img className='img' src= {e.img} alt ="error " ></img>
   <br></br>
    <h4> {e.description}</h4>
  </div>
 
  )
})}
    </div>
  )
}

export default Popular