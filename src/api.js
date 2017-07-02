import axios from 'axios';

export const fetchContest = contestId =>{
  return axios.get(`/api/contests/${contestId}`)
              .then(resp => resp.data)
};

export const addNewUser = (newUsername, newPassword, cellphone) => {
  return axios.post('/api/users/add', {newUsername, newPassword, cellphone})
              .then(resp => resp.data)
};

export const getAllUsers = () => {
  return axios.get('/api/users/get/all')
              .then(resp => resp.data)
};

export const checkLogin = (username, password) => {
  return axios.post('/api/users/check', {username, password})
              .then(resp => resp.data)
};

export const checkToken = (token) => {
  return axois.post('/api/checktoken', {token})
              .then(resp => resp.data)
};
