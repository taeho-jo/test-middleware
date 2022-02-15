import React from 'react';
import { css } from '@emotion/react';
import Button from '../../components/atoms/Button';
import { useRouter } from 'next/router';

const Test = () => {
  const router = useRouter();
  return (
    <>
      <div css={aaa}>Test page 이동</div>
      <button type={'button'} onClick={() => router.push('/')}>
        이동
      </button>
      <Button size={'sm'} bgColor={'primary'} loading={false} active={true} />
    </>
  );
};

export default Test;

const aaa = css`
  color: red;
  font-size: 20px;
`;
