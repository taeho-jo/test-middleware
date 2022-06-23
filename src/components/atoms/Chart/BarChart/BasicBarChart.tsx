import React, { useCallback } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import FlexBox from '../../FlexBox';
import { heading5_bold, heading5_regular } from '../../../../styles/FontStyles';
import { colors } from '../../../../styles/Common.styles';

interface PropsType {
  dataList: { name: string; value: number }[];
  label?: any;
  value?: string;
  rate?: string;
  negative?: boolean;
  barColor?: string;
  max?: number;
  [key: string]: any;
}
const BasicBarChart = ({ dataList, label, value, rate, negative = false, barColor, max = 100, ...props }: PropsType) => {
  return (
    <FlexBox justify={'center'} align={'center'} direction={'column'} style={{ width: '100%' }}>
      <FlexBox justify={'space-between'}>
        {label ? <span css={[heading5_regular, { paddingLeft: '5px' }]}>{label}</span> : ''}
        <div>
          {value ? (
            <>
              <span css={[heading5_bold, { color: barColor ? barColor : '#68a0f4', paddingRight: '10px', ...props.valueStyle }]}>{value}</span>
              <span css={{ marginRight: '16px' }}>|</span>
            </>
          ) : null}

          {rate ? <span css={[heading5_bold, { color: barColor ? barColor : colors.grey._3c, paddingRight: '10px' }]}>{rate}</span> : ''}
        </div>
      </FlexBox>
      <ResponsiveContainer width={'100%'} height={50}>
        <BarChart data={dataList} layout="vertical" barSize={16}>
          <XAxis type="number" hide domain={[0, max]} />
          <YAxis type="category" hide />
          <Bar dataKey="value" fill={barColor ? barColor : negative ? '#E87490' : '#68A0F4'} background={{ fill: '#dcdcdc' }} />
        </BarChart>
      </ResponsiveContainer>
    </FlexBox>
  );
};

export default BasicBarChart;
