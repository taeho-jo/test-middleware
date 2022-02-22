import axios from 'axios';
const URL = process.env.NEXT_PUBLIC_TEST_API;
const AXIOS = axios.create({
  baseURL: URL,
  headers: { 'X-Custom-Header': 'foobar' },
  withCredentials: false,
  timeout: 5000,
});

export default AXIOS;
