import { AXIOS_GET, AXIOS_PUT } from '../../hooks/useAxios';
import { useMutation, useQueries, useQuery, useQueryClient } from 'react-query';
// Types
import { ProductList } from './types';

const selectTeamList = localStorage.getItem('selectTeamList');
const teamSeq = JSON.parse(selectTeamList).teamSeq;

const defaultConfig = {
  enabled: status => status,
  onSuccess: data => console.log(data),
  onError: (e, method, apiName) => console.error(`AXIOS_${method} => ${apiName} API ::::`, e),
};

// Product List Api
export const useGetProductsListApi = () => {
  return useQuery<ProductList[], Error>(['AllProduct'], () => AXIOS_GET(`/admin/${teamSeq}/product/`), {
    cacheTime: 0,
    onError: e => defaultConfig.onError(e, 'GET', 'useGetProductsListApi'),
  });
};

// Product Detail Api
export const useGetProductDetailApi = id => {
  const queryClient = useQueryClient();
  return useQuery(['ProductDetail', id], () => AXIOS_GET(`/admin/product/${id}/`), {
    onError: e => defaultConfig.onError(e, 'GET', 'useGetProductDetailApi'),
    onSuccess: () => {
      queryClient.invalidateQueries(['AllProduct']);
    },
    // staleTime: 600000,
    // enabled: false,
  });
};

// Product Update Api
export const usePutUpdateProductApi = (id, sendObject) => {
  const handleUpdate = () => {
    return AXIOS_PUT('/products/1', sendObject);
  };

  return useMutation(handleUpdate, {});
};

// Axios.all 요청과 같이 여러 request를 한 번에 보낼 때 사용 : useQueries
export const useGetProductAndCategoryApi = () => {
  return useQueries([
    {
      queryKey: 'Product',
      queryFn: () => AXIOS_GET('/products/category/jewelery'),
      onSuccess: () => console.log('jewelery 성공'),
      onError: e => console.error(`AXIOS_GET => Product API :::: `, e),
    },
    {
      queryKey: 'Category',
      queryFn: () => AXIOS_GET('/products/categories'),
      onSuccess: () => console.log('categories 성공'),
      onError: e => console.error(`AXIOS_GET => Category API :::: `, e),
    },
  ]);
};
