// One-time script to insert 5 products into MongoDB Atlas
// Run with:  node server/seed.js

// Establish Mongoose connection
require('../models/db');            
const Product = require('../models/product'); // to import Product model
 
// Five products for "Automotive" store
const sampleProducts = [
  {
    storeId: 'STORE-001',
    storeName: 'Canadian Tire',
    productId: 'PROD-001',
    productName: 'MotoMaster Premixed Coolant',
    price: 20.99
  },
  {
    storeId: 'STORE-001',
    storeName: 'Canadian Tire',
    productId: 'PROD-002',
    productName: 'Prestone Synthetic Brake Fluid',
    price: 19.99
  },
  {
    storeId: 'STORE-001',
    storeName: 'Canadian Tire',
    productId: 'PROD-003',
    productName: 'Rotella Synthetic 5W40 Diesel Oil',
    price: 149.99
  },
  {
    storeId: 'STORE-001',
    storeName: 'Canadian Tire',
    productId: 'PROD-004',
    productName: 'Anti-Wear Hydraulic Oil',
    price: 94.99
  },
  {
    storeId: 'STORE-002',
    storeName: 'Walmart',
    productId: 'PROD-105',
    productName: 'Mobil 1 Motor Oil',
    price: 37.99
  }
];
 
// Async function to insert all products then close the connection
async function seedProducts() {
  try {
    // Insert all 5 products in one operation
    const inserted = await Product.insertMany(sampleProducts);
    console.log(`Successfully seeded ${inserted.length} products into MongoDB Atlas:`);
 
    // Log each inserted product for verification
    inserted.forEach(p =>
      console.log(`   [${p.productId}] ${p.productName} — $${p.price}`)
    );
  } catch (err) {
    // Possible duplicate productId
    console.error('Seed error:', err.message);
  } finally {
    process.exit(0);
  }
}
 
// Wait for the DB connection to open before seeding
setTimeout(seedProducts, 1500);