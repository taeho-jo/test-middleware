import React from 'react';
import { css } from '@emotion/react';
import FlexBox from '../../../../../components/atoms/FlexBox';
import { heading1_bold, heading4_bold, heading4_regular } from '../../../../../styles/FontStyles';
import BasicButton from '../../../../../components/atoms/Button/BasicButton';

import Ui from '/public/assets/png/uiFrame.png';
import Customer from '/public/assets/png/customerFrame.png';
import Ux from '/public/assets/png/uxFrame.png';
import Senario from '/public/assets/png/senarioFrame.png';
import Image from 'next/image';
import { colors } from '../../../../../styles/Common.styles';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../../../store/reducers';
import { useRouter } from 'next/router';
import { isShow } from '../../../../../store/reducers/modalReducer';
import { resetRecommendationResult } from '../../../../../store/reducers/researchRecommendationReducer';
import { updateRecommendationStep } from '../../../../../store/reducers/researchCreateReducer';
import { setRedirectPath } from '../../../../../store/reducers/commonReducer';
import { Cookies } from 'react-cookie';

const RESULT_OBJ = {
  UI_DIAGNOSIS: {
    title: '사용성 테스트',
    content: `앱 또는 웹사이트에서 고객이 느낀 불편함을\n인터페이스 10 요소로 분류하여 진단합니다.`,
    tag: ['#인터페이스 진단', '#사용성 확인', '#디자인 10 요소'],
    image: Ui,
  },
  FGD: {
    title: 'FGD',
    content: `그룹채팅 방식으로 그룹인터뷰를 진행합니다.\n챗봇 모더레이터가 질문을 하고,\n응답자별 참여도를 관리합니다.`,
    tag: ['#이탈, 동기부여 분석', '#경쟁사 분석', '#고객라이프스타일 파악', '#그룹인터뷰'],
    image: Customer,
  },
  UX_POSITION_ANALYSIS: {
    title: 'UX 포지션 분석',
    content: `고객에게 전달하고자 하는 제품/서비스의 전략과\n고객이 실제로 인식한 경험을 비교 분석합니다.`,
    tag: ['#UX 전략 점검', '#고객-제품 인식 검증'],
    image: Ux,
  },
  HYPOTHESIS_VERIFICATION: {
    title: '가설 검증',
    content: `상황 시나리오를 설정하고\n고객의 인식, 의향, 선호도 등을 확인합니다.\n고객에 대한 가설을 검증할 수 있습니다.`,
    tag: ['#고객 가설 검증', '#사용자 인식 파악'],
    image: Senario,
  },
  SHORT_SURVEY: {
    title: '짧은 설문',
    content: `디자인 시안, 광고 시안, UX writing 등의\n선호도를 잠재고객을 대상으로 빠르게\n확인 할 수 있습니다.\n\nA/B 안을 선택하게 하고,\n그 이유를 주관식 응답으로 받아보세요.`,
    tag: ['#디자인의사결정', '#브랜드 인식'],
    image: Customer,
  },
};

const Result = () => {
  const dispatch = useDispatch();
  const recommendationResult = useSelector<ReducerType, any>(state => state.researchRecommendation.recommendationResult);
  const router = useRouter();
  const handleMovePage = () => {
    const cookies = new Cookies();
    const token = cookies.get('accessToken');
    if (token) {
      router.push('/admin/research/create');
    } else {
      dispatch(isShow({ isShow: true, type: 'login' }));
    }
  };

  const handleResetRecommendation = () => {
    router.push('/admin/research/recommendation');
    dispatch(setRedirectPath(null));
    // dispatch(resetRecommendationResult())
  };

  return (
    <div css={resultMainContainer}>
      <div css={resultContentBox}>
        <span
          css={[
            heading1_bold,
            css`
              display: inline-block;
              margin-top: 66px;
            `,
          ]}
        >
          Diby가 추천하는 리서치 입니다.
        </span>

        {/*Contents영역*/}
        <FlexBox
          height={'420px'}
          css={css`
            margin: 56px 0 40px 0;
          `}
        >
          <FlexBox style={{ paddingLeft: '52px', paddingRight: '40px' }} height={'100%'} direction={'column'} justify={'space-between'}>
            <FlexBox direction={'column'} align={'flex-start'}>
              <span css={titleStyle}>{RESULT_OBJ?.[recommendationResult?.recommendResearchType]?.title}</span>

              <span
                css={[
                  heading4_regular,
                  css`
                    white-space: pre-wrap;
                  `,
                  marginStyle('24px'),
                ]}
              >
                {RESULT_OBJ?.[recommendationResult?.recommendResearchType]?.content}
              </span>
              <span css={heading4_regular}></span>
              {RESULT_OBJ?.[recommendationResult?.recommendResearchType]?.tag?.map((item, index) => {
                return (
                  <span key={index} css={[heading4_bold, marginStyle(index === 0 ? '24px' : '4px')]}>
                    {item}
                  </span>
                );
              })}
              {/*<span css={[heading4_bold, marginStyle('24px')]}>#인터페이스 진단</span>*/}
              {/*<span css={[heading4_bold, marginStyle('4px')]}>#사용성 확인</span>*/}
              {/*<span css={[heading4_bold, marginStyle('4px')]}>#디자인 10 요소</span>*/}
            </FlexBox>
          </FlexBox>
          <Image src={RESULT_OBJ?.[recommendationResult?.recommendResearchType]?.image} alt={'ui frame'} objectFit={'fill'} />
        </FlexBox>

        <FlexBox direction={'column'}>
          <BasicButton
            text={'추천받은 유저 리서치 무료로 설계받기'}
            onClick={handleMovePage}
            style={css`
              margin-bottom: 29px;
              max-width: 610px;
            `}
          />
          <span
            onClick={handleResetRecommendation}
            css={[
              heading4_bold,
              css`
                cursor: pointer;
              `,
            ]}
          >
            리서치 추천 다시 받기
          </span>
        </FlexBox>
      </div>
    </div>
  );
};

export default Result;

const resultMainContainer = css`
  margin-top: 72px;
  width: 100%;
  height: calc(100vh - 72px);
  min-width: 1440px;
  //background: yellow;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const resultContentBox = css`
  //background: orangered;
  width: 100%;
  max-width: 760px;
  min-width: 760px;
`;
const titleStyle = css`
  color: ${colors.grey._3c};
  font-size: 32px;
  line-height: 30px;
  font-weight: 700;
`;
const marginStyle = margin => css`
  margin-top: ${margin};
`;
