import React from 'react';
import ReportHeader from '../../../components/molecules/ReportHeader';
import ReportSideBar from '../../../components/molecules/ReportSideBar';
import FlexBox from '../../../components/atoms/FlexBox';

const ReportLayout = ({ children }) => {
  return (
    <FlexBox style={{ width: '100%' }} justify={'flex-start'} align={'flex-start'}>
      <ReportSideBar />
      <div>
        <ReportHeader />
        {children}
      </div>
    </FlexBox>
  );
};

export default ReportLayout;
