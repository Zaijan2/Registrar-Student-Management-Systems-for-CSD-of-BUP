const mongoose = require('mongoose');

const ResidentSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  age: Number,
  address: String,
  contact: String,
  email: String,
  passwordHash: String
}, { timestamps: true });

module.exports = mongoose.model('Resident', ResidentSchema);
