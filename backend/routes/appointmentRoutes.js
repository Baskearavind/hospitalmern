const express = require('express');
const router = express.Router();
const { createAppointment, getAppointments } = require('../controllers/appointmentController');
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/appointments/
// @access  Protected
router.post('/', protect, createAppointment);

// @route   GET /api/appointments/
// @access  Protected
router.get('/', protect, getAppointments);

module.exports = router;
