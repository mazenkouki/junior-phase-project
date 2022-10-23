const db = require("../database/index")


module.exports = {
getAll : (cb) =>{
    var sql = `select * from workouts`
    db.query(sql,(err,results)=>{
        cb(err,results)
    })
},

getOne : (id,cb)=>{
    var sql = `select * from workouts where idworkouts = ?`
    db.query(sql,id,(err,results)=>{
        cb(err,results)
    })
},

add : (values,cb) =>{
    var sql = `insert into workouts (title,reps,weight) values(?,?,?)`
    db.query(sql,values,(err,results)=>{
        cb(err,results)
    })
},

del : (id,cb)=>{
    var sql = `delete from workouts where idworkouts= ?`
    db.query(sql,id,(err,results)=>{
        cb(err,results)
    })
},

updateTitle : (values,id,cb) =>{
    var sql = `UPDATE workouts SET title =? WHERE idworkouts = ?`
    db.query(sql,[values,id],(err,results)=>{
        cb(err,results)
    })
},
updateReps: (values,id,cb) =>{
    var sql = `UPDATE workouts SET reps =? WHERE idworkouts = ?`
    db.query(sql,[values,id],(err,results)=>{
        cb(err,results)
    })
},
updateWeigth: (values,id,cb) =>{
    var sql = `UPDATE workouts SET weight =? WHERE idworkouts = ?`
    db.query(sql,[values,id],(err,results)=>{
        cb(err,results)
    })
}


}