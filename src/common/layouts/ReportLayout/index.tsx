import React from 'react';
import ReportHeader from '../../../components/molecules/ReportHeader';
import ReportSideBar from '../../../components/molecules/ReportSideBar';
import FlexBox from '../../../components/atoms/FlexBox';

const ReportLayout = ({ children }) => {
  return (
    <FlexBox style={{ width: '100%' }} justify={'flex-start'} align={'flex-start'}>
      <ReportSideBar />
      <div
        css={{
          width: 'calc(100% - 296px)',
          marginLeft: '296px',
          minWidth: '900px',
          overflowY: 'scroll',
        }}
      >
        <ReportHeader />
        <div css={{ marginTop: '72px', overflowY: 'scroll' }}>{children}</div>
      </div>
    </FlexBox>
  );
};

export default ReportLayout;
