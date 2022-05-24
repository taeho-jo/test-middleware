import { useDispatch } from 'react-redux';
import { AXIOS_GET } from '../../hooks/useAxios';
import { useQuery } from 'react-query';
import { ProductList } from '../productsApi/types';
import { setUserInfo } from '../../store/reducers/userReducer';

const defaultConfig = {
  enabled: status => status,
  onSuccess: data => console.log(data),
  onError: (e, method, apiName) => console.error(`AXIOS_${method} => ${apiName} API ::::`, e),
};

export const useGetUserInfoApi = async () => {
  // return useQuery<any, Error>(['UserInfo'], () => AXIOS_GET('/user/info'), {
  //   cacheTime: 0,
  //   enabled: false,
  //   onError: e => defaultConfig.onError(e, 'GET', 'useGetUserInfoApi'),
  // });
  // const dispatch = useDispatch();
  const res = await AXIOS_GET('/user/info');
  return res;
  // console.log(res.data, res.status);
  // if (res.code === '200') {
  //   dispatch(setUserInfo(res.data));
  // }
};
