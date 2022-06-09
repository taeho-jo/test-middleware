import React, { useCallback } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import FlexBox from '../../FlexBox';
import { heading5_bold, heading5_regular } from '../../../../styles/FontStyles';

interface PropsType {
  dataList: { name: string; value: number }[];
  label?: any;
  rate?: string;
  negative?: boolean;
}
const BasicBarChart = ({ dataList, label, rate, negative = false }: PropsType) => {
  return (
    <FlexBox justify={'center'} align={'center'} direction={'column'} style={{ width: '100%' }}>
      <FlexBox justify={'space-between'}>
        {label ? <span css={[heading5_regular, { paddingLeft: '5px' }]}>{label}</span> : ''}
        {rate ? <span css={[heading5_bold, { color: '#68a0f4', paddingRight: '10px' }]}>{rate}</span> : ''}
      </FlexBox>
      <ResponsiveContainer width={'100%'} height={50}>
        <BarChart data={dataList} layout="vertical" barSize={16}>
          <XAxis type="number" hide />
          <YAxis type="category" hide />
          <Bar dataKey="value" fill={negative ? '#E87490' : '#68A0F4'} background={{ fill: '#dcdcdc' }} />
        </BarChart>
      </ResponsiveContainer>
    </FlexBox>
  );
};

export default BasicBarChart;
