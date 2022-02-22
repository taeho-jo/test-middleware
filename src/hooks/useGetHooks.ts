import { useQuery } from 'react-query';
import AXIOS from '../api/axios/axios';

export const useGetHooks = (queryKey, path, config) => {
  const getFetch = async () => {
    return await AXIOS.get(path);
  };

  return useQuery(queryKey, getFetch, config);
};
