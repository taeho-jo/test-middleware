import React from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { heading3_bold } from '../../../../styles/FontStyles';
import CheckBox from '../../../atoms/CheckBox';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { css } from '@emotion/react';

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
        <IconTextButton
          disabled={originData?.length > 0 ? false : true}
          style={{ marginRight: '8px' }}
          textStyle={'custom'}
          onClick={() => modalControl(true, 'originDataModal', { title, data: originData })}
          name={'NAVIGATION_CHEVRON_RIGHT'}
          text={'원본 데이터 확인하기'}
        />
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
