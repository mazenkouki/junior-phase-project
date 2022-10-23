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
    del : (req,res)=>{
        workouts.del(req.params.id, (err,results)=>{
            err ? res.status(500).send(err) : res.status(200).json(results)
        })
    },
    updateTitle : (req,res)=>{
        console.log(req.body)
        workouts.updateTitle([req.body.title],req.params.id, (err,results)=>{
            err ? res.status(500).send(err) : res.status(200).json(results)
        })
    },
    updateReps : (req,res)=>{
        workouts.updateReps(req.body.reps,req.params.id, (err,results)=>{
            err ? res.status(500).send(err) : res.status(200).json(results)
        })
    },
    updateWeight : (req,res)=>{
        workouts.updateWeigth(req.body.weight,req.params.id, (err,results)=>{
            err ? res.status(500).send(err) : res.status(200).json(results)
        })
    }

}