const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');
const bcrypt = require('bcryptjs');

// GET: Profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// PUT: Update Profile
router.put('/update', authMiddleware, async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const updates = { name, email, phone };
    const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true }).select('-password');
    res.json({ msg: 'Profile updated', user });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// PUT: Change Password
router.put('/change-password', authMiddleware, async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  try {
    const user = await User.findById(req.user.id);
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Incorrect old password' });

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.json({ msg: 'Password changed successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// POST: Add Address
router.post('/address', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.addresses.push(req.body.address);
    await user.save();
    res.json({ addresses: user.addresses });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// DELETE: Remove Address by Index
router.delete('/address/:index', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.addresses.splice(req.params.index, 1);
    await user.save();
    res.json({ addresses: user.addresses });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
