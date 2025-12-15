const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ['admin','staff','resident'], default: 'resident' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
