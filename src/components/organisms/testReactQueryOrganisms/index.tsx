import React, { Fragment } from 'react';
import PageTitle from '../../atoms/PageTitle';
import Icon from '../../atoms/Icon';
import ClipLoader from 'react-spinners/ClipLoader';
import FlexBox from '../../atoms/FlexBox';
import { useGetProductsListApi } from '../../../api/productsApi';
import Button from '../../atoms/Button';

const TestReactQueryOrganisms = () => {
  const { isLoading, data, isError, error } = useGetProductsListApi();

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
      {/*<Button size={'md'} type={'button'} onClick={refetch}>*/}
      {/*  버튼!!!!!!!!!*/}
      {/*</Button>*/}
      {/*<Icon name="TEST" size={30} />*/}
      <FlexBox
        backgroundColor={'pink'}
        justify={'flex-start'}
        align={'flex-start'}
        wrap={'wrap'}
      >
        {data?.map(product => {
          return (
            <Fragment key={product.id}>
              <FlexBox backgroundColor={'orange'} padding={'5px'} lg={4} md={6}>
                <FlexBox
                  align={'flex-start'}
                  border={'1px solid red'}
                  lg={12}
                  md={12}
                >
                  <span>{product.title}</span>
                </FlexBox>
              </FlexBox>
              {/*<FlexBox md={3}>1</FlexBox>*/}
              {/*<FlexBox md={3}>1</FlexBox>*/}
              {/*<FlexBox md={3}>1</FlexBox>*/}
              {/*<FlexBox md={3}>1</FlexBox>*/}
              {/*<FlexBox md={3}>1</FlexBox>*/}
              {/*<FlexBox md={3}>1</FlexBox>*/}
              {/*<FlexBox md={3}>1</FlexBox>*/}
            </Fragment>
          );
        })}
      </FlexBox>
    </>
  );
};

export default TestReactQueryOrganisms;
