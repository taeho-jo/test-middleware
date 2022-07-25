import React, { useCallback, useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import {
  AddOnFeature,
  GeneralScaleTypeTemplate,
  RespondentAttributesTemplate,
  ServiceOverallUsabilityTemplate,
  UiOverallSummaryTemplate,
  UsabilityByFeatureTemplate,
} from '../../../components/molecules/ReportTemplate';
import { useQuery, useQueryClient } from 'react-query';
import { fetchReportDetail, fetchReportShare } from '../../../api/reportApi';
import { fetchRefreshToken } from '../../../api/authApi';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setReportData, updateCommentData, updateFilterFail, updateRawData } from '../../../store/reducers/reportReducer';
import { ReducerType } from '../../../store/reducers';
import LongQuestionTemplate from '../../../components/molecules/ReportTemplate/LongQuestionTemplate';
import MultipleQuestionTemplate from '../../../components/molecules/ReportTemplate/MultipleQuestionTemplate';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../common/types/commonTypes';
import { isShow } from '../../../store/reducers/modalReducer';
import { RespondentCharacteristicsTemplate } from '../../../components/template/ReportTemplate';
import ReportTemplateHeader from '../../../components/molecules/ReportTemplate/ReportTemplateHeader';
import UiTestFullSummaryTemplate from '../../../components/template/ReportTemplate/UiTestFullSummaryTemplate';

