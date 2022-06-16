import React from 'react';
import withTokenAuth from '../../../hoc/withTokenAuth';
import { css } from '@emotion/react';
import {
  AddOnFeature,
  FeatureSpecificDetailTemplate,
  GeneralScaleTypeTemplate,
  NpsTemplate,
  PriceEvaluationTemplate,
  RespondentAttributesTemplate,
  ServiceOverallUsabilityTemplate,
  TroublesShootingTemplate,
  UiOverallSummaryTemplate,
  UsabilityByFeatureTemplate,
} from '../../../components/molecules/ReportTemplate';
import { colors } from '../../../styles/Common.styles';
import BrandEvaluationTemplate from '../../../components/molecules/ReportTemplate/BrandEvaluationTemplate';

const Report = () => {
  return (
    <div css={originTestBox}>
      <div css={testBox}>
        {/* 응답자 특성 템플릿 */}
        <RespondentAttributesTemplate />
        <div css={sortationArea} />

        {/* UI 진단 전체 요약 */}
        <UiOverallSummaryTemplate />
        <div css={sortationArea} />

        {/* 기능별 사용성 비교 */}
        <UsabilityByFeatureTemplate />
        <div css={sortationArea} />

        {/* 기능별 상세 내용 */}
        <FeatureSpecificDetailTemplate />
        <div css={sortationArea} />

        {/* 서비스 전체 사용성 평가*/}
        <ServiceOverallUsabilityTemplate />
        <div css={sortationArea} />

        {/* 순 추천 고객 지수(NPS) */}
        <NpsTemplate />
        <div css={sortationArea} />

        {/*일반 척도형 그래프*/}
        <GeneralScaleTypeTemplate />
        <div css={sortationArea} />

        {/*적정 가격 평가*/}
        <PriceEvaluationTemplate />
        <div css={sortationArea} />

        {/*브랜드 평가*/}
        <BrandEvaluationTemplate />
        <div css={sortationArea} />

        {/*문제 해결(동기 부여)*/}
        <TroublesShootingTemplate />
        <div css={sortationArea} />

        {/*추가 기능 언급*/}
        <AddOnFeature />
        <div css={sortationArea} />
      </div>
    </div>
  );
};

// export default withTokenAuth(Report, false);
export default Report;
const originTestBox = css`
  height: calc(100vh - 72px);
  overflow: scroll;
  position: relative;
`;
const testBox = css`
  //position: sticky;
  //top: 0;
`;
const sortationArea = css`
  width: 100%;
  height: 16px;
  background: #dcdcdc;
`;
