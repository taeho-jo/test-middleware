import React from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { body2_bold, caption2_bold, heading3_bold, heading4_bold, heading5_regular } from '../../../../styles/FontStyles';
import CheckBox from '../../../atoms/CheckBox';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../../common/types/commonTypes';
import { colors } from '../../../../styles/Common.styles';
import AnnouncementBox from '../../AnnouncementBox';
import Icon from '../../../atoms/Icon';
import { BasicHorizontalBarChart } from '../../../atoms/Chart';
import { basicBarTestData3 } from '../../../../assets/dummy/dummyData';

const GeneralScaleTypeTemplate = () => {
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
          <span css={[heading3_bold, { marginRight: '32px' }]}>일반 척도형 그래프</span>
          <CheckBox inputName={'privacyConsentYn'} label={'미션에 실패한 응답자의 피드백만 보기'} register={register} errors={errors} />
        </FlexBox>
        <FlexBox justify={'flex-end'}>
          <IconTextButton style={{ marginRight: '8px' }} textStyle={'custom'} name={'NAVIGATION_CHEVRON_RIGHT'} text={'원본 데이터 확인하기'} />
          <IconTextButton textStyle={'custom'} name={'NAVIGATION_CHEVRON_RIGHT'} text={'리서치 코멘트 확인하기'} />
        </FlexBox>
      </FlexBox>

      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>동의 정도</div>
          </div>

          <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <FlexBox direction={'column'} style={{ border: '1px solid #dcdcdc', borderRadius: '8px', padding: '24px 0', marginBottom: '36px' }}>
              <span css={[heading5_regular, { color: colors.grey._99, marginBottom: '12px' }]}>
                Q. 우쥬인님께서는 [ 서비스명 ] 의 [ 문제 해결 방식 ]이 어느정도로 [ 문제 상황 ] 을 해결하는데 도움이 된다고 생각하시나요?
              </span>
              <AnnouncementBox icon={'NOTI'} content={'클릭하면 주관식 응답을 확인할 수 있어요.'} />
            </FlexBox>

            <FlexBox
              justify={'space-between'}
              align={'center'}
              style={{ padding: '22px 16px', borderTop: '1px solid #dcdcdc', borderBottom: '1px solid #dcdcdc' }}
            >
              <FlexBox justify={'flex-start'} align={'center'}>
                <Icon name={'NAVIGATION_ARROW_LEFT'} size={12} />
                <span css={caption2_bold}>전혀 도움이 되지 않음</span>
              </FlexBox>
              <FlexBox justify={'flex-end'} align={'center'}>
                <span css={caption2_bold}>매우 도움이 됨</span>
                <Icon name={'NAVIGATION_ARROW_RIGHT'} size={12} />
              </FlexBox>
            </FlexBox>

            <FlexBox justify={'space-around'} style={{ padding: '32px 45px', borderBottom: '1px solid #dcdcdc' }}>
              <BasicHorizontalBarChart dataList={basicBarTestData3} />
              <BasicHorizontalBarChart dataList={basicBarTestData3} />
              <BasicHorizontalBarChart dataList={basicBarTestData3} />
              <BasicHorizontalBarChart dataList={basicBarTestData3} />
              <BasicHorizontalBarChart dataList={basicBarTestData3} />
              <BasicHorizontalBarChart dataList={basicBarTestData3} />
              <BasicHorizontalBarChart dataList={basicBarTestData3} />
            </FlexBox>
            <div css={[heading4_bold, { color: colors.grey._99, textAlign: 'center', width: '100%', marginTop: '40px' }]}>총 응답자 수 : @58명 </div>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default GeneralScaleTypeTemplate;

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
