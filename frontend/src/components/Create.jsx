import React,{useState} from 'react'
import axios from "axios"
function Create(props) {
const [title,setTitle] = useState("")
const [reps,setReps] = useState("")
const [weight,setWeight] = useState("")



const handleSubmit =()=>{
  axios.post("http://localhost:3000/workouts/add",{
   title : title,
    reps : reps ,
    weight : weight

  }).then((response)=>{
    console.log(response);
  }).catch((err)=>{
    err ? console.log(err) : console.log("ok");
  })

}
  return (
    <center>
    <form className='create' onSubmit={handleSubmit}>
<h3> add a new Workout  </h3>

<label> workout Name </label>
<br></br>
<input className='input' type="text" value ={title} 
onChange={(e)=>{setTitle(e.target.value)}} ></input>
<br></br>
<label> workout Reps </label>
<br></br>
<input className='input' type="number" value ={reps} 

onChange={(e)=>{setReps(e.target.value)}} ></input>
<br></br>
<label> workout Weigth in kgs </label>
<br></br>
<input className='input' type="number" value ={weight} 
onChange={(e)=>{setWeight(e.target.value)}} ></input>
<br></br>
<br></br>

<button className='submit' 

> Submit Workout </button>
    </form>
    </center>
  )
}

export default Create