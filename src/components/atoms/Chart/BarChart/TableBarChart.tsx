import React from 'react';
import { css } from '@emotion/react';
import { basicBarTestData } from '../../../../assets/dummy/dummyData';
import { BasicBarChart } from '../index';
import { caption2_regular } from '../../../../styles/FontStyles';

interface PropsType {
  dataList: string[];
  negative?: boolean;
}
const TableBarChart = ({ dataList, negative = false }: PropsType) => {
  return (
    <div css={containerStyle}>
      <ul css={ulStyle}>
        {dataList.map((el, index) => {
          return (
            <li key={index} css={[caption2_regular, liStyle, liWidthStyle(dataList.length)]}>
              {el}
            </li>
          );
        })}
        <li css={[caption2_regular, liStyle, { width: '164px' }]}>치명도</li>
      </ul>
      <ul css={[ulStyle, emptyUlStyle]}>
        {dataList.map((el, index) => {
          return (
            <li key={index} css={[liStyle, liWidthStyle(dataList.length), emptyLiStyle]}>
              <span>{el}qwe</span>
            </li>
          );
        })}
        <li css={[caption2_regular, liStyle, emptyLiStyle, { borderRight: 'none', width: '164px' }]}>4.35</li>
        <div css={chartBox}>
          <BasicBarChart negative={negative} dataList={basicBarTestData} label={[<>기능 A</>]} rate={'49.5%'} />
        </div>
        <div css={pointBox}>
          {dataList.map((el, index) => {
            const positionValue = (index + 1) * (100 / dataList.length);
            return <div css={pointStyle(positionValue)} />;
          })}
        </div>
      </ul>

      {/*<ul css={[ulStyle, emptyUlStyle]}>*/}
      {/*  {dataList.map((el, index) => {*/}
      {/*    return (*/}
      {/*      <li key={index} css={[liStyle, liWidthStyle(dataList.length), emptyLiStyle]}>*/}
      {/*        <span>{el}qwe</span>*/}
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

      {/*<ul css={[ulStyle, emptyUlStyle]}>*/}
      {/*  {dataList.map((el, index) => {*/}
      {/*    return (*/}
      {/*      <li key={index} css={[liStyle, liWidthStyle(dataList.length), emptyLiStyle]}>*/}
      {/*        <span>{el}qwe</span>*/}
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
const liWidthStyle = length => css`
  width: calc((100% - 164px) / ${length});
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
  width: calc(100% - 164px);
`;
const pointBox = css`
  position: absolute;
  display: flex;
  align-items: center;
  height: 16px;
  left: 0px;
  bottom: 0px;
  width: calc(100% - 164px);
`;

const pointStyle = positionValue => css`
  width: 4px;
  height: 4px;
  position: absolute;
  left: ${positionValue - 0.2}%;
  background: #ffffff;
  border-radius: 50%;
`;
