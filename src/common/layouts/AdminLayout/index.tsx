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
      <div css={mainLayoutStyle}>
        <AdminHeader />
        <div css={contentsArea}>{children}</div>
      </div>
    </FlexBox>
  );
};

export default AdminLayout;

const mainLayoutStyle = css`
  width: 100%;

  //color: red;
`;
const contentsArea = css`
  height: calc(100vh - 95px);
`;
