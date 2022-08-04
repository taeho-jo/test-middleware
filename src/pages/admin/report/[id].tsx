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
import {
  FeedbackTemplate,
  MissionDetailTemplate,
  MissionUsabilityTemplate,
  RespondentCharacteristicsTemplate,
} from '../../../components/template/ReportTemplate';
import ReportTemplateHeader from '../../../components/molecules/ReportTemplate/ReportTemplateHeader';
import UiTestFullSummaryTemplate from '../../../components/template/ReportTemplate/UiTestFullSummaryTemplate';
import { heading1_bold } from '../../../styles/FontStyles';
import { colors } from '../../../styles/Common.styles';
import useOnScreen from '../../../hooks/useOnScreen';
import useOnMultipleScreen from '../../../hooks/useOnMultipleScreen';
import { Scroller, Section } from 'react-fully-scrolled';
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

  // 응답자 특성 ref
  const [respondentRef, respondentChildrenRef] = useOnScreen({
    rootMargin: '72px 0px 0px 0px',
    threshold: 0.9,
  });
  // UI 진단 전체 요약 ref
  const [uiTestRef, uiTestChildrenRef] = useOnScreen({
    rootMargin: '72px 0px 0px 0px',
    threshold: 0.9,
  });
  // 미션별 언급 비율 ref
  const [missionRef, missionChildrenRef] = useOnMultipleScreen({
    rootMargin: '72px 0px 0px 0px',
    threshold: 0.5,
  });
  // 기능별 상세 내용 ref
  const [testRef, testChildrenRef] = useOnMultipleScreen({
    rootMargin: '72px 0px 0px 0px',
    // threshold: 0.1,
  });
  // 서비스 전체 사용성 평가 ref
  const [totalUsabilityRef, totalUsabilityChildrenRef] = useOnScreen({
    rootMargin: '72px 0px 0px 0px',
    threshold: 0.8,
  });
  const [completeFeedbackRef, completeFeedbackChildrenRef] = useOnScreen({
    rootMargin: '72px 0px 0px 0px',
    threshold: 0.9,
  });
  const [additionalFeatureFeedbackRef, additionalFeatureFeedbackChildrenRef] = useOnScreen({
    rootMargin: '72px 0px 0px 0px',
    threshold: 0.9,
  });
  const [systemErrorFeedbackRef, systemErrorFeedbackChildrenRef] = useOnScreen({
    rootMargin: '72px 0px 0px 0px',
    threshold: 0.9,
  });

  return (
    <div css={reportContainer} className={'scrollType1'}>
      {/*응답자 특성*/}
      <div id={'one'} css={reportSectionBox} ref={respondentRef} className={'scrollType1'}>
        <ReportTemplateHeader
          title={'응답자 특성'}
          handleChangeCheckBox={handleChangeCheckBox}
          modalControl={modalControl}
          checked={filterFail}
          errors={errors}
          register={register}
        />
        <div css={chartSectionBox}>
          <div
            css={chartBox(data?.answerInfoSection?.cellInfoList?.length === 0 ? true : false)}
            className={'scrollType1'}
            ref={respondentChildrenRef}
          >
            <RespondentCharacteristicsTemplate dataList={data?.answerInfoSection} />
          </div>
        </div>
      </div>
      {/*응답자 특성*/}

      {/* UI 진단 전체 요약 */}
      {data?.S1 && (
        <div id={'UI 진단 전체 요약'} css={reportSectionBox} ref={uiTestRef} className={'scrollType1'}>
          <ReportTemplateHeader
            title={'UI 진단 전체 요약'}
            handleChangeCheckBox={handleChangeCheckBox}
            modalControl={modalControl}
            checked={filterFail}
            errors={errors}
            register={register}
            originData={[]}
            researchData={data?.S1?.comment}
          />
          {/*<div css={chartSectionBox}>*/}
          {/*  <div css={chartBox} className={'scrollType1'} ref={uiTestChildrenRef}>*/}
          <div
            css={css`
              overflow-y: scroll;
              height: calc(100vh - 136px);
            `}
            className={'scrollType1'}
            ref={uiTestChildrenRef}
          >
            <UiTestFullSummaryTemplate
              modalControl={modalControl}
              handleChangeCheckBox={handleChangeCheckBox}
              checked={filterFail}
              comment={data?.S1?.comment}
              dataList={data?.S1?.uiSummerySection}
              register={register}
              errors={errors}
            />
          </div>

          {/*  </div>*/}
          {/*</div>*/}
        </div>
      )}
      {/* UI 진단 전체 요약 */}

      {/*기능별 상세 비교*/}
      {data?.S1 &&
        data?.S1?.uiSummerySection?.missionFatality?.map((item, index) => {
          return (
            <>
              <div key={`${item.name}`} id={item.name} css={reportSectionBox} ref={el => (missionRef.current[index] = el)} className={'scrollType1'}>
                <ReportTemplateHeader
                  title={`[미션 ${index + 1}. ${item.name}]의 기능별 사용성 비교`}
                  handleChangeCheckBox={handleChangeCheckBox}
                  modalControl={modalControl}
                  checked={filterFail}
                  errors={errors}
                  register={register}
                  originData={[]}
                  researchData={item?.comment}
                />

                <div css={chartSectionBox}>
                  <div css={chartBox} className={'scrollType1'}>
                    <MissionUsabilityTemplate
                      modalControl={modalControl}
                      handleChangeCheckBox={handleChangeCheckBox}
                      checked={filterFail}
                      index={index}
                      dataList={item}
                      register={register}
                      errors={errors}
                    />
                  </div>
                </div>
              </div>
              {item.missionFunctionFatality.map((el, idx) => {
                return (
                  <div
                    key={`기능-${item.name}`}
                    id={`기능-${item.name}`}
                    css={reportSectionBox}
                    ref={ele => (testRef.current[index] = ele)}
                    className={'scrollType1'}
                  >
                    <ReportTemplateHeader
                      title={`기능별 상세 내용 - ${el.name}`}
                      handleChangeCheckBox={handleChangeCheckBox}
                      modalControl={modalControl}
                      checked={filterFail}
                      errors={errors}
                      register={register}
                      originData={el?.missionFunctionRawData}
                      researchData={el?.comment}
                    />
                    <MissionDetailTemplate item={item} dataList={el} modalControl={modalControl} />
                  </div>
                );
              })}
            </>
          );
        })}
      {/*기능별 상세 비교*/}

      {/*서비스 전체 사용성 평가*/}
      {data?.S1 && (
        <div id={'서비스 전체 사용성 평가'} css={reportSectionBox} ref={totalUsabilityRef} className={'scrollType1'}>
          <ReportTemplateHeader
            title={`서비스 전체 사용성 평가`}
            handleChangeCheckBox={handleChangeCheckBox}
            modalControl={modalControl}
            checked={filterFail}
            errors={errors}
            register={register}
            originData={[]}
            researchData={data?.S1?.uiSummerySection?.serviceTotalUsabilityInfo?.comment}
          />
          <div css={chartSectionBox}>
            <div css={chartBox(true)} className={'scrollType1'}>
              <ServiceOverallUsabilityTemplate
                modalControl={modalControl}
                handleChangeCheckBox={handleChangeCheckBox}
                checked={filterFail}
                dataList={data?.S1?.uiSummerySection}
                register={register}
                errors={errors}
              />
            </div>
          </div>
        </div>
      )}
      {/*서비스 전체 사용성 평가*/}

      {/*서비스 전체 완성도 피드백*/}
      {data?.S1 && (
        <div id={'서비스 전체 완성도 피드백'} css={reportSectionBox} ref={completeFeedbackRef} className={'scrollType1'}>
          <ReportTemplateHeader
            title={`서비스 전체 완성도 피드백`}
            handleChangeCheckBox={handleChangeCheckBox}
            modalControl={modalControl}
            checked={filterFail}
            errors={errors}
            register={register}
            researchData={data?.S1?.uiSummerySection?.missionFatality[0].completeComment}
            originData={data?.S1?.uiSummerySection?.missionFatality?.map(el => el.completeList).flat()}
          />

          <div css={chartSectionBox}>
            <div css={chartBox(true)} className={'scrollType1'}>
              <FeedbackTemplate
                modalControl={modalControl}
                type={'completeList'}
                handleChangeCheckBox={handleChangeCheckBox}
                checked={filterFail}
                originDataList={data?.S1?.uiSummerySection.missionFatality}
                title={'서비스 전체 미션별 완성도 피드백'}
                register={register}
                errors={errors}
              />
            </div>
          </div>
        </div>
      )}
      {/*서비스 전체 완성도 피드백*/}

      {/*서비스 전체 추가기능 피드백*/}
      {data?.S1 && (
        <div id={'서비스 전체 추가기능 피드백'} css={reportSectionBox} ref={additionalFeatureFeedbackRef} className={'scrollType1'}>
          <ReportTemplateHeader
            title={`서비스 전체 추가기능 피드백`}
            handleChangeCheckBox={handleChangeCheckBox}
            modalControl={modalControl}
            checked={filterFail}
            errors={errors}
            register={register}
            researchData={data?.S1?.uiSummerySection?.missionFatality[0].additionalComment}
            originData={data?.S1?.uiSummerySection?.missionFatality?.map(el => el.additionalList).flat()}
          />
          <div css={chartSectionBox}>
            <div css={chartBox(true)} className={'scrollType1'}>
              <FeedbackTemplate
                modalControl={modalControl}
                type={'additionalList'}
                handleChangeCheckBox={handleChangeCheckBox}
                checked={filterFail}
                originDataList={data?.S1?.uiSummerySection.missionFatality}
                title={'서비스 전체 미션별 완성도 피드백'}
                register={register}
                errors={errors}
              />
            </div>
          </div>
        </div>
      )}
      {/*서비스 전체 추가기능 피드백*/}

      {/*서비스 전체 시스템오류 피드백*/}
      {data?.S1 && (
        <div id={'서비스 전체 시스템오류 피드백'} css={reportSectionBox} ref={systemErrorFeedbackRef} className={'scrollType1'}>
          <ReportTemplateHeader
            title={`서비스 전체 시스템오류 피드백`}
            handleChangeCheckBox={handleChangeCheckBox}
            modalControl={modalControl}
            checked={filterFail}
            errors={errors}
            register={register}
            researchData={data?.S1?.uiSummerySection?.missionFatality[0].systemErrorComment}
            originData={data?.S1?.uiSummerySection?.missionFatality?.map(el => el.systemErrorList).flat()}
          />
          <div css={chartSectionBox}>
            <div css={chartBox(true)} className={'scrollType1'}>
              <FeedbackTemplate
                modalControl={modalControl}
                type={'systemErrorList'}
                handleChangeCheckBox={handleChangeCheckBox}
                checked={filterFail}
                originDataList={data?.S1?.uiSummerySection.missionFatality}
                title={'서비스 전체 미션별 완성도 피드백'}
                register={register}
                errors={errors}
              />
            </div>
          </div>
        </div>
      )}
      {/*서비스 전체 시스템오류 피드백*/}

      {/*객관식 문항*/}
      {data?.multipleQuestionList === null ||
        (data?.multipleQuestionList?.length === 0
          ? null
          : data?.multipleQuestionList?.map((item, index) => {
              return (
                <div key={`multiple-${index}`} id={item.code}>
                  {item?.detailScaleList?.length === 0 ? null : (
                    <div id={item.intent} css={reportSectionBox} ref={systemErrorFeedbackRef} className={'scrollType1'}>
                      <ReportTemplateHeader
                        title={item.intent}
                        handleChangeCheckBox={handleChangeCheckBox}
                        modalControl={modalControl}
                        checked={filterFail}
                        errors={errors}
                        register={register}
                        originData={item?.detailScaleList?.map(el => el.multipleAnswerData).flat()}
                        researchData={item?.comment ? item?.comment : undefined}
                      />
                      <div css={chartSectionBox}>
                        <div css={chartBox(true)} className={'scrollType1'}>
                          <GeneralScaleTypeTemplate dataList={item} modalControl={modalControl} />
                        </div>
                      </div>
                    </div>
                  )}

                  {item?.detailMultipleList.length === 0 ? null : (
                    <div id={item.intent} css={reportSectionBox} ref={systemErrorFeedbackRef} className={'scrollType1'}>
                      <ReportTemplateHeader
                        title={item.intent}
                        handleChangeCheckBox={handleChangeCheckBox}
                        modalControl={modalControl}
                        checked={filterFail}
                        errors={errors}
                        register={register}
                        originData={item?.detailMultipleList?.map(el => el.multipleAnswerData).flat()}
                        researchData={item?.comment ? item?.comment : undefined}
                      />
                      <div css={chartSectionBox}>
                        <div css={chartBox(true)} className={'scrollType1'}>
                          <MultipleQuestionTemplate dataList={item} modalControl={modalControl} parentIndex={index} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }))}
      {/*객관식 문항*/}

      {/*주관식 문항*/}
      {data?.longQuestionList === null || data?.longQuestionList?.length === 0
        ? null
        : data?.longQuestionList?.map((item, index) => {
            return (
              <div key={`lognQuestion-${index}`} id={item.questionCode} css={reportSectionBox} className={'scrollType1'}>
                <ReportTemplateHeader
                  title={`${item.intent}`}
                  handleChangeCheckBox={handleChangeCheckBox}
                  modalControl={modalControl}
                  checked={filterFail}
                  errors={errors}
                  register={register}
                  originData={[]}
                  researchData={data?.S1?.comment}
                />
                <div css={chartSectionBox}>
                  <div css={chartBox(true)} className={'scrollType1'}>
                    <LongQuestionTemplate dataList={item} modalControl={modalControl} />
                  </div>
                </div>
              </div>
            );
          })}
      {/*주관식 문항*/}
    </div>
    // ---------------------------------------------------------------
    // <div css={originTestBox}>
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
    // </div>
  );
};

// export default withTokenAuth(Report, false);
export default Report;

const reportContainer = css`
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: scroll;
  //overflow-x: hidden;
  width: 100%;
  height: calc(100vh - 72px);
`;
const reportSectionBox = css`
  width: 100%;
  height: calc(100vh - 72px);
  scroll-snap-align: start;
  scroll-snap-stop: always;
  //position: relative;
  overflow-y: scroll;
  //overflow-x: hidden;
  //background: pink;
  //margin-top: 72px;
  //&:nth-of-type(even) {
  //  background: red;
  //}
`;

const chartSectionBox = css`
  width: 100%;
  height: calc(100vh - 136px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const chartBox = (padding = false) => css`
  width: 900px;
  min-width: 900px;
  padding-top: ${padding ? '0px' : '190px'};
  height: calc(100vh - 136px);
  border-left: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //overflow: hidden;
`;

export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}
