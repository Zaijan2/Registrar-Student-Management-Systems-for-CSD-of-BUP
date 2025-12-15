const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  residentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Resident', required: true },
  requestType: { type: String, required: true },
  details: { type: String },
  status: { type: String, enum: ['Pending','Approved','Declined','Completed'], default: 'Pending' },
  updatedAt: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Request', RequestSchema);
