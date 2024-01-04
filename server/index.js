const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
});
// usersSchema.plugin(uniqueValidator, { message: '{VALUE} is already exist' })

const userModel = mongoose.model("users", usersSchema);

module.exports = userModel;
