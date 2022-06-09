import React from 'react';
import withTokenAuth from '../../../hoc/withTokenAuth';
import {
  BasicBarChart,
  BasicPieChart,
  RatePieChart,
  StraightPieChart,
  StackedBarChart,
  TableBarChart,
  UsabilityTableChart,
  BasicHorizontalBarChart,
} from '../../../components/atoms/Chart';
import { css } from '@emotion/react';
import FlexBox from '../../../components/atoms/FlexBox';
import {
  ageTestData,
  basicBarTestData,
  genderTestData,
  groupTestData,
  stackedBarTestData,
  straightRateTestData,
  successTestData,
  tableBarChartTestData,
  tableBarChartTestData2,
  tableBarChartTestData3,
} from '../../../assets/dummy/dummyData';

const Report = () => {
  return (
    <div css={{ overflow: 'scroll', height: 'calc(100vh - 72px)' }}>
      <FlexBox align={'flex-start'} style={{ width: 'calc(100vw - 296px)', padding: '16px' }}>
        <BasicHorizontalBarChart />
      </FlexBox>
      <FlexBox align={'flex-start'} style={{ width: 'calc(100vw - 296px)', padding: '16px' }}>
        <UsabilityTableChart dataList={tableBarChartTestData} />
      </FlexBox>
      <FlexBox align={'flex-start'} style={{ width: 'calc(100vw - 296px)', padding: '16px' }}>
        <TableBarChart dataList={tableBarChartTestData} />
      </FlexBox>
      <FlexBox align={'flex-start'} style={{ width: 'calc(100vw - 296px)', padding: '16px' }}>
        <TableBarChart dataList={tableBarChartTestData2} negative={true} />
      </FlexBox>

      <FlexBox align={'flex-start'} style={{ width: 'calc(100vw - 296px)', padding: '16px' }}>
        <BasicBarChart
          dataList={basicBarTestData}
          label={[
            <>
              미션 1 <strong>회원가입하기</strong>
            </>,
          ]}
          rate={'49.5%'}
        />
      </FlexBox>
      <FlexBox align={'flex-start'} style={{ width: 'calc(100vw - 296px)', padding: '16px' }}>
        <BasicBarChart
          dataList={basicBarTestData}
          label={[
            <>
              미션 1 <strong>회원가입하기</strong>
            </>,
          ]}
          rate={'49.5%'}
          negative={true}
        />
      </FlexBox>

      <FlexBox align={'flex-start'} style={{ width: 'calc(100vw - 296px)', padding: '16px' }}>
        <StackedBarChart
          dataList={stackedBarTestData}
          label={[
            <>
              미션 1 <strong>회원가입하기</strong>
            </>,
          ]}
          rate={'49.5%'}
        />
      </FlexBox>
      <FlexBox align={'flex-start'} style={{ width: 'calc(100vw - 296px)', padding: '16px' }}>
        <StackedBarChart
          dataList={stackedBarTestData}
          label={[
            <>
              미션 1 <strong>회원가입하기</strong>
            </>,
          ]}
          rate={'49.5%'}
          negative={true}
        />
      </FlexBox>

      <FlexBox align={'flex-start'}>
        <BasicPieChart dataList={groupTestData} />
        <BasicPieChart dataList={genderTestData} />
        <BasicPieChart dataList={ageTestData} />
      </FlexBox>
      <FlexBox align={'flex-start'}>
        <RatePieChart dataList={successTestData} />
      </FlexBox>
      <FlexBox align={'flex-start'}>
        <StraightPieChart dataList={straightRateTestData} />
        <StraightPieChart dataList={straightRateTestData} rate={true} />
      </FlexBox>
    </div>
  );
};

export default withTokenAuth(Report, false);

const pieChartBox = css`
  width: 220px;
`;
