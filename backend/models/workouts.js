const db = require("../database/index")


module.exports = {
getAll : (cb) =>{
    var sql = `select * from workouts`
    db.query(sql,(err,results)=>{
        cb(err,results)
    })
},

getOne : (id,cb)=>{
    var sql = `select * from workouts where id = ?`
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

delete : (id,cb)=>{
    var sql = `delete from workouts where id = ?`
    db.query(sql,id,(err,results)=>{
        cb(err,results)
    })
},

update : (values,cb) =>{
    var sql = `UPDATE workouts SET title =?, reps =?, weight = ? WHERE id = ?`
    db.query(sql,values,(err,results)=>{
        cb(err,results)
    })
}


}