import React, { Fragment } from 'react';
import PageTitle from '../../atoms/PageTitle';
import SuperHeroFormBox from '../../molecules/TestFormBox/SuperHeroFormBox';
import {
  useGetSuperHeroesListApi,
  usePostSuperHeroApi,
} from '../../../api/superHeroApi';
import FlexBox from '../../atoms/FlexBox';
import ClipLoader from 'react-spinners/ClipLoader';
import Button from '../../atoms/Button2';
import { useMutation } from 'react-query';
import { AXIOS_POST } from '../../../hooks/useAxios';

const TestFormOrganisms = () => {
  const { data, isLoading, isError, error, refetch } =
    useGetSuperHeroesListApi();

  const { mutate } = usePostSuperHeroApi();
  const insertSuperHero = heroData => {
    const sendObject = {
      id: data.length + 1,
      name: heroData.superHero,
    };

    mutate(sendObject);

    // mutate(sendObject);
    console.log(sendObject);
    console.log(data, '!@#!@#!@#!@#!');
  };

  if (isLoading) {
    return (
      <>
        <FlexBox>
          <ClipLoader color={'pink'} loading={isLoading} size={50} />
        </FlexBox>
      </>
    );
  }
  if (isError) {
    return <span>Error: {error['message']}</span>;
  }

  return (
    <>
      <PageTitle title={'Form Test Page'} />
      <SuperHeroFormBox insertSuperHero={insertSuperHero} />
      <ul>
        {data?.map(item => {
          return (
            <Fragment key={item.id}>
              <li>{item.name}</li>
            </Fragment>
          );
        })}
      </ul>
      <Button size={'lg'} onClick={refetch}>
        reFetch
      </Button>
    </>
  );
};

export default TestFormOrganisms;
