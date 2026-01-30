// middleware/adminAuth.js

const User = require('../models/User');

const adminAuth = async (req, res, next) => {
  try {
    // req.user.id is attached by the regular authMiddleware
    const user = await User.findById(req.user.id);

    if (user.role !== 'admin') {
      // 403 Forbidden: You are logged in, but you don't have permission.
      return res.status(403).json({ msg: 'Admin resource. Access denied.' });
    }

    next(); // If user is an admin, proceed to the next function
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};

module.exports = adminAuth;