import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, LabelList, BarChart, XAxis, YAxis, Bar, Line } from 'recharts';
import FlexBox from '../../FlexBox';
import { heading5_bold, heading5_regular } from '../../../../styles/FontStyles';
import { css } from '@emotion/react';
import { chart_color, colors } from '../../../../styles/Common.styles';
import { LineChart } from '../../../../stories/atoms/SimpleLineGraph.stories';

interface PropsType {
  dataList: any;
  labelPadding?: string;
}

const BasicLineChart = ({ dataList, labelPadding }: PropsType) => {
  return (
    <FlexBox justify={'center'} align={'center'} direction={'column'} style={{ width: '100%' }}>
      <ResponsiveContainer width={'100%'} height={600}>
        <LineChart width={300} height={100} data={dataList}>
          <XAxis dataKey="data" type="category" allowDuplicatedCategory={false} />
          <YAxis dataKey="value" />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>

      {/*<ResponsiveContainer width={'100%'} height={50}>*/}
      {/*  <BarChart data={dataList} layout="vertical" barSize={16}>*/}
      {/*    <XAxis type="number" hide domain={[0, 100]} />*/}
      {/*    <YAxis type="category" hide />*/}
      {/*    <Bar dataKey="value" fill={barColor ? barColor : negative ? '#E87490' : '#68A0F4'} background={{ fill: '#dcdcdc' }} />*/}
      {/*  </BarChart>*/}
      {/*</ResponsiveContainer>*/}
    </FlexBox>
  );
};

export default BasicLineChart;
const pieChartBox = css`
  width: 220px;
`;

const labelStyle = background => css`
  background: ${background};
  width: 12px;
  height: 12px;
  margin-right: 8px;
`;
