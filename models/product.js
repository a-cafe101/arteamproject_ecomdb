const mongoose = require('mongoose');
 
// Define the product schema
const productSchema = new mongoose.Schema({
    // Identifier for the store that owns this product
    storeId: {
      type: String,
      required: true,
      trim: true
    },
 
    // Name of the store
    storeName: {
      type: String,
      required: true,
      trim: true
    },
 
    // Unique identifier for this product
    productId: {
      type: String,
      required: true,
      unique: true, // Prevents duplicate product IDs across collection
      trim: true
    },
 
    // Display name for customers
    productName: {
      type: String,
      required: true,
      trim: true
    },
 
    // Price in dollars; non-negative number
    price: {
      type: Number,
      required: true,
      min: 0
    }
  },
  {
    // Adds createdAt and updatedAt fields automatically to every document
    timestamps: true
  }
);
 
// Exports model; allows server routes to create, read, update, delete products in MongoDB
module.exports = mongoose.model('Product', productSchema);