const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');

// register (only for initial setup)
router.post('/register', controller.register);

// login
router.post('/login', controller.login);

module.exports = router;
