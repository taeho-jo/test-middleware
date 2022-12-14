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
import { clearCookies } from '../../../common/util/commonFunc';

import reportNavigationTop from '/public/assets/png/reportNavigationTop.png';
import reportNavigationBottom from '/public/assets/png/reportNavigationBotton.png';
import Image from 'next/image';
import { showToast } from '../../../store/reducers/toastReducer';

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
        dispatch(showToast({ message: `${e.response?.data?.message}`, isShow: true, status: 'warning', duration: 5000 }));

        if (errorData?.code === 'E0007' || errorData?.code === 'E0002') {
          clearCookies();
          // router.push('/');
        }
        router.push('/');
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

  // ????????? ?????? ref
  const [respondentRef, respondentChildrenRef] = useOnScreen({
    rootMargin: '72px 0px 0px 0px',
    threshold: 1,
  });
  // ????????? ????????? ?????? ?????? ref
  const [uiTestRef, uiTestChildrenRef] = useOnScreen({
    rootMargin: '72px 0px 0px 0px',
    threshold: 1,
  });
  // ????????? ?????? ?????? ref
  const [missionRef, missionChildrenRef] = useOnMultipleScreen({
    rootMargin: '72px 0px 0px 0px',
    threshold: 1,
  });

  // ????????? ?????? ?????? ref
  const [testRef, testChildrenRef] = useOnMultipleScreen({
    // rootMargin: '150px 0px 0px 0px',
    threshold: 1,
  });
  // ????????? ?????? ????????? ?????? ref
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
      {/*????????? ??????*/}
      <div css={reportSectionBox} id={'one'} ref={respondentRef}>
        <div>
          <ReportTemplateHeader
            title={'????????? ??????'}
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
      {/*????????? ??????*/}

      {/* ????????? ????????? ?????? ?????? */}
      {data?.S1 && (
        <div css={reportSectionBox} id={'????????? ????????? ?????? ??????'} ref={uiTestRef}>
          <div>
            <ReportTemplateHeader
              title={'????????? ????????? ?????? ??????'}
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
      {/* ????????? ????????? ?????? ?????? */}

      {/*????????? ?????? ??????*/}
      {data?.S1 &&
        data?.S1?.uiSummerySection?.missionFatality?.map((item, index) => {
          return (
            <>
              <div id={item.name} ref={el => (missionRef.current[index] = el)} key={`${item.name}`} css={reportSectionBox} className={'scrollType1'}>
                <div>
                  <ReportTemplateHeader
                    title={`[?????? ${index + 1}. ${item.name}]??? ????????? ????????? ??????`}
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
                    id={`${item.name}-??????-${el.name}`}
                    ref={ele => (testRef.current[childrenIndex] = ele)}
                    key={`${el.name}-??????-${item.name}`}
                    css={[reportSectionBox]}
                    // className={'scrollType1'}
                  >
                    <div>
                      <ReportTemplateHeader
                        title={`????????? ?????? ?????? - ${el.name}`}
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
                      id={`${item.name}-??????-${el.name}-children`}
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
      {/*????????? ?????? ??????*/}

      {/*????????? ?????? ????????? ??????*/}
      {data?.S1 && (
        <div id={'????????? ?????? ????????? ??????'} ref={totalUsabilityRef} css={reportSectionBox} className={'scrollType1'}>
          <div>
            <ReportTemplateHeader
              title={`????????? ?????? ????????? ??????`}
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
      {/*????????? ?????? ????????? ??????*/}

      {/*????????? ?????? ????????? ?????????*/}
      {data?.S1 && (
        <div id={'????????? ?????? ????????? ?????????'} ref={completeFeedbackRef} css={reportSectionBox} className={'scrollType1'}>
          <div>
            <ReportTemplateHeader
              title={`????????? ?????? ????????? ?????????`}
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
                title={'????????? ?????? ????????? ????????? ?????????'}
                register={register}
                errors={errors}
              />
            </div>
          </div>
        </div>
      )}
      {/*????????? ?????? ????????? ?????????*/}

      {/*????????? ?????? ???????????? ?????????*/}
      {data?.S1 && (
        <div id={'????????? ?????? ???????????? ?????????'} ref={additionalFeatureFeedbackRef} css={reportSectionBox} className={'scrollType1'}>
          <div>
            <ReportTemplateHeader
              title={`????????? ?????? ???????????? ?????????`}
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
                title={'????????? ?????? ????????? ????????? ?????????'}
                register={register}
                errors={errors}
              />
            </div>
          </div>
        </div>
      )}
      {/*????????? ?????? ???????????? ?????????*/}

      {/*????????? ?????? ??????????????? ?????????*/}
      {data?.S1 && (
        <div id={'????????? ?????? ??????????????? ?????????'} ref={systemErrorFeedbackRef} css={reportSectionBox} className={'scrollType1'}>
          <div>
            <ReportTemplateHeader
              title={`????????? ?????? ??????????????? ?????????`}
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
                title={'????????? ?????? ????????? ????????? ?????????'}
                register={register}
                errors={errors}
              />
            </div>
          </div>
        </div>
      )}
      {/*????????? ?????? ??????????????? ?????????*/}

      {/*????????? ??????*/}
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
      {/*????????? ??????*/}

      {/*????????? ??????*/}
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
      {/*????????? ??????*/}
    </>
    // ---------------------------------------------------------------
    // <div css={originTestBox}>
    //     {/* ????????? ?????? ?????? */}
    //     {/*<FeatureSpecificDetailTemplate />*/}
    //     {/*<div css={sortationArea} />*/}
    //
    //     {/*/!* ??? ?????? ?????? ??????(NPS) *!/*/}
    //     {/*<NpsTemplate modalControl={modalControl}/>*/}
    //     {/*<div css={sortationArea} />*/}
    //
    //     {/*/!*?????? ????????? ?????????*!/*/}
    //     {/*<GeneralScaleTypeTemplate />*/}
    //     {/*<div css={sortationArea} />*/}
    //
    //     {/*/!*?????? ?????? ??????*!/*/}
    //     {/*<PriceEvaluationTemplate />*/}
    //     {/*<div css={sortationArea} />*/}
    //
    //     {/*/!*????????? ??????*!/*/}
    //     {/*<BrandEvaluationTemplate />*/}
    //     {/*<div css={sortationArea} />*/}
    //
    //     {/*/!*?????? ??????(?????? ??????)*!/*/}
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
