import axios from 'axios';

export const fetchContest = contestId =>{
  return axios.get(`/api/contests/${contestId}`)
              .then(resp => resp.data)
};

export const addNewUser = (newUsername, newPassword, cellphone) => {
  return axios.post('/api/users/add', {newUsername, newPassword, cellphone})
              .then(resp => resp.data)
};
