import React, { Fragment, useCallback, useState } from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { caption2_bold, heading3_bold, heading4_bold } from '../../../../styles/FontStyles';
import CheckBox from '../../../atoms/CheckBox';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { colors } from '../../../../styles/Common.styles';
import { StackedBarChart, TableBarChart, UsabilityTableChart } from '../../../atoms/Chart';
import { tableBarChartTestData } from '../../../../assets/dummy/dummyData';
import { css } from '@emotion/react';
import Icon from '../../../atoms/Icon';
import AnnouncementBox from '../../AnnouncementBox';
import { reportHeader } from '../FeatureSpecificDetailTemplate';

const UsabilityByFeatureTemplate = ({ dataList, register, errors, checked, handleChangeCheckBox, modalControl }) => {
  const [stackbarIndex, setStackbarIndex] = useState<number | null>(null);
  const [usabilityIndex, setUsabilityIndex] = useState<number | null>(null);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClickUsabilityIndex = useCallback((e, index) => {
    e.stopPropagation();
    setUsabilityIndex(index);
  }, []);

  const onMouseOver = useCallback(
    (e, index) => {
      e.stopPropagation();
      console.log(index);
      setActiveIndex(index);
    },
    [activeIndex],
  );

  const onMouseLeave = useCallback(
    e => {
      e.stopPropagation();
      setActiveIndex(null);
    },
    [activeIndex],
  );

  return (
    <>
      {dataList?.missionFatality?.map((el, index) => {
        return (
          <div key={index} id={el.name} css={{ position: 'relative' }}>
            <FlexBox style={headerBosStyle} justify={'space-between'}>
              <FlexBox style={reportHeader} justify={'flex-start'} align={'center'}>
                <span className={'title'} css={[heading3_bold, { marginRight: '32px', overflow: 'hidden' }]}>
                  [미션 {index + 1}. {el.name}]의 기능별 사용성 비교
                </span>
                <CheckBox
                  handleChangeCheckBox={handleChangeCheckBox}
                  checked={checked}
                  inputName={'privacyConsentYn'}
                  label={'미션에 실패한 응답자의 피드백만 보기'}
                  register={register}
                  errors={errors}
                />
              </FlexBox>
              <FlexBox justify={'flex-end'} style={{ width: '40%' }}>
                <IconTextButton
                  disabled={true}
                  onClick={() => modalControl(true, 'originDataModal')}
                  style={{ marginRight: '8px' }}
                  textStyle={'custom'}
                  name={'NAVIGATION_CHEVRON_RIGHT'}
                  text={'원본 데이터 확인하기'}
                />
                <IconTextButton
                  disabled={true}
                  onClick={() => modalControl(true, 'commentDataModal', { title: 'commentModal', list: [] })}
                  textStyle={'custom'}
                  name={'NAVIGATION_CHEVRON_RIGHT'}
                  text={'리서치 코멘트 확인하기'}
                />
              </FlexBox>
            </FlexBox>

            <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
              <FlexBox style={graphAreaStyle} direction={'column'}>
                <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
                  <div css={[heading4_bold]}>
                    [미션 {index + 1}. {el.name}] 기능별 불편 언급 비율과 치명도
                  </div>
                </div>
                <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
                  <FlexBox justify={'flex-end'} style={{ marginBottom: '4px' }}>
                    <Icon name={'ALERT_NORMAL'} size={10} />
                    <span
                      onClick={() => modalControl(true, 'fatalityInfo')}
                      css={[caption2_bold, { textDecoration: 'underline', cursor: 'pointer' }]}
                    >
                      치명도가 뭔가요
                    </span>
                  </FlexBox>
                  <TableBarChart barColor={true} dataList={tableBarChartTestData} dataValueList={[el]} />
                </FlexBox>
              </FlexBox>
            </FlexBox>
            <div css={sortationArea} />

            {el.missionFunctionFatality.map((item, itemIndex) => {
              const copyList = [...item.detailList];
              const sortList = copyList.sort((a, b) => b.count - a.count);
              return (
                <div id={`기능-${item.name}`} key={`feature-${itemIndex}`}>
                  <FlexBox style={headerBosStyle} justify={'space-between'}>
                    <FlexBox style={reportHeader} justify={'flex-start'} align={'center'}>
                      <span className={'title'} css={[heading3_bold, { marginRight: '32px', overflow: 'hidden' }]}>
                        기능별 상세 내용 - [미션 {index + 1}. {item.name}]
                      </span>
                      <CheckBox
                        handleChangeCheckBox={handleChangeCheckBox}
                        checked={checked}
                        inputName={'privacyConsentYn'}
                        label={'미션에 실패한 응답자의 피드백만 보기'}
                        register={register}
                        errors={errors}
                      />
                    </FlexBox>
                    <FlexBox justify={'flex-end'} style={{ width: '40%' }}>
                      <IconTextButton
                        onClick={() =>
                          modalControl(true, 'originDataModal', {
                            title: `[미션 ${index + 1}. ${el.name}] ${item.name}`,
                            data: item.missionFunctionRawData,
                          })
                        }
                        style={{ marginRight: '8px' }}
                        textStyle={'custom'}
                        name={'NAVIGATION_CHEVRON_RIGHT'}
                        text={'원본 데이터 확인하기'}
                      />
                      <IconTextButton
                        onClick={() => modalControl(true, 'commentDataModal', { title: 'commentModal', list: [item.comment] })}
                        textStyle={'custom'}
                        name={'NAVIGATION_CHEVRON_RIGHT'}
                        text={'리서치 코멘트 확인하기'}
                      />
                    </FlexBox>
                  </FlexBox>

                  <FlexBox style={{ ...graphBosStyle, overflow: 'unset' }} justify={'center'} align={'flex-start'} overflow={'unset'}>
                    <FlexBox style={{ ...graphAreaStyle, overflow: 'unset' }} direction={'column'}>
                      <div id={item.name} css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
                        <div css={[heading4_bold]}>1. 불편 언급 비율과 치명도</div>
                      </div>
                      <FlexBox
                        direction={'column'}
                        justify={'space-between'}
                        align={'flex-start'}
                        overflow={'unset'}
                        style={{ graphContainerStyle, padding: '32px 80px 80px' }}
                      >
                        <FlexBox justify={'flex-end'} style={{ marginBottom: '4px' }}>
                          <Icon name={'ALERT_NORMAL'} size={10} />
                          <span
                            onClick={() => modalControl(true, 'fatalityInfo')}
                            css={[caption2_bold, { textDecoration: 'underline', cursor: 'pointer' }]}
                          >
                            치명도가 뭔가요
                          </span>
                        </FlexBox>
                        <TableBarChart barColor={true} dataList={tableBarChartTestData} dataValueList={el.missionFunctionFatality} name={item.name} />

                        <AnnouncementBox
                          style={{ width: '100%', marginTop: '32px', padding: '12px 16px' }}
                          color={colors.grey._3c}
                          content={item.info}
                        />
                      </FlexBox>
                    </FlexBox>
                  </FlexBox>

                  <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
                    <FlexBox style={graphAreaStyle} direction={'column'} overflow={'unset'}>
                      <div id={item.name} css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
                        <div css={[heading4_bold]}>2. 상세 내용</div>
                      </div>
                      <FlexBox
                        direction={'column'}
                        justify={'space-between'}
                        align={'flex-start'}
                        overflow={'unset'}
                        style={{ graphContainerStyle, padding: '32px 80px 80px' }}
                      >
                        <FlexBox style={{ border: '1px solid #dcdcdc', borderRadius: '8px', padding: '24px 0', marginBottom: '36px' }}>
                          <AnnouncementBox icon={'NOTI'} content={'그래프를 클릭하면 주관식 응답도 함께 확인할 수 있어요.'} />
                        </FlexBox>
                        {sortList.map((detailItem, detailIndex) => {
                          return (
                            <Fragment key={`detail-${detailIndex}`}>
                              <StackedBarChart
                                setStackbarIndex={setStackbarIndex}
                                stackbarIndex={stackbarIndex}
                                detailIndex={detailIndex}
                                dataList={detailItem.stack}
                                name={detailItem.name}
                                count={detailItem.count}
                                label={[
                                  <>
                                    <strong>불편 대상 {detailIndex + 1}위 :</strong> {detailItem.name}
                                  </>,
                                ]}
                                value={`${detailItem.count}개`}
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
                          content={item.detailInfo}
                        />
                      </FlexBox>
                    </FlexBox>
                  </FlexBox>

                  <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
                    <FlexBox style={graphAreaStyle} direction={'column'}>
                      <div id={item.name} css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
                        <div css={[heading4_bold]}>3. 사용성 요소별 점수</div>
                      </div>
                      <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
                        <FlexBox justify={'space-between'}>
                          <FlexBox justify={'flex-start'} style={{ marginBottom: '4px' }}>
                            <Icon name={'ALERT_NORMAL'} size={10} />
                            <span
                              onClick={() => modalControl(true, 'usabilityAssessmentInfo')}
                              css={[caption2_bold, { textDecoration: 'underline', cursor: 'pointer' }]}
                            >
                              사용성 평가 요소가 뭔가요
                            </span>
                          </FlexBox>
                          <FlexBox justify={'flex-end'} style={{ marginBottom: '4px' }}>
                            <Icon name={'ALERT_NORMAL'} size={10} />
                            <span
                              onClick={() => modalControl(true, 'fatalityInfo')}
                              css={[caption2_bold, { textDecoration: 'underline', cursor: 'pointer' }]}
                            >
                              치명도가 뭔가요
                            </span>
                          </FlexBox>
                        </FlexBox>

                        <UsabilityTableChart
                          onMouseOver={onMouseOver}
                          onMouseLeave={onMouseLeave}
                          handleClickUsabilityIndex={handleClickUsabilityIndex}
                          usabilityIndex={usabilityIndex}
                          setUsabilityIndex={setUsabilityIndex}
                          dataList={item.usabilityList}
                          negative={true}
                          activeIndex={activeIndex}
                        />
                      </FlexBox>
                    </FlexBox>
                  </FlexBox>
                  <div css={sortationArea} />
                </div>
              );
            })}
          </div>
        );
      })}
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
