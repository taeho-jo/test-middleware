import React, { useCallback, useState } from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { body3_regular, heading3_bold, heading4_bold, heading5_regular } from '../../../../styles/FontStyles';
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

const AddOnFeature = ({ originDataList, title, register, errors, checked, handleChangeCheckBox, modalControl }) => {
  const [completeSelectButton, setCompleteSelectButton] = useState<number>(0);
  const [addSelectButton, setAddSelectButton] = useState<number>(0);
  const [systemSelectButton, setSystemSelectButton] = useState<number>(0);

  const completeList = originDataList?.map(el => el.completeList);
  const additionalList = originDataList?.map(el => el.additionalList);
  const systemErrorList = originDataList?.map(el => el.systemErrorList);

  const completeCommentList = originDataList?.map(el => el.completeComment);
  const additionalCommentList = originDataList?.map(el => el.additionalComment);
  const systemErrorCommentList = originDataList?.map(el => el.systemErrorComment);

  console.log(completeCommentList, additionalCommentList, systemErrorCommentList);

  const totalList = [...completeList, ...additionalList, ...systemErrorList].flat();

  const handleChangeIndex = useCallback(
    (name, index) => {
      if (name === 'complate') {
        setCompleteSelectButton(index);
      }
      if (name === 'add') {
        setAddSelectButton(index);
      }
      if (name === 'system') {
        setSystemSelectButton(index);
      }
    },
    [completeSelectButton, addSelectButton, systemSelectButton],
  );
  return (
    <>
      <FlexBox style={headerBosStyle} justify={'space-between'}>
        <FlexBox style={reportHeader} justify={'flex-start'} align={'center'}>
          <span className={'title'} css={[heading3_bold, { marginRight: '32px', overflow: 'hidden' }]}>
            서비스 전체 미션별 완성도 피드백
          </span>
          <CheckBox
            handleChangeCheckBox={handleChangeCheckBox}
            checked={checked}
            inputName={'privacyConsentYn'}
            label={'미션에 실패한 응답자의 피드백만 보기'}
            register={register}
            errors={errors}
          />
        </FlexBox>
        <FlexBox justify={'flex-end'} width={'30%'}>
          <IconTextButton
            onClick={() =>
              modalControl(true, 'originDataModal', { title: '추가 기능 언급-서비스 전체 미션별 완성도 피드백', data: completeList.flat() })
            }
            style={{ marginRight: '8px' }}
            textStyle={'custom'}
            name={'NAVIGATION_ARROW_RIGHT'}
            text={'원본 데이터 확인하기'}
          />
          <IconTextButton
            onClick={() => modalControl(true, 'commentDataModal', { title: 'commentModal', list: [completeCommentList[completeSelectButton]] })}
            textStyle={'custom'}
            name={'NAVIGATION_ARROW_RIGHT'}
            text={'리서치 코멘트 확인하기'}
          />
        </FlexBox>
      </FlexBox>

      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>{originDataList?.[completeSelectButton].name}</div>
          </div>

          <FlexBox justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <div css={{ flex: 1, marginRight: '16px' }}>
              {completeList?.map((el, index) => {
                return (
                  <div
                    key={`missionBtn${index}`}
                    onClick={() => handleChangeIndex('complate', index)}
                    css={[{ opacity: completeSelectButton === index ? 1 : 0.4 }, heading4_bold, buttonStyle]}
                  >
                    미션 {index + 1}
                  </div>
                );
              })}
            </div>
            <ul
              css={{
                background: colors.grey._f7,
                borderRadius: '8px',
                flex: 3,
                padding: '16px 24px',
                height: '400px',
                overflowY: 'scroll',
              }}
            >
              {completeList?.[completeSelectButton]?.length === 0 ? (
                <li
                  css={[
                    body3_regular,
                    {
                      marginBottom: '16px',
                      height: 'auto',
                      listStyle: 'inside',
                      textIndent: '-20px',
                      paddingLeft: '20px',
                    },
                  ]}
                >
                  피드백이 없습니다.
                </li>
              ) : (
                completeList?.[completeSelectButton].map((el, index) => {
                  return (
                    <li
                      key={index}
                      css={[
                        body3_regular,
                        {
                          marginBottom: '16px',
                          height: 'auto',
                          listStyle: 'inside',
                          textIndent: '-20px',
                          paddingLeft: '20px',
                        },
                      ]}
                    >
                      {el}
                    </li>
                  );
                })
              )}
            </ul>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <div css={sortationArea} />

      <FlexBox style={headerBosStyle} justify={'space-between'}>
        <FlexBox style={reportHeader} justify={'flex-start'} align={'center'}>
          <span className={'title'} css={[heading3_bold, { marginRight: '32px', overflowY: 'hidden' }]}>
            서비스 전체 미션별 추가기능 피드백
          </span>
          <CheckBox
            handleChangeCheckBox={handleChangeCheckBox}
            checked={checked}
            inputName={'privacyConsentYn'}
            label={'미션에 실패한 응답자의 피드백만 보기'}
            register={register}
            errors={errors}
          />
        </FlexBox>
        <FlexBox justify={'flex-end'} width={'30%'}>
          <IconTextButton
            onClick={() =>
              modalControl(true, 'originDataModal', { title: '추가 기능 언급-서비스 전체 미션별 추가기능 피드백', data: additionalList.flat() })
            }
            style={{ marginRight: '8px' }}
            textStyle={'custom'}
            name={'NAVIGATION_ARROW_RIGHT'}
            text={'원본 데이터 확인하기'}
          />
          <IconTextButton
            onClick={() => modalControl(true, 'commentDataModal', { title: 'commentModal', list: [additionalCommentList[addSelectButton]] })}
            textStyle={'custom'}
            name={'NAVIGATION_ARROW_RIGHT'}
            text={'리서치 코멘트 확인하기'}
          />
        </FlexBox>
      </FlexBox>

      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>{originDataList?.[addSelectButton].name}</div>
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
            <ul css={{ background: colors.grey._f7, borderRadius: '8px', flex: 3, padding: '16px 24px', height: '400px', overflowY: 'scroll' }}>
              {additionalList?.[addSelectButton]?.length === 0 ? (
                <li
                  css={[
                    body3_regular,
                    {
                      marginBottom: '16px',
                      height: 'auto',
                      listStyle: 'inside',
                      textIndent: '-20px',
                      paddingLeft: '20px',
                    },
                  ]}
                >
                  피드백이 없습니다.
                </li>
              ) : (
                additionalList?.[addSelectButton].map((el, index) => {
                  return (
                    <li
                      key={index}
                      css={[
                        body3_regular,
                        {
                          marginBottom: '16px',
                          height: 'auto',
                          listStyle: 'inside',
                          textIndent: '-20px',
                          paddingLeft: '20px',
                        },
                      ]}
                    >
                      {el}
                    </li>
                  );
                })
              )}
            </ul>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <div css={sortationArea} />
      <FlexBox style={headerBosStyle} justify={'space-between'}>
        <FlexBox style={reportHeader} justify={'flex-start'} align={'center'}>
          <span className={'title'} css={[heading3_bold, { marginRight: '32px', overflow: 'hidden' }]}>
            서비스 전체 미션별 시스템오류 피드백
          </span>
          <CheckBox
            handleChangeCheckBox={handleChangeCheckBox}
            checked={checked}
            inputName={'privacyConsentYn'}
            label={'미션에 실패한 응답자의 피드백만 보기'}
            register={register}
            errors={errors}
          />
        </FlexBox>
        <FlexBox justify={'flex-end'} width={'30%'}>
          <IconTextButton
            onClick={() =>
              modalControl(true, 'originDataModal', { title: '추가 기능 언급-서비스 전체 미션별 시스템오류 피드백', data: systemErrorList.flat() })
            }
            style={{ marginRight: '8px' }}
            textStyle={'custom'}
            name={'NAVIGATION_ARROW_RIGHT'}
            text={'원본 데이터 확인하기'}
          />
          <IconTextButton
            onClick={() => modalControl(true, 'commentDataModal', { title: 'commentModal', list: [systemErrorCommentList[systemSelectButton]] })}
            textStyle={'custom'}
            name={'NAVIGATION_ARROW_RIGHT'}
            text={'리서치 코멘트 확인하기'}
          />
        </FlexBox>
      </FlexBox>

      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>{originDataList?.[systemSelectButton].name}</div>
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
            <ul css={{ background: colors.grey._f7, borderRadius: '8px', flex: 3, padding: '16px 24px', height: '400px', overflowY: 'scroll' }}>
              {systemErrorList?.[systemSelectButton]?.length === 0 ? (
                <li
                  css={[
                    body3_regular,
                    {
                      marginBottom: '16px',
                      height: 'auto',
                      listStyle: 'inside',
                      textIndent: '-20px',
                      paddingLeft: '20px',
                    },
                  ]}
                >
                  피드백이 없습니다.
                </li>
              ) : (
                systemErrorList?.[systemSelectButton].map((el, index) => {
                  return (
                    <li
                      key={index}
                      css={[
                        body3_regular,
                        {
                          marginBottom: '16px',
                          height: 'auto',
                          listStyle: 'inside',
                          textIndent: '-20px',
                          paddingLeft: '20px',
                        },
                      ]}
                    >
                      {el}
                    </li>
                  );
                })
              )}
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
const buttonStyle = css`
  height: auto;
  color: white;
  text-align: center;
  background: #68a0f4;
  padding: 14px 55px;
  border-radius: 8px;
  margin-bottom: 16px;
  cursor: pointer;
`;
const sortationArea = css`
  width: 100%;
  height: 16px;
  background: #dcdcdc;
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
