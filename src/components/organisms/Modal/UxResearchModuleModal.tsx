import React from 'react';
import FlexBox from '../../atoms/FlexBox';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import { heading4_bold, heading4_regular } from '../../../styles/FontStyles';
import BasicButton from '../../atoms/Button/BasicButton';
import Image from 'next/image';
import Ux from '/public/assets/png/uxFrame.png';
import { css } from '@emotion/react';

const UxResearchModuleModal = () => {
  return (
    <FlexBox style={{ marginTop: '176px' }} justify={'center'} direction={'column'}>
      <PopupBox width={'720px'} height={'auto'}>
        <ModalTitle title="" />
        <FlexBox>
          <FlexBox style={{ paddingLeft: '52px', paddingRight: '40px' }} direction={'column'} align={'flex-start'} justify={'flex-start'}>
            <span css={titleStyle}>UX 포지션 분석</span>

            <span css={[heading4_regular, marginStyle('24px')]}>고객에게 전달하고자 하는 제품/서비스의 전략과</span>
            <span css={heading4_regular}>고객이 실제로 인식한 경험을 비교 분석합니다.</span>

            <span css={[heading4_bold, marginStyle('24px')]}>#UX 전략 점검</span>
            <span css={[heading4_bold, marginStyle('4px')]}>#고객-제품 인식 검증</span>
            <FlexBox style={{ marginTop: '108px', padding: '8px 0' }}>
              <BasicButton theme={'dark'} text={'설계안 작성하러 가기'} />
            </FlexBox>
          </FlexBox>
          <Image src={Ux} alt={'Ux frame'} />
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default UxResearchModuleModal;
const titleStyle = css`
  font-size: 32px;
  line-height: 30px;
  font-weight: 700;
`;
const marginStyle = margin => css`
  margin-top: ${margin};
`;
