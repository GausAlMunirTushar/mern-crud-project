const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');

// Create Product Route
router.post('/createProduct', productController.createProduct);

// Read Product Route
router.get('/readProduct', productController.readProduct);

// Update Product Route
router.post('/updateProduct/:id', productController.updateProduct);

// Delete Product Route
router.delete('/deleteProduct/:id', productController.deleteProduct);



module.exports = router;