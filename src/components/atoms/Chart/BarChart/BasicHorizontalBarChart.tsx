import React, { useCallback } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import { basicBarTestData, basicBarTestData3 } from '../../../../assets/dummy/dummyData';
import FlexBox from '../../FlexBox';
import { css } from '@emotion/react';
import { heading5_bold, heading5_regular } from '../../../../styles/FontStyles';
import { colors } from '../../../../styles/Common.styles';
interface PropsType {
  dataList: { name: string; value: number; data: number }[];
  barColor?: string;
}
const BasicHorizontalBarChart = ({ dataList, barColor = '#68A0F4' }: PropsType) => {
  return (
    <div css={barChartBoxStyle}>
      <FlexBox direction={'column'} align={'center'}>
        <span css={[heading5_regular, { color: colors.grey._99 }]}>{dataList[0].data}명</span>
        <span css={heading5_bold}>{dataList[0].value}%</span>
      </FlexBox>
      <ResponsiveContainer width={43} height={274}>
        <BarChart data={dataList}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis hide domain={[0, 100]} />

          <Bar dataKey="value" fill={barColor} background={{ fill: '#dcdcdc' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BasicHorizontalBarChart;

const barChartBoxStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
