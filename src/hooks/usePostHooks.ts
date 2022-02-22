import { useMutation, useQuery } from 'react-query';
import AXIOS from '../api/axios/axios';

export const usePostHooks = (queryKey, path, data, config) => {
  const getFetch = async () => {
    return await AXIOS.post(path, data);
  };

  return useQuery(queryKey, getFetch, config);
};
