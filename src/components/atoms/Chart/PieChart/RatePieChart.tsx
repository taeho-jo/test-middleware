import React, { useCallback, useEffect, useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from 'recharts';
import FlexBox from '../../FlexBox';
import { body3_bold, body3_medium, body3_regular, heading5_regular } from '../../../../styles/FontStyles';
import { css } from '@emotion/react';
import { gery_chart_color, positive_chart_color } from '../../../../styles/Common.styles';
import { checkIsInteger } from '../../../../common/util/commonFunc';

interface PropsType {
  dataList: any;
  infoDataList: any;
  color?: string;
  selectedLabelIndex: null | number;
  index: number;
  handleMouseUp: (index) => void;
}

const RatePieChart = ({ dataList, infoDataList, color = '#7CC08E', handleMouseUp, index, selectedLabelIndex }: PropsType) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const renderActiveShape = useCallback(props => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {checkIsInteger(payload.value)}%
        </text>
        <Sector
          cursor="pointer"
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
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
              // cursor="pointer"
              onMouseUp={() => handleMouseUp(index)}
              // onMouseEnter={onPieEnter}
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              startAngle={0}
              endAngle={360}
              data={dataList?.missionSuccessRatioInfo}
              innerRadius={30}
              outerRadius={45}
              fill="#8884d8"
              dataKey="value"
            >
              {dataList?.missionSuccessRatioInfo.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? color : gery_chart_color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {selectedLabelIndex === index ? (
        <FlexBox key={`rate-${index}`} justify={'space-between'} direction={'column'} style={{ ...mouseOverLabelStyle }}>
          <FlexBox justify={'space-between'} style={{ marginBottom: '12px' }}>
            <span css={body3_medium}>성공</span>
            <div>
              <span css={body3_regular}>({dataList.missionSuccessRatioInfo[0].count}명)</span>
              <span css={body3_bold}>{checkIsInteger(dataList.missionSuccessRatioInfo[0].value)}%</span>
            </div>
          </FlexBox>
          <FlexBox justify={'space-between'} style={{ marginBottom: '12px' }}>
            <span css={body3_medium}>실패</span>
            <div>
              <span css={body3_regular}>({dataList.missionSuccessRatioInfo[1].count}명)</span>
              <span css={body3_bold}>{checkIsInteger(dataList.missionSuccessRatioInfo[1].value)}%</span>
            </div>
          </FlexBox>
          <FlexBox justify={'space-between'} style={{ marginBottom: '12px' }}>
            <span css={body3_medium}>치명도</span>

            <span css={body3_bold}>{checkIsInteger(infoDataList.fatality)}%</span>
          </FlexBox>
          <FlexBox justify={'space-between'}>
            <span css={body3_medium}>언급비율</span>
            <span css={body3_bold}>{checkIsInteger(infoDataList.value)}%</span>
          </FlexBox>
        </FlexBox>
      ) : (
        <FlexBox justify={'space-between'} wrap={'wrap'} style={{ width: '100%', padding: '24px' }}>
          {dataList?.missionSuccessRatioInfo.map((el, index) => {
            return (
              <FlexBox key={index} align={'center'} justify={'center'} style={{ width: '50%', marginBottom: '10px' }}>
                <div css={labelStyle(index === 0 ? color : gery_chart_color)} />
                <span css={heading5_regular}>{el.name}</span>
              </FlexBox>
            );
          })}
        </FlexBox>
      )}
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
const mouseOverLabelStyle = css`
  width: 100%;
  padding: 16px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  //height: 144px;
`;
