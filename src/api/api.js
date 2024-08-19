import axios from 'axios';

const BASE_URL = 'https://66bf2a1942533c4031454600.mockapi.io/';

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: BASE_URL,
});

// Create a resource API handler
const resourcesApi = resource => {
  return {
    getAll: () => api.get(`/${resource}`),
    get: id => api.get(`/${resource}/${id}`),
    post: data => api.post(`/${resource}`, data),
    update: (id, data) => api.put(`/${resource}/${id}`, data),
    delete: id => api.delete(`/${resource}/${id}`),
  };
};

// Define your contacts API
export const contactsApi = resourcesApi('contacts');
