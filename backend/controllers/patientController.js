const Patient = require('../models/Patient');

// @desc    Get all patients
// @route   GET /api/patients
exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get single patient
// @route   GET /api/patients/:id
exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (patient) res.json(patient);
    else res.status(404).json({ message: 'Patient not found' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
