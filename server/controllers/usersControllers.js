const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');

// @desc    Get users
// @route   GET /users
// @access  Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
})

module.exports = {
  getUsers
}