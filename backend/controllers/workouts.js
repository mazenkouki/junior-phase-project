const workouts = require("../models/workouts")
module.exports = {
    getAll : (req,res)=>{
     workouts.getAll((err,results)=>{
        err ?  res.status(500).send(err) : res.status(200).json(results)
     })   

    },
    getOne : (req,res) =>{
        workouts.getOne(req.params.id,(err,results)=>{
            err ? res.status(500).send(err) : res.status(200).json(results)
        })
    },
    add : (req,res) =>{
        workouts.add([req.body.title,req.body.reps,req.body.weight],(err,results)=>{
            err ? res.status(500).send(err) : res.status(200).json(results)
        })
    },
    delete : (req,res)=>{
        workouts.delete([req.params.id], (err,results)=>{
            err ? res.status(500).send(err) : res.status(200).json(results)
        })
    },
    update : (req,res)=>{
        workouts.update([req.body.title,req.body.reps,req.body.weight,req.params.id], (err,results)=>{
            err ? res.status(500).send(err) : res.status(200).json(results)
        })
    }

}