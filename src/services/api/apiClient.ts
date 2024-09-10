// src/services/api/apiClient.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // URL base da API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
