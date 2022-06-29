import React, { useCallback, useRef, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import { basicBarTestData, basicBarTestData3 } from '../../../../assets/dummy/dummyData';
import FlexBox from '../../FlexBox';
import { css } from '@emotion/react';
import { body3_bold, body3_medium, heading5_bold, heading5_regular } from '../../../../styles/FontStyles';
import { colors } from '../../../../styles/Common.styles';
import { checkIsInteger } from '../../../../common/util/commonFunc';
interface PropsType {
  selectedIndex: number;
  dataList: { count: number; name: string; rawData: string[]; value: number };
  barColor?: string;
  onMouseLeave?: (e) => void;
  onMouseOver?: (e, index) => void;
  handleClickIndex?: (e, index) => void;
  index?: number;
}
const BasicHorizontalBarChart = ({
  dataList,
  barColor = '#68A0F4',
  onMouseLeave,
  onMouseOver,
  index,
  selectedIndex,
  handleClickIndex,
}: PropsType) => {
  const boxRef = useRef(null);

  return (
    <div css={barChartBoxStyle}>
      <FlexBox direction={'column'} align={'center'}>
        <span css={[heading5_regular, { color: colors.grey._99 }]}>{dataList?.count}명</span>
        <span css={heading5_bold}>{checkIsInteger(dataList.value)}%</span>
      </FlexBox>
      <ResponsiveContainer width={43} height={274}>
        <BarChart data={[dataList]}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis hide domain={[0, 100]} />

          <Bar dataKey="value" background={{ fill: '#dcdcdc' }}>
            <Cell
              fill={barColor}
              onClick={e => handleClickIndex(e, index)}
              onMouseOut={e => onMouseLeave(e)}
              onMouseOver={e => onMouseOver(e, index)}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      {selectedIndex === index && (
        <div ref={boxRef} css={infoBoxStyle}>
          <div style={{ width: '100%' }}>
            <FlexBox justify={'space-between'} style={{ marginBottom: '12px' }}>
              <span css={body3_medium}>동의정도</span>
              <span css={body3_bold}>{dataList.name}점</span>
            </FlexBox>
            <FlexBox justify={'space-between'} style={{ marginBottom: '12px' }}>
              <span css={body3_medium}>인원수</span>
              <span css={body3_bold}>{checkIsInteger(dataList.count)}ㅇ</span>
            </FlexBox>
            <FlexBox justify={'space-between'}>
              <span css={body3_medium}>비율</span>
              <span css={body3_bold}>{checkIsInteger(dataList.value)}%</span>
            </FlexBox>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicHorizontalBarChart;

const barChartBoxStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;
const infoBoxStyle = css`
  width: 220px;
  padding: 16px;
  margin: 0 auto;
  overflow: scroll;
  border-radius: 8px;
  z-index: 10;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  background: white;
  top: 70px;
  left: -80px;
`;
