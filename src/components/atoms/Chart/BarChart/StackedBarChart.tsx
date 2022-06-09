import React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import FlexBox from '../../FlexBox';
import { heading5_bold, heading5_regular } from '../../../../styles/FontStyles';

interface PropsType {
  dataList: { [key: string]: any }[];
  label?: any;
  rate?: string;
  negative?: boolean;
}
const StackedBarChart = ({ dataList, label, rate, negative = false }: PropsType) => {
  const objectKey = Object.keys(dataList[0]);
  return (
    <FlexBox justify={'center'} align={'center'} direction={'column'} style={{ width: '100%' }}>
      <FlexBox justify={'space-between'}>
        {label ? <span css={[heading5_regular, { paddingLeft: '5px' }]}>{label}</span> : ''}
        {rate ? <span css={[heading5_bold, { color: '#68a0f4' }]}>{rate}</span> : ''}
      </FlexBox>
      <ResponsiveContainer width={'100%'} height={50}>
        <BarChart data={dataList} layout="vertical" barCategoryGap={1} barSize={16}>
          <XAxis type="number" hide domain={[0, 1]} />
          <YAxis type="category" hide />
          {objectKey.map((el, index) => {
            if (el.includes('value')) {
              if (el === 'value') {
                return (
                  // rgba(232, 116, 144, 1)
                  <Bar
                    key={index}
                    dataKey={el}
                    stackId="a"
                    fill={negative ? `rgba(232, 116, 144, ${1 - 0.2 * (index - 1)})` : `rgba(104, 160, 244, ${1 - 0.2 * (index - 1)})`}
                    background={{ fill: '#dcdcdc' }}
                  />
                );
              } else {
                return (
                  <Bar
                    key={index}
                    dataKey={el}
                    stackId="a"
                    fill={negative ? `rgba(232, 116, 144, ${1 - 0.2 * (index - 1)})` : `rgba(104, 160, 244, ${1 - 0.2 * (index - 1)})`}
                  />
                );
              }
            }
          })}
        </BarChart>
      </ResponsiveContainer>
    </FlexBox>
  );
};

export default StackedBarChart;
