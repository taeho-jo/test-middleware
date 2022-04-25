import React from 'react';
import { css } from '@emotion/react';
import FlexBox from '../../atoms/FlexBox';
import { heading5_bold } from '../../../styles/FontStyles';
import { useRouter } from 'next/router';

const AdminHeader = () => {
  const router = useRouter();
  return (
    <FlexBox style={headerStyle} justify={'flex-start'} align={'center'}>
      <span onClick={() => router.push('/admin/team')} css={[heading5_bold, itemsStyle]}>
        Diby
      </span>
      <span onClick={() => router.push('/admin/main')} css={[heading5_bold, itemsStyle]}>
        Members
      </span>
      <span css={[heading5_bold, itemsStyle]}>Settings</span>
    </FlexBox>
  );
};

export default AdminHeader;

const headerStyle = css`
  height: 47px;
  width: 100%;
  padding: 0 32px;
`;
const itemsStyle = css`
  margin-right: 40px;
  cursor: pointer;
`;
