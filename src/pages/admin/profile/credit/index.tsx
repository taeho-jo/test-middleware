import React from 'react';
import { useQuery } from 'react-query';
import { fetchCreditListApi } from '../../../../api/userApi';
import PageTitle from '../../../../components/atoms/PageTitle';
import CreditList from '../../../../components/template/CreditList';
import { css } from '@emotion/react';

const Credit = () => {
  const { data, isLoading } = useQuery('fetchCreditList', fetchCreditListApi);

  console.log(data, '1!');
  return (
    <>
      <PageTitle title={'크레딧 내역'} />
      <div
        css={css`
          margin-top: 48px;
        `}
      >
        <CreditList isLoading={isLoading} data={data?.data?.list} />
      </div>
    </>
  );
};

export default Credit;
