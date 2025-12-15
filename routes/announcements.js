const express = require('express');
const auth = require('../middleware/auth');
const controller = require('../controllers/announcementController');

const router = express.Router();

// Public: view announcements
router.get('/', controller.getAnnouncements);

// Staff: create announcement
router.post('/', auth, controller.createAnnouncement);

module.exports = router;
