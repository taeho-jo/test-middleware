import React, { Fragment, useCallback, useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import {
  setReportData,
  updateCommentData,
  updateFilterFail,
  updateFilterFlied,
  updateFilterValues,
  updateRawData,
} from '../../../store/reducers/reportReducer';
import { ReducerType } from '../../../store/reducers';
import LongQuestionTemplate from '../../../components/molecules/ReportTemplate/LongQuestionTemplate';
import MultipleQuestionTemplate from '../../../components/molecules/ReportTemplate/MultipleQuestionTemplate';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../common/types/commonTypes';
import { isShow } from '../../../store/reducers/modalReducer';

const Report = ({ params }) => {
  const { id } = params;
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const filterFlied = useSelector<ReducerType, any>(state => state.report.filter.filterFlied);
  const filterValues = useSelector<ReducerType, any>(state => state.report.filter.filterValues);
  const filterFail = useSelector<ReducerType, any>(state => state.report.filter.filterFail);
  console.log(filterFlied, filterValues);

  const [checked, setChecked] = useState(false);

  const handleChangeCheckBox = useCallback(() => {
    setChecked(prev => !prev);
    if (checked) {
      dispatch(updateFilterFail(null));
    } else {
      dispatch(updateFilterFail('on'));
    }
  }, [checked]);

  const {
    register,
    formState: { errors },
  } = useForm<InputType>({});

  const { data, isLoading, refetch } = useQuery(['fetchReportDetail', id], () => fetchReportDetail(id, filterFlied, filterValues, filterFail), {
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

  const modalControl = useCallback((status, name, item?) => {
    if (item?.list) {
      dispatch(updateCommentData(item));
    }
    if (item?.data) {
      dispatch(updateRawData(item));
    }

    dispatch(isShow({ isShow: status, type: name }));
  }, []);

  useEffect(() => {
    if (filterValues !== '') {
      refetch();
    } else if (!filterFlied && !filterValues) {
      refetch();
    } else {
      return;
    }
  }, [filterValues, checked]);

  useEffect(() => {
    refetch();
  }, [filterFail]);

  return (
    <div css={originTestBox}>
      <div css={testBox}>
        {/* 응답자 특성 템플릿 */}
        {data?.S1 ? (
          <>
            <RespondentAttributesTemplate
              modalControl={modalControl}
              handleChangeCheckBox={handleChangeCheckBox}
              checked={filterFail}
              register={register}
              errors={errors}
              dataList={data?.answerInfoSection}
            />
            <div css={sortationArea} />

            {/* UI 진단 전체 요약 */}
            <UiOverallSummaryTemplate
              modalControl={modalControl}
              handleChangeCheckBox={handleChangeCheckBox}
              checked={filterFail}
              dataList={data?.S1?.uiSummerySection}
              register={register}
              errors={errors}
            />
            <div css={sortationArea} />

            {/* 기능별 사용성 비교 */}
            <UsabilityByFeatureTemplate
              modalControl={modalControl}
              handleChangeCheckBox={handleChangeCheckBox}
              checked={filterFail}
              dataList={data?.S1?.uiSummerySection}
              register={register}
              errors={errors}
            />
            {/*<div css={sortationArea} />*/}

            {/* 서비스 전체 사용성 평가*/}
            <ServiceOverallUsabilityTemplate
              modalControl={modalControl}
              handleChangeCheckBox={handleChangeCheckBox}
              checked={filterFail}
              dataList={data?.S1?.uiSummerySection}
              register={register}
              errors={errors}
            />
            <div css={sortationArea} />

            <AddOnFeature
              modalControl={modalControl}
              handleChangeCheckBox={handleChangeCheckBox}
              checked={filterFail}
              originDataList={data?.S1?.uiSummerySection.missionFatality}
              title={'서비스 전체 미션별 완성도 피드백'}
              register={register}
              errors={errors}
            />
            <div css={sortationArea} />
          </>
        ) : null}

        {/*객관식 문항*/}
        {data?.multipleQuestionList === null || data?.multipleQuestionList?.length === 0
          ? null
          : data?.multipleQuestionList?.map((item, index) => {
              return (
                <div key={`multiple-${index}`} id={item.code}>
                  <MultipleQuestionTemplate dataList={item} modalControl={modalControl} />
                  <div css={sortationArea} />
                </div>
              );
            })}

        {/*주관식 문항*/}
        {data?.longQuestionList === null || data?.longQuestionList?.length === 0
          ? null
          : data?.longQuestionList?.map((item, index) => {
              return (
                <div key={`lognQuestion-${index}`} id={item.questionCode}>
                  <LongQuestionTemplate dataList={item} modalControl={modalControl} />
                  <div css={sortationArea} />
                </div>
              );
            })}

        {/* 기능별 상세 내용 */}
        {/*<FeatureSpecificDetailTemplate />*/}
        {/*<div css={sortationArea} />*/}

        {/*/!* 순 추천 고객 지수(NPS) *!/*/}
        {/*<NpsTemplate modalControl={modalControl}/>*/}
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
