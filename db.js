const mongoose = require('mongoose');

const connectDB = async (mongoUri) => {
  try {
    await mongoose.connect(mongoUri); // No options needed
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
