const mongoose = require('mongoose')
let imagesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: "will be a description",
      required : true
    },
    id:{type:String,unique:true}
  });

let popular = mongoose.model("Repo", imagesSchema);

module.exports.popular = popular


