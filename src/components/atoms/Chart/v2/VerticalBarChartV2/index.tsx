import React from 'react';

import { css } from '@emotion/react';
import VerticalBarChartV2 from './VerticalBarChartV2Cell';
import Grid from '../../../Grid';

interface Props {
  data: any;
  barColor?: string;
}

const BarChartGroupV2 = ({ data, barColor = '#68A0F4' }) => {
  return (
    <Grid css={groupContainerStyle} lg={6}>
      {data?.map((item, index) => {
        return <VerticalBarChartV2 key={item.title} data={item} barColor={barColor} />;
      })}
    </Grid>
  );
};

export default BarChartGroupV2;

const groupContainerStyle = css`
  //background: #008800;
`;
