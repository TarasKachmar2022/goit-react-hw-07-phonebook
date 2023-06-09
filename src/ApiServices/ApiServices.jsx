import axios from 'axios';

axios.defaults.baseURL = 'https://6480e135f061e6ec4d49fb71.mockapi.io/api';

const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

const postContact = async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};

const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};

const APIs = {
  getContacts,
  postContact,
  deleteContact,
};

export default APIs;
