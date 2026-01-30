const mongoose = require('mongoose');
const { nanoid } = require('nanoid'); 

const productSchema = new mongoose.Schema({
   id: {
    type: String,
    required: true,
    default: () => nanoid(8), // Automatically generates an 8-character ID
    unique: true
  },
  name: String,
  brand: String,
  price: Number,
  currency: String,
  categories: [String],
  gender: String,
  description: String,
  features: [String],
  images: [String],
  isNewArrival: Boolean,
  dateAdded: Date,
  isBestseller: Boolean,
  salesCount: Number,
  isVisible: { type: Boolean, default: true }
});

module.exports = mongoose.model('Product', productSchema);
