import React from 'react';

import { css } from '@emotion/react';
import VerticalBarChartV2 from './VerticalBarChartV2Cell';
import Grid from '../../../Grid';

const BarChartGroupV2 = ({ data }) => {
  return (
    <Grid css={groupContainerStyle} lg={6}>
      {data?.map((item, index) => {
        return <VerticalBarChartV2 key={item.name} data={item} />;
      })}
    </Grid>
  );
};

export default BarChartGroupV2;

const groupContainerStyle = css`
  //background: #008800;
`;
