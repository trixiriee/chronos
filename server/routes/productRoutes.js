const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// --- Middleware ---
const authMiddleware = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');

// ✅ Robust Multer Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../client/public/uploads')) // Saves files to the 'uploads' folder in your project root
  },
  filename: function (req, file, cb) {
    // Creates a unique filename and preserves the original extension
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });


// --- Controllers ---
const {
  getAllProducts,
  getAllAdminProducts, // For the admin panel
  getNewArrivals,
  getBestsellers,
  searchProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  toggleProductVisibility
} = require('../controllers/productController');


// ===============================================
//           PUBLIC ROUTES
// ===============================================
router.get('/', getAllProducts);
router.get('/new', getNewArrivals);
router.get('/bestsellers', getBestsellers);
router.get('/search', searchProducts);

router.get('/all-admin', [authMiddleware, adminAuth], getAllAdminProducts);
router.get('/:id', getProductById);


// ===============================================
//           ADMIN ROUTES
// ===============================================

// ✅ New route for the admin panel to get ALL products

// POST a new product with an image
router.post(
  '/', 
  [authMiddleware, adminAuth, upload.single('image')], 
  createProduct
);

// PUT to update an existing product
router.put('/:id', [authMiddleware, adminAuth], updateProduct);

// DELETE a product
router.delete('/:id', [authMiddleware, adminAuth], deleteProduct);

// PATCH to toggle product visibility
router.patch('/:id/visibility', [authMiddleware, adminAuth], toggleProductVisibility);


module.exports = router;