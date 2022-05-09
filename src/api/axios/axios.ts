import axios from 'axios';
const URL = process.env.NEXT_PUBLIC_TEST_API;
const AXIOS = axios.create({
  baseURL: URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: false,
  timeout: 5000,
});

export default AXIOS;
