import React, { useCallback, useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from 'recharts';
import { chart_color, colors } from '../../../../styles/Common.styles';
import FlexBox from '../../FlexBox';
import { heading5_regular } from '../../../../styles/FontStyles';
import { css } from '@emotion/react';

interface PropsType {
  dataList: { name: string; value: number }[];
  rate?: boolean;
}

const COLORS = ['#E87490', '#E3B268', '#EDE06A', '#7CC08E'];

const StraightPieChart = ({ dataList, rate = false }: PropsType) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const renderActiveShape = useCallback(props => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={colors.grey._3c}>
          {payload.value}점
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
      <div css={{ padding: '20px 101px 0 101px' }}>
        <ResponsiveContainer width={136} height={100}>
          <PieChart>
            {rate ? (
              <Pie
                onMouseEnter={onPieEnter}
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={dataList}
                startAngle={180}
                endAngle={0}
                innerRadius={30}
                outerRadius={45}
                fill="#8884d8"
                dataKey="value"
              >
                {dataList.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            ) : (
              <Pie data={dataList} startAngle={180} endAngle={0} innerRadius={30} outerRadius={45} fill="#8884d8" dataKey="value">
                {dataList.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            )}
          </PieChart>
        </ResponsiveContainer>
      </div>

      <FlexBox justify={'space-between'} style={{ width: '100%', padding: '24px', paddingTop: '0' }}>
        {dataList.map((el, index) => {
          return (
            <FlexBox key={index} align={'center'} justify={'center'} style={{ width: '50%', marginBottom: '10px' }}>
              <div css={labelStyle(COLORS[index])} />
              <span css={heading5_regular}>{el.name}</span>
            </FlexBox>
          );
        })}
      </FlexBox>
    </div>
  );
};

export default StraightPieChart;
const pieChartBox = css`
  width: 338px;
`;

const labelStyle = background => css`
  background: ${background};
  width: 12px;
  height: 12px;
  margin-right: 8px;
`;
