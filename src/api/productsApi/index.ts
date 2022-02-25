import { AXIOS_GET } from '../../hooks/useAxios';
import { useQueries, useQuery } from 'react-query';
// Types
import { ProductList } from './types';

const defaultConfig = {
  enabled: status => status,
  onSuccess: data => console.log(data),
  onError: (e, method, apiName) =>
    console.error(`AXIOS_${method} => ${apiName} API ::::`, e),
};

// Product List Api
export const useGetProductsListApi = () => {
  return useQuery<ProductList[], Error>(
    ['AllProduct'],
    () => AXIOS_GET('/products'),
    {
      enabled: defaultConfig.enabled(true),
      onError: e => defaultConfig.onError(e, 'GET', 'getProductsListApi'),
    },
  );
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
