import React, { useCallback, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { GeneralScaleTypeTemplate, ServiceOverallUsabilityTemplate } from '../../../components/molecules/ReportTemplate';
import { useQuery, useQueryClient } from 'react-query';
import { fetchReportDetail, fetchReportShare } from '../../../api/reportApi';
import { fetchRefreshToken } from '../../../api/authApi';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { resetReportData, setReportData, updateCommentData, updateFilterFail, updateRawData } from '../../../store/reducers/reportReducer';
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
import useOnScreen from '../../../hooks/useOnScreen';
import useOnMultipleScreen from '../../../hooks/useOnMultipleScreen';
import { clearLocalStorage } from '../../../common/util/commonFunc';

import reportNavigationTop from '/public/assets/png/reportNavigationTop.png';
import reportNavigationBottom from '/public/assets/png/reportNavigationBotton.png';
import Image from 'next/image';

const Report = ({ params }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = params;
  const { isShare } = router.query;

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
    isShare ? () => fetchReportShare(id, filterFlied, filterValues, filterFail) : () => fetchReportDetail(id, filterFlied, filterValues, filterFail),
    {
      onError: (e: any) => {
        const errorData = e.response?.data;
        // if (errorData?.code === 'E0008') {
        //   queryClient.setQueryData(['fetchRefreshToken'], fetchRefreshToken);
        //   queryClient.invalidateQueries(['fetchReportDetail', id]);
        // }
        if (errorData?.code === 'E0007' || errorData?.code === 'E0002') {
          clearLocalStorage();
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

  useEffect(() => {
    return () => {
      dispatch(resetReportData());
    };
  }, []);

  // 응답자 특성 ref
  const [respondentRef, respondentChildrenRef] = useOnScreen({
    rootMargin: '72px 0px 0px 0px',
    threshold: 1,
  });
  // UI 진단 전체 요약 ref
  const [uiTestRef, uiTestChildrenRef] = useOnScreen({
    rootMargin: '72px 0px 0px 0px',
    threshold: 1,
  });
  // 미션별 언급 비율 ref
  const [missionRef, missionChildrenRef] = useOnMultipleScreen({
    rootMargin: '72px 0px 0px 0px',
    threshold: 1,
  });

  // 기능별 상세 내용 ref
  const [testRef, testChildrenRef] = useOnMultipleScreen({
    // rootMargin: '150px 0px 0px 0px',
    threshold: 1,
  });
  // 서비스 전체 사용성 평가 ref
  const [totalUsabilityRef, totalUsabilityChildrenRef] = useOnScreen({
    rootMargin: '72px 0px 0px 0px',
    threshold: 1,
  });
  const [completeFeedbackRef, completeFeedbackChildrenRef] = useOnScreen({
    rootMargin: '72px 0px 0px 0px',
    threshold: 1,
  });
  const [additionalFeatureFeedbackRef, additionalFeatureFeedbackChildrenRef] = useOnScreen({
    rootMargin: '72px 0px 0px 0px',
    threshold: 1,
  });
  const [systemErrorFeedbackRef, systemErrorFeedbackChildrenRef] = useOnScreen({
    rootMargin: '72px 0px 0px 0px',
    threshold: 1,
  });
  const [longQuestionRef, longQuestionChildrenRef] = useOnMultipleScreen({ rootMargin: '72px 0px 0px 0px', threshold: 1 });
  const [multipleQuestionRef, , multipleQuestionChildrenRef] = useOnMultipleScreen({ rootMargin: '72px 0px 0px 0px', threshold: 1 });

  const indexId = useSelector<ReducerType, string>(state => state.report.indexId);
  const totalIndexList = useSelector<ReducerType, string[]>(state => state.report.totalIndexList);

  const scrollDown = () => {
    const indexNum = totalIndexList.indexOf(indexId);
    const a = document.getElementById(totalIndexList[indexNum + 1]);
    const b = document.getElementById('reportBoxArea');

    b.scrollTo({ top: a?.offsetTop, left: a?.offsetLeft, behavior: 'smooth' });
  };
  const scrollUp = () => {
    const indexNum = totalIndexList.indexOf(indexId);
    const a = document.getElementById(totalIndexList[indexNum - 1]);
    const b = document.getElementById('reportBoxArea');

    b.scrollTo({ top: a?.offsetTop, left: a?.offsetLeft, behavior: 'smooth' });
  };

  const featureDetailArr = data?.S1?.uiSummerySection?.missionFatality
    ?.map((item, index) => item.missionFunctionFatality.map(child => ({ ...child })))
    .flat();

  return (
    <>
      <div
        css={css`
          position: absolute;
          bottom: 40px;
          right: 40px;
          z-index: 1000;
          width: 76px;
          display: flex;
          justify-content: space-between;
        `}
      >
        <Image style={{ cursor: 'pointer' }} onClick={scrollUp} src={reportNavigationTop} alt={'reportNavigationTop'} width={36} height={36} />
        <Image
          style={{ cursor: 'pointer' }}
          onClick={scrollDown}
          src={reportNavigationBottom}
          alt={'reportNavigationBottom'}
          width={36}
          height={36}
        />
      </div>
      {/*응답자 특성*/}
      <div css={reportSectionBox} id={'one'} ref={respondentRef}>
        <div>
          <ReportTemplateHeader
            title={'응답자 특성'}
            handleChangeCheckBox={handleChangeCheckBox}
            modalControl={modalControl}
            checked={filterFail}
            errors={errors}
            register={register}
          />
        </div>

        <div
          css={css`
            height: calc(100vh - 136px);
            display: flex;
            flex-direction: column;
            justify-content: ${data?.answerInfoSection?.cellInfoList?.length === 0 ? 'center' : 'flex-start'};
          `}
          className={'scrollType1'}
          ref={respondentChildrenRef}
        >
          <RespondentCharacteristicsTemplate dataList={data?.answerInfoSection} />
        </div>
      </div>
      {/*응답자 특성*/}

      {/* UI 진단 전체 요약 */}
      {data?.S1 && (
        <div css={reportSectionBox} id={'UI 진단 전체 요약'} ref={uiTestRef}>
          <div>
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
          </div>

          <div
            css={css`
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
              <div id={item.name} ref={el => (missionRef.current[index] = el)} key={`${item.name}`} css={reportSectionBox} className={'scrollType1'}>
                <div>
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
                </div>
                {/*<div css={chartSectionBox}>*/}
                {/*  <div css={chartBox} className={'scrollType1'} ref={el => (missionChildrenRef.current[index] = el)}>*/}
                <div
                  // css={css`
                  //   height: calc(100vh - 136px);
                  //   display: flex;
                  //   flex-direction: column;
                  //   justify-content: center;
                  // `}
                  // className={'scrollType1'}
                  ref={el => (missionChildrenRef.current[index] = el)}
                >
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
              {/*  </div>*/}
              {/*</div>*/}
              {item.missionFunctionFatality.map((el, idx) => {
                const childrenIndex = featureDetailArr?.findIndex(count => count.name === el.name && count.info === el.info);
                return (
                  <div
                    id={`${item.name}-기능-${el.name}`}
                    ref={ele => (testRef.current[childrenIndex] = ele)}
                    key={`${el.name}-기능-${item.name}`}
                    css={[reportSectionBox]}
                    // className={'scrollType1'}
                  >
                    <div>
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
                    </div>
                    <div
                      css={css`
                        height: calc(100vh - 136px);
                      `}
                      id={`${item.name}-기능-${el.name}-children`}
                      className={'scrollType1'}
                      ref={ele => (testChildrenRef.current[childrenIndex] = ele)}
                    >
                      <MissionDetailTemplate item={item} dataList={el} modalControl={modalControl} />
                    </div>
                  </div>
                );
              })}
            </>
          );
        })}
      {/*기능별 상세 비교*/}

      {/*서비스 전체 사용성 평가*/}
      {data?.S1 && (
        <div id={'서비스 전체 사용성 평가'} ref={totalUsabilityRef} css={reportSectionBox} className={'scrollType1'}>
          <div>
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
          </div>

          <div
            css={css`
              overflow-y: scroll;
              height: calc(100vh - 136px);
            `}
            className={'scrollType1'}
            ref={totalUsabilityChildrenRef}
          >
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
      )}
      {/*서비스 전체 사용성 평가*/}

      {/*서비스 전체 완성도 피드백*/}
      {data?.S1 && (
        <div id={'서비스 전체 완성도 피드백'} ref={completeFeedbackRef} css={reportSectionBox} className={'scrollType1'}>
          <div>
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
          </div>

          <div css={chartSectionBox}>
            <div css={chartBox(true)} className={'scrollType1'} ref={completeFeedbackChildrenRef}>
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
        <div id={'서비스 전체 추가기능 피드백'} ref={additionalFeatureFeedbackRef} css={reportSectionBox} className={'scrollType1'}>
          <div>
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
          </div>

          <div css={chartSectionBox}>
            <div css={chartBox(true)} className={'scrollType1'} ref={additionalFeatureFeedbackChildrenRef}>
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
        <div id={'서비스 전체 시스템오류 피드백'} ref={systemErrorFeedbackRef} css={reportSectionBox} className={'scrollType1'}>
          <div>
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
          </div>

          <div css={chartSectionBox}>
            <div css={chartBox(true)} className={'scrollType1'} ref={systemErrorFeedbackChildrenRef}>
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
                <div key={`multiple-${index}`}>
                  {item?.detailScaleList?.length === 0 ? null : (
                    <div id={item.code} ref={el => (multipleQuestionRef.current[index] = el)} css={reportSectionBox} className={'scrollType1'}>
                      <div>
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
                      </div>

                      <div css={chartSectionBox}>
                        <div css={chartBox(true)} className={'scrollType1'}>
                          <GeneralScaleTypeTemplate dataList={item} modalControl={modalControl} />
                        </div>
                      </div>
                    </div>
                  )}

                  {item?.detailMultipleList.length === 0 ? null : (
                    <div id={item.code} ref={el => (multipleQuestionRef.current[index] = el)} css={reportSectionBox} className={'scrollType1'}>
                      <div>
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
                      </div>

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
              <div
                id={item.questionCode}
                ref={el => (longQuestionRef.current[index] = el)}
                key={`lognQuestion-${index}`}
                css={reportSectionBox}
                className={'scrollType1'}
              >
                <div>
                  <ReportTemplateHeader
                    title={`${item.intent}`}
                    handleChangeCheckBox={handleChangeCheckBox}
                    modalControl={modalControl}
                    checked={filterFail}
                    errors={errors}
                    register={register}
                    originData={[]}
                    researchData={item?.comment}
                  />
                </div>

                <div css={chartSectionBox}>
                  <div css={chartBox(true)} className={'scrollType1'}>
                    {/*<div*/}
                    {/*  css={css`*/}
                    {/*    height: calc(100vh - 136px);*/}
                    {/*    display: flex;*/}
                    {/*    flex-direction: column;*/}
                    {/*    justify-content: center;*/}
                    {/*  `}*/}
                    {/*  className={'scrollType1'}*/}
                    {/*>*/}
                    <LongQuestionTemplate dataList={item} modalControl={modalControl} />
                    {/*</div>*/}
                  </div>
                </div>
              </div>
            );
          })}
      {/*주관식 문항*/}
    </>
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

const reportSectionBox = css`
  width: 100%;
  height: calc(100vh - 72px);
  scroll-snap-align: start;
  scroll-snap-stop: always;
  //overflow-y: scroll;
  //background: yellow;
`;

const chartSectionBox = css`
  width: 100%;
  height: calc(100vh - 136px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const chartBox = (padding = false, justify = 'center') => css`
  width: 900px;
  min-width: 900px;
  padding-top: ${padding ? '0px' : '190px'};
  height: calc(100vh - 136px);
  //border-left: 1px solid #dcdcdc;
  //border-right: 1px solid #dcdcdc;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: ${justify ? justify : 'center'};
  align-items: center;
  //overflow: hidden;
`;
export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}
