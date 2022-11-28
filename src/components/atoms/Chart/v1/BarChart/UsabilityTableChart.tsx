import React, { useCallback, useEffect, useRef, useState } from 'react';
import { body3_bold, body3_medium, caption2_regular, heading5_bold } from '../../../../../styles/FontStyles';
import { BasicBarChart } from '../../index';
import { basicBarTestData } from '../../../../../assets/dummy/dummyData';
import { css } from '@emotion/react';
import { checkIsInteger } from '../../../../../common/util/commonFunc';
import FlexBox from '../../../FlexBox';
import useOutsideClick from '../../../../../hooks/useOutsideClick';
import { colors } from '../../../../../styles/Common.styles';
interface PropsType {
  dataList: { name: string; value: number; fatality: number; mention: number }[];
  negative?: boolean;
  setUsabilityIndex?: any;
  usabilityIndex?: number | null;
  handleClickUsabilityIndex?: (e, index) => void;
  onMouseOver?: any;
  onMouseLeave?: any;
  activeIndex?: number | null;
}
const UsabilityTableChart = ({
  dataList,
  negative = false,
  usabilityIndex,
  setUsabilityIndex,
  handleClickUsabilityIndex,
  onMouseLeave,
  onMouseOver,
  activeIndex,
}: PropsType) => {
  const [chartData, setChartData] = useState([]);
  const usabilityRef = useRef(null);

  useOutsideClick(usabilityRef, () => {
    setUsabilityIndex(null);
  });

  useEffect(() => {
    if (dataList) {
      const copyData = [...dataList];
      const sortData = copyData.sort((a, b) => b.value - a.value);
      setChartData(sortData);
    }
  }, [dataList]);

  return (
    <div css={containerStyle}>
      <ul css={ulStyle}>
        <li css={[caption2_regular, liStyle, liWidthStyle]}>사용성 점수</li>
        <li css={[caption2_regular, liStyle, { width: '110px' }]}>치명도</li>
        <li css={[caption2_regular, liStyle, { width: '110px' }]}>언급 비율</li>
      </ul>

      {chartData?.map((el, index) => {
        return (
          <ul key={`usability-${index}`} css={[ulStyle, emptyUlStyle]}>
            <li css={[heading5_bold, liStyle, emptyLiStyle, liWidthStyle]}>
              <span>사용성 점수</span>
            </li>
            <li css={[heading5_bold, liStyle, emptyLiStyle, { width: '110px', color: colors.grey._99 }]}>{checkIsInteger(el.fatality)}</li>
            <li css={[heading5_bold, liStyle, emptyLiStyle, { borderRight: 'none', width: '110px', color: colors.grey._99 }]}>
              {checkIsInteger(el.mention)}%
            </li>
            <div
              onClick={e => handleClickUsabilityIndex(e, index)}
              onMouseOut={e => onMouseLeave(e)}
              onMouseOver={e => onMouseOver(e, index)}
              css={chartBox}
            >
              <BasicBarChart
                negative={negative}
                dataList={[el]}
                label={[<>{el.name}</>]}
                rate={checkIsInteger(el.mention) === 0 && checkIsInteger(el.fatality) === 0 ? '언급없음' : `${checkIsInteger(el.value)}점`}
                barColor={
                  checkIsInteger(el.mention) === 0 && checkIsInteger(el.fatality) === 0
                    ? colors.grey._3c
                    : activeIndex === index
                    ? '#db466a'
                    : '#E87490'
                }
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
  //position: relative;
`;
const liStyle = css`
  display: flex;
  justify-content: center;
  border-right: 1px solid #dcdcdc;
  //border-left: 1px solid #dcdcdc;
  padding: 16px 36px;
  //padding: 39px 36px;
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
  padding: 40px;
  //padding: 39px 36px;
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
  //overflow: scroll;
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
