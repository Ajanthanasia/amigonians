const db = require("../db/database");
const User = require("../models/user");

exports.getTest = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.log(err);
  }
};
