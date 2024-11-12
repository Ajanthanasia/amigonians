const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users", userController.getTest);
router.post("/user", userController.postUser);

module.exports = router;
