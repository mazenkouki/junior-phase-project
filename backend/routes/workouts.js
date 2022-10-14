const express= require("express")
const workouts = express.Router()
const controllers= require("../controllers/workouts")


workouts.get("/getAll" , controllers.getAll)
workouts.get("/:name" , controllers.getOne)
workouts.post("/add" , controllers.add)
workouts.delete("/:id", controllers.delete)
workouts.put("/:id",controllers.update)



module.exports = workouts