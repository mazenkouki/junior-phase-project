import React from 'react'
import {Link} from "react-router-dom"

function navbar() {
  return (
    <header>
    <div
    className='container'>
        <Link to = "/">
        <h1 className='h1'> Your Workout Companion</h1>
        </Link>
       
        <Link to = "Create">
        <h1  className='h1'> Create Workout </h1>
        </Link>
        <Link to = "popular">
        <h1  className='h1'> popular Workouts </h1>
        </Link>
        <nav>
          <div>
            <Link to = "/login" > Login </Link>
            <Link to = "/signup" > Signup </Link>
          </div>
        </nav>
    
    </div>
    </header>
  )
}

export default navbar