import React from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { heading3_bold, heading4_bold, heading5_regular } from '../../../../styles/FontStyles';
import CheckBox from '../../../atoms/CheckBox';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { colors } from '../../../../styles/Common.styles';
import { BasicBarChart, HistogramBarChart, TableBarChart } from '../../../atoms/Chart';
import {
  basicBarTestData,
  brandBarChartData,
  featureSpecificDetailData,
  histogramBarTestData,
  tableBarChartBrandData,
  tableBarChartTestData,
} from '../../../../assets/dummy/dummyData';
import AnnouncementBox from '../../AnnouncementBox';
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../../common/types/commonTypes';

const BrandEvaluationTemplate = () => {
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
        <FlexBox style={reportHeader} justify={'flex-start'} align={'center'}>
          <span className={'title'} css={[heading3_bold, { marginRight: '32px', overflow: 'hidden' }]}>
            브랜드 평가
          </span>
          <CheckBox inputName={'privacyConsentYn'} label={'미션에 실패한 응답자의 피드백만 보기'} register={register} errors={errors} />
        </FlexBox>
        <FlexBox justify={'flex-end'} width={'30%'}>
          <IconTextButton style={{ marginRight: '8px' }} textStyle={'custom'} name={'NAVIGATION_CHEVRON_RIGHT'} text={'원본 데이터 확인하기'} />
          <IconTextButton textStyle={'custom'} name={'NAVIGATION_CHEVRON_RIGHT'} text={'리서치 코멘트 확인하기'} />
        </FlexBox>
      </FlexBox>

      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>브랜드 파워</div>
          </div>

          <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <FlexBox direction={'column'} style={{ border: '1px solid #dcdcdc', borderRadius: '8px', padding: '24px 0', marginBottom: '36px' }}>
              <span css={[heading5_regular, { color: colors.grey._99, marginBottom: '12px' }]}>
                Q. [ 서비스명 ]의 [ 문제 해결 방식 ]이 [ /7]정도로 [ 문제 상황 ] 을 해결한다고 생각하신 이유는 무엇인가요?
              </span>
              <AnnouncementBox icon={'NOTI'} content={'그래프를 클릭하면 주관식 응답도 함께 확인할 수 있어요.'} />
            </FlexBox>
            <TableBarChart fatality={false} dataList={tableBarChartBrandData} dataValueList={brandBarChartData} />자{' '}
            <div css={[heading4_bold, { color: colors.grey._99, textAlign: 'center', width: '100%', marginTop: '40px' }]}>총 응답자 수 : @58명 </div>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      {/*<FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>*/}
      {/*  <FlexBox style={graphAreaStyle} direction={'column'}>*/}
      {/*    <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>*/}
      {/*      <div css={[heading4_bold]}>실제 구매의향</div>*/}
      {/*    </div>*/}

      {/*    <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>*/}
      {/*      <FlexBox direction={'column'} style={{ border: '1px solid #dcdcdc', borderRadius: '8px', padding: '24px 0', marginBottom: '36px' }}>*/}
      {/*        <span css={[heading5_regular, { color: colors.grey._99, marginBottom: '12px' }]}>*/}
      {/*          Q. [ 서비스명 ]의 [ 문제 해결 방식 ]이 [ /7]정도로 [ 문제 상황 ] 을 해결한다고 생각하신 이유는 무엇인가요?*/}
      {/*        </span>*/}
      {/*        <AnnouncementBox icon={'NOTI'} content={'클릭하면 주관식 응답을 확인할 수 있어요.'} />*/}
      {/*      </FlexBox>*/}

      {/*      <BasicBarChart*/}
      {/*        dataList={basicBarTestData}*/}
      {/*        label={[<>option A</>]}*/}
      {/*        value={'49명'}*/}
      {/*        valueStyle={{ color: colors.grey._99, fontWeight: 500 }}*/}
      {/*        rate={'49.5%'}*/}
      {/*      />*/}
      {/*      <BasicBarChart*/}
      {/*        dataList={basicBarTestData}*/}
      {/*        label={[<>option B</>]}*/}
      {/*        value={'49명'}*/}
      {/*        valueStyle={{ color: colors.grey._99, fontWeight: 500 }}*/}
      {/*        rate={'49.5%'}*/}
      {/*      />*/}
      {/*      <BasicBarChart*/}
      {/*        dataList={basicBarTestData}*/}
      {/*        value={'49명'}*/}
      {/*        valueStyle={{ color: colors.grey._99, fontWeight: 500 }}*/}
      {/*        label={[<>option C</>]}*/}
      {/*        rate={'49.5%'}*/}
      {/*      />*/}

      {/*      <div css={[heading4_bold, { color: colors.grey._99, textAlign: 'center', width: '100%', marginTop: '40px' }]}>총 응답자 수 : @58명 </div>*/}
      {/*    </FlexBox>*/}
      {/*  </FlexBox>*/}
      {/*</FlexBox>*/}
    </>
  );
};

export default BrandEvaluationTemplate;
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
const reportHeader = css`
  //background: pink;
  @media (max-width: 1440px) {
    //background: plum;
    flex-direction: column;
    align-items: flex-start;
    .title {
      margin-bottom: 10px;
    }
  }
`;
