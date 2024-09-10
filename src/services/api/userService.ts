// src/services/api/userService.ts
import apiClient from './apiClient';

export const getUser = async (id: string) => {
  try {
    const response = await apiClient.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
};

// Outras funções relacionadas a usuários
