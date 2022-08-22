import React from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { heading3_bold } from '../../../../styles/FontStyles';
import CheckBox from '../../../atoms/CheckBox';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { css } from '@emotion/react';
import TutorialIndicator from '../../../atoms/TutorialIndicator/TutorialIndicator';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../../store/reducers';
import { useRouter } from 'next/router';

interface PropsTypes {
  title: string;
  handleChangeCheckBox: () => void;
  modalControl: (status: boolean, name: string, item: any) => void;
  checked?: any;
  register?: (name: string, RegisterOptions?) => { onChange; onBlur; name; ref };
  errors: any;
  originData?: any;
  researchData?: string;
}

const ReportTemplateHeader = ({ title, handleChangeCheckBox, modalControl, checked, register, errors, originData, researchData }: PropsTypes) => {
  const indicatorStatus = useSelector<ReducerType, any>(state => state.common.indicator);
  const { share } = useRouter().query;
  return (
    <FlexBox style={headerBosStyle} justify={'space-between'}>
      <FlexBox style={reportHeader} justify={'flex-start'} align={'center'}>
        <span className={'title'} css={[heading3_bold, { marginRight: '32px', overflow: 'hidden' }]}>
          {title}
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
        <div
          css={css`
            position: relative;
          `}
        >
          {!share && originData?.length > 0 && indicatorStatus.originData === 'N' && (
            <TutorialIndicator
              share={share}
              name={'originData'}
              left={'-9px'}
              top={'-9px'}
              modalTitle={'원본 데이터'}
              modalSubTitle={`각 선택지별로 주관식 응답이 있는 경우,\n원본데이터를 한번에 몰아서 확인할 수 있어요.`}
              modalTop={'30px'}
              modalLeft={'-385px'}
            />
          )}
          {share && originData?.length > 0 && indicatorStatus.originData === 'N' && (
            <TutorialIndicator
              share={share}
              name={'originData'}
              left={'-9px'}
              top={'-9px'}
              modalTitle={'원본 데이터'}
              modalSubTitle={`각 선택지별로 주관식 응답이 있는 경우,\n원본데이터를 한번에 몰아서 확인할 수 있어요.`}
              modalTop={'30px'}
              modalLeft={'-385px'}
            />
          )}
          <IconTextButton
            disabled={originData?.length > 0 ? false : true}
            style={{ marginRight: '8px' }}
            textStyle={'custom'}
            onClick={() => modalControl(true, 'originDataModal', { title, data: originData })}
            name={'NAVIGATION_CHEVRON_RIGHT'}
            text={'원본 데이터 확인하기'}
          />
        </div>

        <IconTextButton
          disabled={researchData ? false : true}
          onClick={() => modalControl(true, 'commentDataModal', { title: 'commentModal', list: [researchData] })}
          textStyle={'custom'}
          name={'NAVIGATION_CHEVRON_RIGHT'}
          text={'리서치 코멘트 확인하기'}
        />
      </FlexBox>
    </FlexBox>
  );
};

export default ReportTemplateHeader;

const headerBosStyle = css`
  height: 64px;
  width: 100%;
  padding: 24px;
  background: white;
  border-bottom: 1px solid #dcdcdc;
  //position: sticky;
  //top: 0;
  //z-index: 500;
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
