import React, { Fragment, useEffect, useState } from 'react';
import withTokenAuth from '../../../../../hoc/withTokenAuth';
import { css } from '@emotion/react';
import { body3_bold, heading1_bold, heading2_bold, heading4_bold, heading4_medium, heading5_bold } from '../../../../../styles/FontStyles';
import { colors } from '../../../../../styles/Common.styles';
import Icon from '../../../../../components/atoms/Icon';
import FlexBox from '../../../../../components/atoms/FlexBox';
import { getResearchStatusIcon } from '../../../../../common/util/commonFunc';
import IconTextButton from '../../../../../components/atoms/Button/IconTextButton';
import { useRouter } from 'next/router';
import { fetchResearchDetail, resetCreateResearchData } from '../../../../../store/reducers/researchCreateReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../../../store/reducers';
import moment from 'moment';
import Button from '../../../../../components/atoms/Button';
import TutorialIndicator from '../../../../../components/atoms/TutorialIndicator/TutorialIndicator';
import ResearchDetailTooltipModal from '../../../../../components/organisms/Modal/ResearchDetailTooltipModal';
import { isShow } from '../../../../../store/reducers/modalReducer';
import BasicButton from '../../../../../components/atoms/Button/BasicButton';

const ResearchDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectTeamSeq = useSelector<ReducerType, any>(state => state.team.selectTeamSeq);
  const detailData = useSelector<ReducerType, any>(state => state.researchCreate.detailData);
  const detailId = router.query.id;

  const [tooltipStatus, setTooltipStatus] = useState(false);
  const [tooltipContents, setTooltipContents] = useState<{
    title: string;
    content: string;
    top: number;
    left: number;
    backgroundColor: '#68A0F4' | '#3c3c46';
  }>({
    title: '',
    content: '',
    top: 0,
    left: 0,
    backgroundColor: colors.grey._3c,
  });

  const showTooltip = (type, isActive) => {
    setTooltipStatus(true);
    if (type === '소통') {
      setTooltipContents({
        title: '실시간 소통하기',
        content: isActive
          ? '(리서치 명)만을 위한 \n카카오톡 오픈 채팅에 접속합니다.\nDiby 매니저와 리서치 설계를 위한 의사소통을 할 수 있어요.'
          : '매니져가 (리서치 명)를/을 위한 \n실시간 소통채널을 개설한 이후 확인하실 수 있습니다.',
        left: -420,
        top: 150,
        backgroundColor: isActive ? '#68A0F4' : `${colors.grey._3c}`,
      });
    }
    if (type === '다운로드') {
      setTooltipContents({
        title: '문항 리스트 다운로드',
        content: isActive
          ? '실제 리서치에 활용할 문항 리스트 파일을 \n다운로드 하실 수 있습니다.'
          : '리서치 매니저가 설계 과정에서 리서치에 대한\n각종 진행상황을 슬랙을 통해 공유 및 확정합니다.\n설계 완료 이후 실제 리서치에 활용할 문항 리스트 파일을\n다운로드하실 수 있습니다.',
        left: -420,
        top: 190,
        backgroundColor: isActive ? '#68A0F4' : `${colors.grey._3c}`,
      });
    }
    if (type === '견적') {
      setTooltipContents({
        title: '실제 견적 확인하기',
        content: isActive
          ? '최종 리서치 수행 비용 견적을 확인하실 수 있습니다.'
          : '리서치 설계 완료 후,\n최종 리서치 수행 비용 견적을 확인하실 수 있습니다.',
        left: -420,
        top: 220,
        backgroundColor: isActive ? '#68A0F4' : `${colors.grey._3c}`,
      });
    }
    if (type === '리포트') {
      setTooltipContents({
        title: '리포트 확인하기',
        content: isActive ? '리서치 결과 리포트를 확인할 수 있습니다.' : '리서치가 종료된 이후,\n리서치 결과 리포트를 확인하실 수 있습니다. ',
        left: -420,
        top: 260,
        backgroundColor: isActive ? '#68A0F4' : `${colors.grey._3c}`,
      });
    }
  };

  const calcModalPeriod = status => {
    switch (status) {
      case 'RESEARCH_INFO_ENTERING':
      case 'RESEARCH_REQUEST_DESIGN_COMPLETE':
      case 'RESEARCH_DESIGN':
      case 'RESEARCH_DESIGN_COMPLETE':
      case 'RESEARCH_START_REQUEST_COMPLETE':
        return detailData?.researchPeriod ? `리서치 시작일로부터 ${detailData?.researchPeriod}일 이내` : 'Diby 매니저가 설계 검토 후 입력합니다';
      case 'RESPONSE_RECRUITING':
      case 'RESEARCH_ANALYZING':
      case 'RESEARCH_COMPLETED':
        return `${detailData?.startDt} ~ ${detailData?.endDt}`;
      default:
        return 'Diby 매니저가 설계 검토 후 입력합니다';
    }
  };
  const calcShowButton = status => {
    switch (status) {
      case 'RESEARCH_INFO_ENTERING':
      case 'RESEARCH_REQUEST_DESIGN_COMPLETE':
      case 'RESEARCH_DESIGN':
      case 'RESEARCH_DESIGN_COMPLETE':
        return true;
      case 'RESEARCH_START_REQUEST_COMPLETE':
      case 'RESPONSE_RECRUITING':
      case 'RESEARCH_ANALYZING':
      case 'RESEARCH_COMPLETED':
        return false;
      default:
        return true;
    }
  };

  const closeTooltip = () => {
    setTooltipStatus(false);
    setTooltipContents({
      title: '',
      content: '',
      top: 0,
      left: 0,
      backgroundColor: colors.grey._3c,
    });
  };

  useEffect(() => {
    if (detailId) {
      const params = {
        teamSeq: selectTeamSeq,
        researchSeq: detailId,
      };
      dispatch(fetchResearchDetail({ params: params }));
    }
  }, [detailId]);

  useEffect(() => {
    return () => {
      dispatch(resetCreateResearchData());
    };
  }, []);

  const downloadFile = (link, name) => {
    const tag = document.createElement('a');
    tag.href = link;
    tag.setAttribute('download', name);
    document.body.appendChild(tag);
    tag.click();
  };

  const showCostModal = name => {
    dispatch(isShow({ isShow: true, type: name }));
  };

  return (
    <div css={mainContainerStyle}>
      <div>
        <div css={titleContainerStyle}>
          <span css={[heading1_bold, titleStyle]}>{detailData?.researchNm}</span>
          <FlexBox style={statusBox} direction={'row'} justify={'flex-start'} align={'center'}>
            {/*TODO: STATUS에 따른 상태 변경*/}
            <Icon name={getResearchStatusIcon(detailData?.statusType)} size={24} />
            <span css={[body3_bold, { marginLeft: '8px' }]}>{detailData?.statusTypeNm}</span>
          </FlexBox>
        </div>

        <div css={contentsContainerStyle}>
          {/* -------------------------------- 오른쪽 영역 -------------------------------- */}
          <div className={'scrollType1'} css={rightContentsStyle}>
            <div css={researchStartBtnContainerStyle}>
              {detailData?.statusType === 'RESEARCH_DESIGN_COMPLETE' ? (
                <BasicButton
                  onClick={() => showCostModal('researchStartModal')}
                  // btnTextColor={'white'}
                  // disabled={true}
                  text={'리서치 시작하기'}
                  css={css`
                    width: 648px;
                    z-index: 10;
                  `}
                />
              ) : (
                <BasicButton
                  theme={'dark'}
                  disabled={true}
                  text={'리서치 시작하기'}
                  css={css`
                    width: 648px;
                    z-index: 10;
                    cursor: not-allowed;
                  `}
                />
              )}
            </div>
            {calcShowButton(detailData?.statusType) && (
              <div css={modifyButton} onClick={() => router.push(`/admin/research/${detailId}`)}>
                <IconTextButton name={'ACTION_SETTING'} iconPosition={'left'} text={'수정하기'} />
              </div>
            )}

            {/* 리서치 방법 */}
            <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
              <span css={heading5_bold}>리서치 종류</span>
              <span css={[heading4_medium, contentsStyle]}>{detailData?.researchTypeNm}</span>
            </FlexBox>
            {/* 팀 */}
            <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
              <span css={heading5_bold}>팀</span>
              <span css={[heading4_medium, contentsStyle]}>{detailData?.teamNm}</span>
            </FlexBox>
            {/* 프로덕트 */}
            <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
              <span css={heading5_bold}>프로덕트</span>
              <span css={[heading4_medium, contentsStyle]}>{detailData?.productNm}</span>
            </FlexBox>
            {/* 응답자 조건 */}
            <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
              <span css={heading5_bold}>응답자 조건</span>
              <ol css={olStyle} start={1}>
                {detailData?.respondentInfo?.map((item, index) => {
                  return (
                    <li key={index} css={[heading4_medium, contentsStyle]}>
                      {item.respondent}
                    </li>
                  );
                })}
              </ol>
            </FlexBox>
            {/* 유저 리서치를 통해 하고 싶은 의사결정 */}
            <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
              <span css={heading5_bold}>유저 리서치를 통해 하고 싶은 의사결정</span>
              <ol css={olStyle} start={1}>
                {detailData?.goalInfo?.map((item, index) => {
                  return (
                    <li key={index} css={[heading4_medium, contentsStyle]}>
                      {item.goal}
                    </li>
                  );
                })}
              </ol>
            </FlexBox>
            {/* UI진단 - 미션 */}
            {detailData?.researchType === 'UI_DIAGNOSIS' && (
              <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
                <span css={heading5_bold}>미션</span>
                <ol css={olStyle} start={1}>
                  {detailData?.detailDesignInfo?.map((item, index) => {
                    return (
                      <li key={index} css={[heading4_medium, contentsStyle]}>
                        {item.mission}
                      </li>
                    );
                  })}
                </ol>
              </FlexBox>
            )}
            {/* FGD - 아젠다 */}
            {detailData?.researchType === 'FGD' && (
              <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
                <span css={heading5_bold}>아젠다</span>
                {detailData?.detailDesignInfo?.map((item, index) => {
                  return (
                    <span key={index} css={[heading4_medium, contentsStyle]}>
                      {item.agenda}
                    </span>
                  );
                })}
              </FlexBox>
            )}
            {/* 가설 검증 - 가설, 가설이유 */}
            {detailData?.researchType === 'HYPOTHESIS_VERIFICATION' && (
              <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
                <span css={heading5_bold}>가설</span>
                <ol css={olStyle} start={1}>
                  {detailData?.detailDesignInfo?.map((item, index) => {
                    return (
                      <Fragment key={index}>
                        <li key={index} css={[heading4_medium, contentsStyle]}>
                          {item.hypothesis}
                        </li>

                        <ul css={ulStyle}>
                          <li
                            css={css`
                              text-indent: -17px;
                              padding-left: 20px;
                            `}
                          >
                            {item.hypothesisReason}
                          </li>
                        </ul>
                      </Fragment>
                    );
                  })}
                </ol>
              </FlexBox>
            )}
            {/* 추가 요구 사항 */}
            <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
              <span css={heading5_bold}>추가 요구사항</span>
              {detailData?.additionalInfo?.map((item, index) => {
                return (
                  <span key={index} css={[heading4_medium, contentsStyle]}>
                    {item.additional}
                  </span>
                );
              })}
            </FlexBox>
            <div
              css={css`
                height: 100px;
                width: 100%;
              `}
            />
          </div>
          {/* -------------------------------- 오른쪽 영역 -------------------------------- */}

          {/* -------------------------------- 왼쪽 영역 -------------------------------- */}
          <div css={leftContentsStyle}>
            {detailData?.statusType === 'RESEARCH_REQUEST_DESIGN_COMPLETE' && (
              <div css={alertContainer}>
                <span css={heading5_bold}>
                  리서치 설계 요청이 정상적으로 전달되었어요. 최대 24시간 이내 담당 매니져가 이메일을 통해 연락을 드릴 예정입니다.
                </span>
              </div>
            )}
            <div css={researchDataContainer}>
              <p css={heading5_bold}>리서치 기간</p>
              <p css={heading4_bold}>{calcModalPeriod(detailData?.statusType)}</p>
            </div>

            <div
              css={detailData?.communicationUrl ? activeBtnContainer : btnContainer}
              onMouseOver={() => showTooltip('소통', detailData?.communicationUrl ? true : false)}
              onMouseOut={closeTooltip}
            >
              {detailData?.communicationUrl ? (
                <IconTextButton
                  onClick={() => window.open(detailData?.communicationUrl)}
                  textStyle={[btnTextStyle, { color: colors.grey._3c }]}
                  name={'NOTI'}
                  text={'Diby 매니저와 실시간 소통하기'}
                  roundBorder={false}
                  iconPosition={'left'}
                />
              ) : (
                <IconTextButton
                  textStyle={btnTextStyle}
                  name={'LOCK'}
                  text={'Diby 매니저와 실시간 소통하기'}
                  roundBorder={false}
                  iconPosition={'left'}
                />
              )}
            </div>
            <div
              css={detailData?.questionFileDownloadLink ? activeBtnContainer : btnContainer}
              onMouseOver={() => showTooltip('다운로드', detailData?.questionFileDownloadLink ? true : false)}
              onMouseOut={closeTooltip}
            >
              {detailData?.questionFileDownloadLink ? (
                <IconTextButton
                  onClick={() => downloadFile(detailData?.questionFileDownloadLink, detailData?.questionFileNm)}
                  textStyle={[btnTextStyle, { color: colors.grey._3c }]}
                  name={'DOWNLOAD'}
                  text={'질문 리스트 내려받기'}
                  roundBorder={false}
                  iconPosition={'left'}
                />
              ) : (
                <IconTextButton textStyle={btnTextStyle} name={'LOCK'} text={'질문 리스트 내려받기'} roundBorder={false} iconPosition={'left'} />
              )}
            </div>
            <div
              css={detailData?.totalCost ? activeBtnContainer : btnContainer}
              onMouseOver={() => showTooltip('견적', detailData?.totalCost ? true : false)}
              onMouseOut={closeTooltip}
            >
              {detailData?.totalCost ? (
                <IconTextButton
                  textStyle={[btnTextStyle, { color: colors.grey._3c }]}
                  name={'RECEIPT'}
                  text={'확정 견적 확인하기'}
                  roundBorder={false}
                  iconPosition={'left'}
                  onClick={() => showCostModal('researchCostModal')}
                />
              ) : (
                <IconTextButton textStyle={btnTextStyle} name={'LOCK'} text={'확정 견적 확인하기'} roundBorder={false} iconPosition={'left'} />
              )}
            </div>
            <div
              css={detailData?.researchViewId ? activeBtnContainer : btnContainer}
              onMouseOver={() => showTooltip('리포트', detailData?.researchViewId ? true : false)}
              onMouseOut={closeTooltip}
            >
              {detailData?.reportViewId ? (
                <IconTextButton
                  onClick={() => window.open(`http://localhost:3000/admin/report/${detailData?.reportViewId}`)}
                  textStyle={[btnTextStyle, { color: colors.grey._3c }]}
                  name={'REPORT'}
                  text={'리포트 확인하기'}
                  roundBorder={false}
                  iconPosition={'left'}
                />
              ) : (
                <IconTextButton textStyle={btnTextStyle} name={'LOCK'} text={'리포트 확인하기'} roundBorder={false} iconPosition={'left'} />
              )}
            </div>
            {tooltipStatus && <ResearchDetailTooltipModal tooltip={tooltipContents} />}
          </div>
          {/* -------------------------------- 왼쪽 영역 -------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default withTokenAuth(ResearchDetail, false);

const mainContainerStyle = css`
  display: flex;
  min-width: 1260px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 72px;
  height: calc(100vh - 72px);
`;

const titleContainerStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 28px;
`;

const titleStyle = css`
  display: inline-block;
  //align-self: flex-start;
`;

const contentsContainerStyle = css`
  width: 100%;
  max-width: 1260px;
  min-width: 1260px;
  height: 766px;
  border: 1px solid #dcdcdc;
  border-bottom: none;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  display: flex;
`;
const rightContentsStyle = css`
  width: 890px;
  padding: 32px 32px 0 48px;
  position: relative;
  overflow-y: scroll;
`;
const researchStartBtnContainerStyle = css`
  position: sticky;
  top: 630px;
  display: flex;
  justify-content: center;
`;
const modifyButton = css`
  position: absolute;
  top: 32px;
  right: 32px;
`;

const contentsTitleStyle = css``;
const contentsStyle = css`
  margin-top: 12px;
  margin-left: 8px;
`;
const leftContentsStyle = css`
  width: 370px;
  border-left: 1px solid #dcdcdc;
  position: relative;
`;
const alertContainer = css`
  width: 100%;
  background: #f7f7f7;
  border-radius: 0px 16px 0px 0px;
  padding: 32px 48px;
`;
const researchDataContainer = css`
  width: 100%;
  padding: 32px 48px;
  border-bottom: 1px solid #dcdcdc;
  p {
    margin: 0;
    padding: 0;
    &:first-of-type {
      margin-bottom: 12px;
    }
    &:last-child {
      color: ${colors.red};
      margin-left: 8px;
    }
  }
`;
const activeBtnContainer = css`
  padding: 24px 0 24px 48px;
  border-bottom: 1px solid #dcdcdc;
  &:hover {
    background: rgba(104, 160, 244, 0.28);
  }
`;
const btnContainer = css`
  padding: 24px 0 24px 48px;
  border-bottom: 1px solid #dcdcdc;
  &:hover {
    background: #f7f7f7;
  }
`;
const btnTextStyle = [
  heading2_bold,
  css`
    color: ${colors.grey._99};
  `,
];

const statusBox = css`
  //padding: 20px 0;
  width: auto;
  margin-right: 20px;
`;
const marginStyle = css`
  margin-bottom: 32px;
`;
const olStyle = css`
  list-style-type: number;
  margin-left: 14px;
`;
const ulStyle = css`
  margin-top: 10px;
  li {
    &:before {
      content: '이유. ';
      font-size: 14px;
      font-weight: 700;
    }
  }
`;
