import axios from 'axios';

// const URL = process.env.NEXT_PUBLIC_LOCAL_API;
const URL = process.env.NEXT_PUBLIC_API;
// const URL = 'http://172.30.1.13:8080/api/v1'

const AXIOS = axios.create({
  baseURL: URL,
  withCredentials: false,
  timeout: 5000,
});

export default AXIOS;
