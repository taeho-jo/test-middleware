import React, { useCallback, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { basicBarTestData } from '../../../../assets/dummy/dummyData';
import { BasicBarChart } from '../index';
import { body3_bold, body3_medium, body3_regular, caption2_regular, heading5_bold } from '../../../../styles/FontStyles';
import { chart_color, colors, hover_chart_color } from '../../../../styles/Common.styles';
import { checkIsInteger, checkIsIntegerTwo } from '../../../../common/util/commonFunc';
import FlexBox from '../../FlexBox';
import useOutsideClick from '../../../../hooks/useOutsideClick';

interface PropsType {
  dataList: string[];
  dataValueList: { name: string; value: number; fatality: number }[];
  negative?: boolean;
  barColor?: boolean | string;
  fatality?: boolean;
  name?: string;
}
const TableBarChart = ({ fatality = true, dataList, dataValueList, name, negative = false, barColor = false }: PropsType) => {
  const infoBoxRef = useRef();
  const [selectInfo, setSelectInfo] = useState<number>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const onMouseOver = useCallback(
    (e, index) => {
      e.stopPropagation();
      setActiveIndex(index);
    },
    [activeIndex],
  );

  const onMouseLeave = useCallback(
    e => {
      e.stopPropagation();
      setActiveIndex(null);
    },
    [activeIndex],
  );
  const renderArr = useCallback(() => {
    if (name) {
      return dataValueList?.filter((el, index) => el.name === name);
    } else {
      return dataValueList;
    }
  }, [dataValueList, name]);

  const handleClickChart = useCallback((e, index) => {
    e.stopPropagation();
    setSelectInfo(index);
  }, []);

  useOutsideClick(infoBoxRef, () => {
    setSelectInfo(null);
  });

  return (
    <div css={containerStyle}>
      <ul css={ulStyle}>
        <li css={[caption2_regular, liStyle, liWidthStyle(dataList.length, fatality), { width: 'calc(100% - 164px)' }]}>불편 언급 비율</li>
        {fatality && <li css={[caption2_regular, liStyle, { width: '164px' }]}>치명도</li>}
        {/*{dataList.map((el, index) => {*/}
        {/*  return (*/}
        {/*    <li key={index} css={[caption2_regular, liStyle, liWidthStyle(dataList.length, fatality)]}>*/}
        {/*      {el}*/}
        {/*    </li>*/}
        {/*  );*/}
        {/*})}*/}
        {/*{fatality && <li css={[caption2_regular, liStyle, { width: '164px' }]}>치명도</li>}*/}
      </ul>

      {/*TODO: Map 함수*/}
      {renderArr()?.map((el, index) => {
        return (
          <ul key={el.name} css={[ulStyle, emptyUlStyle]}>
            {/*공갈박스*/}
            {dataList.map((item, index) => {
              return (
                <li
                  key={`${item}-${index}`}
                  css={[liStyle, liWidthStyle(dataList.length, fatality), renderArr().length === 1 ? emptyLiStyle2 : emptyLiStyle]}
                >
                  <span>{item}</span>
                </li>
              );
            })}
            {/*공갈박스*/}
            {fatality && (
              <li css={[heading5_bold, liStyle, emptyLiStyle, { borderRight: 'none', width: '164px', color: colors.grey._99 }]}>
                {checkIsIntegerTwo(el.fatality)}
              </li>
            )}

            <div css={chartBox(fatality)}>
              <BasicBarChart
                max={60}
                // barColor={index === activeIndex ? hover_chart_color[index] : barColor ? chart_color[index] : ''}
                barColor={'#68A0f4'}
                negative={negative}
                dataList={[el]}
                label={[<>{el.name}</>]}
                rate={`${checkIsInteger(el.value)}%`}
              />
            </div>
            <div
              onClick={e => handleClickChart(e, index)}
              onMouseOut={e => onMouseLeave(e)}
              onMouseOver={e => onMouseOver(e, index)}
              css={pointBox(fatality)}
            >
              {dataList.map((el, index) => {
                const positionValue = (index + 1) * (100 / dataList.length);
                return <div key={`point-${index}`} css={pointStyle(positionValue)} />;
              })}
            </div>

            {selectInfo === index && (
              <div ref={infoBoxRef} css={infoBoxStyle}>
                <div style={{ width: '100%' }}>
                  <FlexBox justify={'space-between'} style={{ marginBottom: '12px' }}>
                    <span css={body3_medium}>언급비율</span>
                    <span css={body3_bold}>{checkIsInteger(el.value)}%</span>
                  </FlexBox>
                  <FlexBox justify={'space-between'}>
                    <span css={body3_medium}>치명도</span>
                    <span css={body3_bold}>{checkIsIntegerTwo(el.fatality)}</span>
                  </FlexBox>
                </div>
              </div>
            )}
          </ul>
        );
      })}
    </div>
  );
};

export default TableBarChart;
const containerStyle = css`
  width: 100%;
`;
const ulStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  //position: relative;
`;
const emptyUlStyle = css`
  border-top: none;
  position: relative;
`;
const liStyle = css`
  display: flex;
  justify-content: center;
  border-right: 1px dashed #dcdcdc;
  padding: 16px 36px;
  box-sizing: border-box;
  height: 100%;
  &:last-child {
    border-right: none;
  }
`;
const liWidthStyle = (length, fatality) => css`
  ${fatality
    ? `
  width: calc((100% - 164px) / ${length});
  `
    : `
    width: calc(100% / ${length});
  `}
`;
const emptyLiStyle = css`
  padding: 30px;
  span {
    visibility: hidden;
  }
`;
const emptyLiStyle2 = css`
  //padding: 30px;
  span {
    visibility: hidden;
  }
`;
const chartBox = fatality => css`
  position: absolute;
  left: 0px;
  bottom: -27px;
  width: ${fatality ? `calc(100% - 164px)` : '100%'};
  //width: calc(100% - 164px);
`;
const pointBox = fatality => css`
  position: absolute;
  display: flex;
  align-items: center;
  height: 16px;
  left: 0px;
  bottom: 0px;
  cursor: pointer;
  //z-index: -1;
  width: ${fatality ? `calc(100% - 164px)` : '100%'};
`;

const pointStyle = positionValue => css`
  //z-index: 2;
  width: 4px;
  height: 4px;
  position: absolute;
  left: ${positionValue - 0.2}%;
  background: #ffffff;
  border-radius: 50%;
`;
const infoBoxStyle = css`
  width: 220px;
  padding: 16px;
  margin: 0 auto;
  //overflow: scroll;
  border-radius: 8px;
  z-index: 10;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25) !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  background: white;
  top: 80px;
`;
