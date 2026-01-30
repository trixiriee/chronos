const Product = require('../models/Product');

// GET all products for regular users (only visible products)
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ isVisible: true });
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};

// ✅ GET all products for the admin panel (including hidden ones)
exports.getAllAdminProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // Fetches all products without filters
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};


// GET new arrivals
exports.getNewArrivals = async (req, res) => {
  try {
    const products = await Product.find({ isNewArrival: true, isVisible: true }).sort({ createdAt: -1 }).limit(10);
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};

// GET bestsellers
exports.getBestsellers = async (req, res) => {
  try {
    const products = await Product.find({ isBestseller: true, isVisible: true }).limit(10);
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};

// GET products by search query
exports.searchProducts = async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ msg: 'Query is required' });
    }
    const results = await Product.find({
      name: { $regex: query, $options: 'i' },
      isVisible: true
    });
    res.json(results);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};

// GET a single product by its ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product || !product.isVisible) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(500).json({ error: 'Server Error' });
  }
};

// ✅ POST a new product (Admin only) - Fully Corrected
exports.createProduct = async (req, res) => {
  const { name, brand, price, currency, description, categories, gender, features, isNewArrival, isBestseller } = req.body;
  
  if (!req.file) {
    return res.status(400).json({ msg: 'Product image is required.' });
  }
  
  // Construct the correct web-accessible URL path
  const imagePath = `/uploads/${req.file.filename}`;

  try {
    if (!name || !price || !description) {
      return res.status(400).json({ msg: 'Please provide name, price, and description' });
    }
    
    const newProduct = new Product({
      name,
      brand,
      price,
      currency,
      description,
      // Convert comma-separated strings from the form into arrays for the database
      categories: categories ? categories.split(',').map(item => item.trim()) : [],
      gender,
      features: features ? features.split(',').map(item => item.trim()) : [],
      images: [imagePath], // Save the correct image path
      isNewArrival: isNewArrival === 'true', // Convert string "true" to boolean
      isBestseller: isBestseller === 'true', // Convert string "true" to boolean
      dateAdded: new Date()
    });

    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

// PUT (update) a product by ID (Admin only)
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// DELETE a product by ID (Admin only)
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }
    await product.deleteOne();
    res.json({ msg: 'Product removed' });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// PATCH a product's visibility (Admin only)
exports.toggleProductVisibility = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    product.isVisible = !product.isVisible;
    await product.save();
    
    res.json({ isVisible: product.isVisible });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};