const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add user's name"]
  },
  email: {
    type: String,
    required: [true, "Please add user's email"]
  },
  phone: {
    type: String,
    required: [true, "Please add user's phone"]
  },
  password: {
    type: String,
    required: [true, "Please add user's name"]
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);