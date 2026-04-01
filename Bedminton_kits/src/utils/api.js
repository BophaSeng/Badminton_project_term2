const BASE_URL = 'http://localhost:3001';

/**
 * Basic API wrapper for JSON-server
 */
export const api = {
  get: async (endpoint) => {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) throw new Error(`API GET failed: ${response.statusText}`);
    return response.json();
  },

  post: async (endpoint, data) => {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`API POST failed: ${response.statusText}`);
    return response.json();
  },

  put: async (endpoint, data) => {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`API PUT failed: ${response.statusText}`);
    return response.json();
  },

  patch: async (endpoint, data) => {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`API PATCH failed: ${response.statusText}`);
    return response.json();
  },

  delete: async (endpoint) => {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error(`API DELETE failed: ${response.statusText}`);
    return response.json();
  },
};
