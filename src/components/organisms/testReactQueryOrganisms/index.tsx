import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
// Components
import PageTitle from '../../atoms/PageTitle';
import ClipLoader from 'react-spinners/ClipLoader';
import FlexBox from '../../atoms/FlexBox';
// APIs
import { useGetProductsListApi } from '../../../api/productsApi';

const TestReactQueryOrganisms = () => {
  const router = useRouter();
  const { isLoading, data, isError, error } = useGetProductsListApi();

  const handleDetail = id => {
    router.push(`/note/querytest/${id}`);
  };

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
      {/*<Button2 size={'md'} type={'button'} onClick={refetch}>*/}
      {/*  버튼!!!!!!!!!*/}
      {/*</Button2>*/}
      {/*<Icon name="TEST" size={30} />*/}
      <FlexBox justify={'flex-start'} align={'flex-start'} wrap={'wrap'}>
        {data?.map(product => {
          return (
            <Fragment key={product.id}>
              <FlexBox
                height={'100%'}
                padding={'20px'}
                lg={4}
                md={12}
                shadow={'10px 10px 15px rgba(0, 0, 0, .2)'}
                onClick={() => handleDetail(product.id)}
              >
                <FlexBox align={'flex-start'} lg={12} md={12} height={'500px'} justify={'flex-start'} direction={'column'} padding={'10px'}>
                  <div>
                    <p style={{ height: '3em' }}> {product.title}</p>
                  </div>

                  <FlexBox height={'350px'}>
                    <img style={{ width: '50%' }} src={`${product.image}`} alt="product" />
                  </FlexBox>

                  <FlexBox padding={'10px 0'} justify={'flex-start'}>
                    {product.category}
                  </FlexBox>
                  <FlexBox justify={'flex-start'}>${product.price}</FlexBox>
                </FlexBox>
              </FlexBox>
            </Fragment>
          );
        })}
      </FlexBox>
    </>
  );
};

export default TestReactQueryOrganisms;
