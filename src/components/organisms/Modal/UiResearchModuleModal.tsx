import React from 'react';
import FlexBox from '../../atoms/FlexBox';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import Image from 'next/image';

import { css } from '@emotion/react';
import { heading4_bold, heading4_regular } from '../../../styles/FontStyles';
import BasicButton from '../../atoms/Button/BasicButton';
import Ui from '/public/assets/png/uiFrame.png';

const UiResearchModuleModal = () => {
  return (
    <FlexBox style={{ marginTop: '176px' }} justify={'center'} direction={'column'}>
      <PopupBox width={'720px'} height={'auto'}>
        <ModalTitle title="" />
        <FlexBox>
          <FlexBox style={{ paddingLeft: '52px', paddingRight: '48px' }} direction={'column'} align={'flex-start'} justify={'flex-start'}>
            <span css={titleStyle}>UI 진단</span>

            <span css={[heading4_regular, marginStyle('24px')]}>앱 또는 웹사이트에서 고객이 느낀 불편함을</span>
            <span css={heading4_regular}>인터페이스 10 요소로 분류하여 진단합니다.</span>

            <span css={[heading4_bold, marginStyle('24px')]}>#인터페이스 진단</span>
            <span css={[heading4_bold, marginStyle('4px')]}>#사용성 확인</span>
            <span css={[heading4_bold, marginStyle('4px')]}>#디자인 10 요소</span>
            <FlexBox style={{ marginTop: '108px', padding: '8px 0' }}>
              <BasicButton theme={'dark'} text={'설계안 작성하러 가기'} />
            </FlexBox>
          </FlexBox>
          <Image src={Ui} alt={'ui frame'} objectFit={'fill'} />
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default UiResearchModuleModal;

const titleStyle = css`
  font-size: 32px;
  line-height: 30px;
  font-weight: 700;
`;
const marginStyle = margin => css`
  margin-top: ${margin};
`;
