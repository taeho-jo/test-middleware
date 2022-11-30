import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from 'recharts';
import FlexBox from '../../../FlexBox';
import { body3_bold, body3_medium, body3_regular, heading5_bold, heading5_regular } from '../../../../../styles/FontStyles';
import { css } from '@emotion/react';
import { colors, gery_chart_color, positive_chart_color } from '../../../../../styles/Common.styles';
import { checkIsInteger } from '../../../../../common/util/commonFunc';
import useOutsideClick from '../../../../../hooks/useOutsideClick';

interface PropsType {
  dataList: any;
  infoDataList: any;
  color?: string;
  selectedLabelIndex: null | number;
  index: number;
  handleMouseUp: (index, e) => void;
  setSelectedLabelIndex?: any;
  onMouseOver: any;
  onMouseLeave: any;
}

const RatePieChart = ({
  dataList,
  infoDataList,
  color = '#7CC08E',
  handleMouseUp,
  index,
  selectedLabelIndex,
  setSelectedLabelIndex,
  onMouseOver,
  onMouseLeave,
}: PropsType) => {
  const boxRef = useRef(null);

  const renderActiveShape = useCallback(props => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} css={heading5_bold}>
          {checkIsInteger(payload.value)}%
        </text>
        <Sector
          cursor="pointer"
          onClick={e => handleMouseUp(index, e)}
          onMouseOver={e => onMouseOver(e, index)}
          onMouseOut={e => onMouseLeave(e)}
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

  useOutsideClick(boxRef, () => {
    setSelectedLabelIndex(null);
  });

  return (
    <div css={pieChartBox}>
      <div css={{ padding: '32px 62px 32px 62px' }}>
        <ResponsiveContainer width={96} height={96}>
          <PieChart>
            <Pie
              activeIndex={0}
              activeShape={renderActiveShape}
              startAngle={0}
              endAngle={360}
              data={dataList?.missionSuccessRatioInfo}
              innerRadius={30}
              outerRadius={45}
              // fill="#8884d8"
              dataKey="value"
            >
              {dataList?.missionSuccessRatioInfo.map((entry, idx) => (
                <Cell
                  cursor={'pointer'}
                  // onMouseOut={e => onMouseLeave(e)}
                  // onMouseOver={e => onMouseOver(e, idx)}
                  onClick={e => handleMouseUp(index, e)}
                  key={`cell-${idx}`}
                  fill={idx === 0 ? color : gery_chart_color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {selectedLabelIndex === index ? (
        <div ref={boxRef} key={`rate-${index}`} css={infoBoxStyle}>
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
        </div>
      ) : (
        <div css={textBoxStyle}>
          {dataList?.missionSuccessRatioInfo.map((el, index) => {
            return (
              <FlexBox key={index} align={'center'} justify={'center'} style={{ width: '50%', marginBottom: '10px' }}>
                <div css={labelStyle(index === 0 ? color : gery_chart_color)} />
                <span css={heading5_regular}>{el.name}</span>
              </FlexBox>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default RatePieChart;

const pieChartBox = css`
  width: 220px;
  position: relative;
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
const textBoxStyle = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 24px;
`;
const infoBoxStyle = css`
  //justify={'space-between'} direction={'column'} style={{ ...mouseOverLabelStyle }}
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  position: absolute;
  background: white;
  top: 160px;
`;
