const mongoose = require('mongoose')
let imagesSchema = new  mongoose.Schema(
    {
      name : String,
      img:{ Buffer,
        contentType: String},
      description : String,
      id:{type:String,unique:true}
  });
  
  let popular = mongoose.model("Repo", imagesSchema);

module.exports.popular= popular


