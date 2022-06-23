import React, { useEffect, useState } from 'react';
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
import BrandEvaluationTemplate from '../../../components/molecules/ReportTemplate/BrandEvaluationTemplate';
import { reportData } from '../../../assets/dummy/testReport';
import { useQuery, useQueryClient } from 'react-query';
import { fetchReportDetail } from '../../../api/reportApi';
import { fetchRefreshToken } from '../../../api/authApi';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setReportData } from '../../../store/reducers/reportReducer';

const Report = ({ params }) => {
  const { id } = params;
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();

  const { data, isLoading } = useQuery(['fetchReportDetail', id], () => fetchReportDetail(id, '', ''), {
    onError: (e: any) => {
      const errorData = e.response.data;
      if (errorData.code === 'E0008') {
        queryClient.setQueryData(['fetchRefreshToken'], fetchRefreshToken);
        queryClient.invalidateQueries(['fetchReportDetail', id]);
      }
      if (errorData.code === 'E0007') {
        localStorage.clear();
        router.push('/');
      }
    },
    select: data => {
      dispatch(setReportData(data.data));
      return data.data;
    },
  });

  return (
    <div css={originTestBox}>
      <div css={testBox}>
        {/* 응답자 특성 템플릿 */}
        <RespondentAttributesTemplate dataList={data?.answerInfoSection} />
        <div css={sortationArea} />

        {/* UI 진단 전체 요약 */}
        <UiOverallSummaryTemplate dataList={data?.S1?.uiSummerySection} />
        <div css={sortationArea} />

        {/* 기능별 사용성 비교 */}
        <UsabilityByFeatureTemplate dataList={data?.S1?.uiSummerySection} />
        {/*<div css={sortationArea} />*/}

        {/* 기능별 상세 내용 */}
        {/*<FeatureSpecificDetailTemplate />*/}
        {/*<div css={sortationArea} />*/}

        {/* 서비스 전체 사용성 평가*/}
        <ServiceOverallUsabilityTemplate dataList={data?.S1?.uiSummerySection} />
        <div css={sortationArea} />

        {/*/!* 순 추천 고객 지수(NPS) *!/*/}
        {/*<NpsTemplate />*/}
        {/*<div css={sortationArea} />*/}

        {/*/!*일반 척도형 그래프*!/*/}
        {/*<GeneralScaleTypeTemplate />*/}
        {/*<div css={sortationArea} />*/}

        {/*/!*적정 가격 평가*!/*/}
        {/*<PriceEvaluationTemplate />*/}
        {/*<div css={sortationArea} />*/}

        {/*/!*브랜드 평가*!/*/}
        {/*<BrandEvaluationTemplate />*/}
        {/*<div css={sortationArea} />*/}

        {/*/!*문제 해결(동기 부여)*!/*/}
        {/*<TroublesShootingTemplate />*/}
        {/*<div css={sortationArea} />*/}

        {/*추가 기능 언급*/}
        <AddOnFeature originDataList={data?.S1?.uiSummerySection.missionFatality} title={'서비스 전체 미션별 완성도 피드백'} />
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

export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}
