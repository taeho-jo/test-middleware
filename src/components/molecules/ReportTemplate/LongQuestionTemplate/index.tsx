import React from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { heading3_bold, heading4_bold } from '../../../../styles/FontStyles';
import CheckBox from '../../../atoms/CheckBox';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { colors } from '../../../../styles/Common.styles';
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../../common/types/commonTypes';

const LongQuestionTemplate = ({ dataList }) => {
  return (
    <>
      <FlexBox style={headerBosStyle} justify={'space-between'}>
        <FlexBox justify={'flex-start'} align={'center'}>
          <span css={[heading3_bold, { marginRight: '32px' }]}>주관식 문항</span>
          {/*<CheckBox inputName={'privacyConsentYn'} label={'미션에 실패한 응답자의 피드백만 보기'} register={register} errors={errors} />*/}
        </FlexBox>
        <FlexBox justify={'flex-end'}>
          <IconTextButton style={{ marginRight: '8px' }} textStyle={'custom'} name={'NAVIGATION_ARROW_RIGHT'} text={'원본 데이터 확인하기'} />
          <IconTextButton textStyle={'custom'} name={'NAVIGATION_ARROW_RIGHT'} text={'리서치 코멘트 확인하기'} />
        </FlexBox>
      </FlexBox>

      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>{dataList.name}</div>
          </div>

          <FlexBox justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <div css={{ flex: 1, marginRight: '16px' }}>
              <div css={[heading4_bold, buttonStyle]}>전체 피드백</div>
            </div>
            <ul css={{ background: colors.grey._f7, borderRadius: '8px', flex: 3, padding: '16px 44px', height: '400px', overflow: 'scroll' }}>
              {dataList?.rawData?.map((el, index) => {
                return (
                  <li key={index} css={{ listStyle: 'inside', marginBottom: '16px', listStylePosition: 'inside', textIndent: '-20px' }}>
                    {el}
                  </li>
                );
              })}
            </ul>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      {/*<FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>*/}
      {/*  <FlexBox style={graphAreaStyle} direction={'column'}>*/}
      {/*    <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>*/}
      {/*      <div css={[heading4_bold]}>서비스 전체 미션별 추가기능 피드백</div>*/}
      {/*    </div>*/}

      {/*    <FlexBox justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>*/}
      {/*      <div css={{ flex: 1, marginRight: '16px' }}>*/}
      {/*        {additionalList?.map((el, index) => {*/}
      {/*          return (*/}
      {/*            <div*/}
      {/*              key={`missionBtn${index}`}*/}
      {/*              onClick={() => handleChangeIndex('add', index)}*/}
      {/*              css={[{ opacity: addSelectButton === index ? 1 : 0.4 }, heading4_bold, buttonStyle]}*/}
      {/*            >*/}
      {/*              미션 {index + 1}*/}
      {/*            </div>*/}
      {/*          );*/}
      {/*        })}*/}
      {/*      </div>*/}
      {/*      <ul css={{ background: colors.grey._f7, borderRadius: '8px', flex: 3, padding: '16px 24px', height: '400px', overflow: 'scroll' }}>*/}
      {/*        {additionalList?.[addSelectButton].map((el, index) => {*/}
      {/*          return (*/}
      {/*            <li key={index} css={{ listStyle: 'inside', marginBottom: '16px' }}>*/}
      {/*              {el}*/}
      {/*            </li>*/}
      {/*          );*/}
      {/*        })}*/}
      {/*      </ul>*/}
      {/*    </FlexBox>*/}
      {/*  </FlexBox>*/}
      {/*</FlexBox>*/}

      {/*<FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>*/}
      {/*  <FlexBox style={graphAreaStyle} direction={'column'}>*/}
      {/*    <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>*/}
      {/*      <div css={[heading4_bold]}>서비스 전체 미션별 시스템오류 피드백</div>*/}
      {/*    </div>*/}

      {/*    <FlexBox justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>*/}
      {/*      <div css={{ flex: 1, marginRight: '16px' }}>*/}
      {/*        {systemErrorList?.map((el, index) => {*/}
      {/*          return (*/}
      {/*            <div*/}
      {/*              key={`missionBtn${index}`}*/}
      {/*              onClick={() => handleChangeIndex('system', index)}*/}
      {/*              css={[{ opacity: systemSelectButton === index ? 1 : 0.4 }, heading4_bold, buttonStyle]}*/}
      {/*            >*/}
      {/*              미션 {index + 1}*/}
      {/*            </div>*/}
      {/*          );*/}
      {/*        })}*/}
      {/*      </div>*/}
      {/*      <ul css={{ background: colors.grey._f7, borderRadius: '8px', flex: 3, padding: '16px 24px', height: '400px', overflow: 'scroll' }}>*/}
      {/*        {systemErrorList?.[systemSelectButton].map((el, index) => {*/}
      {/*          return (*/}
      {/*            <li key={index} css={{ listStyle: 'inside', marginBottom: '16px' }}>*/}
      {/*              {el}*/}
      {/*            </li>*/}
      {/*          );*/}
      {/*        })}*/}
      {/*      </ul>*/}
      {/*    </FlexBox>*/}
      {/*  </FlexBox>*/}
      {/*</FlexBox>*/}
    </>
  );
};

export default LongQuestionTemplate;
const headerBosStyle = css`
  height: 64px;
  width: 100%;
  padding: 24px;
  background: white;
  border-bottom: 1px solid #dcdcdc;
  position: sticky;
  top: 0;
  z-index: 500;
`;
const graphBosStyle = css`
  width: 100%;
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
`;
const buttonStyle = css`
  height: auto;
  color: white;
  text-align: center;
  background: #68a0f4;
  padding: 14px 42px;
  border-radius: 8px;
  margin-bottom: 16px;
  cursor: pointer;
`;
