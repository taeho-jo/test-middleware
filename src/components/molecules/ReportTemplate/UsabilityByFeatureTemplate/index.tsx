import React, { Fragment } from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { caption1_bold, caption2_bold, heading3_bold, heading4_bold, heading5_bold, heading5_medium } from '../../../../styles/FontStyles';
import CheckBox from '../../../atoms/CheckBox';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { colors } from '../../../../styles/Common.styles';
import { BasicPieChart, TableBarChart } from '../../../atoms/Chart';
import { ageTestData, genderTestData, tableBarChartTestData, tableBarTestData } from '../../../../assets/dummy/dummyData';
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../../common/types/commonTypes';
import Icon from '../../../atoms/Icon';

const UsabilityByFeatureTemplate = () => {
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
          <span css={[heading3_bold, { marginRight: '32px' }]}>@[미션 1.회원가입]의 기능별 사용성 비교</span>
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
            <div css={[heading4_bold]}>@[미션 1.회원가입] 기능별 불편 언급 비율과 치명도 </div>
          </div>
          <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <FlexBox justify={'flex-end'} style={{ marginBottom: '4px' }}>
              <Icon name={'ALERT_NORMAL'} size={10} />
              <span css={[caption2_bold, { textDecoration: 'underline' }]}>치명도가 뭔가요</span>
            </FlexBox>
            <TableBarChart dataList={tableBarChartTestData} dataValueList={tableBarTestData} />
          </FlexBox>
        </FlexBox>
      </FlexBox>

      {/*<FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>*/}
      {/*  <FlexBox style={graphAreaStyle} direction={'column'}>*/}
      {/*    <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>*/}
      {/*      <div css={[heading4_bold]}>추가 조건</div>*/}
      {/*    </div>*/}
      {/*    <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle2}>*/}
      {/*      <FlexBox justify={'space-between'} align={'center'} style={[tableStyle, { background: '#f7f7f7' }]}>*/}
      {/*        <div css={[caption1_bold, { height: 'auto', flex: 4, borderRight: '1px solid #dcdcdc', padding: '8px 16px' }]}>조건</div>*/}
      {/*        <div css={[caption1_bold, { height: 'auto', flex: 1, padding: '8px 16px' }]}>응답자 규모</div>*/}
      {/*      </FlexBox>*/}
      {/*      {addConditionData.map((el, index) => {*/}
      {/*        return (*/}
      {/*          <Fragment key={index}>*/}
      {/*            <FlexBox justify={'space-between'} align={'center'} style={[index === addConditionData.length - 1 ? tableStyle2 : tableStyle]}>*/}
      {/*              <div css={[heading5_medium, { height: 'auto', flex: 4, borderRight: '1px solid #dcdcdc', padding: '8px 16px' }]}>{el.name}</div>*/}
      {/*              <div css={[heading5_medium, { height: 'auto', flex: 1, padding: '8px 16px' }]}>{el.value}명</div>*/}
      {/*            </FlexBox>*/}
      {/*          </Fragment>*/}
      {/*        );*/}
      {/*      })}*/}
      {/*    </FlexBox>*/}
      {/*  </FlexBox>*/}
      {/*</FlexBox>*/}
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
