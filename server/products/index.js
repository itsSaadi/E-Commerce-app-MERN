const mongoose = require("mongoose");


const productScehme = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: String,
    required: true,
  },
  image:{
    type: String,
    required: true,
    unique: true
  },
  deletedAt: { type: Date, default: null } 
});



const productModel = mongoose.model("products", productScehme);

module.exports = productModel;
