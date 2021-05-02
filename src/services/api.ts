import axios from 'axios';

const api = axios.create({
  baseURL: 'https://myappnames.herokuapp.com/',
});

export default api;
