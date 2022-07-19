import React, { useCallback, useRef, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import { basicBarTestData, basicBarTestData3 } from '../../../../assets/dummy/dummyData';
import FlexBox from '../../FlexBox';
import { css } from '@emotion/react';
import { body3_bold, body3_medium, heading5_bold, heading5_medium, heading5_regular } from '../../../../styles/FontStyles';
import { colors } from '../../../../styles/Common.styles';
import { checkIsInteger } from '../../../../common/util/commonFunc';
import useOutsideClick from '../../../../hooks/useOutsideClick';
import ReportShortAnswerQuestionLayerPopup from '../../ReportShortAnswerQuestionLayerPopup';
interface PropsType {
  selectedIndex?: any;
  setSelectedIndex?: any;
  dataList: { count: number; name: string; multipleAnswerData: string[]; value: number };
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
  setSelectedIndex,
  selectedIndex,
  handleClickIndex,
}: PropsType) => {
  const boxRef = useRef(null);

  useOutsideClick(boxRef, () => {
    setSelectedIndex(null);
  });

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
              cursor={'pointer'}
              fill={barColor}
              onClick={e => handleClickIndex(e, index)}
              onMouseOut={e => onMouseLeave(e)}
              onMouseOver={e => onMouseOver(e, index)}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      {selectedIndex === index && (
        // <ReportShortAnswerQuestionLayerPopup
        //   data={layerData}
        //   count={count}
        //   display={stackbarIndex === props.detailIndex}
        //   setStackbarIndex={setStackbarIndex}
        // />

        <div ref={boxRef} css={infoBoxStyle}>
          <div style={{ width: '100%' }}>
            <FlexBox justify={'space-between'} align={'center'} style={{ padding: '16px' }}>
              <span css={heading5_medium}>{dataList.name}</span>
              <div>
                <span css={[heading5_medium, { color: colors.grey._99 }]}>{checkIsInteger(dataList.count)}명</span>&nbsp;
                <span css={heading5_bold}>{checkIsInteger(dataList.value)}%</span>
              </div>
            </FlexBox>
            <ul
              className={'scrollType1'}
              css={{ background: colors.grey._fa, width: '100%', height: 'auto', maxHeight: '274px', wordBreak: 'keep-all', padding: '16px 24px' }}
            >
              {dataList?.multipleAnswerData?.map((item, index) => {
                return (
                  <li
                    css={[
                      heading5_regular,
                      {
                        marginBottom: '16px',
                        height: 'auto',
                        listStyle: 'inside',
                        textIndent: '-20px',
                        paddingLeft: '20px',
                      },
                    ]}
                    key={`raw-${index}`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
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
  //position: relative;
`;
const infoBoxStyle = css`
  width: 658px;
  //padding: 16px;
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
  top: 10px;
  left: 50px;
`;
