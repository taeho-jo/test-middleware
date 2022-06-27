import React from 'react';
import AdminSideBar from '../../../components/molecules/AdminSideBar';
import AdminHeader from '../../../components/molecules/AdminHeader';
import FlexBox from '../../../components/atoms/FlexBox';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import CommonHeader from '../../../components/molecules/CommonHeader';

const AdminLayout = ({ children }) => {
  return (
    <FlexBox align={'flex-start'} justify={'flex-start'} style={{ minWidth: '1440px', marginTop: '48px' }}>
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
  width: calc(100% - 240px);
  //margin-left: 240px;
  min-width: 1200px;
`;
const contentsArea = css`
  //background: mediumpurple;
  height: calc(100vh - 95px);
  margin-top: 47px;
  margin-left: 240px;
  width: 100%;
  //margin-top: 48px;
  overflow: scroll;
`;
