// src/services/userService.js

const User = require("../models/User");
const bcrypt = require("bcryptjs");

/**
 * Get all users
 */
const getAllUsers = async () => {
  return await User.find().select("-password");
};

/**
 * Get user by ID
 */
const getUserById = async (id) => {
  return await User.findById(id).select("-password");
};

/**
 * Create new user
 */
const createUser = async (userData) => {
  const { name, email, password, role } = userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    role,
  });

  return await user.save();
};

/**
 * Update user
 */
const updateUser = async (id, data) => {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }

  return await User.findByIdAndUpdate(id, data, { new: true }).select("-password");
};

/**
 * Delete user
 */
const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

/**
 * Find user by email (for login)
 */
const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByEmail,
};