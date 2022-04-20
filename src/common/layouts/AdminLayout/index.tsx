import React from 'react';
import AdminSideBar from '../../../components/molecules/AdminSideBar';
import AdminHeader from '../../../components/molecules/AdminHeader';
import FlexBox from '../../../components/atoms/FlexBox';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';

const AdminLayout = ({ children }) => {
  return (
    <FlexBox align={'flex-start'} justify={'flex-start'}>
      <AdminSideBar />
      <div css={adminHeaderStyle}>
        <AdminHeader />
        {children}
      </div>
    </FlexBox>
  );
};

export default AdminLayout;

const adminHeaderStyle = css`
  height: 48px;
  width: 100%;
  border: 1px solid ${colors.grey._ec};
  border-left: none;
`;
