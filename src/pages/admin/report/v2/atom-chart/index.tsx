import React from 'react';
import { VerticalBarChartV2, StackBarChartV2 } from '../../../../../components/atoms/Chart';
import Grid from '../../../../../components/atoms/Grid';
import { css } from '@emotion/react';

const data = [
  {
    title: 'A. 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 ',
    value: 50,
    responseRate: 30,
    responseCount: 12,
    id: 1,
  },
  {
    title: 'b. 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 ',
    value: 60,
    responseRate: 14,
    responseCount: 12,
    id: 2,
  },
  {
    title: 'c. 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 ',
    value: 80,
    responseRate: 46,
    responseCount: 5,
    id: 3,
  },
  {
    title: 'e. 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 ',
    value: 26,
    responseRate: 2,
    responseCount: 5,
    id: 4,
  },
];
const data2 = [
  {
    title: 'A. 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 ',
    value: 10,
    responseRate: 12,
    responseCount: 43,
  },
  {
    title: 'w. 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 ',
    value: 30,
    responseRate: 32,
    responseCount: 42,
  },
  {
    title: 'h. 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 ',
    value: 79,
    responseRate: 67,
    responseCount: 98,
  },
  {
    title: 'g. 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 ',
    value: 43,
    responseRate: 12,
    responseCount: 45,
  },
];

const Index = () => {
  return (
    <div>
      <h1 css={titleStyle}>ATOM CHART</h1>
      <Grid css={containerStyle} justify="space-between">
        <VerticalBarChartV2 data={data} barColor={'#E87490'} />
        <VerticalBarChartV2 data={data2} />
      </Grid>
      {/*<Grid css={containerStyle} justify="space-between">*/}
      {/*  <VerticalBarChartV2 data={data} barColor={'#7CC08E'} />*/}
      {/*</Grid>*/}

      <StackBarChartV2 />
    </div>
  );
};

export default Index;

const titleStyle = css`
  margin-bottom: 20px;
`;
const containerStyle = css`
  padding: 0 32px 28px 32px;
`;
