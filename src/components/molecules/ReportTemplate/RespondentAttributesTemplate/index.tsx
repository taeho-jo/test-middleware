import React, { Fragment } from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { colors } from '../../../../styles/Common.styles';
import { caption1_bold, heading3_bold, heading4_bold, heading5_bold, heading5_medium } from '../../../../styles/FontStyles';
import { BasicPieChart } from '../../../atoms/Chart';
import { ageTestData, genderTestData } from '../../../../assets/dummy/dummyData';
import { css } from '@emotion/react';
import CheckBox from '../../../atoms/CheckBox';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../../common/types/commonTypes';

const addConditionData = [
  { name: '중고차 판매자', value: 50 },
  { name: '중고차 구매자', value: 50 },
  { name: '중고차 구매 보류', value: 50 },
];

const RespondentAttributesTemplate = () => {
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
  return (
    <>
      <FlexBox style={headerBosStyle} justify={'space-between'}>
        <FlexBox justify={'flex-start'} align={'center'}>
          <span css={[heading3_bold, { marginRight: '32px' }]}>응답자 특성</span>
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
            <div css={[heading4_bold]}>기본 정보</div>
          </div>
          <FlexBox justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <FlexBox direction={'column'}>
              <span css={[heading5_bold, { textAlign: 'center' }]}>성별</span>
              <BasicPieChart dataList={genderTestData} />
            </FlexBox>
            <FlexBox direction={'column'}>
              <span css={[heading5_bold, { textAlign: 'center' }]}>연령대</span>
              <BasicPieChart dataList={ageTestData} />
            </FlexBox>
            <FlexBox direction={'column'}>
              <span css={[heading5_bold, { textAlign: 'center' }]}>기기</span>
              <BasicPieChart dataList={genderTestData} />
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>추가 조건</div>
          </div>
          <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle2}>
            <FlexBox justify={'space-between'} align={'center'} style={[tableStyle, { background: '#f7f7f7' }]}>
              <div css={[caption1_bold, { height: 'auto', flex: 4, borderRight: '1px solid #dcdcdc', padding: '8px 16px' }]}>조건</div>
              <div css={[caption1_bold, { height: 'auto', flex: 1, padding: '8px 16px' }]}>응답자 규모</div>
            </FlexBox>
            {addConditionData.map((el, index) => {
              return (
                <Fragment key={index}>
                  <FlexBox justify={'space-between'} align={'center'} style={[index === addConditionData.length - 1 ? tableStyle2 : tableStyle]}>
                    <div css={[heading5_medium, { height: 'auto', flex: 4, borderRight: '1px solid #dcdcdc', padding: '8px 16px' }]}>{el.name}</div>
                    <div css={[heading5_medium, { height: 'auto', flex: 1, padding: '8px 16px' }]}>{el.value}명</div>
                  </FlexBox>
                </Fragment>
              );
            })}
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default RespondentAttributesTemplate;
const headerBosStyle = css`
  height: 64px;
  width: 100%;
  padding: 24px;
  background: white;
  border-bottom: 1px solid #dcdcdc;
  position: sticky;
  top: 0;
  z-index: 1;
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
const graphContainerStyle2 = css`
  padding: 36px 80px 80px;
  width: 100%;
  //border-bottom: 1px solid #dcdcdc;
`;
const tableStyle = css`
  border-top: 1px solid #dcdcdc;
`;
const tableStyle2 = css`
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
`;
