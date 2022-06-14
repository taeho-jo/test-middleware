import React from 'react';
import { caption2_regular } from '../../../../styles/FontStyles';
import { BasicBarChart } from '../index';
import { basicBarTestData } from '../../../../assets/dummy/dummyData';
import { css } from '@emotion/react';
interface PropsType {
  dataList: { name: string; value: number; fatality: number; mention: number }[];
  negative?: boolean;
}
const UsabilityTableChart = ({ dataList, negative = false }: PropsType) => {
  return (
    <div css={containerStyle}>
      <ul css={ulStyle}>
        <li css={[caption2_regular, liStyle, liWidthStyle]}>사용성 점수</li>
        <li css={[caption2_regular, liStyle, { width: '110px' }]}>치명도</li>
        <li css={[caption2_regular, liStyle, { width: '110px' }]}>언급 비율</li>
      </ul>

      {dataList.map((el, index) => {
        return (
          <ul css={[ulStyle, emptyUlStyle]}>
            <li css={[caption2_regular, liStyle, emptyLiStyle, liWidthStyle]}>
              <span>사용성 점수</span>
            </li>
            <li css={[caption2_regular, liStyle, emptyLiStyle, { width: '110px' }]}>{el.fatality}</li>
            <li css={[caption2_regular, liStyle, emptyLiStyle, { borderRight: 'none', width: '110px' }]}>{el.mention}%</li>
            <div css={chartBox}>
              <BasicBarChart negative={negative} dataList={[el]} label={[<>{el.name}</>]} rate={`${el.value}%`} />
            </div>
          </ul>
        );
      })}
      {/*<ul css={[ulStyle, emptyUlStyle]}>*/}
      {/*  <li css={[caption2_regular, liStyle, emptyLiStyle, liWidthStyle]}>*/}
      {/*    <span>사용성 점수</span>*/}
      {/*  </li>*/}
      {/*  <li css={[caption2_regular, liStyle, emptyLiStyle, { width: '110px' }]}>4.35</li>*/}
      {/*  <li css={[caption2_regular, liStyle, emptyLiStyle, { borderRight: 'none', width: '110px' }]}>4.35</li>*/}
      {/*  <div css={chartBox}>*/}
      {/*    <BasicBarChart negative={negative} dataList={basicBarTestData} label={[<>기능 A</>]} rate={'49.5%'} />*/}
      {/*  </div>*/}
      {/*</ul>*/}
    </div>
  );
};

export default UsabilityTableChart;
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
  border-right: 1px solid #dcdcdc;
  padding: 16px 36px;
  box-sizing: border-box;
  height: 100%;
  &:last-child {
    border-right: none;
  }
`;
const liWidthStyle = css`
  width: calc(100% - 240px);
`;
const emptyLiStyle = css`
  padding: 36px;
  span {
    visibility: hidden;
  }
`;
const chartBox = css`
  position: absolute;
  left: 0px;
  bottom: -27px;
  width: calc(100% - 240px);
`;