const Report = ({ params }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = params;
  const { share } = router.query;

  const filterFlied = useSelector<ReducerType, any>(state => state.report.filter.filterFlied);
  const filterValues = useSelector<ReducerType, any>(state => state.report.filter.filterValues);
  const filterFail = useSelector<ReducerType, any>(state => state.report.filter.filterFail);

  const [checked, setChecked] = useState(false);

  const handleChangeCheckBox = useCallback(() => {
    setChecked(prev => !prev);
    if (checked) {
      dispatch(updateFilterFail(null));
    } else {
      dispatch(updateFilterFail('on'));
    }
  }, [checked]);

  useEffect(() => {
    if (filterFail === 'on') {
      setChecked(false);
    }
  }, [filterFail]);

  const {
    register,
    formState: { errors },
  } = useForm<InputType>({});

  const { data, isLoading, refetch } = useQuery(
    ['fetchReportDetail', id],
    share ? () => fetchReportShare(id, filterFlied, filterValues, filterFail) : () => fetchReportDetail(id, filterFlied, filterValues, filterFail),
    {
      onError: (e: any) => {
        const errorData = e.response?.data;
        if (errorData?.code === 'E0008') {
          queryClient.setQueryData(['fetchRefreshToken'], fetchRefreshToken);
          queryClient.invalidateQueries(['fetchReportDetail', id]);
        }
        if (errorData?.code === 'E0007' || errorData?.code === 'E0002') {
          localStorage.clear();
          router.push('/');
        }
      },
      select: data => {
        localStorage.setItem('projectNm', data.data.projectNm);
        dispatch(setReportData(data.data));
        return data.data;
      },
    },
  );

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

  const callbackFunction = entries => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      console.log(entry);
      console.log(entry.target.id);
    }
  };

  const respondentRef = useRef([]);

  useEffect(() => {
    console.log(respondentRef, '!');
    const option = {
      rootMargin: '72px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(callbackFunction, option);
    let currentTarget;
    for (let i = 0; i < respondentRef.current.length; i++) {
      currentTarget = respondentRef.current[i];
      if (currentTarget) observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [respondentRef]);

  return (
    <div css={testContainer1} className={'scrollType1'}>
      <div id={'one'} css={testContainer2} ref={el => (respondentRef.current[0] = el)}>
        <ReportTemplateHeader
          handleChangeCheckBox={handleChangeCheckBox}
          modalControl={modalControl}
          checked={filterFail}
          errors={errors}
          register={register}
        />
        <RespondentCharacteristicsTemplate dataList={data?.answerInfoSection} />
      </div>

      <div id={'two'} css={testContainer2} className={'scrollType1'}>
        <ReportTemplateHeader
          handleChangeCheckBox={handleChangeCheckBox}
          modalControl={modalControl}
          checked={filterFail}
          errors={errors}
          register={register}
        />
        {/*<div>asdfasdfasdfasdf</div>*/}
        {/* UI 진단 전체 요약 */}
        <UiTestFullSummaryTemplate
          modalControl={modalControl}
          handleChangeCheckBox={handleChangeCheckBox}
          checked={filterFail}
          comment={data?.S1?.comment}
          dataList={data?.S1?.uiSummerySection}
          register={register}
          errors={errors}
        />
        {/*<UiOverallSummaryTemplate*/}
        {/*  modalControl={modalControl}*/}
        {/*  handleChangeCheckBox={handleChangeCheckBox}*/}
        {/*  checked={filterFail}*/}
        {/*  comment={data?.S1?.comment}*/}
        {/*  dataList={data?.S1?.uiSummerySection}*/}
        {/*  register={register}*/}
        {/*  errors={errors}*/}
        {/*/>*/}
      </div>

      <div id={'asdfa'} css={testContainer2} ref={el => (respondentRef.current[2] = el)}>
        <ReportTemplateHeader
          handleChangeCheckBox={handleChangeCheckBox}
          modalControl={modalControl}
          checked={filterFail}
          errors={errors}
          register={register}
        />
        <RespondentCharacteristicsTemplate />
      </div>

      <div css={testContainer2}>
        <ReportTemplateHeader
          handleChangeCheckBox={handleChangeCheckBox}
          modalControl={modalControl}
          checked={filterFail}
          errors={errors}
          register={register}
        />
        <RespondentCharacteristicsTemplate />
      </div>
      <div css={testContainer2}>
        <ReportTemplateHeader
          handleChangeCheckBox={handleChangeCheckBox}
          modalControl={modalControl}
          checked={filterFail}
          errors={errors}
          register={register}
        />
        <RespondentCharacteristicsTemplate />
      </div>
    </div>
    // <div css={originTestBox}>
    //   <div css={testBox}>
    //     {/* 응답자 특성 템플릿 */}
    //     <RespondentAttributesTemplate
    //       modalControl={modalControl}
    //       handleChangeCheckBox={handleChangeCheckBox}
    //       checked={filterFail}
    //       register={register}
    //       errors={errors}
    //       dataList={data?.answerInfoSection}
    //     />
    //     <div css={sortationArea} />
    //
    //     {data?.S1 ? (
    //       <>
    //         {/* UI 진단 전체 요약 */}
    //         <UiOverallSummaryTemplate
    //           modalControl={modalControl}
    //           handleChangeCheckBox={handleChangeCheckBox}
    //           checked={filterFail}
    //           comment={data?.S1?.comment}
    //           dataList={data?.S1?.uiSummerySection}
    //           register={register}
    //           errors={errors}
    //         />
    //         <div css={sortationArea} />
    //
    //         {/* 기능별 사용성 비교 */}
    //         <UsabilityByFeatureTemplate
    //           modalControl={modalControl}
    //           handleChangeCheckBox={handleChangeCheckBox}
    //           checked={filterFail}
    //           dataList={data?.S1?.uiSummerySection}
    //           register={register}
    //           errors={errors}
    //         />
    //         {/*<div css={sortationArea} />*/}
    //
    //         {/* 서비스 전체 사용성 평가*/}
    //         <ServiceOverallUsabilityTemplate
    //           modalControl={modalControl}
    //           handleChangeCheckBox={handleChangeCheckBox}
    //           checked={filterFail}
    //           dataList={data?.S1?.uiSummerySection}
    //           register={register}
    //           errors={errors}
    //         />
    //         <div css={sortationArea} />
    //
    //         <AddOnFeature
    //           modalControl={modalControl}
    //           handleChangeCheckBox={handleChangeCheckBox}
    //           checked={filterFail}
    //           originDataList={data?.S1?.uiSummerySection.missionFatality}
    //           title={'서비스 전체 미션별 완성도 피드백'}
    //           register={register}
    //           errors={errors}
    //         />
    //         <div css={sortationArea} />
    //       </>
    //     ) : null}
    //
    //     {/*객관식 문항*/}
    //     {data?.multipleQuestionList === null || data?.multipleQuestionList?.length === 0
    //       ? null
    //       : data?.multipleQuestionList?.map((item, index) => {
    //           return (
    //             <div key={`multiple-${index}`} id={item.code}>
    //               {item?.detailScaleList?.length === 0 ? null : (
    //                 <>
    //                   <GeneralScaleTypeTemplate dataList={item} modalControl={modalControl} />
    //                   <div css={sortationArea} />
    //                 </>
    //               )}
    //
    //               {item?.detailMultipleList.length === 0 ? null : (
    //                 <>
    //                   <MultipleQuestionTemplate dataList={item} modalControl={modalControl} parentIndex={index} />
    //                   <div css={sortationArea} />
    //                 </>
    //               )}
    //             </div>
    //           );
    //         })}
    //
    //     {/*주관식 문항*/}
    //     {data?.longQuestionList === null || data?.longQuestionList?.length === 0
    //       ? null
    //       : data?.longQuestionList?.map((item, index) => {
    //           return (
    //             <div key={`lognQuestion-${index}`} id={item.questionCode}>
    //               <LongQuestionTemplate dataList={item} modalControl={modalControl} />
    //               {index === data?.longQuestionList?.length - 1 ? null : <div css={sortationArea} />}
    //             </div>
    //           );
    //         })}
    //
    //     {/* 기능별 상세 내용 */}
    //     {/*<FeatureSpecificDetailTemplate />*/}
    //     {/*<div css={sortationArea} />*/}
    //
    //     {/*/!* 순 추천 고객 지수(NPS) *!/*/}
    //     {/*<NpsTemplate modalControl={modalControl}/>*/}
    //     {/*<div css={sortationArea} />*/}
    //
    //     {/*/!*일반 척도형 그래프*!/*/}
    //     {/*<GeneralScaleTypeTemplate />*/}
    //     {/*<div css={sortationArea} />*/}
    //
    //     {/*/!*적정 가격 평가*!/*/}
    //     {/*<PriceEvaluationTemplate />*/}
    //     {/*<div css={sortationArea} />*/}
    //
    //     {/*/!*브랜드 평가*!/*/}
    //     {/*<BrandEvaluationTemplate />*/}
    //     {/*<div css={sortationArea} />*/}
    //
    //     {/*/!*문제 해결(동기 부여)*!/*/}
    //     {/*<TroublesShootingTemplate />*/}
    //     {/*<div css={sortationArea} />*/}
    //
    //     {/*추가 기능 언급*/}
    //   </div>
    // </div>
  );
};

// export default withTokenAuth(Report, false);
export default Report;

const originTestBox = css`
  height: calc(100vh - 72px);
  position: relative;
  //background: pink;
  //scroll-behavior: smooth;
  width: 100%;
`;
const testBox = css`
  //padding-bottom: 195px;
  //scroll-behavior: smooth;
  //position: sticky;
  //top: 0;
`;
const sortationArea = css`
  width: 100%;
  height: 16px;
  background: #dcdcdc;
`;

const testContainer1 = css`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  width: 100%;
  height: calc(100vh - 72px);
  scroll-behavior: smooth;
`;
const testContainer2 = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 72px);
  overflow-y: scroll;
  scroll-snap-align: start;
  background: pink;
  position: relative;
  &:nth-of-type(even) {
    background: royalblue;
  }
`;
// const testContainer2 = css`
//   width: 100%;
//   height: calc(100vh - 72px);
//   scroll-snap-align: start;
//   background: royalblue;
// `;

export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}
