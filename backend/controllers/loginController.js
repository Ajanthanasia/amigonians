const User = require("../models/user");
const bcrypt = require("bcrypt");
const msgs = require("./../helpers/msgs");

exports.authLogin = async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    if (
      username === null ||
      username === "" ||
      password === null ||
      password === ""
    ) {
      res.json(msgs.successRespoonse(false, "failed", [], 422));
    } else {
      let user = await User.findOne({ where: { email: username } });
      if (user === null) {
        res.json({ status: false, message: "User not founds" });
      }
      let passwordValid = await bcrypt.compare(password, user.password);
      if (passwordValid === false) {
        res.status(400).json({ status: false, message: "Invalid Password" });
      } else {
        res.status(200).json({ status: true, message: "Logined", data: user });
      }
    }
    res.send("Whoops!");
  } catch (err) {
    console.log(err);
  }
};
