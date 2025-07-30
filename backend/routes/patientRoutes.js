const express = require('express');
const router = express.Router();
const { getPatients, getPatientById } = require('../controllers/patientController');
const { protect } = require('../middleware/authMiddleware');

// @route   GET /api/patients/
// @access  Protected
router.get('/', protect, getPatients);

// @route   GET /api/patients/:id
// @access  Protected
router.get('/:id', protect, getPatientById);

module.exports = router;
