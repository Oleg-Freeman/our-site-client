import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api/v1';
const httpClient = axios.create();

httpClient.interceptors.request.use((request) => {
  request.headers.Authorization =  `Bearer ${localStorage.getItem('token')}`;
  request.baseURL = `${ API_BASE_URL }`;

  return request;
}, (error) => Promise.reject(error));
httpClient.interceptors.response.use((response) => response, (error) => {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('token');
    window.location.reload();
  }
  return Promise.reject(error);
});

export { httpClient };
export const httpClientPublic = axios.create({
  baseURL: API_BASE_URL,
});
