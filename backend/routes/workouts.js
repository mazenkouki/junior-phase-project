const express= require("express")
const workouts = express.Router()
const {del,getAll,getOne,add,updateTitle,updateReps, updateWeight}= require("../controllers/workouts")


workouts.get("/getAll" , getAll)
workouts.get("/:name" , getOne)
workouts.post("/add" , add)
workouts.delete("/:id", del)
workouts.put("/title/:id",updateTitle)
workouts.put("/reps/:id",updateReps)
workouts.put("/weight/:id",updateWeight)

module.exports = workouts