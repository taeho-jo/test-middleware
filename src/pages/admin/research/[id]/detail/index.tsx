import React, { Fragment, useEffect, useRef, useState } from 'react';
import withTokenAuth from '../../../../../hoc/withTokenAuth';
import { css } from '@emotion/react';
import { body3_bold, heading1_bold, heading2_bold, heading4_bold, heading4_medium, heading5_bold } from '../../../../../styles/FontStyles';
import { colors } from '../../../../../styles/Common.styles';
import Icon from '../../../../../components/atoms/Icon';
import FlexBox from '../../../../../components/atoms/FlexBox';
import { getResearchStatusIcon, handleChoiceResearchStatusTooltip, handleChoiceStatusNmColor } from '../../../../../common/util/commonFunc';
import IconTextButton from '../../../../../components/atoms/Button/IconTextButton';
import { useRouter } from 'next/router';
import { fetchResearchDetail, resetCreateResearchData } from '../../../../../store/reducers/researchCreateReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../../../store/reducers';
import ResearchDetailTooltipModal from '../../../../../components/organisms/Modal/ResearchDetailTooltipModal';
import { isShow } from '../../../../../store/reducers/modalReducer';
import BasicButton from '../../../../../components/atoms/Button/BasicButton';
import { CURRENT_DOMAIN } from '../../../../../common/util/commonVar';
import { closeTooltip, showTooltip } from '../../../../../store/reducers/commonReducer';

const ResearchDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectTeamSeq = useSelector<ReducerType, any>(state => state.team.selectTeamSeq);
  const detailData = useSelector<ReducerType, any>(state => state.researchCreate.detailData);
  const agendaTypeArr = useSelector<ReducerType, any>(state => state.common.commonCode.AgendaType);
  const detailId = router.query.id;

  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const selectTeamList = useSelector<ReducerType, any>(state => state.team.selectTeamList);

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

  // ??????
  const [myRole, setMyRole] = useState<string | null>(null);

  const statusRef = useRef(null);

  useEffect(() => {
    if (userInfo && selectTeamList) {
      const memberArr = selectTeamList?.teamMember;
      const myRole = memberArr?.filter(el => el.userId === userInfo.userId)?.[0]?.teamRoleType;
      setMyRole(myRole);
    }
  }, [userInfo, selectTeamList]);

  const handleStepShowTooltip = (type, isActive) => {
    setTooltipStatus(true);
    if (type === '??????') {
      setTooltipContents({
        title: '????????? ????????????',
        content: isActive
          ? `${detailData?.researchNm}?????? ?????? \n???????????? ?????? ????????? ???????????????.\nDiby ???????????? ????????? ????????? ?????? ??????????????? ??? ??? ?????????.`
          : `???????????? ${detailData?.researchNm}???/??? ?????? \n????????? ??????????????? ????????? ?????? ???????????? ??? ????????????.`,
        left: -420,
        top: 150,
        backgroundColor: isActive ? '#68A0F4' : `${colors.grey._3c}`,
      });
    }
    if (type === '????????????') {
      setTooltipContents({
        title: '?????? ????????? ????????????',
        content: isActive
          ? '?????? ???????????? ????????? ?????? ????????? ????????? \n???????????? ?????? ??? ????????????.'
          : '????????? ???????????? ?????? ???????????? ???????????? ??????\n?????? ??????????????? ????????? ?????? ?????? ??? ???????????????.\n?????? ?????? ?????? ?????? ???????????? ????????? ?????? ????????? ?????????\n?????????????????? ??? ????????????.',
        left: -420,
        top: 190,
        backgroundColor: isActive ? '#68A0F4' : `${colors.grey._3c}`,
      });
    }
    if (type === '??????') {
      setTooltipContents({
        title: '????????? ?????? ????????????',
        content: isActive
          ? '?????? ????????? ?????? ?????? ????????? ???????????? ??? ????????????.'
          : '????????? ?????? ?????? ???,\n?????? ????????? ?????? ?????? ????????? ???????????? ??? ????????????.',
        left: -420,
        top: 220,
        backgroundColor: isActive ? '#68A0F4' : `${colors.grey._3c}`,
      });
    }
    if (type === '?????????') {
      setTooltipContents({
        title: '????????? ????????????',
        content: isActive ? '????????? ?????? ???????????? ????????? ??? ????????????.' : '???????????? ????????? ??????,\n????????? ?????? ???????????? ???????????? ??? ????????????. ',
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
        return detailData?.researchPeriod ? `????????? ?????????????????? ${detailData?.researchPeriod}??? ??????` : 'Diby ???????????? ?????? ?????? ??? ???????????????';
      case 'RESPONSE_RECRUITING':
      case 'RESEARCH_ANALYZING':
      case 'RESEARCH_COMPLETED':
        return `${detailData?.startDt ? detailData?.startDt : '----.--.--'} ~ ${detailData?.endDt ? detailData?.endDt : '----.--.--'}`;
      default:
        return 'Diby ???????????? ?????? ?????? ??? ???????????????';
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

  const handleSideCloseTooltip = () => {
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
    if (detailId && !router.query?.teamSeq) {
      const params = {
        teamSeq: selectTeamSeq,
        researchSeq: detailId,
      };
      dispatch(fetchResearchDetail({ params: params, callback: () => router.push('/admin/team') }));
    }
    if (detailId && router.query?.teamSeq) {
      const params = {
        teamSeq: router.query?.teamSeq,
        researchSeq: detailId,
      };
      dispatch(fetchResearchDetail({ params: params, callback: () => router.push('/admin/team') }));
    }
  }, [detailId, router.query]);

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

  const checkReport = (type, id, url, researchName, webLink) => {
    if (type === 'DIBY_WEB_REPORT') {
      window.open(`${CURRENT_DOMAIN}/admin/report/${detailData?.reportViewId}`);
    }
    if (type === 'PDF') {
      downloadFile(url, researchName);
    }
    if (type === 'EXTERNAL_REPORT') {
      window.open(webLink);
    }
  };

  const handleShowTooltip = (statusTypeNm, statusType) => {
    const positionObject = statusRef?.current?.getBoundingClientRect();

    const top = positionObject.top + 30;
    const left = statusRef?.current?.offsetLeft - 100;
    dispatch(
      showTooltip({
        show: true,
        title: statusTypeNm,
        content: handleChoiceResearchStatusTooltip(statusType),
        top,
        left,
        backgroundColor: colors.grey._3c,
      }),
    );
  };

  const researchStartButtonText = () => {
    if (detailData?.statusType === 'RESPONSE_RECRUITING' || detailData?.statusType === 'RESEARCH_ANALYZING') {
      return '?????? ??????????????????.';
    } else if (detailData?.statusType === 'RESEARCH_START_REQUEST_COMPLETE') {
      return '???????????? ???????????????.';
    } else {
      return '????????? ????????????';
    }
  };

  return (
    <div css={mainContainerStyle}>
      <div
        css={css`
          height: 100%;
        `}
      >
        <div css={titleContainerStyle}>
          <span css={[heading1_bold, titleStyle]}>{detailData?.researchNm}</span>
          <FlexBox forwardRef={statusRef} style={statusBox} direction={'row'} justify={'flex-start'} align={'center'}>
            {/*TODO: STATUS??? ?????? ?????? ??????*/}
            <Icon name={getResearchStatusIcon(detailData?.statusType)} size={24} />
            <span
              onMouseOver={() => handleShowTooltip(detailData?.statusTypeNm, detailData?.statusType)}
              onMouseOut={() => dispatch(closeTooltip())}
              css={[body3_bold, { marginLeft: '8px', color: handleChoiceStatusNmColor(detailData?.statusType) }]}
            >
              {detailData?.statusTypeNm}
            </span>
          </FlexBox>
        </div>

        <div css={contentsContainerStyle}>
          {/* -------------------------------- ????????? ?????? -------------------------------- */}
          <div className={'scrollType1'} css={rightContentsStyle}>
            {myRole === '?????????' || (myRole === '??????' && detailData?.createId === userInfo?.userId) ? (
              <div css={researchStartBtnContainerStyle}>
                {detailData?.statusType === 'RESEARCH_DESIGN_COMPLETE' ? (
                  <BasicButton
                    onClick={() => showCostModal('researchStartModal')}
                    text={'????????? ????????????'}
                    css={css`
                      width: 648px;
                      z-index: 10;
                    `}
                  />
                ) : detailData?.statusType === 'RESEARCH_COMPLETED' ? null : (
                  <BasicButton
                    theme={'dark'}
                    disabled={true}
                    text={researchStartButtonText()}
                    css={css`
                      width: 648px;
                      z-index: 10;
                      cursor: not-allowed;
                    `}
                  />
                )}
              </div>
            ) : null}

            {/*{calcShowButton(detailData?.statusType) &&*/}
            {/*  (myRole === '?????????' ? (*/}
            {/*    <div css={modifyButton} onClick={() => router.push(`/admin/research/${detailId}`)}>*/}
            {/*      <IconTextButton name={'ACTION_SETTING'} iconPosition={'left'} text={'????????????'} />*/}
            {/*    </div>*/}
            {/*  ) : myRole === '??????' && detailData?.createId === userInfo?.userId ? (*/}
            {/*    <div css={modifyButton} onClick={() => router.push(`/admin/research/${detailId}`)}>*/}
            {/*      <IconTextButton name={'ACTION_SETTING'} iconPosition={'left'} text={'????????????'} />*/}
            {/*    </div>*/}
            {/*  ) : null)}*/}

            {/* ????????? ?????? */}
            <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
              <span css={heading5_bold}>????????? ??????</span>
              <span css={[heading4_medium, contentsStyle]}>{detailData?.researchTypeNm}</span>
            </FlexBox>
            {/* ??? */}
            <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
              <span css={heading5_bold}>???</span>
              <span css={[heading4_medium, contentsStyle]}>{detailData?.teamNm}</span>
            </FlexBox>
            {/* ???????????? */}
            <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
              <span css={heading5_bold}>????????????</span>
              <span css={[heading4_medium, contentsStyle]}>{detailData?.productNm}</span>
            </FlexBox>
            {/* ????????? ?????? */}
            <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
              <span css={heading5_bold}>????????? ??????</span>
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
            {/* ?????? ???????????? ?????? ?????? ?????? ???????????? */}
            <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
              <span css={heading5_bold}>?????? ???????????? ?????? ?????? ?????? ????????????</span>
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
            {/* UI?????? - ?????? */}
            {detailData?.researchType === 'UI_DIAGNOSIS' && (
              <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
                <span css={heading5_bold}>??????</span>
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
            {/* FGD - ????????? */}
            {detailData?.researchType === 'FGD' && (
              <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
                <span css={heading5_bold}>?????????</span>
                {detailData?.detailDesignInfo?.map((item, index) => {
                  const agendaaa = agendaTypeArr?.filter(el => el.key === item.agendaType);
                  const agenda = agendaaa?.[0]?.displayName;
                  return (
                    <span key={index} css={[heading4_medium, contentsStyle]}>
                      {item.agendaType === 'ETC' && item.agenda}
                      {item.agendaType !== 'ETC' && agenda}
                    </span>
                  );
                })}
              </FlexBox>
            )}
            {/* ?????? ?????? - ??????, ???????????? */}
            {detailData?.researchType === 'HYPOTHESIS_VERIFICATION' && (
              <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
                <span css={heading5_bold}>??????</span>
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
            {/* ?????? ?????? ?????? */}
            <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
              <span css={heading5_bold}>?????? ????????????</span>
              {detailData?.additionalInfo?.map((item, index) => {
                return (
                  <span
                    key={index}
                    css={[
                      heading4_medium,
                      contentsStyle,
                      css`
                        padding-bottom: 80px;
                      `,
                    ]}
                  >
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
          {/* -------------------------------- ????????? ?????? -------------------------------- */}

          {/* -------------------------------- ?????? ?????? -------------------------------- */}
          <div css={leftContentsStyle}>
            {detailData?.statusType === 'RESEARCH_REQUEST_DESIGN_COMPLETE' && (
              <div css={alertContainer}>
                <span css={heading5_bold}>
                  ????????? ?????? ????????? ??????????????? ??????????????????.
                  <br />
                  ?????? 24?????? ?????? ?????? ???????????? ???????????? ??????
                  <br /> ????????? ?????? ???????????????.
                </span>
              </div>
            )}
            <div css={researchDataContainer}>
              <p css={heading5_bold}>????????? ??????</p>
              <p css={heading4_bold}>{calcModalPeriod(detailData?.statusType)}</p>
            </div>

            <div
              css={detailData?.communicationUrl ? activeBtnContainer : btnContainer}
              onMouseOver={() => handleStepShowTooltip('??????', detailData?.communicationUrl ? true : false)}
              onMouseOut={handleSideCloseTooltip}
            >
              {detailData?.communicationUrl ? (
                <IconTextButton
                  onClick={() => window.open(detailData?.communicationUrl)}
                  textStyle={[btnTextStyle, { color: colors.grey._3c }]}
                  name={'NOTI'}
                  text={'Diby ???????????? ????????? ????????????'}
                  roundBorder={false}
                  iconPosition={'left'}
                />
              ) : (
                <IconTextButton
                  textStyle={btnTextStyle}
                  name={'LOCK'}
                  text={'Diby ???????????? ????????? ????????????'}
                  roundBorder={false}
                  iconPosition={'left'}
                />
              )}
            </div>
            <div
              css={detailData?.questionFileDownloadLink ? activeBtnContainer : btnContainer}
              onMouseOver={() => handleStepShowTooltip('????????????', detailData?.questionFileDownloadLink ? true : false)}
              onMouseOut={handleSideCloseTooltip}
            >
              {detailData?.questionFileDownloadLink ? (
                <IconTextButton
                  onClick={() => downloadFile(detailData?.questionFileDownloadLink, detailData?.questionFileNm)}
                  textStyle={[btnTextStyle, { color: colors.grey._3c }]}
                  name={'DOWNLOAD'}
                  text={'?????? ????????? ????????????'}
                  roundBorder={false}
                  iconPosition={'left'}
                />
              ) : (
                <IconTextButton textStyle={btnTextStyle} name={'LOCK'} text={'?????? ????????? ????????????'} roundBorder={false} iconPosition={'left'} />
              )}
            </div>
            <div
              css={detailData?.totalCost ? activeBtnContainer : btnContainer}
              onMouseOver={() => handleStepShowTooltip('??????', detailData?.totalCost ? true : false)}
              onMouseOut={handleSideCloseTooltip}
            >
              {detailData?.totalCost ? (
                <IconTextButton
                  textStyle={[btnTextStyle, { color: colors.grey._3c }]}
                  name={'RECEIPT'}
                  text={'????????? ?????? ????????????'}
                  roundBorder={false}
                  iconPosition={'left'}
                  onClick={() => showCostModal('researchCostModal')}
                />
              ) : (
                <IconTextButton textStyle={btnTextStyle} name={'LOCK'} text={'????????? ?????? ????????????'} roundBorder={false} iconPosition={'left'} />
              )}
            </div>
            <div
              css={detailData?.researchViewId ? activeBtnContainer : btnContainer}
              onMouseOver={() => handleStepShowTooltip('?????????', detailData?.reportType ? true : false)}
              onMouseOut={handleSideCloseTooltip}
            >
              {detailData?.reportType ? (
                <IconTextButton
                  onClick={() =>
                    checkReport(
                      detailData?.reportType,
                      detailData?.reportViewId,
                      detailData?.reportFileDownloadLink,
                      detailData?.researchNm,
                      detailData?.externalUrl,
                    )
                  }
                  textStyle={[btnTextStyle, { color: colors.grey._3c }]}
                  name={'REPORT'}
                  text={'????????? ????????????'}
                  roundBorder={false}
                  iconPosition={'left'}
                />
              ) : (
                <IconTextButton textStyle={btnTextStyle} name={'LOCK'} text={'????????? ????????????'} roundBorder={false} iconPosition={'left'} />
              )}
            </div>
            {tooltipStatus && <ResearchDetailTooltipModal tooltip={tooltipContents} />}
          </div>
          {/* -------------------------------- ?????? ?????? -------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default ResearchDetail;

const mainContainerStyle = css`
  display: flex;
  min-width: 1260px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 160px;
  //height: calc(100vh - 72px);
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

  height: 100vh;
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
  max-height: 750px;
`;
const researchStartBtnContainerStyle = css`
  position: fixed;
  //top: 80%;
  left: 39%;
  transform: translateX(-50%);
  bottom: 50px;
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
  cursor: pointer;
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
      content: '??????. ';
      font-size: 14px;
      font-weight: 700;
    }
  }
`;
