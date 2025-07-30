const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    experience: Number,
    qualifications: String,
    availableDays: [String], // e.g. ['Monday', 'Wednesday']
    availableTime: String,   // e.g. '10:00 AM - 4:00 PM'
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Doctor', doctorSchema);
