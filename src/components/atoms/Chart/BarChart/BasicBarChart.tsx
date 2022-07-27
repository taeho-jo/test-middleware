import React, { useCallback, useRef, useState } from 'react';
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import FlexBox from '../../FlexBox';
import { body3_bold, body3_medium, body3_regular, heading5_bold, heading5_medium, heading5_regular } from '../../../../styles/FontStyles';
import { colors, gery_chart_color } from '../../../../styles/Common.styles';
import { checkIsInteger } from '../../../../common/util/commonFunc';
import { css } from '@emotion/react';
import useOutsideClick from '../../../../hooks/useOutsideClick';

interface PropsType {
  dataList: { count?: number; multipleAnswerData?: string[]; name: string; rawData?: string[]; value: number }[];
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
  onMouseOver?: any;
  onMouseLeave?: any;
  activeIndex?: number | null;
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
  onMouseOver,
  onMouseLeave,
  activeIndex,
  infoBox = false,
  ...props
}: PropsType) => {
  const boxRef = useRef(null);

  const bool = dataList[0]?.multipleAnswerData;
  // console.log(bool, 'bool~');

  useOutsideClick(boxRef, () => {
    setSelectedIndex(null);
  });

  return (
    <FlexBox justify={'center'} align={'center'} direction={'column'} style={{ width: '100%', position: 'relative' }}>
      <FlexBox justify={'space-between'}>
        {label ? <span css={[heading5_medium, { paddingLeft: '5px' }]}>{label}</span> : ''}
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
            <Bar cursor="pointer" dataKey="value" fill={barColor ? barColor : negative ? '#E87490' : '#68A0F4'} background={{ fill: '#dcdcdc' }}>
              {dataList.map((entry, index) => (
                <Cell
                  onClick={e => handleClickIndex(e, detailIndex)}
                  onMouseOut={e => onMouseLeave(e)}
                  onMouseOver={e => onMouseOver(e, detailIndex)}
                  cursor="pointer"
                  fill={activeIndex === detailIndex ? '#3375d6' : barColor ? barColor : negative ? '#E87490' : '#68A0F4'}
                  key={`cell-${index}`}
                />
              ))}
            </Bar>
          ) : (
            <Bar cursor="pointer" dataKey="value" fill={barColor ? barColor : negative ? '#E87490' : '#68A0F4'} background={{ fill: '#dcdcdc' }} />
          )}
        </BarChart>
      </ResponsiveContainer>

      {bool?.length !== 0
        ? infoBox &&
          selectedIndex === detailIndex && (
            <div ref={boxRef} css={[popupContainer()]}>
              <FlexBox justify={'space-between'} align={'center'} style={{ padding: '16px' }}>
                <span css={heading5_medium}>{dataList[0]?.name}</span>
                <div>
                  <span css={[heading5_medium, { color: colors.grey._99 }]}>{dataList[0]?.count}명</span>&nbsp;
                  <span css={heading5_bold}>{checkIsInteger(dataList[0]?.value)}%</span>
                </div>
              </FlexBox>

              <ul
                className={'scrollType1'}
                css={{
                  background: colors.grey._fa,
                  width: '100%',
                  height: 'auto',
                  maxHeight: '274px',
                  wordBreak: 'keep-all',
                  padding: '16px 24px',
                  borderBottomLeftRadius: '8px',
                  borderBottomRightRadius: '8px',
                }}
              >
                {bool?.length === 0 ? (
                  <li css={[heading5_regular, { height: 'auto', listStyle: 'inside', textIndent: '-20px', paddingLeft: '20px' }]}>
                    작성된 주관식 응답이 없습니다.
                  </li>
                ) : (
                  bool.map((item, index) => {
                    return (
                      <li
                        css={[
                          heading5_regular,
                          {
                            marginBottom: index === bool?.length - 1 ? 0 : '16px',
                            height: 'auto',
                            listStyle: 'inside',
                            textIndent: '-20px',
                            paddingLeft: '20px',
                          },
                        ]}
                        key={`${item}-${index}`}
                      >
                        {item}
                      </li>
                    );
                  })
                )}
                {/*{bool.map((item, index) => {*/}
                {/*  return (*/}
                {/*    <li*/}
                {/*      css={[*/}
                {/*        heading5_regular,*/}
                {/*        {*/}
                {/*          marginBottom: index === bool.length - 1 ? 0 : '16px',*/}
                {/*          height: 'auto',*/}
                {/*          listStyle: 'inside',*/}
                {/*          textIndent: '-20px',*/}
                {/*          paddingLeft: '20px',*/}
                {/*        },*/}
                {/*      ]}*/}
                {/*      key={`item-${index}`}*/}
                {/*    >*/}
                {/*      {item}*/}
                {/*    </li>*/}
                {/*  );*/}
                {/*})}*/}
              </ul>
            </div>
          )
        : infoBox &&
          selectedIndex === detailIndex && (
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
      {/*{infoBox && selectedIndex === detailIndex && (*/}
      {/*  <div ref={boxRef} css={infoBoxStyle}>*/}
      {/*    <FlexBox justify={'space-between'}>*/}
      {/*      <span css={body3_medium}>언급자수</span>*/}
      {/*      <span css={body3_bold}>{value}</span>*/}
      {/*    </FlexBox>*/}
      {/*    <FlexBox justify={'space-between'}>*/}
      {/*      <span css={body3_medium}>언급 비율</span>*/}
      {/*      <span css={body3_bold}>{rate}</span>*/}
      {/*    </FlexBox>*/}
      {/*  </div>*/}
      {/*)}*/}
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

const popupContainer = () => css`
  width: 660px;
  border-radius: 8px;
  //padding: 16px;
  background-color: ${colors.white};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25) !important;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.2s ease-in;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 99;
  border: 1px solid #dcdcdc;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
