const mongoose = require('mongoose');
require('dotenv').config();
 
// Use the Atlas URI stored in .env or defaults to local db
const dbURI = process.env.DB_URI || 'mongodb://localhost/ecommerceDB';
// Opens the connection
mongoose.connect(dbURI);
 
// Fires once the connection is successfully established
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ' + dbURI);
});
 
// Fires if an error occurs on the connection
mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
});
 
// Fires when the connection is closed
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});
 
// Closes the connection gracefully when the Node process is interrupted
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});

// Exporting allows other files like models and server code to use same instance
module.exports = mongoose;