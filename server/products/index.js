const mongoose = require("mongoose");


const productScehme = new mongoose.Schema({
  title: String,
  price: String,
  image:String
});

const productModel = mongoose.model("products", productScehme);

module.exports = productModel;
