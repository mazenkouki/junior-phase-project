const express = require('express');
const cors = require('cors');
const db = require("./database/index")
const app = express();
const path = require("path") 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
const mongoose = require("mongoose");

app.use(cors());


const workouts = require("./routes/workouts")


app.use("/workouts", workouts)

mongoose
  .connect("mongodb://127.0.0.1:27017/popular",
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

var {popular} = require("./controllers/popular")

app.post('/add', (req, res) => {
    var newPopular = new popular({
      name: req.body.name,
      img: req.body.img,
      description: req.body.description,
      id : req.body.id
    })
    newPopular.save().then((data) => {
      res.json(data)
    })
      .catch((err) => {
        res.status(404).send(err)
      })
  })

  app.get("/get", (req, res) => {
    popular.find({}, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    });
  })


 

 
 
app.listen(3000,() => console.log('Server is running on port 3000'));

