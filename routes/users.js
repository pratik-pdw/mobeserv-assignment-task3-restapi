const express = require("express");

const router = express.Router();

const User = require("../models/User");

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      throw new Error();
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.post("/users", async (req, res) => {
  try {
    console.log(req.body);
    const user = new User(req.body);
    await user.save();
    res.status(201).send({ user, message: "User Created successfully" });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
