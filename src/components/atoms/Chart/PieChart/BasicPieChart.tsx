import React, { useCallback, useRef, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, LabelList } from 'recharts';
import FlexBox from '../../FlexBox';
import { body3_bold, body3_medium, body3_regular, heading5_regular } from '../../../../styles/FontStyles';
import { css } from '@emotion/react';
import { chart_color, colors } from '../../../../styles/Common.styles';
import { ChangeDataListType, DataListType } from '../../../molecules/ReportTemplate/RespondentAttributesTemplate';
import { checkIsInteger } from '../../../../common/util/commonFunc';
import useOutsideClick from '../../../../hooks/useOutsideClick';

interface PropsType {
  dataList: ChangeDataListType[];
  labelPadding?: string;
  name?: string;
  labelStatus?: boolean;
  handleMouseUp?: (name, index, e) => void;
  setLabelStatus?: any;
}

const BasicPieChart = ({ dataList, labelPadding, name, labelStatus, handleMouseUp, setLabelStatus }: PropsType) => {
  const boxRef = useRef(null);

  useOutsideClick(boxRef, e => {
    setLabelStatus({
      gender: false,
      ageGrade: false,
      device: false,
    });
  });

  return (
    <div css={pieChartBox}>
      <div css={{ padding: '32px 62px 32px 62px' }}>
        <ResponsiveContainer width={96} height={96}>
          <PieChart css={hoverPieChartStyle}>
            <Pie cursor="pointer" startAngle={360} endAngle={0} data={dataList} innerRadius={30} outerRadius={45} fill="#8884d8" dataKey="value">
              {dataList?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={chart_color[index]} onClick={e => handleMouseUp(name, index, e)} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {labelStatus ? (
        <FlexBox direction={'column'} justify={'space-between'} style={{ ...mouseOverLabelStyle, marginBottom: '12px', pbckground: 'red' }}>
          {dataList?.map((el, index) => {
            return (
              // key={`rate-${index}`} justify={'space-between'}
              <div
                key={`rate-${index}`}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: index !== dataList.length - 1 ? '12px' : '' }}
              >
                <span css={body3_medium}>{el.name}</span>
                <div>
                  {el.count ? <span css={body3_regular}>({el.count}명)</span> : <span css={body3_regular}>({0}명)</span>}
                  <span css={body3_bold}> {checkIsInteger(el.value)}%</span>
                </div>
              </div>
            );
          })}
        </FlexBox>
      ) : (
        <div ref={boxRef} css={textBoxStyle(labelPadding)}>
          {dataList?.map((el, index) => {
            return (
              <FlexBox key={`name-${index}`} align={'center'} justify={'center'} style={{ width: '50%', marginBottom: '10px' }}>
                <div css={labelStyle(chart_color[index])} />
                <span css={[heading5_regular, { display: 'inline-block', padding: 'l5px' }]}>{el.name}</span>
              </FlexBox>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BasicPieChart;
const pieChartBox = css`
  width: 220px;
`;
const hoverPieChartStyle = css`
  cursor: pointer;
`;

const mouseOverLabelStyle = css`
  width: 100%;
  padding: 16px;
  margin: 0 auto;
  overflow: scroll;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
`;

const labelStyle = background => css`
  background: ${background};
  width: 12px;
  height: 12px;
  margin-right: 8px;
`;

const textBoxStyle = labelPadding => css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: ${labelPadding ? labelPadding : '24px'};
`;
