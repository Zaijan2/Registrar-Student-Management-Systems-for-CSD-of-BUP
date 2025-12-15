const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
  residentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Resident', required: true },
  certType: { type: String, required: true },
  purpose: { type: String, required: true },
  issuedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  issuedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Certificate', CertificateSchema);
