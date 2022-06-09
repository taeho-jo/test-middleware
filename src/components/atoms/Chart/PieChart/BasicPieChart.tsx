import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, LabelList } from 'recharts';
import FlexBox from '../../FlexBox';
import { heading5_regular } from '../../../../styles/FontStyles';
import { css } from '@emotion/react';
import { chart_color } from '../../../../styles/Common.styles';

interface PropsType {
  dataList: { name: string; value: number }[];
}

const BasicPieChart = ({ dataList }: PropsType) => {
  return (
    <div css={pieChartBox}>
      <div css={{ padding: '32px 62px 32px 62px' }}>
        <ResponsiveContainer width={96} height={96}>
          <PieChart>
            <Pie data={dataList} innerRadius={30} outerRadius={45} fill="#8884d8" dataKey="value">
              {dataList.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={chart_color[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <FlexBox justify={'space-between'} wrap={'wrap'} style={{ width: '100%', padding: '24px' }}>
        {dataList.map((el, index) => {
          return (
            <FlexBox key={index} align={'center'} justify={'center'} style={{ width: '50%', marginBottom: '10px' }}>
              <div css={labelStyle(chart_color[index])} />
              <span css={heading5_regular}>{el.name}</span>
            </FlexBox>
          );
        })}
      </FlexBox>
    </div>
  );
};

export default BasicPieChart;
const pieChartBox = css`
  width: 220px;
`;

const labelStyle = background => css`
  background: ${background};
  width: 12px;
  height: 12px;
  margin-right: 8px;
`;
