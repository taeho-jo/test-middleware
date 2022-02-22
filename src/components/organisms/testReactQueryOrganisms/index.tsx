import React, { Fragment, useEffect } from 'react';
import PageTitle from '../../atoms/PageTitle';
import Icon from '../../atoms/Icon';
import ClipLoader from 'react-spinners/ClipLoader';
import FlexBox from '../../atoms/FlexBox';
import { useGetHooks } from '../../../hooks/useGetHooks';
import { usePostHooks } from '../../../hooks/usePostHooks';
import Button from '../../atoms/Button';

const TestReactQueryOrganisms = () => {
  const { isLoading, isError, error, data } = useGetHooks(
    ['products'],
    '/products',
    {},
  );

  const {
    isLoading: isLoadingCategory,
    isError: isErrorCategory,
    error: errorCategory,
    data: dataCategory,
  } = useGetHooks(['category'], '/products/categories', { enabled: false });

  const {
    data: dataLogin,
    isError: isErrorLogin,
    error: errorLogin,
    refetch,
  } = usePostHooks(
    ['login'],
    '/auth/login',
    { username: 'mor_2314', password: '83r5^_' },
    { enabled: false },
  );

  useEffect(() => {
    if (dataLogin) {
      alert(dataLogin.data.token);
    }
  }, [dataLogin]);

  if (isLoading) {
    return (
      <>
        <FlexBox>
          <ClipLoader color={'red'} loading={isLoading} size={150} />
        </FlexBox>
      </>
    );
  }
  if (isError) {
    return <span>Error: {error['message']}</span>;
  }

  return (
    <>
      <PageTitle title={'React Qeury Test Page'} />
      <Button size={'md'} type={'button'} onClick={refetch}>
        버튼!!!!!!!!!
      </Button>
      <Icon name="TEST" size={30} />
      <FlexBox direction={'column'}>
        {data?.data.map(product => {
          return (
            <Fragment key={product.id}>
              <div>{product.title}</div>
            </Fragment>
          );
        })}
      </FlexBox>
    </>
  );
};

export default TestReactQueryOrganisms;
