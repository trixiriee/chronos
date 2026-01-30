// server/routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming this path is correct for your User model
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Signup
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if user already exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({ name, email, password: hashedPassword });

    // Generate JWT token
    // Ensure process.env.JWT_SECRET is set in your Node.js environment (.env file)
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    // Respond with user details and token
    res.json({ user: { name: user.name, email: user.email }, token });
  } catch (err) {
    // Log the actual error for debugging on the server side
    console.error('Signup error:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Compare provided password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Generate JWT token
    // Ensure process.env.JWT_SECRET is set
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    // Respond with user details and token
    res.json({ user: { name: user.name, email: user.email }, token });
  } catch (err) {
    // Log the actual error for debugging on the server side
    console.error('Login error:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
