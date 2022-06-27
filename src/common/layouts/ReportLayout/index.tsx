import React from 'react';
import ReportHeader from '../../../components/molecules/ReportHeader';
import ReportSideBar from '../../../components/molecules/ReportSideBar';
import FlexBox from '../../../components/atoms/FlexBox';

const ReportLayout = ({ children }) => {
  return (
    <FlexBox style={{ width: '100%' }} justify={'flex-start'} align={'flex-start'}>
      <ReportSideBar />
      <div css={{ width: 'calc(100% - 296px)', marginLeft: '296px', minWidth: '1440px' }}>
        <ReportHeader />
        <div css={{ marginTop: '72px' }}>{children}</div>
      </div>
    </FlexBox>
  );
};

export default ReportLayout;
