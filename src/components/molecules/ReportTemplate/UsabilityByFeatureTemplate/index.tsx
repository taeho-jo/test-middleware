import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { caption1_bold, caption2_bold, heading3_bold, heading4_bold, heading5_bold, heading5_medium } from '../../../../styles/FontStyles';
import CheckBox from '../../../atoms/CheckBox';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { colors } from '../../../../styles/Common.styles';
import { BasicPieChart, StackedBarChart, TableBarChart, UsabilityTableChart } from '../../../atoms/Chart';
import {
  ageTestData,
  featureSpecificDetailData,
  featureUseData,
  genderTestData,
  stackedBarTestData,
  tableBarChartTestData,
  tableBarTestData,
} from '../../../../assets/dummy/dummyData';
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../../common/types/commonTypes';
import Icon from '../../../atoms/Icon';
import AnnouncementBox from '../../AnnouncementBox';
import ReportShortAnswerQuestionLayerPopup from '../../../atoms/ReportShortAnswerQuestionLayerPopup';

const UsabilityByFeatureTemplate = ({ dataList }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    // setFocus,
    formState: { errors },
  } = useForm<InputType>({});

  const onSubmit = data => console.log('success', data);
  const onError = errors => console.log('fail', errors);

  // const { missionSuccess, missionFatality } = dataList;
  //
  // console.log(missionFatality);

  const [stackbarIndex, setStackbarIndex] = useState<number | null>(null);
  return (
    <>
      {dataList?.missionFatality?.map((el, index) => {
        return (
          <Fragment key={index}>
            <FlexBox style={headerBosStyle} justify={'space-between'}>
              <FlexBox justify={'flex-start'} align={'center'}>
                <span css={[heading3_bold, { marginRight: '32px' }]}>
                  [미션 {index + 1}. {el.name}]의 기능별 사용성 비교
                </span>
                <CheckBox inputName={'privacyConsentYn'} label={'미션에 실패한 응답자의 피드백만 보기'} register={register} errors={errors} />
              </FlexBox>
              <FlexBox justify={'flex-end'}>
                <IconTextButton style={{ marginRight: '8px' }} textStyle={'custom'} name={'NAVIGATION_ARROW_RIGHT'} text={'원본 데이터 확인하기'} />
                <IconTextButton textStyle={'custom'} name={'NAVIGATION_ARROW_RIGHT'} text={'리서치 코멘트 확인하기'} />
              </FlexBox>
            </FlexBox>

            <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
              <FlexBox style={graphAreaStyle} direction={'column'}>
                <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
                  <div css={[heading4_bold]}>
                    [미션 {index + 1}. {el.name}] 기능별 불편 언급 비율과 치명도{' '}
                  </div>
                </div>
                <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
                  <FlexBox justify={'flex-end'} style={{ marginBottom: '4px' }}>
                    <Icon name={'ALERT_NORMAL'} size={10} />
                    <span css={[caption2_bold, { textDecoration: 'underline' }]}>치명도가 뭔가요</span>
                  </FlexBox>
                  <TableBarChart dataList={tableBarChartTestData} dataValueList={el.missionFunctionFatality} />
                </FlexBox>
              </FlexBox>
            </FlexBox>
            <div css={sortationArea} />

            {el.missionFunctionFatality.map((item, itemIndex) => {
              return (
                <Fragment key={`feature-${itemIndex}`}>
                  <FlexBox style={headerBosStyle} justify={'space-between'}>
                    <FlexBox justify={'flex-start'} align={'center'}>
                      <span css={[heading3_bold, { marginRight: '32px' }]}>
                        기능별 상세 내용 - [미션 {index + 1}. {el.name}] {item.name}
                      </span>
                      <CheckBox inputName={'privacyConsentYn'} label={'미션에 실패한 응답자의 피드백만 보기'} register={register} errors={errors} />
                    </FlexBox>
                    <FlexBox justify={'flex-end'} style={{ width: '40%' }}>
                      <IconTextButton
                        style={{ marginRight: '8px' }}
                        textStyle={'custom'}
                        name={'NAVIGATION_ARROW_RIGHT'}
                        text={'원본 데이터 확인하기'}
                      />
                      <IconTextButton textStyle={'custom'} name={'NAVIGATION_ARROW_RIGHT'} text={'리서치 코멘트 확인하기'} />
                    </FlexBox>
                  </FlexBox>

                  <FlexBox style={{ ...graphBosStyle, overflow: 'unset' }} justify={'center'} align={'flex-start'} overflow={'unset'}>
                    <FlexBox style={{ ...graphAreaStyle, overflow: 'unset' }} direction={'column'}>
                      <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
                        <div css={[heading4_bold]}>1. 불편 언급 비율과 치명도</div>
                      </div>
                      <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} overflow={'unset'} style={{ graphContainerStyle }}>
                        <FlexBox justify={'flex-end'} style={{ marginBottom: '4px' }}>
                          <Icon name={'ALERT_NORMAL'} size={10} />
                          <span css={[caption2_bold, { textDecoration: 'underline' }]}>치명도가 뭔가요</span>
                        </FlexBox>
                        <TableBarChart dataList={tableBarChartTestData} dataValueList={el.missionFunctionFatality} name={item.name} />

                        <AnnouncementBox
                          style={{ width: '100%', marginTop: '32px', padding: '12px 16px' }}
                          color={colors.grey._3c}
                          content={[<>{item.info}</>]}
                        />
                      </FlexBox>
                    </FlexBox>
                  </FlexBox>

                  <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
                    {/*<ReportShortAnswerQuestionLayerPopup display={isShow} setIsShow={setIsShow} />*/}
                    <FlexBox style={graphAreaStyle} direction={'column'} overflow={'unset'}>
                      <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
                        <div css={[heading4_bold]}>2. 상세 내용</div>
                      </div>
                      <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} overflow={'unset'} style={{ graphContainerStyle }}>
                        <FlexBox style={{ border: '1px solid #dcdcdc', borderRadius: '8px', padding: '24px 0', marginBottom: '36px' }}>
                          <AnnouncementBox icon={'NOTI'} content={'클릭하면 주관식 응답을 확인할 수 있어요.'} />
                        </FlexBox>
                        {/*<div css={{ width: '100%' }} >*/}
                        {item.detailList.map((detailItem, detailIndex) => {
                          return (
                            <Fragment key={`detail-${detailIndex}`}>
                              <StackedBarChart
                                // setIsShow={setIsShow}
                                setStackbarIndex={setStackbarIndex}
                                stackbarIndex={stackbarIndex}
                                detailIndex={detailIndex}
                                dataList={detailItem.stack}
                                name={detailItem.name}
                                label={[
                                  <>
                                    <strong>불편 대상 {detailIndex + 1}위 :</strong> {detailItem.name}
                                  </>,
                                ]}
                                value={`${detailItem.count}명`}
                                valueStyle={{ color: colors.grey._3c, fontWeight: 500 }}
                                rate={`${detailItem.rate}%`}
                              />
                            </Fragment>
                          );
                        })}
                        {/*</div>*/}

                        <AnnouncementBox
                          style={{ width: '100%', marginTop: '32px', padding: '12px 16px' }}
                          color={colors.grey._3c}
                          content={[<>{item.detailInfo}</>]}
                        />
                      </FlexBox>
                    </FlexBox>
                  </FlexBox>

                  <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
                    <FlexBox style={graphAreaStyle} direction={'column'}>
                      <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
                        <div css={[heading4_bold]}>3. 사용성 요소별 점수</div>
                      </div>
                      <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
                        <FlexBox justify={'space-between'}>
                          <FlexBox justify={'flex-start'} style={{ marginBottom: '4px' }}>
                            <Icon name={'ALERT_NORMAL'} size={10} />
                            <span css={[caption2_bold, { textDecoration: 'underline' }]}>사용성 평가 요소가 뭔가요</span>
                          </FlexBox>
                          <FlexBox justify={'flex-end'} style={{ marginBottom: '4px' }}>
                            <Icon name={'ALERT_NORMAL'} size={10} />
                            <span css={[caption2_bold, { textDecoration: 'underline' }]}>치명도가 뭔가요</span>
                          </FlexBox>
                        </FlexBox>

                        <UsabilityTableChart dataList={item.usabilityList} negative={true} />
                      </FlexBox>
                    </FlexBox>
                  </FlexBox>
                  <div css={sortationArea} />
                </Fragment>
              );
            })}
            {/*<FlexBox style={headerBosStyle} justify={'space-between'}>*/}
            {/*  <FlexBox justify={'flex-start'} align={'center'}>*/}
            {/*    <span css={[heading3_bold, { marginRight: '32px' }]}>*/}
            {/*      기능별 상세 내용 - [미션 {index + 1}. {el.name}] 기능 A*/}
            {/*    </span>*/}
            {/*    <CheckBox inputName={'privacyConsentYn'} label={'미션에 실패한 응답자의 피드백만 보기'} register={register} errors={errors} />*/}
            {/*  </FlexBox>*/}
            {/*  <FlexBox justify={'flex-end'}>*/}
            {/*    <IconTextButton style={{ marginRight: '8px' }} textStyle={'custom'} name={'NAVIGATION_ARROW_RIGHT'} text={'원본 데이터 확인하기'} />*/}
            {/*    <IconTextButton textStyle={'custom'} name={'NAVIGATION_ARROW_RIGHT'} text={'리서치 코멘트 확인하기'} />*/}
            {/*  </FlexBox>*/}
            {/*</FlexBox>*/}

            {/*<FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>*/}
            {/*  <FlexBox style={graphAreaStyle} direction={'column'}>*/}
            {/*    <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>*/}
            {/*      <div css={[heading4_bold]}>@1. 불편 언급 비율과 치명도</div>*/}
            {/*    </div>*/}
            {/*    <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>*/}
            {/*      <FlexBox justify={'flex-end'} style={{ marginBottom: '4px' }}>*/}
            {/*        <Icon name={'ALERT_NORMAL'} size={10} />*/}
            {/*        <span css={[caption2_bold, { textDecoration: 'underline' }]}>치명도가 뭔가요</span>*/}
            {/*      </FlexBox>*/}
            {/*      <TableBarChart dataList={tableBarChartTestData} dataValueList={el.missionFunctionFatality} />*/}

            {/*      <AnnouncementBox*/}
            {/*        style={{ width: '100%', marginTop: '32px', padding: '12px 16px' }}*/}
            {/*        color={colors.grey._3c}*/}
            {/*        content={[*/}
            {/*          <>*/}
            {/*            @전체 350개의 응답중 기능 A에 대한 언급빈도는 168개이며, 4.35(많이 치명적임)의 치명도가 나왔습니다.*/}
            {/*            <br /> 구체적으로 어떤 부분이 불편했는지는 다음 그래프에서 상세하게 확인하실 수 있습니다.*/}
            {/*          </>,*/}
            {/*        ]}*/}
            {/*      />*/}
            {/*    </FlexBox>*/}
            {/*  </FlexBox>*/}
            {/*</FlexBox>*/}

            {/*<FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>*/}
            {/*  <FlexBox style={graphAreaStyle} direction={'column'}>*/}
            {/*    <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>*/}
            {/*      <div css={[heading4_bold]}>@2. 상세 내용</div>*/}
            {/*    </div>*/}
            {/*    <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>*/}
            {/*      <FlexBox style={{ border: '1px solid #dcdcdc', borderRadius: '8px', padding: '24px 0', marginBottom: '36px' }}>*/}
            {/*        <AnnouncementBox icon={'NOTI'} content={'클릭하면 주관식 응답을 확인할 수 있어요.'} />*/}
            {/*      </FlexBox>*/}

            {/*      <StackedBarChart*/}
            {/*        dataList={stackedBarTestData}*/}
            {/*        label={[*/}
            {/*          <>*/}
            {/*            <strong>불편 대상 1위 :</strong> 조회 콘텐츠 (뉴스, 블로그 글 등 )*/}
            {/*          </>,*/}
            {/*        ]}*/}
            {/*        value={'49명'}*/}
            {/*        valueStyle={{ color: colors.grey._3c, fontWeight: 500 }}*/}
            {/*        rate={'46%'}*/}
            {/*      />*/}
            {/*      <StackedBarChart*/}
            {/*        dataList={stackedBarTestData}*/}
            {/*        label={[*/}
            {/*          <>*/}
            {/*            <strong>불편 대상 2위 :</strong> 메뉴(구조, 이름)*/}
            {/*          </>,*/}
            {/*        ]}*/}
            {/*        value={'49명'}*/}
            {/*        valueStyle={{ color: colors.grey._3c, fontWeight: 500 }}*/}
            {/*        rate={'49.5%'}*/}
            {/*      />*/}

            {/*      <AnnouncementBox*/}
            {/*        style={{ width: '100%', marginTop: '32px', padding: '12px 16px' }}*/}
            {/*        color={colors.grey._3c}*/}
            {/*        content={[*/}
            {/*          <>*/}
            {/*            @기능 A에 대해 언급 된 불편 개수는 총 5개이며,*/}
            {/*            <br />그 중 조회 콘첸츠(뉴스, 블로그 글 등)에 대한 불편함이 가장 높게 평가되었습니다.*/}
            {/*            <br />*/}
            {/*            기능 A에서 언급된 사용성 평가 요소는 다음 그래프에서 상세하게 확인하실 수 있습니다.*/}
            {/*          </>,*/}
            {/*        ]}*/}
            {/*      />*/}
            {/*    </FlexBox>*/}
            {/*  </FlexBox>*/}
            {/*</FlexBox>*/}

            {/*<FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>*/}
            {/*  <FlexBox style={graphAreaStyle} direction={'column'}>*/}
            {/*    <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>*/}
            {/*      <div css={[heading4_bold]}>@3. 사용성 요소별 점수</div>*/}
            {/*    </div>*/}
            {/*    <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>*/}
            {/*      <FlexBox justify={'space-between'}>*/}
            {/*        <FlexBox justify={'flex-start'} style={{ marginBottom: '4px' }}>*/}
            {/*          <Icon name={'ALERT_NORMAL'} size={10} />*/}
            {/*          <span css={[caption2_bold, { textDecoration: 'underline' }]}>사용성 평가 요소가 뭔가요</span>*/}
            {/*        </FlexBox>*/}
            {/*        <FlexBox justify={'flex-end'} style={{ marginBottom: '4px' }}>*/}
            {/*          <Icon name={'ALERT_NORMAL'} size={10} />*/}
            {/*          <span css={[caption2_bold, { textDecoration: 'underline' }]}>치명도가 뭔가요</span>*/}
            {/*        </FlexBox>*/}
            {/*      </FlexBox>*/}

            {/*      <UsabilityTableChart dataList={featureUseData} negative={true} />*/}
            {/*    </FlexBox>*/}
            {/*  </FlexBox>*/}
            {/*</FlexBox>*/}
            {/*<div css={sortationArea} />*/}
          </Fragment>
        );
      })}
      {/*<FlexBox style={headerBosStyle} justify={'space-between'}>*/}
      {/*  <FlexBox justify={'flex-start'} align={'center'}>*/}
      {/*    <span css={[heading3_bold, { marginRight: '32px' }]}>@[미션 1.회원가입]의 기능별 사용성 비교</span>*/}
      {/*    <CheckBox inputName={'privacyConsentYn'} label={'미션에 실패한 응답자의 피드백만 보기'} register={register} errors={errors} />*/}
      {/*  </FlexBox>*/}
      {/*  <FlexBox justify={'flex-end'}>*/}
      {/*    <IconTextButton style={{ marginRight: '8px' }} textStyle={'custom'} name={'NAVIGATION_ARROW_RIGHT'} text={'원본 데이터 확인하기'} />*/}
      {/*    <IconTextButton textStyle={'custom'} name={'NAVIGATION_ARROW_RIGHT'} text={'리서치 코멘트 확인하기'} />*/}
      {/*  </FlexBox>*/}
      {/*</FlexBox>*/}

      {/*<FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>*/}
      {/*  <FlexBox style={graphAreaStyle} direction={'column'}>*/}
      {/*    <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>*/}
      {/*      <div css={[heading4_bold]}>@[미션 1.회원가입] 기능별 불편 언급 비율과 치명도 </div>*/}
      {/*    </div>*/}
      {/*    <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>*/}
      {/*      <FlexBox justify={'flex-end'} style={{ marginBottom: '4px' }}>*/}
      {/*        <Icon name={'ALERT_NORMAL'} size={10} />*/}
      {/*        <span css={[caption2_bold, { textDecoration: 'underline' }]}>치명도가 뭔가요</span>*/}
      {/*      </FlexBox>*/}
      {/*      <TableBarChart dataList={tableBarChartTestData} dataValueList={tableBarTestData} />*/}
      {/*    </FlexBox>*/}
      {/*  </FlexBox>*/}
      {/*</FlexBox>*/}
      {/*<div css={sortationArea} />*/}

      {/*<FlexBox style={headerBosStyle} justify={'space-between'}>*/}
      {/*  <FlexBox justify={'flex-start'} align={'center'}>*/}
      {/*    <span css={[heading3_bold, { marginRight: '32px' }]}>@기능별 상세 내용 - [미션 1.회원가입] 기능 A</span>*/}
      {/*    <CheckBox inputName={'privacyConsentYn'} label={'미션에 실패한 응답자의 피드백만 보기'} register={register} errors={errors} />*/}
      {/*  </FlexBox>*/}
      {/*  <FlexBox justify={'flex-end'}>*/}
      {/*    <IconTextButton style={{ marginRight: '8px' }} textStyle={'custom'} name={'NAVIGATION_ARROW_RIGHT'} text={'원본 데이터 확인하기'} />*/}
      {/*    <IconTextButton textStyle={'custom'} name={'NAVIGATION_ARROW_RIGHT'} text={'리서치 코멘트 확인하기'} />*/}
      {/*  </FlexBox>*/}
      {/*</FlexBox>*/}

      {/*<FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>*/}
      {/*  <FlexBox style={graphAreaStyle} direction={'column'}>*/}
      {/*    <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>*/}
      {/*      <div css={[heading4_bold]}>@1. 불편 언급 비율과 치명도</div>*/}
      {/*    </div>*/}
      {/*    <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>*/}
      {/*      <FlexBox justify={'flex-end'} style={{ marginBottom: '4px' }}>*/}
      {/*        <Icon name={'ALERT_NORMAL'} size={10} />*/}
      {/*        <span css={[caption2_bold, { textDecoration: 'underline' }]}>치명도가 뭔가요</span>*/}
      {/*      </FlexBox>*/}
      {/*      <TableBarChart dataList={tableBarChartTestData} dataValueList={featureSpecificDetailData} />*/}

      {/*      <AnnouncementBox*/}
      {/*        style={{ width: '100%', marginTop: '32px', padding: '12px 16px' }}*/}
      {/*        color={colors.grey._3c}*/}
      {/*        content={[*/}
      {/*          <>*/}
      {/*            @전체 350개의 응답중 기능 A에 대한 언급빈도는 168개이며, 4.35(많이 치명적임)의 치명도가 나왔습니다.*/}
      {/*            <br /> 구체적으로 어떤 부분이 불편했는지는 다음 그래프에서 상세하게 확인하실 수 있습니다.*/}
      {/*          </>,*/}
      {/*        ]}*/}
      {/*      />*/}
      {/*    </FlexBox>*/}
      {/*  </FlexBox>*/}
      {/*</FlexBox>*/}

      {/*<FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>*/}
      {/*  <FlexBox style={graphAreaStyle} direction={'column'}>*/}
      {/*    <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>*/}
      {/*      <div css={[heading4_bold]}>@2. 상세 내용</div>*/}
      {/*    </div>*/}
      {/*    <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>*/}
      {/*      <FlexBox style={{ border: '1px solid #dcdcdc', borderRadius: '8px', padding: '24px 0', marginBottom: '36px' }}>*/}
      {/*        <AnnouncementBox icon={'NOTI'} content={'클릭하면 주관식 응답을 확인할 수 있어요.'} />*/}
      {/*      </FlexBox>*/}

      {/*      <StackedBarChart*/}
      {/*        dataList={stackedBarTestData}*/}
      {/*        label={[*/}
      {/*          <>*/}
      {/*            <strong>불편 대상 1위 :</strong> 조회 콘텐츠 (뉴스, 블로그 글 등 )*/}
      {/*          </>,*/}
      {/*        ]}*/}
      {/*        value={'49명'}*/}
      {/*        valueStyle={{ color: colors.grey._3c, fontWeight: 500 }}*/}
      {/*        rate={'46%'}*/}
      {/*      />*/}
      {/*      <StackedBarChart*/}
      {/*        dataList={stackedBarTestData}*/}
      {/*        label={[*/}
      {/*          <>*/}
      {/*            <strong>불편 대상 2위 :</strong> 메뉴(구조, 이름)*/}
      {/*          </>,*/}
      {/*        ]}*/}
      {/*        value={'49명'}*/}
      {/*        valueStyle={{ color: colors.grey._3c, fontWeight: 500 }}*/}
      {/*        rate={'49.5%'}*/}
      {/*      />*/}

      {/*      <AnnouncementBox*/}
      {/*        style={{ width: '100%', marginTop: '32px', padding: '12px 16px' }}*/}
      {/*        color={colors.grey._3c}*/}
      {/*        content={[*/}
      {/*          <>*/}
      {/*            @기능 A에 대해 언급 된 불편 개수는 총 5개이며,*/}
      {/*            <br />그 중 조회 콘첸츠(뉴스, 블로그 글 등)에 대한 불편함이 가장 높게 평가되었습니다.*/}
      {/*            <br />*/}
      {/*            기능 A에서 언급된 사용성 평가 요소는 다음 그래프에서 상세하게 확인하실 수 있습니다.*/}
      {/*          </>,*/}
      {/*        ]}*/}
      {/*      />*/}
      {/*    </FlexBox>*/}
      {/*  </FlexBox>*/}
      {/*</FlexBox>*/}

      {/*<FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>*/}
      {/*  <FlexBox style={graphAreaStyle} direction={'column'}>*/}
      {/*    <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>*/}
      {/*      <div css={[heading4_bold]}>@3. 사용성 요소별 점수</div>*/}
      {/*    </div>*/}
      {/*    <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>*/}
      {/*      <FlexBox justify={'space-between'}>*/}
      {/*        <FlexBox justify={'flex-start'} style={{ marginBottom: '4px' }}>*/}
      {/*          <Icon name={'ALERT_NORMAL'} size={10} />*/}
      {/*          <span css={[caption2_bold, { textDecoration: 'underline' }]}>사용성 평가 요소가 뭔가요</span>*/}
      {/*        </FlexBox>*/}
      {/*        <FlexBox justify={'flex-end'} style={{ marginBottom: '4px' }}>*/}
      {/*          <Icon name={'ALERT_NORMAL'} size={10} />*/}
      {/*          <span css={[caption2_bold, { textDecoration: 'underline' }]}>치명도가 뭔가요</span>*/}
      {/*        </FlexBox>*/}
      {/*      </FlexBox>*/}

      {/*      <UsabilityTableChart dataList={featureUseData} negative={true} />*/}
      {/*    </FlexBox>*/}
      {/*  </FlexBox>*/}
      {/*</FlexBox>*/}
      {/*<div css={sortationArea} />*/}
    </>
  );
};

export default UsabilityByFeatureTemplate;
const headerBosStyle = css`
  height: 64px;
  width: 100%;
  padding: 24px;
  background: white;
  border-bottom: 1px solid #dcdcdc;
  position: sticky;
  top: 0;
  z-index: 500;
  overflow: unset;
`;
const graphBosStyle = css`
  width: 100%;
  position: relative;
  overflow: unset;
`;
const graphAreaStyle = css`
  border-left: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
  min-width: 900px;
  max-width: 900px;
  height: auto;
  padding-top: 40px;
`;
const graphContainerStyle = css`
  padding: 36px 80px 80px;
  width: 100%;
  border-bottom: 1px solid #dcdcdc;
  overflow: unset;
`;
const sortationArea = css`
  width: 100%;
  height: 16px;
  background: #dcdcdc;
`;
