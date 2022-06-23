import React, { useCallback, useState } from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { heading3_bold, heading4_bold, heading5_regular } from '../../../../styles/FontStyles';
import CheckBox from '../../../atoms/CheckBox';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../../common/types/commonTypes';
import { colors } from '../../../../styles/Common.styles';
import AnnouncementBox from '../../AnnouncementBox';
import { TableBarChart } from '../../../atoms/Chart';
import { brandBarChartData, tableBarChartBrandData } from '../../../../assets/dummy/dummyData';

const data = [
  [
    '사용하는 것의 불편사항보다는 건의사항 이지만 큰 카테고리(리빙) 안에 작은 카테고리로 (청소 / 수리) 등이 있으면 좋을 것 같습니다.',
    '카테고리 세분화가 필요할 것 같습니다.',
    '카테고리가 모호해서랄까 광범위해서 지어하기가 좀 어려웠어요.',
    '카테고리가 너무 단순해요 좀 더 세부적으로 나눠졌으면 좋겠어요.',
    '도움의 카테고리가 좀 부족하다.',
  ],
  [
    '한눈에 메뉴들을 보기가 힘들다.',
    '사용하는 것의 불편사항보다는 건의사항 이지만 큰 카테고리(리빙) 안에 작은 카테고리로 (청소 / 수리) 등이 있으면 좋을 것 같습니다.',
    '카테고리 세분화가 필요할 것 같습니다.',
    '카테고리가 모호해서랄까 광범위해서 지어하기가 좀 어려웠어요.',
    '카테고리가 너무 단순해요 좀 더 세부적으로 나눠졌으면 좋겠어요.',
    '도움의 카테고리가 좀 부족하다.',
    '한눈에 메뉴들을 보기가 힘들다.',
  ],
  [
    '카테고리가 모호해서랄까 광범위해서 지어하기가 좀 어려웠어요.',
    '카테고리가 너무 단순해요 좀 더 세부적으로 나눠졌으면 좋겠어요.',
    '사용하는 것의 불편사항보다는 건의사항 이지만 큰 카테고리(리빙) 안에 작은 카테고리로 (청소 / 수리) 등이 있으면 좋을 것 같습니다.',
    '카테고리 세분화가 필요할 것 같습니다.',
    '카테고리가 모호해서랄까 광범위해서 지어하기가 좀 어려웠어요.',
    '카테고리가 너무 단순해요 좀 더 세부적으로 나눠졌으면 좋겠어요.',
    '카테고리가 모호해서랄까 광범위해서 지어하기가 좀 어려웠어요.',
    '카테고리가 너무 단순해요 좀 더 세부적으로 나눠졌으면 좋겠어요.',
    '사용하는 것의 불편사항보다는 건의사항 이지만 큰 카테고리(리빙) 안에 작은 카테고리로 (청소 / 수리) 등이 있으면 좋을 것 같습니다.',
    '카테고리 세분화가 필요할 것 같습니다.',
    '카테고리가 모호해서랄까 광범위해서 지어하기가 좀 어려웠어요.',
    '카테고리가 너무 단순해요 좀 더 세부적으로 나눠졌으면 좋겠어요.',
  ],
];

const AddOnFeature = ({ originDataList, title }) => {
  const [complateSelectButton, setComplateSelectButton] = useState<number>(0);
  const [addSelectButton, setAddSelectButton] = useState<number>(0);
  const [systemSelectButton, setsystemSelectButton] = useState<number>(0);

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

  const completeList = originDataList?.map(el => el.completeList);
  const additionalList = originDataList?.map(el => el.additionalList);
  const systemErrorList = originDataList?.map(el => el.systemErrorList);

  const handleChangeIndex = useCallback(
    (name, index) => {
      if (name === 'complate') {
        setComplateSelectButton(index);
      }
      if (name === 'add') {
        setAddSelectButton(index);
      }
      if (name === 'system') {
        setsystemSelectButton(index);
      }
    },
    [complateSelectButton, addSelectButton, systemSelectButton],
  );
  return (
    <>
      <FlexBox style={headerBosStyle} justify={'space-between'}>
        <FlexBox justify={'flex-start'} align={'center'}>
          <span css={[heading3_bold, { marginRight: '32px' }]}>추가 기능 언급</span>
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
            <div css={[heading4_bold]}>서비스 전체 미션별 완성도 피드백</div>
          </div>

          <FlexBox justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <div css={{ flex: 1, marginRight: '16px' }}>
              {completeList?.map((el, index) => {
                return (
                  <div
                    key={`missionBtn${index}`}
                    onClick={() => handleChangeIndex('complate', index)}
                    css={[{ opacity: complateSelectButton === index ? 1 : 0.4 }, heading4_bold, buttonStyle]}
                  >
                    미션 {index + 1}
                  </div>
                );
              })}
            </div>
            <ul css={{ background: colors.grey._f7, borderRadius: '8px', flex: 3, padding: '16px 24px' }}>
              {completeList?.[complateSelectButton].map((el, index) => {
                return (
                  <li key={index} css={{ listStyle: 'inside', marginBottom: '16px' }}>
                    {el}
                  </li>
                );
              })}
            </ul>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>서비스 전체 미션별 추가기능 피드백</div>
          </div>

          <FlexBox justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <div css={{ flex: 1, marginRight: '16px' }}>
              {additionalList?.map((el, index) => {
                return (
                  <div
                    key={`missionBtn${index}`}
                    onClick={() => handleChangeIndex('add', index)}
                    css={[{ opacity: addSelectButton === index ? 1 : 0.4 }, heading4_bold, buttonStyle]}
                  >
                    미션 {index + 1}
                  </div>
                );
              })}
            </div>
            <ul css={{ background: colors.grey._f7, borderRadius: '8px', flex: 3, padding: '16px 24px' }}>
              {additionalList?.[addSelectButton].map((el, index) => {
                return (
                  <li key={index} css={{ listStyle: 'inside', marginBottom: '16px' }}>
                    {el}
                  </li>
                );
              })}
            </ul>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>서비스 전체 미션별 시스템오류 피드백</div>
          </div>

          <FlexBox justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <div css={{ flex: 1, marginRight: '16px' }}>
              {systemErrorList?.map((el, index) => {
                return (
                  <div
                    key={`missionBtn${index}`}
                    onClick={() => handleChangeIndex('system', index)}
                    css={[{ opacity: systemSelectButton === index ? 1 : 0.4 }, heading4_bold, buttonStyle]}
                  >
                    미션 {index + 1}
                  </div>
                );
              })}
            </div>
            <ul css={{ background: colors.grey._f7, borderRadius: '8px', flex: 3, padding: '16px 24px' }}>
              {systemErrorList?.[systemSelectButton].map((el, index) => {
                return (
                  <li key={index} css={{ listStyle: 'inside', marginBottom: '16px' }}>
                    {el}
                  </li>
                );
              })}
            </ul>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default AddOnFeature;
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
const buttonStyle = css`
  height: auto;
  color: white;
  text-align: center;
  background: #68a0f4;
  padding: 14px 55px;
  border-radius: 8px;
  margin-bottom: 16px;
  cursor: pointer;
  opacity: sel;
`;
