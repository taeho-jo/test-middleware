import React from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { heading3_bold, heading4_bold } from '../../../../styles/FontStyles';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { css } from '@emotion/react';
import { colors } from '../../../../styles/Common.styles';
import { BasicBarChart } from '../../../atoms/Chart';
import { basicBarTestData } from '../../../../assets/dummy/dummyData';
import { checkIsInteger } from '../../../../common/util/commonFunc';

const MultipleQuestionTemplate = ({ dataList }) => {
  return (
    <>
      <FlexBox style={headerBosStyle} justify={'space-between'}>
        <FlexBox justify={'flex-start'} align={'center'}>
          <span css={[heading3_bold, { marginRight: '32px' }]}>객관식 문항</span>
          {/*<CheckBox inputName={'privacyConsentYn'} label={'미션에 실패한 응답자의 피드백만 보기'} register={register} errors={errors} />*/}
        </FlexBox>
        <FlexBox justify={'flex-end'}>
          <IconTextButton style={{ marginRight: '8px' }} textStyle={'custom'} name={'NAVIGATION_ARROW_RIGHT'} text={'원본 데이터 확인하기'} />
          <IconTextButton textStyle={'custom'} name={'NAVIGATION_ARROW_RIGHT'} text={'리서치 코멘트 확인하기'} />
        </FlexBox>
      </FlexBox>

      {dataList?.map((item, index) => {
        return (
          <FlexBox key={`multi-${index}`} style={graphBosStyle} justify={'center'} align={'flex-start'}>
            <FlexBox style={graphAreaStyle} direction={'column'}>
              <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
                <div css={[heading4_bold]}>{item.intent}</div>
              </div>
              <FlexBox direction={'column'} justify={'center'} align={'flex-start'} style={graphContainerStyle}>
                {item.detailMultipleList.map((detail, detailIndex) => {
                  return (
                    <BasicBarChart
                      key={`detailMultiple-${detail.name}-${index}`}
                      dataList={basicBarTestData}
                      value={`${detail.count}명`}
                      valueStyle={{ color: colors.grey._99, fontWeight: 500 }}
                      label={[<>{detail.name}</>]}
                      rate={`${checkIsInteger(detail.value)}%`}
                    />
                  );
                })}
              </FlexBox>
            </FlexBox>
          </FlexBox>
        );
      })}
      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>문제를 해결하기 위한 방법</div>
          </div>

          <FlexBox direction={'column'} justify={'center'} align={'flex-start'} style={graphContainerStyle}>
            <BasicBarChart
              dataList={basicBarTestData}
              value={'49명'}
              valueStyle={{ color: colors.grey._99, fontWeight: 500 }}
              label={[<>option C</>]}
              rate={'49.5%'}
            />
            <BasicBarChart
              dataList={basicBarTestData}
              value={'49명'}
              valueStyle={{ color: colors.grey._99, fontWeight: 500 }}
              label={[<>option C</>]}
              rate={'49.5%'}
            />
            <BasicBarChart
              dataList={basicBarTestData}
              value={'49명'}
              valueStyle={{ color: colors.grey._99, fontWeight: 500 }}
              label={[<>option C</>]}
              rate={'49.5%'}
            />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default MultipleQuestionTemplate;
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
