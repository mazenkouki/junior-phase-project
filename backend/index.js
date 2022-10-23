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
const userRoute = require("./routes/user")

app.use("/workouts", workouts)
app.use("/user", userRoute)

mongoose
  .connect("mongodb://127.0.0.1:27017/popular",
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

var {popular} = require("./controllers/popular")

app.post('/add', (req, res) => {
  console.log(req.body);
    const name=req.body.name;
    const img=req.body.img;
    const description =req.body.description;
    const id = req.body.id
    const Popular = new popular({ name, img, description,id});
    Popular.save().then(()=>res.json(" added ")).catch(err=>res.json(err))

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

