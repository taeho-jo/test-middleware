import axios from 'axios';
import { useQuery } from 'react-query';

const URL = process.env.NEXT_PUBLIC_TEST_API;

const getProductsApi = async () => {
  return axios.get(`${URL}/products`);
  // try {
  //   const res = await axios.get(`${URL}/producs`);
  //   if (res.status === 200) {
  //     return res;
  //   } else {
  //     return;
  //   }
  // } catch (e) {
  //   console.log(e);
  //   return e;
  // }
};
const useGet = () => {
  return useQuery(['products'], getProductsApi);
};

export { getProductsApi, useGet };
