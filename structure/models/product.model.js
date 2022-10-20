const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema  = new Schema({
  name:{ type: String, required: true, max: 200},
  category:{ type: String, required:true},
  rating: {type: Number, required:true},
  price: {type:Number, required:true}  

});

module.exports= mongoose.model('NewProd', ProductSchema);
