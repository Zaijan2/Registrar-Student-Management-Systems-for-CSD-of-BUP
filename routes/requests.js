const express = require('express');
const auth = require('../middleware/auth');
const controller = require('../controllers/requestController');

const router = express.Router();

// Residents create requests (no auth)
router.post('/', controller.createRequest);

// Staff view all requests
router.get('/', auth, controller.getRequests);

// Staff update request status
router.put('/:id/status', auth, controller.updateRequestStatus);

module.exports = router;
