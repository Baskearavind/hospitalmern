const express = require('express');
const router = express.Router();
const { getDoctors, getDoctorById } = require('../controllers/doctorController');
const { protect } = require('../middleware/authMiddleware');

// @route   GET /api/doctors/
// @access  Protected
router.get('/', protect, getDoctors);

// @route   GET /api/doctors/:id
// @access  Protected
router.get('/:id', protect, getDoctorById);

module.exports = router;
