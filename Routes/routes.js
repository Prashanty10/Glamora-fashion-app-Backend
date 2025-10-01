const express = require("express");
const router = express.Router();
const User = require("../Models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


router.post("/register", async (req, res) => {

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
   
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(409).json({ message: "Username already taken" });
    }

    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Registered successfully" });
  } catch (err) {
    console.error("Register error:", err);
    if (err.code === 11000 && err.keyPattern && err.keyPattern.username) {
      return res.status(409).json({ message: "Username already taken" });
    }
    res.status(500).json({ message: "Server error" });
  }
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not registered" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).json({ message: "Wrong password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/verify-token", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.json({ valid: false });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ valid: true, userId: decoded.id });
  } catch (err) {
    res.json({ valid: false });
  }
});

module.exports = router;
