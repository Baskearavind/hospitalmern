const mongoose = require('mongoose');

const patientSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // link to User
      required: true,
    },
    age: Number,
    gender: String,
    contactNumber: String,
    address: String,
    medicalHistory: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Patient', patientSchema);
