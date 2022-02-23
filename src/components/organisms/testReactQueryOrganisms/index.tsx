import React, { Fragment, useEffect } from 'react';
import PageTitle from '../../atoms/PageTitle';
import Icon from '../../atoms/Icon';
import ClipLoader from 'react-spinners/ClipLoader';
import FlexBox from '../../atoms/FlexBox';
import { useGetHooks, useMultipleGetHooks } from '../../../hooks/useGetHooks';
import { usePostHooks } from '../../../hooks/usePostHooks';
import Button from '../../atoms/Button';

const TestReactQueryOrganisms = () => {
  const data = useGetHooks(['products'], '/products', {
    onError: e => {
      console.error('ProductAPI::::::::: ', e);
    },
  });
  // const data2 = useGetHooks(['category'], '/products/categories', {});
  //
  // const dataAll = useMultipleGetHooks(
  //   ['products', 'category'],
  //   ['/products', '/products/categories'],
  //   [{}, {}],
  // );
  //
  // console.log('개별로 각각 호출 data ::: ', data);
  // console.log('개별로 각각 호출 data2 ::: ', data2);
  // console.log('전체로 한번에 호출 dataAll::::: ', dataAll);

  // console.log(data2, '16847');
  // const {
  //   data: dataLogin,
  //   isError: isErrorLogin,
  //   error: errorLogin,
  //   refetch,
  // } = usePostHooks(
  //   ['login'],
  //   '/auth/login',
  //   { username: 'mor_2314', password: '83r5^_' },
  //   { enabled: false },
  // );
  //
  // useEffect(() => {
  //   if (dataLogin) {
  //     alert(dataLogin.data.token);
  //   }
  // }, [dataLogin]);

  if (data.isLoading) {
    return (
      <>
        <FlexBox>
          <ClipLoader color={'red'} loading={data.isLoading} size={150} />
        </FlexBox>
      </>
    );
  }
  if (data.isError) {
    return <span>Error: {data.error['message']}</span>;
  }

  return (
    <>
      <PageTitle title={'React Qeury Test Page'} />
      {/*<Button size={'md'} type={'button'} onClick={refetch}>*/}
      {/*  버튼!!!!!!!!!*/}
      {/*</Button>*/}
      <Icon name="TEST" size={30} />
      <FlexBox direction={'column'}>
        {data?.data?.data?.map(product => {
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
