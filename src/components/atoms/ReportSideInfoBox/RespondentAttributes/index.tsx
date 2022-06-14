import React, { Fragment } from 'react';
import { body3_bold, body3_regular, caption1_bold, caption1_regular, heading5_bold } from '../../../../styles/FontStyles';
import FlexBox from '../../FlexBox';
import { colors } from '../../../../styles/Common.styles';
import { css } from '@emotion/react';

const data = [
  { value: '성별', children: [] },
  { value: '연령대', children: [] },
  { value: '보유 기기', children: [] },
  {
    value: '추가 조건',
    children: [
      { value: '중고차 구매자', children: [] },
      { value: '중고차 판매자', children: [] },
    ],
  },
];

const RespondentAttributes = () => {
  return (
    <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={testInfoBoxStyle}>
      <span css={heading5_bold}>응답자 특성</span>
      <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={infoBox}>
        <ul>
          {data.map((el, index) => {
            return (
              <Fragment key={index}>
                <li css={[liStyle, body3_regular]}>{el.value}</li>
                {el?.children.map((item, index) => {
                  return (
                    <ul key={`children-${index}`}>
                      <li css={[childrenLiStyle, caption1_regular]}>{item.value}</li>
                    </ul>
                  );
                })}
              </Fragment>
            );
          })}
        </ul>
      </FlexBox>
    </FlexBox>
  );
};

export default RespondentAttributes;

const testInfoBoxStyle = css`
  padding: 32px 24px 16px 24px;
`;
const infoBox = css`
  background: ${colors.grey._fa};
  border: 1px solid #dcdcdc;
  border-radius: 16px;
  margin-top: 8px;
  padding: 16px;
`;
const liStyle = css`
  list-style: inside;
  margin-bottom: 8px;
`;
const childrenLiStyle = css`
  list-style: inside;
  margin-left: 10px;
  margin-bottom: 4px;
`;
