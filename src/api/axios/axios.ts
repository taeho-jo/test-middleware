import axios from 'axios';
const URL = process.env.NEXT_PUBLIC_TEST_API;
const AXIOS = axios.create({
  baseURL: '/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  withCredentials: false,
  timeout: 5000,
});

export default AXIOS;
