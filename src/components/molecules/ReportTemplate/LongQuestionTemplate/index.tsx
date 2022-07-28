import React from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { body3_regular, heading3_bold, heading4_bold, heading5_regular } from '../../../../styles/FontStyles';
import CheckBox from '../../../atoms/CheckBox';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { colors } from '../../../../styles/Common.styles';
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../../common/types/commonTypes';
import { reportHeader } from '../FeatureSpecificDetailTemplate';
import AnnouncementBox from '../../AnnouncementBox';

const LongQuestionTemplate = ({ dataList, modalControl }) => {
  return (
    <>
      <FlexBox style={headerBosStyle} justify={'space-between'}>
        <FlexBox style={reportHeader} justify={'flex-start'} align={'center'}>
          <span className={'title'} css={[heading3_bold, { marginRight: '32px', overflow: 'hidden' }]}>
            {dataList.intent}
          </span>
          {/*<CheckBox inputName={'privacyConsentYn'} label={'미션에 실패한 응답자의 피드백만 보기'} register={register} errors={errors} />*/}
        </FlexBox>
        <FlexBox justify={'flex-end'} width={'30%'}>
          <IconTextButton
            disabled={true}
            onClick={() => modalControl(true, 'originDataModal', { title: `${dataList.name}`, data: dataList.rawData })}
            style={{ marginRight: '8px' }}
            textStyle={'custom'}
            name={'NAVIGATION_CHEVRON_RIGHT'}
            text={'원본 데이터 확인하기'}
          />
          <IconTextButton
            disabled={dataList.comment ? false : true}
            onClick={() => modalControl(true, 'commentDataModal', { title: 'commentModal', list: [dataList.comment] })}
            textStyle={'custom'}
            name={'NAVIGATION_CHEVRON_RIGHT'}
            text={'리서치 코멘트 확인하기'}
          />
        </FlexBox>
      </FlexBox>

      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>{dataList.intent}</div>
          </div>

          <div css={graphContainerStyle2}>
            <FlexBox
              direction={'column'}
              style={{ width: '100%', border: '1px solid #dcdcdc', borderRadius: '8px', padding: '24px 0', marginBottom: '36px' }}
            >
              <span css={[heading5_regular, { color: colors.grey._99, marginBottom: '0px' }]}>Q. {dataList.name}</span>
              {/*{rawData?.length > 0 && <AnnouncementBox icon={'NOTI'} content={'그래프를 클릭하면 주관식 응답도 함께 확인할 수 있어요.'} />}*/}
            </FlexBox>
          </div>

          <FlexBox justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <div css={{ flex: 1, marginRight: '16px' }}>
              <div css={[heading4_bold, buttonStyle]}>전체 피드백</div>
            </div>
            <ul
              className={'scrollType1'}
              css={{ background: colors.grey._f7, borderRadius: '8px', flex: 3, padding: '16px 24px', height: '400px', wordBreak: 'keep-all' }}
            >
              {dataList?.rawData?.map((el, index) => {
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
              })}
            </ul>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default LongQuestionTemplate;
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
const graphContainerStyle2 = css`
  padding: 36px 80px 0;
  width: 100%;
`;
const buttonStyle = css`
  height: auto;
  color: white;
  text-align: center;
  background: #68a0f4;
  padding: 14px 42px;
  border-radius: 8px;
  margin-bottom: 16px;
  cursor: pointer;
`;
