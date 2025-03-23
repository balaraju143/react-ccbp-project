import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

export const getUsersAPI = async () => {
  const response = await api.get('/users');
  return response;
};

export const getActivitiesAPI = async () => {
  const response = await api.get('/activities');
  return response;
};

export const getRewardsAPI = async () => {
  const response = await api.get('/rewards');
  return response;
};
