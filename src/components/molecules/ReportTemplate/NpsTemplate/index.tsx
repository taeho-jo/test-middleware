import React from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { caption2_bold, heading3_bold, heading4_bold, heading5_regular } from '../../../../styles/FontStyles';
import CheckBox from '../../../atoms/CheckBox';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../../common/types/commonTypes';
import { colors } from '../../../../styles/Common.styles';
import Icon from '../../../atoms/Icon';
import { BasicHorizontalBarChart, TableBarChart } from '../../../atoms/Chart';
import { basicBarTestData3, featureSpecificDetailData, tableBarChartTestData } from '../../../../assets/dummy/dummyData';
import AnnouncementBox from '../../AnnouncementBox';
import { reportHeader } from '../FeatureSpecificDetailTemplate';

const NpsTemplate = ({ modalControl }) => {
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
            순 추천 고객 지수(NPS)
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
            <div css={[heading4_bold]}>순 추천 고객 지수(NPS)</div>
          </div>

          <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <FlexBox direction={'column'} style={{ border: '1px solid #dcdcdc', borderRadius: '8px', padding: '24px 0', marginBottom: '36px' }}>
              <span css={[heading5_regular, { color: colors.grey._99, marginBottom: '12px' }]}>
                Q. [ 서비스명 ] 의 [ 문제 해결 방식 ] 이 [ /7]정도로 [ 문제 상황 ] 을 해결한다고 생각하신 이유는 무엇인가요?
              </span>
              <AnnouncementBox icon={'NOTI'} content={'그래프를 클릭하면 주관식 응답도 함께 확인할 수 있어요.'} />
            </FlexBox>

            <FlexBox justify={'flex-start'} style={{ marginBottom: '4px' }}>
              <Icon name={'ALERT_NORMAL'} size={10} />
              <span
                onClick={() => modalControl(true, 'recommendedCustomerIndexModal')}
                css={[caption2_bold, { textDecoration: 'underline', cursor: 'pointer' }]}
              >
                순 추천 고객 지수가 뭔가요
              </span>
            </FlexBox>

            <FlexBox>
              <FlexBox style={[caption2_bold, tableHeaderStyle(6, '#E87490')]}>
                비추천 고객
                <br />
                (0~6)
              </FlexBox>
              <FlexBox style={[caption2_bold, tableHeaderStyle(2, '#A286D0')]}>
                중립 고객
                <br />
                (7~8)
              </FlexBox>
              <FlexBox style={[caption2_bold, tableHeaderStyle(2, '#68A0F4')]}>
                추천 고객
                <br />
                (9~10)
              </FlexBox>
            </FlexBox>

            {/*<FlexBox>*/}
            {/*  <FlexBox justify={'space-around'} style={tableBodyStyle(6)}>*/}
            {/*    <BasicHorizontalBarChart barColor={'#E87490'} dataList={basicBarTestData3} />*/}
            {/*    <BasicHorizontalBarChart barColor={'#E87490'} dataList={basicBarTestData3} />*/}
            {/*    <BasicHorizontalBarChart barColor={'#E87490'} dataList={basicBarTestData3} />*/}
            {/*    <BasicHorizontalBarChart barColor={'#E87490'} dataList={basicBarTestData3} />*/}
            {/*    <BasicHorizontalBarChart barColor={'#E87490'} dataList={basicBarTestData3} />*/}
            {/*    <BasicHorizontalBarChart barColor={'#E87490'} dataList={basicBarTestData3} />*/}
            {/*  </FlexBox>*/}
            {/*  <FlexBox justify={'space-around'} style={tableBodyStyle(2)}>*/}
            {/*    <BasicHorizontalBarChart barColor={'#A286D0'} dataList={basicBarTestData3} />*/}
            {/*    <BasicHorizontalBarChart barColor={'#A286D0'} dataList={basicBarTestData3} />*/}
            {/*  </FlexBox>*/}
            {/*  <FlexBox justify={'space-around'} style={tableBodyStyle(2)}>*/}
            {/*    <BasicHorizontalBarChart dataList={basicBarTestData3} />*/}
            {/*    <BasicHorizontalBarChart dataList={basicBarTestData3} />*/}
            {/*  </FlexBox>*/}
            {/*</FlexBox>*/}
            <div css={[heading4_bold, { textAlign: 'center', width: '100%', marginTop: '40px' }]}>순 추천 고객 지수(NPS) : -38점 </div>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default NpsTemplate;

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

const tableHeaderStyle = (flex, color) => css`
  flex: ${flex};
  text-align: center;
  height: auto;
  color: ${color ? color : '#e87490'};
  border-top: 1px solid #dcdcdc;
  border-right: 1px dashed #dcdcdc;
  padding: 16px 0;
  &:last-child {
    border-right: none;
  }
`;
const tableBodyStyle = flex => css`
  flex: ${flex};
  //border: 1px solid #dcdcdc;
  border-top: 1px solid #dcdcdc;
  border-right: 1px dashed #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  &:last-child {
    border-right: none;
  }
  padding: 32px 0;
`;
