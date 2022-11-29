import React from 'react';
import { BarChartV2, StackBarChartV2 } from '../../../../../components/atoms/Chart';
import Grid from '../../../../../components/atoms/Grid';
import { css } from '@emotion/react';

const Index = () => {
  return (
    <div>
      <h1 css={titleStyle}>ATOM CHART</h1>
      <Grid css={barChartStyle}>
        <BarChartV2 />
        <BarChartV2 />
        <BarChartV2 />
      </Grid>

      <StackBarChartV2 />
    </div>
  );
};

export default Index;

const titleStyle = css`
  margin-bottom: 20px;
`;

const barChartStyle = css`
  //width: 500px;
  padding: 30px;
`;
