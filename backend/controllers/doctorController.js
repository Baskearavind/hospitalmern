const Doctor = require('../models/Doctor');

// @desc    Get all doctors
// @route   GET /api/doctors
exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get single doctor
// @route   GET /api/doctors/:id
exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (doctor) res.json(doctor);
    else res.status(404).json({ message: 'Doctor not found' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
