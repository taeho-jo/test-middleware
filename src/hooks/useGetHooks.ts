import { useQuery } from 'react-query';
import AXIOS from '../api/axios/axios';

export const useGetHooks = (queryKey, path, config) => {
  const getFetch = async () => {
    return await AXIOS.get(path);
  };

  return useQuery(queryKey, getFetch, config);
};

export const useMultipleGetHooks = (queryKey, path, config) => {
  const getMultipleFetch = async url => {
    return await AXIOS.get(url);
  };

  const resultArr = {};
  for (let i = 0; i < queryKey.length; i++) {
    const res = useQuery(
      [queryKey[i]],
      () => getMultipleFetch(path[i]),
      config[i],
    );
    resultArr[queryKey[i]] = res;
  }

  return resultArr;
};
