import axios from 'axios';
import { BASE_URL, TOKEN_AUTH } from '../constants';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: TOKEN_AUTH,
  },
});

export default instance;
