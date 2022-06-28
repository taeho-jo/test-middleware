import React, { useCallback, useRef, useState } from 'react';
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import FlexBox from '../../FlexBox';
import { body3_bold, body3_medium, body3_regular, heading5_bold, heading5_regular } from '../../../../styles/FontStyles';
import { colors, gery_chart_color } from '../../../../styles/Common.styles';
import { checkIsInteger } from '../../../../common/util/commonFunc';
import { css } from '@emotion/react';
import useOutsideClick from '../../../../hooks/useOutsideClick';

interface PropsType {
  dataList: { name: string; value: number }[];
  label?: any;
  value?: string;
  rate?: string;
  negative?: boolean;
  barColor?: string;
  max?: number;
  onClick?: (item) => void;
  selectedIndex?: number | null;
  setSelectedIndex?: any;
  handleClickIndex?: (e, index) => void;
  detailIndex?: number;
  infoBox?: boolean;
  [key: string]: any;
}
const BasicBarChart = ({
  onClick,
  dataList,
  label,
  value,
  rate,
  negative = false,
  barColor,
  max = 100,
  selectedIndex,
  setSelectedIndex,
  handleClickIndex,
  detailIndex,
  infoBox = false,
  ...props
}: PropsType) => {
  const boxRef = useRef(null);

  useOutsideClick(boxRef, () => {
    setSelectedIndex(null);
  });

  return (
    <FlexBox justify={'center'} align={'center'} direction={'column'} style={{ width: '100%', position: 'relative' }}>
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
          {infoBox ? (
            <Bar dataKey="value" fill={barColor ? barColor : negative ? '#E87490' : '#68A0F4'} background={{ fill: '#dcdcdc' }}>
              {dataList.map((entry, index) => (
                <Cell
                  onClick={e => handleClickIndex(e, detailIndex)}
                  cursor="pointer"
                  fill={barColor ? barColor : negative ? '#E87490' : '#68A0F4'}
                  key={`cell-${detailIndex}`}
                />
              ))}
            </Bar>
          ) : (
            <Bar dataKey="value" fill={barColor ? barColor : negative ? '#E87490' : '#68A0F4'} background={{ fill: '#dcdcdc' }} />
          )}
        </BarChart>
      </ResponsiveContainer>

      {infoBox && selectedIndex === detailIndex && (
        <div ref={boxRef} css={infoBoxStyle}>
          <FlexBox justify={'space-between'}>
            <span css={body3_medium}>언급자수</span>
            <span css={body3_bold}>{value}</span>
          </FlexBox>
          <FlexBox justify={'space-between'}>
            <span css={body3_medium}>언급 비율</span>
            <span css={body3_bold}>{rate}</span>
          </FlexBox>
        </div>
      )}
    </FlexBox>
  );
};

export default BasicBarChart;

const infoBoxStyle = css`
  //justify={'space-between'} direction={'column'} style={{ ...mouseOverLabelStyle }}
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 160px;
  padding: 16px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25) !important;
  position: absolute;
  top: 25px;
  z-index: 1;
  left: 0;
`;
