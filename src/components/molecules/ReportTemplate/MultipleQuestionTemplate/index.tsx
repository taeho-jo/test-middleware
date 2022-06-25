import React from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { heading3_bold, heading4_bold } from '../../../../styles/FontStyles';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { css } from '@emotion/react';
import { colors } from '../../../../styles/Common.styles';
import { BasicBarChart } from '../../../atoms/Chart';
import { basicBarTestData } from '../../../../assets/dummy/dummyData';
import { checkIsInteger } from '../../../../common/util/commonFunc';

const MultipleQuestionTemplate = ({ dataList, modalControl }) => {
  return (
    <>
      <FlexBox style={headerBosStyle} justify={'space-between'}>
        <FlexBox justify={'flex-start'} align={'center'}>
          <span css={[heading3_bold, { marginRight: '32px' }]}>객관식 문항 - {dataList.intent}</span>
        </FlexBox>
        <FlexBox justify={'flex-end'}>
          <IconTextButton
            onClick={() => modalControl(true, 'originDataModal', { title: `객관식 문항 - ${dataList.intent}`, data: dataList.rawData })}
            style={{ marginRight: '8px' }}
            textStyle={'custom'}
            name={'NAVIGATION_ARROW_RIGHT'}
            text={'원본 데이터 확인하기'}
          />
          <IconTextButton textStyle={'custom'} name={'NAVIGATION_ARROW_RIGHT'} text={'리서치 코멘트 확인하기'} />
        </FlexBox>
      </FlexBox>
      <div>
        <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
          <FlexBox style={graphAreaStyle} direction={'column'}>
            <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
              <div css={[heading4_bold]}>{dataList.intent}</div>
            </div>
            <FlexBox direction={'column'} justify={'center'} align={'flex-start'} style={graphContainerStyle}>
              {dataList.detailMultipleList.map((detail, detailIndex) => {
                return (
                  <BasicBarChart
                    key={`detailMultiple-${detail.name}-${detailIndex}`}
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
      </div>
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
