import axios from 'axios';

// const URL = process.env.NEXT_PUBLIC_LOCAL_API;
const URL = process.env.NEXT_PUBLIC_API;

const AXIOS = axios.create({
  baseURL: URL,
  withCredentials: false,
  timeout: 5000,
});

export default AXIOS;
