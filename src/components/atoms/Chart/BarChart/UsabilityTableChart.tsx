import React, { useRef } from 'react';
import { body3_bold, body3_medium, caption2_regular } from '../../../../styles/FontStyles';
import { BasicBarChart } from '../index';
import { basicBarTestData } from '../../../../assets/dummy/dummyData';
import { css } from '@emotion/react';
import { checkIsInteger } from '../../../../common/util/commonFunc';
import FlexBox from '../../FlexBox';
import useOutsideClick from '../../../../hooks/useOutsideClick';
interface PropsType {
  dataList: { name: string; value: number; fatality: number; mention: number }[];
  negative?: boolean;
  setUsabilityIndex?: any;
  usabilityIndex?: number | null;
  handleClickUsabilityIndex?: (e, index) => void;
}
const UsabilityTableChart = ({ dataList, negative = false, usabilityIndex, setUsabilityIndex, handleClickUsabilityIndex }: PropsType) => {
  const usabilityRef = useRef(null);
  useOutsideClick(usabilityRef, () => {
    setUsabilityIndex(null);
  });

  return (
    <div css={containerStyle}>
      <ul css={ulStyle}>
        <li css={[caption2_regular, liStyle, liWidthStyle]}>사용성 점수</li>
        <li css={[caption2_regular, liStyle, { width: '110px' }]}>치명도</li>
        <li css={[caption2_regular, liStyle, { width: '110px' }]}>언급 비율</li>
      </ul>

      {dataList?.map((el, index) => {
        return (
          <ul key={`usability-${index}`} css={[ulStyle, emptyUlStyle]}>
            <li css={[caption2_regular, liStyle, emptyLiStyle, liWidthStyle]}>
              <span>사용성 점수</span>
            </li>
            <li css={[caption2_regular, liStyle, emptyLiStyle, { width: '110px' }]}>{checkIsInteger(el.fatality)}</li>
            <li css={[caption2_regular, liStyle, emptyLiStyle, { borderRight: 'none', width: '110px' }]}>{checkIsInteger(el.mention)}%</li>
            <div onClick={e => handleClickUsabilityIndex(e, index)} css={chartBox}>
              <BasicBarChart
                negative={negative}
                dataList={[el]}
                label={[<>{el.name}</>]}
                rate={`${checkIsInteger(el.value)}점`}
                barColor={'#E87490'}
              />
            </div>

            {usabilityIndex === index && (
              <div ref={usabilityRef} css={infoBoxStyle}>
                <div style={{ width: '100%' }}>
                  <FlexBox justify={'space-between'} style={{ marginBottom: '12px' }}>
                    <span css={body3_medium}>사용성 점수</span>
                    <span css={body3_bold}>{checkIsInteger(el.value)}점</span>
                  </FlexBox>
                  <FlexBox justify={'space-between'} style={{ marginBottom: '12px' }}>
                    <span css={body3_medium}>치명도</span>
                    <span css={body3_bold}>{checkIsInteger(el.fatality)}</span>
                  </FlexBox>
                  <FlexBox justify={'space-between'}>
                    <span css={body3_medium}>언급 비율</span>
                    <span css={body3_bold}>{checkIsInteger(el.mention)}%</span>
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
  position: relative;
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
`;
