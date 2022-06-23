import React from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { caption2_bold, heading3_bold, heading4_bold, heading5_regular } from '../../../../styles/FontStyles';
import CheckBox from '../../../atoms/CheckBox';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../../common/types/commonTypes';
import { colors } from '../../../../styles/Common.styles';
import AnnouncementBox from '../../AnnouncementBox';
import Icon from '../../../atoms/Icon';
import { BasicBarChart, BasicHorizontalBarChart, BasicLineChart, BasicPieChart, HistogramBarChart } from '../../../atoms/Chart';
import { basicBarTestData, basicBarTestData3, buyTestData, genderTestData, histogramBarTestData } from '../../../../assets/dummy/dummyData';

const PriceEvaluationTemplate = () => {
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
          <span css={[heading3_bold, { marginRight: '32px' }]}>적정 가격 평가</span>
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
            <div css={[heading4_bold]}>최대 지불 의향 금액</div>
          </div>

          <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <HistogramBarChart dataList={histogramBarTestData} />
            <div css={[heading4_bold, { textAlign: 'center', width: '100%', marginTop: '40px' }]}>평균 @38,590원 / 중앙값 : 35,8,59원 </div>
            <div css={[heading4_bold, { color: colors.grey._99, textAlign: 'center', width: '100%', marginTop: '4px' }]}>총 응답자 수 : 58명 </div>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>구매의향</div>
          </div>

          <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <FlexBox direction={'column'} style={{ border: '1px solid #dcdcdc', borderRadius: '8px', padding: '24px 0', marginBottom: '36px' }}>
              <span css={[heading5_regular, { color: colors.grey._99, marginBottom: '12px' }]}>
                Q. [ 서비스명 ]의 사용 비용은 []조건으로 []원 입니다. 우쥬인님께서는 해당 서비스를 유료 구매하실 의향이 있으신가요?
              </span>
              <AnnouncementBox icon={'NOTI'} content={'클릭하면 주관식 응답을 확인할 수 있어요.'} />
            </FlexBox>

            <FlexBox width={'100%'}>
              <BasicPieChart dataList={buyTestData} labelPadding={'0'} />
            </FlexBox>

            <div css={[heading4_bold, { color: colors.grey._99, textAlign: 'center', width: '100%', marginTop: '40px' }]}>총 응답자 수 : @58명 </div>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>실제 구매의향</div>
          </div>

          <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <FlexBox direction={'column'} style={{ border: '1px solid #dcdcdc', borderRadius: '8px', padding: '24px 0', marginBottom: '36px' }}>
              <span css={[heading5_regular, { color: colors.grey._99, marginBottom: '12px' }]}>
                Q. [ 서비스명 ]의 [ 문제 해결 방식 ]이 [ /7]정도로 [ 문제 상황 ] 을 해결한다고 생각하신 이유는 무엇인가요?
              </span>
              <AnnouncementBox icon={'NOTI'} content={'클릭하면 주관식 응답을 확인할 수 있어요.'} />
            </FlexBox>

            <BasicBarChart
              dataList={basicBarTestData}
              label={[<>option A</>]}
              value={'49명'}
              valueStyle={{ color: colors.grey._99, fontWeight: 500 }}
              rate={'49.5%'}
            />
            <BasicBarChart
              dataList={basicBarTestData}
              label={[<>option B</>]}
              value={'49명'}
              valueStyle={{ color: colors.grey._99, fontWeight: 500 }}
              rate={'49.5%'}
            />
            <BasicBarChart
              dataList={basicBarTestData}
              value={'49명'}
              valueStyle={{ color: colors.grey._99, fontWeight: 500 }}
              label={[<>option C</>]}
              rate={'49.5%'}
            />

            <div css={[heading4_bold, { color: colors.grey._99, textAlign: 'center', width: '100%', marginTop: '40px' }]}>총 응답자 수 : @58명 </div>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default PriceEvaluationTemplate;

const headerBosStyle = css`
  height: 64px;
  width: 100%;
  padding: 24px;
  background: white;
  border-bottom: 1px solid #dcdcdc;
  position: sticky;
  top: 0;
  z-index: 5;
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
