const express = require('express');
const auth = require('../middleware/auth');
const controller = require('../controllers/residentController');

const router = express.Router();



// Protected routes
router.get('/', auth, controller.getAllResidents);
router.post('/', auth, controller.createResident);
router.put('/:id', auth, controller.updateResident);
router.delete('/:id', auth, controller.deleteResident);

module.exports = router;
