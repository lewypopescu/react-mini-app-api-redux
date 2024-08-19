import axios from 'axios';

const BASE_URL = 'https://66bf2a1942533c4031454600.mockapi.io/';

const api = axios.create({
  baseURL: BASE_URL,
});

const resourcesApi = resource => {
  return {
    getAll: () => api.get(`/${resource}`),
    get: id => api.get(`/${resource}/${id}`),
    post: data => api.post(`/${resource}`, data),
    update: (id, data) => api.put(`/${resource}/${id}`, data),
    delete: id => api.delete(`/${resource}/${id}`),
  };
};

export const contactsApi = resourcesApi('contacts');
