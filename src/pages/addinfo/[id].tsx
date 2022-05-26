import React from 'react';
import { GetServerSideProps } from 'next';
// import AddInfoPopup from '../../components/organisms/AddInfoPopup';

interface PropsType {
  id: string;
}

const AddInfo = ({ id }: PropsType) => {
  return <div>asdf</div>;
};

export default AddInfo;

export const getServerSideProps: GetServerSideProps = async context => {
  const { query } = context;
  const { id } = query;
  return {
    props: {
      id,
    },
  };
};
