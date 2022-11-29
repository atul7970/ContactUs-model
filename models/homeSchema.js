const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  phonenumber: {
    type: Number,
    unique: true,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Registeruser", userSchema);
