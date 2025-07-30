import React from 'react';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p>Welcome, <strong>{user?.name}</strong>!</p>
      <p>Your role: <strong>{user?.role}</strong></p>
    </div>
  );
};

export default Dashboard;
