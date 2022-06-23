import React, { useCallback, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, LabelList } from 'recharts';
import FlexBox from '../../FlexBox';
import { body3_bold, body3_medium, body3_regular, heading5_regular } from '../../../../styles/FontStyles';
import { css } from '@emotion/react';
import { chart_color, colors } from '../../../../styles/Common.styles';
import { ChangeDataListType, DataListType } from '../../../molecules/ReportTemplate/RespondentAttributesTemplate';

interface PropsType {
  dataList: ChangeDataListType[];
  labelPadding?: string;
  name?: string;
  labelStatus?: boolean;
  handleMouseUp?: (name, index) => void;
}

const BasicPieChart = ({ dataList, labelPadding, name, labelStatus, handleMouseUp }: PropsType) => {
  return (
    <div css={pieChartBox}>
      <div css={{ padding: '32px 62px 32px 62px' }}>
        <ResponsiveContainer width={96} height={96}>
          <PieChart css={hoverPieChartStyle}>
            <Pie cursor="pointer" startAngle={360} endAngle={0} data={dataList} innerRadius={30} outerRadius={45} fill="#8884d8" dataKey="value">
              {dataList?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={chart_color[index]} onClick={() => handleMouseUp(name, index)} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {labelStatus ? (
        <FlexBox direction={'column'} justify={'space-between'} style={{ ...mouseOverLabelStyle, marginBottom: '12px' }}>
          {dataList?.map((el, index) => {
            return (
              <FlexBox key={`rate-${index}`} justify={'space-between'} style={{ marginBottom: index !== dataList.length - 1 ? '12px' : '' }}>
                <span css={body3_medium}>{el.name}</span>
                <div>
                  {el.count ? <span css={body3_regular}>({el.count}명)</span> : null}
                  <span css={body3_bold}> {el.value}%</span>
                </div>
              </FlexBox>
            );
          })}
        </FlexBox>
      ) : (
        <FlexBox justify={'space-between'} wrap={'wrap'} style={{ width: '100%', padding: labelPadding ? labelPadding : '24px' }}>
          {dataList?.map((el, index) => {
            return (
              <FlexBox key={`name-${index}`} align={'center'} justify={'center'} style={{ width: '50%', marginBottom: '10px' }}>
                <div css={labelStyle(chart_color[index])} />
                <span css={heading5_regular}>{el.name}</span>
              </FlexBox>
            );
          })}
        </FlexBox>
      )}

      {/*<FlexBox justify={'space-between'} wrap={'wrap'} style={{ width: '100%', padding: labelPadding ? labelPadding : '24px' }}>*/}
      {/*  {dataList?.map((el, index) => {*/}
      {/*    if (labelStatus) {*/}
      {/*      return (*/}
      {/*        <FlexBox key={`name-${index}`} align={'center'} justify={'center'} style={mouseOverLabelStyle}>*/}
      {/*          \*/}
      {/*        </FlexBox>*/}
      {/*      );*/}
      {/*    } else {*/}
      {/*      return (*/}
      {/*        <FlexBox key={`name-${index}`} align={'center'} justify={'center'} style={{ width: '50%', marginBottom: '10px' }}>*/}
      {/*          <div css={labelStyle(chart_color[index])} />*/}
      {/*          <span css={heading5_regular}>{el.name}</span>*/}
      {/*        </FlexBox>*/}
      {/*      );*/}
      {/*    }*/}
      {/*  })}*/}
      {/*</FlexBox>*/}
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
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
`;

const labelStyle = background => css`
  background: ${background};
  width: 12px;
  height: 12px;
  margin-right: 8px;
`;
