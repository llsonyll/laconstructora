const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');

// @desc    Get user
// @route   GET /user
// @access  Private
const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400)
    throw new Error('User id required');
  }
  const user = await User.findById(id);
  if (!user) {
    res.status(400)
    throw new Error('User not found');
  }

  res.status(200).json(user)
})

// @desc    Update user
// @route   PUT /user
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
  const { user: userInfo } = req.body;
  if (!userInfo) {
    res.status(400)
	  throw new Error('User info should be provided');
  }

   if (!userInfo.id) {
    res.status(400)
    throw new Error("User's id should be provided");
  }

  const userId = userInfo.id;
  const existUser = await User.findById(userId);

  if (!existUser) {
    res.status(400)
    throw new Error("User's id not found on DB");
  }

  const updatedUser = await User.findByIdAndUpdate(userId, userInfo, {
    new: true
  });

  res.status(200).json(updatedUser)
})

// @desc    Create user
// @route   POST /user
// @access  Private
const createUser = asyncHandler(async (req, res) => {
  const { user } = req.body;
  console.log(user);
  if (!user) {
    res.status(400)
    throw new Error('User needed to create a new one')
  }

  const newUser = await User.create(user);
  res.status(200).json(newUser)
})

// @desc    Remove user
// @route   DELETE /user
// @access  Private
const removeUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400)
    throw new Error("User's id should be provided")
  }

  const user = await User.findById(id);

  if (!user) {
    res.status(400)
    throw new Error('User id should belong to an existing user');
  }

  await user.remove();

  res.status(200).json({ id })
})

module.exports = {
  getUser,
  updateUser,
  createUser,
  removeUser
}