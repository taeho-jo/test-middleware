import React, { useCallback, useEffect, useState } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import FlexBox from '../../atoms/FlexBox';
import { colors } from '../../../styles/Common.styles';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { css } from '@emotion/react';
import { heading2_bold, heading4_bold, heading4_medium, heading5_bold, heading5_medium } from '../../../styles/FontStyles';
import CheckBox from '../../atoms/CheckBox';
import { useForm } from 'react-hook-form';
import BasicButton from '../../atoms/Button/BasicButton';
import { calcResearchSolutionFee, missionAdditionalCompensation } from '../../../common/util/commonFunc';
import { isShow } from '../../../store/reducers/modalReducer';
import { fetchResearchModifyInfo } from '../../../store/reducers/researchCreateReducer';
import { useRouter } from 'next/router';
import { showToast } from '../../../store/reducers/toastReducer';
import { startLoading } from '../../../store/reducers/commonReducer';

const ResearchStartModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const DETAIL_INFO = useSelector<ReducerType, any>(state => state.researchCreate.detailData);

  const isLoading = useSelector<ReducerType, any>(state => state.common.loading);

  const [lastCheck, setLastCheck] = useState(false);
  const [confirmUseCreditCheck, setConfirmUseCreditCheck] = useState(false);
  const [addCosts, setAddCosts] = useState({
    totalRespondentSize: 0,
    totalRespondentCost: 0,
  });

  const handleChangeCheckBox = () => {
    setLastCheck(prev => !prev);
  };
  const handleChangeUseCreditCheckBox = () => {
    setConfirmUseCreditCheck(prev => !prev);
  };

  const {
    register,
    formState: { errors },
  } = useForm({});
  const closeModal = useCallback(() => {
    dispatch(isShow({ isShow: false, type: '' }));
  }, []);

  const handleStartResearch = () => {
    if (!lastCheck || !confirmUseCreditCheck) {
      dispatch(showToast({ message: '????????? ????????? ??????????????????.', isShow: true, status: 'warning', duration: 5000 }));
    } else {
      dispatch(startLoading({ name: 'researchStart' }));
      const sendObject = {
        ...DETAIL_INFO,
        statusType: 'RESEARCH_START_REQUEST_COMPLETE',
      };
      dispatch(fetchResearchModifyInfo({ sendObject: sendObject, step: 'startResearch' }));
    }
  };

  useEffect(() => {
    if (DETAIL_INFO) {
      const totalCosts = DETAIL_INFO?.respondentCompensationInfo?.reduce(
        (acc, cur) => {
          acc.totalRespondentSize = acc.totalRespondentSize + cur.respondentSize;
          acc.totalRespondentCost = acc.totalRespondentCost + parseInt(cur.respondentCost) * cur.respondentSize;
          return acc;
        },
        {
          totalRespondentSize: 0,
          totalRespondentCost: 0,
        },
      );
      setAddCosts(totalCosts);
    }
  }, [DETAIL_INFO]);

  const calcModalPeriod = status => {
    switch (status) {
      case 'RESEARCH_INFO_ENTERING':
      case 'RESEARCH_REQUEST_DESIGN_COMPLETE':
      case 'RESEARCH_DESIGN':
      case 'RESEARCH_DESIGN_COMPLETE':
      case 'RESEARCH_START_REQUEST_COMPLETE':
        return DETAIL_INFO?.researchPeriod ? `????????? ?????????????????? ${DETAIL_INFO?.researchPeriod}??? ??????` : 'Diby ???????????? ?????? ?????? ??? ???????????????';
      case 'RESPONSE_RECRUITING':
      case 'RESEARCH_ANALYZING':
      case 'RESEARCH_COMPLETED':
        return `${DETAIL_INFO?.startDt} ~ ${DETAIL_INFO?.endDt}`;
      default:
        return 'Diby ???????????? ?????? ?????? ??? ???????????????';
    }
  };

  const calcModalWidth = status => {
    switch (status) {
      case 'RESEARCH_INFO_ENTERING':
      case 'RESEARCH_REQUEST_DESIGN_COMPLETE':
      case 'RESEARCH_DESIGN':
        return '760px';
      case 'RESEARCH_DESIGN_COMPLETE':
      case 'RESEARCH_START_REQUEST_COMPLETE':
      case 'RESPONSE_RECRUITING':
      case 'RESEARCH_ANALYZING':
      case 'RESEARCH_COMPLETED':
        return '1196px';
      default:
        return '1196px';
    }
  };

  return (
    <FlexBox style={{ marginTop: '35px', minWidth: '1440px' }} justify={'center'}>
      <PopupBox padding={'0px'} width={calcModalWidth(DETAIL_INFO?.statusType)} height={'auto'}>
        <ModalTitle style={{ height: 'auto', padding: '24px 32px' }} title={<>???????????? ??????????????????????</>} />

        <FlexBox
          justify={'space-between'}
          align={'flex-start'}
          style={css`
            padding: 0 60px;
          `}
        >
          <FlexBox
            direction={'column'}
            style={css`
              margin-top: 16px;
              margin-bottom: 40px;
            `}
          >
            <FlexBox
              className={'scrollType1'}
              direction={'column'}
              justify={'flex-start'}
              align={'flex-start'}
              style={css`
                width: 640px;
                height: auto;
                max-height: 600px;
                overflow-y: scroll;
                border: 1px solid #dcdcdc;
                border-radius: 16px;
              `}
            >
              <FlexBox
                justify={'space-between'}
                style={css`
                  height: 38px;
                  border-bottom: 1px solid #dcdcdc;
                `}
              >
                <span css={[heading5_medium, tableHeaderStyle(320)]}>??????</span>
                <span css={[heading5_medium, tableHeaderStyle(128)]}>??????</span>
                <span css={[heading5_medium, tableHeaderStyle(192)]}>??????</span>
              </FlexBox>

              {/* // --------------- Diby ????????? --------------- //*/}
              <FlexBox justify={'space-between'}>
                <span css={[heading4_bold, tableHeaderStyle(320, 'left', '15px 24px')]}>Diby ?????????</span>
                <span css={[heading4_bold, tableHeaderStyle(128, 'center', '15px 24px')]} />
                <span css={[heading4_bold, tableHeaderStyle(192, 'right', '15px 24px')]}>{calcResearchSolutionFee(DETAIL_INFO?.researchType)}</span>
              </FlexBox>
              {/* // --------------- Diby ????????? --------------- //*/}

              {/* // --------------- ????????? ???????????? --------------- //*/}
              <FlexBox justify={'space-between'}>
                <span css={[heading4_bold, tableHeaderStyle(320, 'left', '15px 24px')]}>????????? ????????????</span>
                <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]}>{addCosts?.totalRespondentSize}???</span>
                <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>{addCosts?.totalRespondentCost?.toLocaleString()}???</span>
              </FlexBox>
              {/* TODO : ???????????? ??????, map????????? ?????? ?????? */}
              {DETAIL_INFO?.respondentCompensationInfo?.map((el, index) => {
                return (
                  <FlexBox
                    key={index}
                    justify={'space-between'}
                    style={css`
                      background: #f7f7f8;
                    `}
                  >
                    <span css={[heading5_medium, tableHeaderStyle(320, 'left', '20px 24px', '#646466')]}>{el?.respondentConditionNm}</span>
                    <span css={[heading5_medium, tableHeaderStyle(128, 'center', '20px 24px', '#646466')]}>
                      {el?.respondentSize?.toLocaleString()}???
                    </span>
                    <span css={[heading5_medium, tableHeaderStyle(192, 'right', '20px 24px', '#646466')]}>
                      {parseInt(el?.respondentCost)?.toLocaleString()}???
                    </span>
                  </FlexBox>
                );
              })}
              {/* TODO : ???????????? ??????, map????????? ?????? ?????? */}
              {/* // --------------- ????????? ???????????? --------------- //*/}

              {/* // --------------- ????????? ?????? ?????? --------------- //*/}
              <FlexBox justify={'space-between'}>
                <span css={[heading4_bold, tableHeaderStyle(320, 'left', '15px 24px')]}>????????? ?????? ??????</span>
                <span css={[heading4_bold, tableHeaderStyle(128, 'center', '15px 24px')]} />
                <span css={[heading4_bold, tableHeaderStyle(192, 'right', '15px 24px')]}>
                  {DETAIL_INFO?.respondentSampleCost?.toLocaleString()}???
                </span>
              </FlexBox>
              {/* // --------------- ????????? ?????? ?????? --------------- //*/}

              {/* // --------------- ????????? ????????? ?????? ?????? --------------- //*/}
              {DETAIL_INFO?.researchTypeAdditionalCost != 0 && (
                <FlexBox justify={'space-between'}>
                  <span css={[heading4_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>????????? ????????? ?????? ??????</span>
                  <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]} />
                  <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>
                    {DETAIL_INFO?.researchTypeAdditionalCost >= 0 ? DETAIL_INFO?.researchTypeAdditionalCost?.toLocaleString() : 0}???
                  </span>
                </FlexBox>
              )}

              {DETAIL_INFO?.researchType === 'UI_DIAGNOSIS' && DETAIL_INFO?.detailDesignInfo?.length - 2 > 0 && (
                <FlexBox
                  justify={'space-between'}
                  style={css`
                    background: #f7f7f8;
                  `}
                >
                  <span css={[heading5_medium, tableHeaderStyle(320, 'left', '20px 24px', '#646466')]}>?????? ??????</span>
                  <span css={[heading5_medium, tableHeaderStyle(128, 'center', '20px 24px', '#646466')]}>
                    {DETAIL_INFO?.detailDesignInfo?.length - 2}???
                  </span>
                  <span css={[heading5_medium, tableHeaderStyle(192, 'right', '20px 24px', '#646466')]}>
                    {DETAIL_INFO?.researchTypeAdditionalCost?.toLocaleString()}???
                  </span>
                </FlexBox>
              )}
              {DETAIL_INFO?.researchType === 'FGD' && DETAIL_INFO?.respondentInfo?.length - 1 > 0 && (
                <FlexBox
                  justify={'space-between'}
                  style={css`
                    background: #f7f7f8;
                  `}
                >
                  <span css={[heading5_medium, tableHeaderStyle(320, 'left', '20px 24px', '#646466')]}>????????? ?????? ??????</span>
                  <span css={[heading5_medium, tableHeaderStyle(128, 'center', '20px 24px', '#646466')]}>
                    {DETAIL_INFO?.respondentInfo?.length - 1}???
                  </span>
                  <span css={[heading5_medium, tableHeaderStyle(192, 'right', '20px 24px', '#646466')]}>
                    {DETAIL_INFO?.researchTypeAdditionalCost?.toLocaleString()}???
                  </span>
                </FlexBox>
              )}
              {DETAIL_INFO?.researchType === 'HYPOTHESIS_VERIFICATION' && DETAIL_INFO?.detailDesignInfo?.length - 10 > 0 && (
                <FlexBox
                  justify={'space-between'}
                  style={css`
                    background: #f7f7f8;
                  `}
                >
                  <span css={[heading5_medium, tableHeaderStyle(320, 'left', '20px 24px', '#646466')]}>?????? ??????</span>
                  <span css={[heading5_medium, tableHeaderStyle(128, 'center', '20px 24px', '#646466')]}>
                    {DETAIL_INFO?.detailDesignInfo?.length - 10}???
                  </span>
                  <span css={[heading5_medium, tableHeaderStyle(192, 'right', '20px 24px', '#646466')]}>
                    {DETAIL_INFO?.researchTypeAdditionalCost.toLocaleString()}???
                  </span>
                </FlexBox>
              )}
              {/* // --------------- ????????? ????????? ?????? ?????? --------------- //*/}

              {/* // --------------- ?????? ?????? --------------- //*/}
              {DETAIL_INFO?.additionalCost > 0 && (
                <>
                  <FlexBox justify={'space-between'}>
                    <span css={[heading4_bold, tableHeaderStyle(320, 'left', '15px 24px')]}>?????? ??????</span>
                    <span css={[heading4_bold, tableHeaderStyle(128, 'center', '15px 24px')]} />
                    <span css={[heading4_bold, tableHeaderStyle(192, 'right', '15px 24px')]}>{DETAIL_INFO?.additionalCost?.toLocaleString()}???</span>
                  </FlexBox>

                  {/* TODO : ????????? ????????? ?????? ?????? , map????????? ?????? ?????? */}
                  <FlexBox
                    justify={'space-between'}
                    style={css`
                      background: #f7f7f8;
                    `}
                  >
                    <span css={[heading5_medium, tableHeaderStyle(320, 'left', '15px 24px', '#646466')]}>?????? ??????</span>
                    <span css={[heading5_medium, tableHeaderStyle(128, 'center', '15px 24px', '#646466')]}>{DETAIL_INFO?.additionalCostReason}</span>
                    <span css={[heading5_medium, tableHeaderStyle(192, 'right', '15px 24px', '#646466')]}>
                      {DETAIL_INFO?.additionalCost?.toLocaleString()}???
                    </span>
                  </FlexBox>
                </>
              )}

              {/* // --------------- ?????? ?????? --------------- //*/}

              <FlexBox justify={'space-between'}>
                <span css={[heading4_bold, tableHeaderStyle(320, 'left', '15px 24px')]}>??? ??????</span>
                <span css={[heading4_bold, tableHeaderStyle(128, 'center', '15px 24px')]} />
                <span css={[heading4_bold, tableHeaderStyle(192, 'right', '15px 24px')]}>{DETAIL_INFO?.totalCost?.toLocaleString()}???</span>
              </FlexBox>

              <FlexBox justify={'space-between'}>
                <span css={[heading4_bold, tableHeaderStyle(320, 'left', '15px 24px')]}>????????? ??????</span>
                <span css={[heading4_bold, tableHeaderStyle(128, 'center', '15px 24px')]} />
                <span css={[heading4_bold, tableHeaderStyle(192, 'right', '15px 24px', colors.red)]}>
                  {DETAIL_INFO?.remainingCredit >= DETAIL_INFO?.totalCost
                    ? `-${DETAIL_INFO?.totalCost?.toLocaleString()}???`
                    : `-${DETAIL_INFO?.remainingCredit?.toLocaleString()}???`}
                </span>
              </FlexBox>
            </FlexBox>

            <FlexBox
              direction={'column'}
              justify={'flex-start'}
              align={'flex-start'}
              style={css`
                width: 640px;
                border: 1px solid #dcdcdc;
                border-radius: 16px;
                margin-top: 12px;
              `}
            >
              <FlexBox justify={'space-between'}>
                <span css={[heading4_bold, tableHeaderStyle(320, 'left', '15px 24px')]}>??? ????????? ?????? ??????</span>
                <span css={[heading4_bold, tableHeaderStyle(128, 'center', '15px 24px')]} />
                <span css={[heading4_bold, tableHeaderStyle(192, 'right', '15px 24px')]}>
                  {DETAIL_INFO?.remainingCredit >= DETAIL_INFO?.totalCost
                    ? `0???`
                    : `${(DETAIL_INFO?.totalCost - DETAIL_INFO?.remainingCredit)?.toLocaleString()}???`}
                </span>
              </FlexBox>

              <FlexBox justify={'space-between'}>
                <span css={[heading4_bold, tableHeaderStyle(320, 'left', '15px 24px')]}>????????? (VAT)</span>
                <span css={[heading4_bold, tableHeaderStyle(128, 'center', '15px 24px')]} />
                <span css={[heading4_bold, tableHeaderStyle(192, 'right', '15px 24px')]}>
                  {DETAIL_INFO?.remainingCredit >= DETAIL_INFO?.totalCost
                    ? `0???`
                    : `${(Math.floor(Math.floor((DETAIL_INFO?.totalCost - DETAIL_INFO?.remainingCredit) * 0.1) / 10) * 10)?.toLocaleString()}???`}
                </span>
              </FlexBox>
            </FlexBox>

            <FlexBox
              direction={'column'}
              justify={'flex-start'}
              align={'flex-start'}
              style={css`
                width: 640px;
                border: 1px solid #dcdcdc;
                border-radius: 16px;
                margin-top: 12px;
              `}
            >
              <FlexBox justify={'space-between'}>
                <span css={[heading2_bold, tableHeaderStyle(320, 'left', '15px 24px')]}>?????? ??????</span>
                <span css={[heading2_bold, tableHeaderStyle(192, 'right', '15px 24px')]}>
                  {DETAIL_INFO?.remainingCredit >= DETAIL_INFO?.totalCost
                    ? `0???`
                    : `${(
                        DETAIL_INFO?.totalCost -
                        DETAIL_INFO?.remainingCredit +
                        Math.floor(Math.floor((DETAIL_INFO?.totalCost - DETAIL_INFO?.remainingCredit) * 0.1) / 10) * 10
                      )?.toLocaleString()}???`}
                </span>
              </FlexBox>
            </FlexBox>
          </FlexBox>

          <FlexBox
            direction={'column'}
            justify={'flex-start'}
            align={'flex-start'}
            style={css`
              padding: 0 40px 0 60px;
              margin-top: 16px;
              margin-bottom: 40px;
            `}
          >
            <span css={[heading4_bold, marginStyle]}>{DETAIL_INFO?.researchNm}</span>
            <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
              <span css={heading5_bold}>????????? ??????</span>
              <span css={[heading4_medium, contentsStyle]}>{DETAIL_INFO?.researchTypeNm}</span>
            </FlexBox>
            <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
              <span css={heading5_bold}>???</span>
              <span css={[heading4_medium, contentsStyle]}>{DETAIL_INFO?.teamNm}</span>
            </FlexBox>
            <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
              <span css={heading5_bold}>????????????</span>
              <span css={[heading4_medium, contentsStyle]}>{DETAIL_INFO?.productNm}</span>
            </FlexBox>
            <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
              <span css={heading5_bold}>????????? ??????</span>
              <span css={[heading4_medium, contentsStyle]}>{calcModalPeriod(DETAIL_INFO?.statusType)}</span>
            </FlexBox>

            {/*{DETAIL_INFO?.remainingCredit >= DETAIL_INFO?.totalCost && (*/}
            {DETAIL_INFO?.remainingCredit >= DETAIL_INFO?.totalCost && (
              <>
                <FlexBox direction={'column'} align={'flex-start'} style={marginStyle}>
                  <CheckBox
                    handleChangeCheckBox={handleChangeUseCreditCheckBox}
                    checked={confirmUseCreditCheck}
                    inputName={'confirmUseCredit'}
                    label={'?????? ???????????? ?????? ???????????? ?????? ???????????????.'}
                    register={register}
                    errors={errors}
                  />
                  <CheckBox
                    handleChangeCheckBox={handleChangeCheckBox}
                    checked={lastCheck}
                    inputName={'confirm'}
                    label={'?????? ????????? ????????????, ????????? ????????? ???????????????.'}
                    register={register}
                    errors={errors}
                  />
                </FlexBox>
                <FlexBox justify={'space-between'}>
                  <BasicButton theme={'dark'} onClick={closeModal} text={'????????????'} style={{ width: '160px' }} />
                  <BasicButton
                    isLoading={isLoading?.['researchStart']}
                    designBgColor={colors.cyan._500}
                    text={'????????????'}
                    style={{ width: '160px' }}
                    onClick={handleStartResearch}
                  />
                </FlexBox>
              </>
            )}

            {DETAIL_INFO?.remainingCredit < DETAIL_INFO?.totalCost && (
              <>
                <FlexBox justify={'center'} align={'center'} style={{ padding: '28px 0', background: colors.grey._f7, borderRadius: '16px' }}>
                  <span
                    css={[
                      heading2_bold,
                      css`
                        color: ${colors.red};
                      `,
                    ]}
                  >
                    ?????? ???????????? ???????????????.
                    <br /> ??????????????? ??????????????????.
                  </span>
                </FlexBox>
              </>
            )}
          </FlexBox>
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default ResearchStartModal;

const tableHeaderStyle = (width, align = 'center', padding = '20px', color: '#646466' | '#3c3c46' | '#fe4e56' = colors.grey._3c) => css`
  width: ${width}px;
  text-align: ${align};
  padding: ${padding};
  color: ${color};
`;
const marginStyle = css`
  margin-bottom: 32px;
`;
const contentsStyle = css`
  margin-top: 12px;
  margin-left: 8px;
`;
