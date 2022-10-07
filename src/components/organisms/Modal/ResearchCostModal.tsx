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
        <ModalTitle style={{ height: 'auto', padding: '24px 32px' }} title={<>확정 견적 확인하기</>} />

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
              <span css={[heading5_medium, tableHeaderStyle(320)]}>항목</span>
              <span css={[heading5_medium, tableHeaderStyle(128)]}>수량</span>
              <span css={[heading5_medium, tableHeaderStyle(192)]}>금액</span>
            </FlexBox>

            {/* // --------------- Diby 사용료 --------------- //*/}
            <FlexBox justify={'space-between'}>
              <span css={[heading4_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>Diby 사용료</span>
              <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]}>-</span>
              <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>{calcResearchSolutionFee(DETAIL_INFO?.researchType)}</span>
            </FlexBox>
            {/* // --------------- Diby 사용료 --------------- //*/}

            {/* // --------------- 응답자 보상비용 --------------- //*/}
            <FlexBox justify={'space-between'}>
              <span css={[heading4_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>응답자 보상비용</span>
              <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]}>{addCosts?.totalRespondentSize}명</span>
              <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>{addCosts?.totalRespondentCost.toLocaleString()}원</span>
            </FlexBox>
            {/* TODO : 응답자당 금액, map함수로 랜더 필요 */}
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
                  <span css={[heading5_medium, tableHeaderStyle(128, 'center', '20px 24px', '#646466')]}>{el.respondentSize.toLocaleString()}명</span>
                  <span css={[heading5_medium, tableHeaderStyle(192, 'right', '20px 24px', '#646466')]}>
                    {parseInt(el.respondentCost).toLocaleString()}원
                  </span>
                </FlexBox>
              );
            })}
            {/* // --------------- 응답자 보상비용 --------------- //*/}

            {/* // --------------- 응답자 표집 비용 --------------- //*/}
            <FlexBox justify={'space-between'}>
              <span css={[heading4_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>응답자 표집 비용</span>
              <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]}>-</span>
              <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>{DETAIL_INFO?.respondentSampleCost.toLocaleString()}원</span>
            </FlexBox>
            {/* // --------------- 응답자 표집 비용 --------------- //*/}

            {/* // --------------- 리서치 방법별 추가 요금 --------------- //*/}
            <FlexBox justify={'space-between'}>
              <span css={[heading4_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>리서치 종류별 추가 요금</span>
              <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]}>-</span>
              <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>
                {DETAIL_INFO?.researchTypeAdditionalCost.toLocaleString()}원
              </span>
            </FlexBox>

            {/* TODO : 리서치 방법별 추가 요금 , map함수로 랜더 필요 */}
            {DETAIL_INFO?.researchType === 'UI_DIAGNOSIS' && (
              <FlexBox
                justify={'space-between'}
                style={css`
                  background: #f7f7f8;
                `}
              >
                <span css={[heading5_medium, tableHeaderStyle(320, 'left', '20px 24px', '#646466')]}>미션 추가</span>
                <span css={[heading5_medium, tableHeaderStyle(128, 'center', '20px 24px', '#646466')]}>
                  {DETAIL_INFO?.detailDesignInfo.length - 2}개
                </span>
                <span css={[heading5_medium, tableHeaderStyle(192, 'right', '20px 24px', '#646466')]}>
                  {(missionAdditionalCompensation(DETAIL_INFO?.detailDesignInfo.length) * addCosts.totalRespondentSize).toLocaleString()}원
                </span>
              </FlexBox>
            )}
            {DETAIL_INFO?.researchType === 'FGD' && (
              <FlexBox
                justify={'space-between'}
                style={css`
                  background: #f7f7f8;
                `}
              >
                <span css={[heading5_medium, tableHeaderStyle(320, 'left', '20px 24px', '#646466')]}>응답자 조건 추가</span>
                <span css={[heading5_medium, tableHeaderStyle(128, 'center', '20px 24px', '#646466')]}>
                  {DETAIL_INFO?.respondentInfo.length - 1}개
                </span>
                <span css={[heading5_medium, tableHeaderStyle(192, 'right', '20px 24px', '#646466')]}>
                  {DETAIL_INFO?.researchTypeAdditionalCost.toLocaleString()}원
                </span>
              </FlexBox>
            )}
            {DETAIL_INFO?.researchType === 'HYPOTHESIS_VERIFICATION' && (
              <FlexBox
                justify={'space-between'}
                style={css`
                  background: #f7f7f8;
                `}
              >
                <span css={[heading5_medium, tableHeaderStyle(320, 'left', '20px 24px', '#646466')]}>가설 추가</span>
                <span css={[heading5_medium, tableHeaderStyle(128, 'center', '20px 24px', '#646466')]}>
                  {DETAIL_INFO?.detailDesignInfo.length - 10}개
                </span>
                <span css={[heading5_medium, tableHeaderStyle(192, 'right', '20px 24px', '#646466')]}>
                  {(addCosts.totalRespondentCost * 0.2 * (DETAIL_INFO?.detailDesignInfo.length - 10)).toLocaleString()}원
                </span>
              </FlexBox>
            )}
            {/* // --------------- 리서치 방법별 추가 요금 --------------- //*/}

            {/* // --------------- 추가 요금 --------------- //*/}
            <FlexBox justify={'space-between'}>
              <span css={[heading4_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>추가 요금</span>
              <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]}>-</span>
              <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>{DETAIL_INFO?.additionalCost.toLocaleString()}원</span>
            </FlexBox>

            {/* TODO : 리서치 방법별 추가 요금 , map함수로 랜더 필요 */}
            <FlexBox
              justify={'space-between'}
              style={css`
                background: #f7f7f8;
              `}
            >
              <span css={[heading5_medium, tableHeaderStyle(320, 'left', '20px 24px', '#646466')]}>과금 사유</span>
              <span css={[heading5_medium, tableHeaderStyle(128, 'center', '20px 24px', '#646466')]}>{DETAIL_INFO?.additionalCostReason}</span>
              <span css={[heading5_medium, tableHeaderStyle(192, 'right', '20px 24px', '#646466')]}>
                {DETAIL_INFO?.additionalCost.toLocaleString()}원
              </span>
            </FlexBox>
            {/* // --------------- 추가 요금 --------------- //*/}

            <FlexBox justify={'space-between'}>
              <span css={[heading4_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>총 합계</span>
              <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]}>-</span>
              <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>
                {(DETAIL_INFO?.totalCost - DETAIL_INFO?.vat).toLocaleString()}원
              </span>
            </FlexBox>

            <FlexBox justify={'space-between'}>
              <span css={[heading4_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>부가세 (VAT)</span>
              <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]}>-</span>
              <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>{DETAIL_INFO?.vat.toLocaleString()}원</span>
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
              <span css={[heading4_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>총 리서치 수행 비용</span>
              <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]}>-</span>
              <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>{DETAIL_INFO.totalCost.toLocaleString()}원</span>
            </FlexBox>

            <FlexBox justify={'space-between'}>
              <span css={[heading4_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>크레딧 사용</span>
              <span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]}>-</span>
              <span css={[heading4_bold, tableHeaderStyle(192, 'right', '20px 24px', colors.red)]}>
                {DETAIL_INFO?.remainingCredit >= DETAIL_INFO?.totalCost
                  ? `-${DETAIL_INFO?.totalCost.toLocaleString()}원`
                  : `-${DETAIL_INFO?.remainingCredit.toLocaleString()}원`}
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
              <span css={[heading2_bold, tableHeaderStyle(320, 'left', '20px 24px')]}>결제 금액</span>
              {/*<span css={[heading4_bold, tableHeaderStyle(128, 'center', '20px 24px')]}>-</span>*/}
              <span css={[heading2_bold, tableHeaderStyle(192, 'right', '20px 24px')]}>
                {DETAIL_INFO?.remainingCredit >= DETAIL_INFO?.totalCost
                  ? `0원`
                  : `${(DETAIL_INFO?.totalCost - DETAIL_INFO?.remainingCredit).toLocaleString()}원`}
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
