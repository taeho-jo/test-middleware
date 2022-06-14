import React, { Fragment } from 'react';
import FlexBox from '../../FlexBox';
import { css } from '@emotion/react';
import { body3_medium, caption1_bold, heading5_bold } from '../../../../styles/FontStyles';
import { colors } from '../../../../styles/Common.styles';

const data = [
  { title: '1', content: '리포트 전체 요약' },
  { title: 'Task 2', content: '일자리 지원하기 (도움 받기)' },
  { title: 'Q1', content: 'UX 리서치와 관련해서 필요한 정보를 수집하는 채널을 비중이 높은 순으로 최대 3개까지 선택해주세요.' },
  { title: 'Q1', content: 'UX 리서치와 관련해서 필요한 정보를 수집하는 채널을 비중이 높은 순으로 최대 3개까지 선택해주세요.' },
];

const TestResults = () => {
  return (
    <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={testInfoBoxStyle}>
      <span css={heading5_bold}>테스트 결과</span>
      {data.map((el, index) => {
        return (
          <Fragment key={index}>
            <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={el.title.includes('Task') ? infoBox2 : infoBox}>
              <div css={[caption1_bold, { marginBottom: '8px' }]}>{el.title}</div>
              <div css={[body3_medium, { height: 'auto' }]}>{el.content}</div>
            </FlexBox>
          </Fragment>
        );
      })}
    </FlexBox>
  );
};

export default TestResults;

const testInfoBoxStyle = css`
  padding: 32px 24px 16px 24px;
`;
const infoBox = css`
  background: ${colors.grey._fa};
  border: 1px solid #dcdcdc;
  border-radius: 16px;
  margin: 8px 0;
  padding: 16px;
  height: auto;
`;
const infoBox2 = css`
  background: ${colors.white};
  border: 1px solid ${colors.grey._3c};
  border-radius: 16px;
  margin: 8px 0;
  padding: 16px;
  height: auto;
`;
