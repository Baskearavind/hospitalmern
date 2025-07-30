const Appointment = require('../models/Appointment');

// @desc    Create appointment
// @route   POST /api/appointments
exports.createAppointment = async (req, res) => {
  const { patientId, doctorId, date, time, reason } = req.body;

  try {
    const appointment = await Appointment.create({
      patient: patientId,
      doctor: doctorId,
      date,
      time,
      reason,
    });

    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create appointment' });
  }
};

// @desc    Get all appointments
// @route   GET /api/appointments
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate('patient', 'name')
      .populate('doctor', 'name specialization');

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
