import React, { Fragment } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, LabelList } from 'recharts';
import { css } from '@emotion/react';
import { heading5_bold, heading5_regular } from '../../../../../styles/FontStyles';
import { colors } from '../../../../../styles/Common.styles';
import FlexBox from '../../../FlexBox';
interface PropsType {
  dataList: { name: string; value: number; data: number }[];
}

const data = [
  {
    name: 'Page A',
    value: 80,
    data: 81,
  },
  {
    name: 'Page B',
    value: 30,
    data: 31,
  },
  {
    name: 'Page C',
    value: 20,
    data: 21,
  },
  {
    name: 'Page D',
    value: 78,
    data: 79,
  },
  {
    name: 'Page E',
    value: 89,
    data: 90,
  },
  {
    name: 'Page F',
    value: 39,
    data: 40,
  },
  {
    name: 'Page G',
    value: 49,
    data: 50,
  },
];
const HistogramBarChart = ({ dataList }: PropsType) => {
  const CustomizedLabel = props => {
    const { x, y, width, height, value, index } = props;
    return (
      <g>
        <text style={{ fontSize: '14px' }} x={x + width / 2} y={y - 30} fill={colors.grey._99} textAnchor="middle" dominantBaseline="middle">
          {dataList[index].data}명
        </text>
        <text style={{ fontSize: '14px' }} x={x + width / 2} y={y - 10} fill="#000" textAnchor="middle" dominantBaseline="middle">
          {value}%
        </text>
      </g>
    );
  };
  return (
    <FlexBox direction={'column'} css={barChartBoxStyle}>
      <ResponsiveContainer width={'100%'} height={274}>
        <BarChart data={dataList} barCategoryGap={0} barGap={0}>
          <XAxis dataKey="name" scale="linear" tickLine={false} axisLine={false} />
          {/*<XAxis dataKey="name" tickLine={false} axisLine={false} />*/}
          <YAxis hide domain={[0, 150]} />

          <Bar dataKey="value" fill="#68A0F4">
            <LabelList content={<CustomizedLabel />} position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </FlexBox>
  );
};

export default HistogramBarChart;

const barChartBoxStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
