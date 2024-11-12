const db = require("../db/database");
const User = require("../models/user");

exports.getTest = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ data: users });
  } catch (err) {
    console.log(err);
  }
};

exports.postUser = async (req, res) => {
  try {
    let userId = req.body.id;
    let user = await User.findOne({
      where: {
        id: userId,
      },
    });
    res.json({ id: userId, data: user });
  } catch (err) {
    console.log(err);
  }
};
