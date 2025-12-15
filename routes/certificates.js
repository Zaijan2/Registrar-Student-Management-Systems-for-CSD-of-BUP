const express = require('express');
const auth = require('../middleware/auth');
const controller = require('../controllers/certificateController');

const router = express.Router();

// Issue certificate (staff only)
router.post('/issue', auth, controller.issueCertificate);

// View all certificates (staff only)
router.get('/', auth, controller.getCertificates);

module.exports = router;
