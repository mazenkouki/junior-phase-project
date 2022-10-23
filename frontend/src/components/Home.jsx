import React , {useEffect,useState} from 'react'
import axios from "axios"
import Workout from './Workout'
import Create from "./Create"
function Home() {
const [workouts,setworkouts] = useState([])    
console.log(workouts)
useEffect(()=>{
axios.get("http://localhost:3000/workouts/getAll").then((response)=>{
 setworkouts(response.data)
}).catch((err)=>{
     console.log(err) 
})
},[])


  return (
    <div className='home'>
      
    
        <div className='reservations'>
            {workouts && workouts.map((e,i)=>(
              
           <Workout id ={e.idworkouts} title = {e.title} reps = {e.reps} createdAt = {e.createdAt} weight = {e.weight} key = {i}/>
           ) )}
        </div>
         
        </div>
  )
}

export default Home