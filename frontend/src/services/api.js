const API_BASE = '/api';

export const fetchWithAuth = async (url, method = 'GET', body = null, token) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...(body && { body: JSON.stringify(body) }),
  };

  const response = await fetch(`${API_BASE}${url}`, options);
  const data = await response.json();

  if (!response.ok) throw new Error(data.message || 'Request failed');
  return data;
};
