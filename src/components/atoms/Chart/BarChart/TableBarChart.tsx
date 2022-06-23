import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import { basicBarTestData } from '../../../../assets/dummy/dummyData';
import { BasicBarChart } from '../index';
import { caption2_regular } from '../../../../styles/FontStyles';
import { chart_color } from '../../../../styles/Common.styles';

interface PropsType {
  dataList: string[];
  dataValueList: { name: string; value: number; fatality: number }[];
  negative?: boolean;
  barColor?: boolean;
  fatality?: boolean;
  name?: string;
}
const TableBarChart = ({ fatality = true, dataList, dataValueList, name, negative = false, barColor = false }: PropsType) => {
  const renderArr = useCallback(() => {
    if (name) {
      return dataValueList.filter((el, index) => el.name === name);
    } else {
      return dataValueList;
    }
  }, [dataValueList, name]);

  return (
    <div css={containerStyle}>
      <ul css={ulStyle}>
        {dataList.map((el, index) => {
          return (
            <li key={index} css={[caption2_regular, liStyle, liWidthStyle(dataList.length, fatality)]}>
              {el}
            </li>
          );
        })}
        {fatality && <li css={[caption2_regular, liStyle, { width: '164px' }]}>치명도</li>}
      </ul>

      {/*TODO: Map 함수*/}
      {renderArr()?.map((el, index) => {
        return (
          <ul key={index} css={[ulStyle, emptyUlStyle]}>
            {/*공갈박스*/}
            {dataList.map((item, index) => {
              return (
                <li key={index} css={[liStyle, liWidthStyle(dataList.length, fatality), emptyLiStyle]}>
                  <span>{item}</span>
                </li>
              );
            })}
            {/*공갈박스*/}
            {fatality && <li css={[caption2_regular, liStyle, emptyLiStyle, { borderRight: 'none', width: '164px' }]}>{el.fatality}</li>}

            <div css={chartBox(fatality)}>
              <BasicBarChart
                max={60}
                barColor={barColor ? chart_color[index] : ''}
                negative={negative}
                dataList={[el]}
                label={[<>{el.name}</>]}
                rate={`${el.value}%`}
              />
            </div>
            <div css={pointBox(fatality)}>
              {dataList.map((el, index) => {
                const positionValue = (index + 1) * (100 / dataList.length);
                return <div key={`point-${index}`} css={pointStyle(positionValue)} />;
              })}
            </div>
          </ul>
        );
      })}

      {/*<ul css={[ulStyle, emptyUlStyle]}>*/}
      {/*  {dataList.map((el, index) => {*/}
      {/*    return (*/}
      {/*      <li key={index} css={[liStyle, liWidthStyle(dataList.length), emptyLiStyle]}>*/}
      {/*        <span>{el}</span>*/}
      {/*      </li>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*  <li css={[caption2_regular, liStyle, emptyLiStyle, { borderRight: 'none', width: '164px' }]}>4.35</li>*/}
      {/*  <div css={chartBox}>*/}
      {/*    <BasicBarChart negative={negative} dataList={basicBarTestData} label={[<>기능 A</>]} rate={'49.5%'} />*/}
      {/*  </div>*/}
      {/*  <div css={pointBox}>*/}
      {/*    {dataList.map((el, index) => {*/}
      {/*      const positionValue = (index + 1) * (100 / dataList.length);*/}
      {/*      return <div css={pointStyle(positionValue)} />;*/}
      {/*    })}*/}
      {/*  </div>*/}
      {/*</ul>*/}
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
  `}//width: calc((100% - 164px) / ${length});
`;
const emptyLiStyle = css`
  padding: 30px;
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

  width: ${fatality ? `calc(100% - 164px)` : '100%'};
`;

const pointStyle = positionValue => css`
  width: 4px;
  height: 4px;
  position: absolute;
  left: ${positionValue - 0.2}%;
  background: #ffffff;
  border-radius: 50%;
`;
