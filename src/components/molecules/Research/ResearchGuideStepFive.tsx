import React from 'react';
import { css } from '@emotion/react';
import FlexBox from '../../atoms/FlexBox';
import { colors } from '../../../styles/Common.styles';
import { heading3_medium, heading4_bold, heading5_medium } from '../../../styles/FontStyles';
import Icon from '../../atoms/Icon';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { calcRespondentCount, calcRespondentFee, calcResearchSolutionFee, missionAdditionalCompensation } from '../../../common/util/commonFunc';

const ResearchGuideStepFive = () => {
  const RESEARCH_TYPE = useSelector<ReducerType, string>(state => state.researchCreate?.detailData?.researchType);
  const DETAIL_INFO = useSelector<ReducerType, any>(state => state.researchCreate?.detailData);
  const calcEstimatedAmount = () => {
    if (RESEARCH_TYPE === 'UI_DIAGNOSIS') {
      const min = 500000 + (3000 + missionAdditionalCompensation(DETAIL_INFO?.detailDesignInfo?.length) * 50);
      const max = 500000 + (15000 + missionAdditionalCompensation(DETAIL_INFO?.detailDesignInfo?.length) * 50);
      return `${min.toLocaleString()}원 ~ ${max.toLocaleString()}원`;
    }
    if (RESEARCH_TYPE === 'FGD') {
      const min = 1000000 + (300000 * (DETAIL_INFO?.respondentInfo?.length - 1) + 140000);
      const max = 1000000 + (300000 * (DETAIL_INFO?.respondentInfo?.length - 1) + 600000);
      return `${min.toLocaleString()}원 ~ ${max.toLocaleString()}원`;
    }
    if (RESEARCH_TYPE === 'UX_POSITION_ANALYSIS') {
      const min = 600000 + 450000;
      const max = 600000 + 1200000;
      return `${min.toLocaleString()}원 ~ ${max.toLocaleString()}원`;
    }
    if (RESEARCH_TYPE === 'HYPOTHESIS_VERIFICATION') {
      const min = 500000 + 100000 * (1 + DETAIL_INFO?.detailDesignInfo?.length * 0.2);
      const max = 500000 + 1000000 * (1 + DETAIL_INFO?.detailDesignInfo?.length * 0.2);
      return `${min.toLocaleString()}원 ~ ${max.toLocaleString()}원`;
    }
    if (RESEARCH_TYPE === 'SHORT_SURVEY') {
      const min = 10000 + 10000;
      const max = 10000 + 100000;
      return `${min.toLocaleString()}원 ~ ${max.toLocaleString()}원`;
    }
  };

  return (
    <FlexBox
      direction={'column'}
      width={'100%'}
      height={'500px'}
      style={[selectContainer, { border: '1px solid #dcdcdc', background: colors.grey._fa }]}
    >
      <div css={[topContainer, { background: '#68A0F4' }]}>
        <span
          css={[
            heading3_medium,
            css`
              color: white;
            `,
          ]}
        >
          Diby 매니저가 추가로 알아야할 사항이 있다면
          <br />
          뭐든지 상세하게 입력해주세요.
          <br />
          <br />
          예시 ) 원하시는 리서치 시작일자, 리서치 배경 등등
        </span>
      </div>
      <div css={bottomContainer}>
        <FlexBox justify={'space-between'} align={'center'} style={{ marginBottom: '20px' }}>
          <span css={heading4_bold}>예상 비용 (VAT 별도)</span>
          <span css={heading4_bold}>{calcEstimatedAmount()}</span>
        </FlexBox>

        <FlexBox justify={'space-between'} align={'center'} style={{ marginBottom: '8px' }}>
          <span css={heading5_medium}>Diby 사용료</span>
          <span css={heading5_medium}>{calcResearchSolutionFee(RESEARCH_TYPE)}</span>
        </FlexBox>
        <FlexBox justify={'space-between'} align={'center'} style={{ marginBottom: '8px' }}>
          <span css={heading5_medium}>응답자 보상 비용</span>
          <span css={heading5_medium}>{calcRespondentFee(RESEARCH_TYPE)}</span>
        </FlexBox>
        <FlexBox justify={'space-between'} align={'center'} style={{ marginBottom: '8px' }}>
          <span css={heading5_medium}>추천하는 응답자수</span>
          <span css={heading5_medium}>{calcRespondentCount(RESEARCH_TYPE)}</span>
        </FlexBox>

        <div css={infoContainer}>
          <span css={[heading5_medium, infoText]}>
            리서치 설계는 무상으로 진행되며, 완성된 설계안을 바탕으로
            <br />
            리서치 진행을 원하시는 경우에만 결제가 진행됩니다.
          </span>
        </div>
      </div>
    </FlexBox>
  );
};
export default ResearchGuideStepFive;

const topContainer = css`
  height: 250px;
  width: 100%;
  border-bottom: 1px solid #dcdcdc;
  background: #68a0f4;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const bottomContainer = css`
  height: 250px;
  width: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
`;

const selectContainer = css`
  border: 1px solid #dcdcdc;
  border-radius: 16px;
  margin-top: 25px;
  //padding: 56px;
`;

const infoContainer = css`
  background: ${colors.grey._f7};
  padding: 8px 16px;
  text-align: center;
  border-radius: 8px;
  margin-top: 40px;
`;
const infoText = css`
  white-space: pre-wrap;
`;
