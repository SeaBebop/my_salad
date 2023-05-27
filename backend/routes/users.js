const router = require("express").Router();
const User = require("../models/user");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");



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
    const token = jwt.sign({ username: user.email, isAdmin: user.isAdmin }, process.env.JWT_SECRET);
    res.json({ token });
})

module.exports = router