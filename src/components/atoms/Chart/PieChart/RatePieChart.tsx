import React, { useCallback, useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from 'recharts';
import FlexBox from '../../FlexBox';
import { heading5_regular } from '../../../../styles/FontStyles';
import { css } from '@emotion/react';
import { gery_chart_color, positive_chart_color } from '../../../../styles/Common.styles';

interface PropsType {
  dataList: { name: string; value: number }[];
}

const RatePieChart = ({ dataList }: PropsType) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const renderActiveShape = useCallback(props => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.value}%
        </text>
        <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={fill} />
      </g>
    );
  }, []);

  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [activeIndex],
  );

  return (
    <div css={pieChartBox}>
      <div css={{ padding: '32px 62px 32px 62px' }}>
        <ResponsiveContainer width={96} height={96}>
          <PieChart>
            <Pie
              onMouseEnter={onPieEnter}
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              startAngle={0}
              endAngle={360}
              data={dataList}
              innerRadius={30}
              outerRadius={45}
              fill="#8884d8"
              dataKey="value"
            >
              {dataList.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? positive_chart_color : gery_chart_color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <FlexBox justify={'space-between'} wrap={'wrap'} style={{ width: '100%', padding: '24px' }}>
        {dataList.map((el, index) => {
          return (
            <FlexBox key={index} align={'center'} justify={'center'} style={{ width: '50%', marginBottom: '10px' }}>
              <div css={labelStyle(index === 0 ? positive_chart_color : gery_chart_color)} />
              <span css={heading5_regular}>{el.name}</span>
            </FlexBox>
          );
        })}
      </FlexBox>
    </div>
  );
};
export default RatePieChart;

const pieChartBox = css`
  width: 220px;
`;

const labelStyle = background => css`
  background: ${background};
  width: 12px;
  height: 12px;
  margin-right: 8px;
`;
