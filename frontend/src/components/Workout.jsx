import axios from "axios"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import React,{useState} from 'react'

function Workout(props) {
  const [title,setTitle] = useState("")
  const [reps,setReps] = useState("")
  const [weight,setWeight] = useState("")

  console.log(title);

function refreshPage() {
  window.location.reload(false);
}
 const handleClick = () =>{
  axios.delete(`http://localhost:3000/workouts/${props.id}`).then((response)=>{
  console.log(response);
  refreshPage()

}).catch((err)=>{
  console.log(err)
})}
const handleClickTitle = () =>{
axios.put(`http://localhost:3000/workouts/title/${props.id}`,{
  title : title
}).then((response)=>{
  console.log(response);
  refreshPage()
}).catch((err)=>{
  console.log(err);
})    
}
const handleClickReps = () =>{
  axios.put(`http://localhost:3000/workouts/reps/${props.id}`,{
    reps : reps 
  }).then((response)=>{
    console.log(response);
    refreshPage()
  }).catch((err)=>{
    console.log(err);
  })  
  } 
  
  console.log(props.id);
  const handleClickWeight = () =>{
    axios.put(`http://localhost:3000/workouts/weight${props.id}`,{
      weight : weight
    }).then((response)=>{
      console.log(response);
      refreshPage()
    }).catch((err)=>{
      console.log(err);
    })    
    }  
 const handleChange = (e) =>{
setTitle(e.target.value)
 }  
 const handleChange1 = (b) =>{
  setReps(b.target.value)
}  
const handleChange2 = (a) =>{
  setWeight(a.target.value)
}  

  return (
 
    <div className='workout'>
<h4 className='h4'>workout: <strong>{props.title}</strong></h4>
<input placeholder="..."  type="text" value={title}  onChange={handleChange}></input>
<button className='button' onClick={handleClickTitle} > Edit </button>
<h4> reps: <strong>{props.reps} </strong> </h4>
<input placeholder="..."   type="text" value={reps} onChange={handleChange1}></input>
<button className='button' onClick={handleClickReps} > Edit </button>
<h4> weight: <strong>  {props.weight} kgs </strong> </h4>
<input placeholder="..."   type="text" value={weight}  onChange={handleChange2} ></input>
<button className='button' onClick={handleClickWeight} > Edit </button>
<h4> created at: <strong>  {formatDistanceToNow(new Date(props.createdAt),{addSuffix : true})} </strong> </h4>
               <br></br>
 <button className='button' onClick={handleClick}> Remove</button>

    </div>
    
   
  )
  
  }

export default Workout