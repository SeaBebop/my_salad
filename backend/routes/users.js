const router = require("express").Router();
const User = require("../models/user");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const {verifyToken, verifyTokenAuth, verifyTokenAndAdmin} = require('./verifyToken')



router.post("/register", async (req, res) => {
    try {
        const user = new User({
            email: req.body.email,
            password: req.body.password,
        })
         savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
      }
})

router.post("/login", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    const isPasswordValid = await user.comparePassword(req.body.password);

    if (!isPasswordValid || !user) {
        return res.status(401).json({ message: 'Invalid credintials' });
    }
    const token = jwt.sign({ id: user._id, username: user.email, name: user.name, isAdmin: user.isAdmin }, process.env.JWT_SECRET);
    res.json({ token });
})

router.put("/:id", verifyTokenAuth, async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
})

router.delete("/:id", verifyTokenAuth, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/find/all", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router