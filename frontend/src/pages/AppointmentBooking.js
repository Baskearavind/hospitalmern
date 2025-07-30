import React, { useState, useEffect } from 'react';

const AppointmentBooking = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({ doctorId: '', date: '', time: '', reason: '' });

  useEffect(() => {
    fetch('/api/doctors', {
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .then(res => res.json())
      .then(setDoctors);
  }, [user]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ ...form, patientId: user._id }),
    });
    const data = await res.json();
    if (res.ok) alert('Appointment booked!');
    else alert(data.message || 'Booking failed');
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Book Appointment</h2>
      <form onSubmit={submitHandler} className="space-y-4">
        <select name="doctorId" onChange={handleChange} className="w-full p-2 border" required>
          <option value="">Select Doctor</option>
          {doctors.map((doc) => (
            <option key={doc._id} value={doc._id}>
              {doc.name} - {doc.specialization}
            </option>
          ))}
        </select>
        <input type="date" name="date" onChange={handleChange} className="w-full p-2 border" required />
        <input type="time" name="time" onChange={handleChange} className="w-full p-2 border" required />
        <input type="text" name="reason" placeholder="Reason for visit" onChange={handleChange} className="w-full p-2 border" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Book Now</button>
      </form>
    </div>
  );
};

export default AppointmentBooking;
