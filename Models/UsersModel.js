const mongoose = require('mongoose');

// Defineing the User Schema
const userSchema =  mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
},{
    versionKey: false
});

// Creating the User model
const UserModel = mongoose.model('User', userSchema);

module.exports = {UserModel};
