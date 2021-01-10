const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    required: true,
    type: String,
  },
  lastname: {
    required: true,
    type: String,
  },
  email: {
    unique: true,
    required: true,
    type: String,
  },
  contact: {
    required: true,
    type: String,
    maxlength: 10,
  },
  address: {
    required: true,
    type: String,
  },
  company: {
    required: true,
    type: String,
  },
  designation: {
    required: true,
    type: String,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
