const express = require('express');
const cors    = require('cors');
const db      = require('../models/db');
const Product = require('../models/product');
 
const app = express();
 
// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// ROUTES
// Root test route — confirms the API is reachable
app.get('/', (req, res) => res.send('API is running'));

// CREATE
// Body: { storeId, storeName, productId, productName, price }
app.post('/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL
// Endpoint for team's GetAll
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ONE
app.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    // Handles the "not found" case before sending a response
    if (!product) return res.status(404).json({ error: 'Product not found' });
 
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: 'Invalid product ID' });
  }
});
 
// UPDATE
app.put('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: 'Invalid product ID' });
  }
});

// DELETE
// Removes the product document from MongoDB Atlas
app.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    // Return a confirmation message
    res.json({ message: `Product "${product.productName}" deleted successfully` });
  } catch (err) {
    res.status(400).json({ error: 'Invalid product ID' });
  }
});
 
// START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);