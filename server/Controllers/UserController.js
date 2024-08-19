const User = require("../Models/UserModel");

//Display User
const getAllUser = async (req, res) => {
  let Users;
  try {
    Users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!Users) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json({ Users });
};

//ADD USER TO DATABASE
const addUser = async (req, res, next) => {
  const { name, gmail, age, address } = req.body;
  let users;

  try {
    users = new User({ name, gmail, age, address });
    await users.save();
  } catch (err) {
    return res.status(400).json({ message: "error" });
  }
  if (!users) {
    console.log("Couldn't add user");
  }
  return res.status(200).json(users);
};
//Get user By ID
const getUserId = async (req, res) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(404).json({ message: "errorr" });
  }
  return res.status(200).json(user);
};
//Update User
const updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, gmail, age, address } = req.body;
  let user;
  try {
    user = await User.findByIdAndUpdate(id, {
      name: name,
      gmail: gmail,
      age: age,
      address: address,
    });
  } catch (err) {
    console.log(err, "Error updating user");
  }
  if (!user) {
    console.log( "User not found");
  }
  return res.status(200).json({ user });
};
//delete user
const deleteUser = async (req, res) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err, "User not found");
  }
  if (!user) {
    {
      console.log("User not found");
      }
      
  }
  console.log("User removed");
  return res.status(200).json({ user });
};




exports.getAllUsers = getAllUser;
exports.addUser = addUser;
exports.getUserId = getUserId;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
