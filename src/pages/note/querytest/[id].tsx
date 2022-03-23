import React from 'react';
// Components
import FlexBox from '../../../components/atoms/FlexBox';
import ClipLoader from 'react-spinners/ClipLoader';
import Button from '../../../components/atoms/Button2';
// APIs
import {
  useGetProductDetailApi,
  usePutUpdateProductApi,
} from '../../../api/productsApi';
// Types
import { GetServerSideProps } from 'next';
interface PropsType {
  id: string;
}

const TestReactQueryDetail = ({ id }: PropsType) => {
  // update API
  const updateData = usePutUpdateProductApi(1, {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
  });
  const updateHandler = () => {
    updateData.mutate();
  };
  // detail API
  const { isLoading, isError, data, error } = useGetProductDetailApi(id);

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
      {updateData.isLoading ? (
        <div style={{ zIndex: 999 }}>
          <div>asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf</div>
          <FlexBox>
            <ClipLoader
              color={'blue'}
              loading={updateData.isLoading}
              size={150}
            />
          </FlexBox>
        </div>
      ) : null}
      <Button size={'lg'} onClick={updateHandler}>
        Update
      </Button>
      <FlexBox direction={'column'}>
        <h1>{data?.title}</h1>
        <div>{data?.price}</div>
        <div>{data?.description}</div>
        <div>
          <img style={{ width: '50%' }} src={`${data?.image}`} alt={'상품'} />
        </div>
        <div>{data?.category}</div>
        <div>{data?.rating.rate}</div>
        <div>{data?.rating.count}</div>
      </FlexBox>
    </>
  );
};

export default TestReactQueryDetail;

export const getServerSideProps: GetServerSideProps = async context => {
  const { query } = context;
  const { id } = query;
  return {
    props: {
      id,
    },
  };
};
