import { AXIOS_GET, AXIOS_POST, AXIOS_PUT } from '../../hooks/useAxios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

// Super Heroes List
export const useGetSuperHeroesListApi = () => {
  return useQuery(
    ['HeroList'],
    () => AXIOS_GET('http://localhost:4000/superheroes'),
    { staleTime: 1000000 },
  );
};

// Add Super Hero
export const usePostSuperHeroApi = () => {
  const queryClient = useQueryClient();
  const handleUpdate = async sendObject => {
    return await AXIOS_POST('http://localhost:4000/superheroes', sendObject);
  };
  // return handleUpdate;
  return useMutation(handleUpdate, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
