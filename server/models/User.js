const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// A more structured schema for addresses
const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true, default: 'India' }
}, { _id: false }); // _id: false prevents Mongoose from creating an _id for subdocuments

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true // Removes whitespace from both ends
  },
  email: {
    type: String,
    required: true,
    unique: true, // Creates a unique index to prevent duplicate emails
    lowercase: true, // Converts email to lowercase before saving
    trim: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address'] // Basic email format validation
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    trim: true,
    // Optional: Basic validation for a 10-digit Indian number
    match: [/^[6-9]\d{9}$/, 'Please enter a valid 10-digit phone number']
  },
  addresses: [addressSchema], // Use the structured address schema
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, {
  // Use Mongoose's built-in timestamps option
  timestamps: true // Automatically adds createdAt and updatedAt fields
});


// --- Password Hashing Middleware ---
// Before saving a user, hash their password if it has been modified
userSchema.pre('save', async function(next) {
  // 'this' refers to the document being saved
  if (!this.isModified('password')) {
    return next(); // If the password hasn't changed, do nothing
  }
  
  try {
    const salt = await bcrypt.genSalt(10); // Generate a salt
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('User', userSchema);