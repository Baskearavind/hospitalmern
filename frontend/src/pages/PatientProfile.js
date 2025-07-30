import React, { useEffect, useState } from 'react';

const PatientProfile = () => {
  const [profile, setProfile] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch(`/api/patients/${user._id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await res.json();
      setProfile(data);
    };

    fetchProfile();
  }, [user]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Patient Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Age:</strong> {profile.age || 'N/A'}</p>
      <p><strong>Gender:</strong> {profile.gender || 'N/A'}</p>
    </div>
  );
};

export default PatientProfile;
