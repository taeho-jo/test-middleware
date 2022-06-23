import React from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { caption2_bold, heading3_bold, heading4_bold } from '../../../../styles/FontStyles';
import CheckBox from '../../../atoms/CheckBox';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../../common/types/commonTypes';
import { colors } from '../../../../styles/Common.styles';
import Icon from '../../../atoms/Icon';
import { TableBarChart, UsabilityTableChart } from '../../../atoms/Chart';
import { featureSpecificDetailData, featureUseData, featureUseData2, tableBarChartTestData } from '../../../../assets/dummy/dummyData';
import AnnouncementBox from '../../AnnouncementBox';

const ServiceOverallUsabilityTemplate = ({ dataList }) => {
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
          <span css={[heading3_bold, { marginRight: '32px' }]}>서비스 전체 사용성 평가</span>
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
            <div css={[heading4_bold]}>전체 사용성 요소별 점수</div>
          </div>
          <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <FlexBox justify={'space-between'}>
              <FlexBox justify={'flex-start'} style={{ marginBottom: '4px' }}>
                <Icon name={'ALERT_NORMAL'} size={10} />
                <span css={[caption2_bold, { textDecoration: 'underline' }]}>사용성 평가 요소가 뭔가요</span>
              </FlexBox>
              <FlexBox justify={'flex-end'} style={{ marginBottom: '4px' }}>
                <Icon name={'ALERT_NORMAL'} size={10} />
                <span css={[caption2_bold, { textDecoration: 'underline' }]}>치명도가 뭔가요</span>
              </FlexBox>
            </FlexBox>

            <UsabilityTableChart dataList={dataList?.serviceTotalUsabilityList} negative={true} />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default ServiceOverallUsabilityTemplate;
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
