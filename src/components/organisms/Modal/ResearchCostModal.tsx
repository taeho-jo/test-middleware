import React, { useEffect, useState } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import FlexBox from '../../atoms/FlexBox';
import { colors } from '../../../styles/Common.styles';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { css } from '@emotion/react';
import { heading2_bold, heading4_bold, heading5_medium } from '../../../styles/FontStyles';
import { calcResearchSolutionFee, missionAdditionalCompensation } from '../../../common/util/commonFunc';

const ResearchCostModal = () => {
  const dispatch = useDispatch();
  const DETAIL_INFO = useSelector<ReducerType, any>(state => state.researchCreate.detailData);

  const [addCosts, setAddCosts] = useState({
    totalRespondentSize: 0,
    totalRespondentCost: 0,
  });

  useEffect(() => {
    if (DETAIL_INFO) {
      const totalCosts = DETAIL_INFO?.respondentCompensationInfo?.reduce(
        (acc, cur) => {
          acc.totalRespondentSize = acc.totalRespondentSize + cur?.respondentSize ? cur?.respondentSize : 0;
          acc.totalRespondentCost = acc.totalRespondentCost + parseInt(cur?.respondentCost) * cur?.respondentSize;
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

  console.log(addCosts, ' ADD');

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
        return '760px';
    }
  };

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0px'} width={calcModalWidth('760px')} height={'auto'}>
        <ModalTitle style={{ height: 'auto', padding: '24px 32px' }} title={<>????????? ?????? ????????????</>} />

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
              height: 338px;
              overflow-y: scroll;
              border: 1px solid #dcdcdc;
              border-radius: 16px;
            `}
          >
            <FlexBox
              justify={'space-between'}
              style={css`
                border-bottom: 1px solid #dcdcdc;
              `}
            >
              <span css={[heading5_medium, tableHeaderStyle(320)]}>??????</span>
              <span css={[heading5_medium, tableHeaderStyle(128)]}>??????</span>
              <span css={[heading5_medium, tableHeaderStyle(192)]}>??????</span>
            </FlexBox>

            {/* // --------------- Diby ????????? --------------- //*/}
            <FlexBox justify={'space-between'}>
              <span css={[heading4_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>Diby ?????????</span>
              <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]} />
              <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>{calcResearchSolutionFee(DETAIL_INFO?.researchType)}</span>
            </FlexBox>
            {/* // --------------- Diby ????????? --------------- //*/}

            {/* // --------------- ????????? ???????????? --------------- //*/}
            <FlexBox justify={'space-between'}>
              <span css={[heading4_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>????????? ????????????</span>
              <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]}>{addCosts?.totalRespondentSize}???</span>
              <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>
                {addCosts?.totalRespondentCost ? addCosts?.totalRespondentCost?.toLocaleString() : 0}???
              </span>
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
                  <span css={[heading5_medium, tableHeaderStyle(320, 'left', '20px 24px', '#646466')]}>{el.respondentConditionNm}</span>
                  <span css={[heading5_medium, tableHeaderStyle(128, 'center', '20px 24px', '#646466')]}>
                    {el.respondentSize?.toLocaleString()}???
                  </span>
                  <span css={[heading5_medium, tableHeaderStyle(192, 'right', '20px 24px', '#646466')]}>
                    {parseInt(el.respondentCost ? el.respondentCost : 0)?.toLocaleString()}???
                  </span>
                </FlexBox>
              );
            })}
            {/* // --------------- ????????? ???????????? --------------- //*/}

            {/* // --------------- ????????? ?????? ?????? --------------- //*/}
            <FlexBox justify={'space-between'}>
              <span css={[heading4_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>????????? ?????? ??????</span>
              <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]} />
              <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>{DETAIL_INFO?.respondentSampleCost?.toLocaleString()}???</span>
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

            {/* TODO : ????????? ????????? ?????? ?????? , map????????? ?????? ?????? */}
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
                  {DETAIL_INFO?.researchTypeAdditionalCost?.toLocaleString()}???
                </span>
              </FlexBox>
            )}
            {/* // --------------- ????????? ????????? ?????? ?????? --------------- //*/}

            {/* // --------------- ?????? ?????? --------------- //*/}
            {DETAIL_INFO?.additionalCost > 0 && (
              <>
                <FlexBox justify={'space-between'}>
                  <span css={[heading4_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>?????? ??????</span>
                  <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]} />
                  <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>{DETAIL_INFO?.additionalCost?.toLocaleString()}???</span>
                </FlexBox>

                {/* TODO : ????????? ????????? ?????? ?????? , map????????? ?????? ?????? */}
                <FlexBox
                  justify={'space-between'}
                  style={css`
                    background: #f7f7f8;
                  `}
                >
                  <span css={[heading5_medium, tableHeaderStyle(320, 'left', '20px 24px', '#646466')]}>?????? ??????</span>
                  <span css={[heading5_medium, tableHeaderStyle(128, 'center', '20px 24px', '#646466')]}>{DETAIL_INFO?.additionalCostReason}</span>
                  <span css={[heading5_medium, tableHeaderStyle(192, 'right', '20px 24px', '#646466')]}>
                    {DETAIL_INFO?.additionalCost?.toLocaleString()}???
                  </span>
                </FlexBox>
              </>
            )}
            {/*<FlexBox justify={'space-between'}>*/}
            {/*  <span css={[heading4_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>?????? ??????</span>*/}
            {/*  <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]} />*/}
            {/*  <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>{DETAIL_INFO?.additionalCost.toLocaleString()}???</span>*/}
            {/*</FlexBox>*/}

            {/*/!* TODO : ????????? ????????? ?????? ?????? , map????????? ?????? ?????? *!/*/}
            {/*<FlexBox*/}
            {/*  justify={'space-between'}*/}
            {/*  style={css`*/}
            {/*    background: #f7f7f8;*/}
            {/*  `}*/}
            {/*>*/}
            {/*  <span css={[heading5_medium, tableHeaderStyle(320, 'left', '20px 24px', '#646466')]}>?????? ??????</span>*/}
            {/*  <span css={[heading5_medium, tableHeaderStyle(128, 'center', '20px 24px', '#646466')]}>{DETAIL_INFO?.additionalCostReason}</span>*/}
            {/*  <span css={[heading5_medium, tableHeaderStyle(192, 'right', '20px 24px', '#646466')]}>*/}
            {/*    {DETAIL_INFO?.additionalCost.toLocaleString()}???*/}
            {/*  </span>*/}
            {/*</FlexBox>*/}
            {/* // --------------- ?????? ?????? --------------- //*/}

            <FlexBox justify={'space-between'}>
              <span css={[heading4_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>??? ??????</span>
              <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]} />
              <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>{DETAIL_INFO?.totalCost?.toLocaleString()}???</span>
            </FlexBox>

            <FlexBox justify={'space-between'}>
              <span css={[heading4_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>????????? ??????</span>
              <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]} />
              <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px', colors.red)]}>
                {DETAIL_INFO?.remainingCredit >= DETAIL_INFO?.totalCost
                  ? `-${DETAIL_INFO?.totalCost?.toLocaleString()}???`
                  : `-${DETAIL_INFO?.remainingCredit?.toLocaleString()}???`}
              </span>
            </FlexBox>

            {/*<FlexBox justify={'space-between'}>*/}
            {/*  <span css={[heading4_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>????????? (VAT)</span>*/}
            {/*  <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]}/*/}
            {/*  <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>{DETAIL_INFO?.vat.toLocaleString()}???</span>*/}
            {/*</FlexBox>*/}
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
              <span css={[heading4_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>??? ????????? ?????? ??????</span>
              <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]} />
              <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>
                {DETAIL_INFO?.remainingCredit >= DETAIL_INFO?.totalCost
                  ? `0???`
                  : `${(DETAIL_INFO?.totalCost - DETAIL_INFO?.remainingCredit)?.toLocaleString()}???`}
              </span>
            </FlexBox>

            <FlexBox justify={'space-between'}>
              <span css={[heading4_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>????????? (VAT)</span>
              <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]} />
              <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>
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
              <span css={[heading2_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>?????? ??????</span>
              {/*<span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]}/*/}
              <span css={[heading2_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>
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
      </PopupBox>
    </FlexBox>
  );
};

export default ResearchCostModal;

const tableHeaderStyle = (width, align = 'center', padding = '20px', color: '#646466' | '#3c3c46' | '#fe4e56' = colors.grey._3c) => css`
  width: ${width}px;
  text-align: ${align};
  padding: ${padding};
  color: ${color};
`;
