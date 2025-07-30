import React, { useState } from 'react';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'patient' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      alert('Registration successful!');
    } else {
      alert(data.message || 'Registration failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={submitHandler} className="space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border" required />
        <input name="password" value={form.password} onChange={handleChange} type="password" placeholder="Password" className="w-full p-2 border" required />
        <select name="role" value={form.role} onChange={handleChange} className="w-full p-2 border">
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
