import React from 'react';
import FlexBox from '../../FlexBox';
import { css } from '@emotion/react';
import { body3_bold, caption1_bold, caption1_regular, heading5_bold } from '../../../../styles/FontStyles';
import { colors } from '../../../../styles/Common.styles';

const TestInfoBox = ({ reportData }) => {
  console.log(reportData, 'S');
  return (
    <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={testInfoBoxStyle}>
      <span css={heading5_bold}>테스트정보</span>
      <FlexBox style={infoBox} direction={'column'} align={'flex-start'} justify={'flex-start'}>
        <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'}>
          <span css={[caption1_bold, { marginBottom: '8px', color: colors.grey._66 }]}>응답수</span>
          <span css={body3_bold}>{reportData?.answerTotalCount}건</span>
        </FlexBox>

        <FlexBox style={{ marginTop: '24px' }} direction={'column'} align={'flex-start'} justify={'flex-start'}>
          <span css={[caption1_bold, { marginBottom: '8px' }]}>표본오차</span>
          <FlexBox justify={'flex-start'} align={'center'}>
            <div css={{ marginRight: '32px' }}>
              <span css={body3_bold}>{reportData?.ninetySamplingError}</span>
              <br />
              <span css={caption1_regular}>(95% 신뢰수준)</span>
            </div>
            <div>
              <span css={body3_bold}>{reportData?.eightySamplingError}</span>
              <br />
              <span css={caption1_regular}>(80% 신뢰수준)</span>
            </div>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default TestInfoBox;

const testInfoBoxStyle = css`
  padding: 32px 24px 16px 24px;
`;
const infoBox = css`
  background: ${colors.grey._ec};
  border-radius: 16px;
  margin-top: 8px;
  padding: 16px;
`;
